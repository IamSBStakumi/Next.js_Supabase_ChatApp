import styled from "styled-components";

import DateFormatter from "@/components/date";
import { Database } from "@/types/supabasetype";

type Props = {
  chatData: Database["public"]["Tables"]["chat_log"]["Row"];
  index: number;
};

const ChatUI = ({ chatData, index }: Props) => {
  return (
    <Wrapper key={chatData.id}>
      <CommentHeader>
        <UserName>
          {index + 1} {chatData.user_name}
        </UserName>
        <IDText>ID: {chatData.user_id.slice(0, 8)}</IDText>
      </CommentHeader>
      <CommentMiddle>
        <p>
          <DateFormatter timestamp={chatData.created_at}></DateFormatter>
        </p>
      </CommentMiddle>
      <h4>{chatData.comment}</h4>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: solid 1px;
  margin: 0.25em auto 0.25em auto;
  padding: 10px;
  width: 95%;
`;

const UserName = styled.h3`
  font-size: clamp(1.5rem, calc(1.7rem + 0.625vw), 3rem);
`;

const CommentHeader = styled.div`
  display: flex;
`;

const CommentMiddle = styled.div`
  display: flex;
  justify-content: start;
`;

const IDText = styled.p`
  padding-left: 10px;
  margin: 3px 20px auto;
`;

export default ChatUI;
