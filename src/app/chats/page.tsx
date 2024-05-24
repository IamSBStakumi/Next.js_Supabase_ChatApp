/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-floating-promises */
"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { v4 } from "uuid";

import ChatUI from "@/components/chats/chat";
import { ChannelName, Form, NameInput, PostButton, Textarea } from "@/components/chats/formParts";
import useSupabaseSubscription from "@/hooks/useSupabaseSubscription";
import { supabase } from "@/utils/supabase/supabase";

const fetchMessages = async (channelName: string) => {
  const { data, error } = await supabase
    .from("chat_log")
    .select("*")
    .eq("channel_name", channelName)
    .order("created_at");

  if (error) throw new Error(error.message);

  return data;
};

const Chats = () => {
  const searchParams = useSearchParams();
  const channelName = searchParams.get("channel_name") as string;
  const [inputText, setInputText] = useState("");
  const [inputName, setInputName] = useState("");
  const queryClient = useQueryClient();

  const {
    data: messageText,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["chatMessages", channelName],
    queryFn: () => fetchMessages(channelName),
    staleTime: 60000,
    refetchOnWindowFocus: true,
  });

  useMemo(() => {
    const subscription = useSupabaseSubscription(channelName);

    return async () => {
      await subscription.unsubscribe();
    };
  }, [channelName]);

  const mutation = useMutation({
    mutationFn: async (newMessage: { comment: string; user_id: string; channel_name: string; user_name: string }) => {
      await supabase.from("chat_log").insert(newMessage);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chatMessages", channelName] });
    },
    onError: (err) => {
      console.error(err);
    },
  });

  const onSubmitNewMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputText === "") return;
    try {
      let userID = localStorage.getItem("user_id");
      if (userID == undefined) {
        userID = v4();
        localStorage.setItem("user_id", userID);
      }
      let userName = "匿名";
      if (inputName !== "") {
        userName = inputName;
      }

      mutation.mutate({
        comment: inputText,
        user_id: userID,
        channel_name: channelName,
        user_name: userName,
      });
    } catch (error) {
      console.error(error);
    }
    setInputText("");
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <ChannelName>{channelName}</ChannelName>
      <div>{messageText?.map((item, index) => <ChatUI chatData={item} index={index} key={item.id}></ChatUI>)}</div>

      <Form onSubmit={onSubmitNewMessage}>
        <div>
          <label htmlFor="name">名前（省略可）</label>
          <NameInput
            type="text"
            id="name"
            name="name"
            value={inputName}
            onChange={(event) => {
              setInputName(() => event.target.value);
            }}
          ></NameInput>
        </div>
        <div>
          <label htmlFor="message">投稿内容</label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="投稿内容を入力"
            value={inputText}
            onChange={(event) => {
              setInputText(() => event.target.value);
            }}
          ></Textarea>
        </div>

        <PostButton type="submit" disabled={inputText === ""}>
          送信
        </PostButton>
      </Form>
    </div>
  );
};

export default Chats;
