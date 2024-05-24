import Link from "next/link";

type Props = {
  channelName: string;
  roomName: string;
};

const RoomLink = ({ channelName, roomName }: Props) => {
  return (
    <li>
      <Link
        href={{
          pathname: "/chats",
          query: { channel_name: channelName },
        }}
      >
        {roomName}
      </Link>
    </li>
  );
};

export default RoomLink;
