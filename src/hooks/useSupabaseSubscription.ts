"use client";

import { useQueryClient } from "@tanstack/react-query";

import { Database } from "@/types/supabasetype";
import { supabase } from "@/utils/supabase/supabase";

const useSupabaseSubscription = (channelName: string) => {
  const queryClient = useQueryClient();

  const setUpSubscription = () => {
    const subscription = supabase
      .channel(channelName)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "chat_log",
        },
        (payload) => {
          if (payload.eventType === "INSERT") {
            queryClient.setQueryData<Database["public"]["Tables"]["chat_log"]["Row"][]>(
              ["chatMessages", channelName],
              (oldData) => {
                return oldData
                  ? ([...oldData, payload.new] as Database["public"]["Tables"]["chat_log"]["Row"][])
                  : [payload.new as Database["public"]["Tables"]["chat_log"]["Row"]];
              },
            );
          }
        },
      )
      .subscribe();

    return subscription;
  };

  const subscription = setUpSubscription();

  return subscription;
};

export default useSupabaseSubscription;
