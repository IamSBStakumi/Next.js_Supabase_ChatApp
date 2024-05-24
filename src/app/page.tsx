"use client";

import styled from "styled-components";

import RoomLink from "@/components/RoomLink";

const Home = () => (
  <Wrapper>
    <Title>リアルタイムチャット</Title>
    <Ul>
      <RoomLink channelName="Room1" roomName="ルーム1"></RoomLink>
      <RoomLink channelName="Room2" roomName="ルーム2"></RoomLink>
      <RoomLink channelName="Room3" roomName="ルーム3"></RoomLink>
    </Ul>
  </Wrapper>
);

const Wrapper = styled.div`
  text-align: center;
  margin-top: 15px;
`;

const Title = styled.h1`
  font-weight: bold;

  font-size: clamp(2.4rem, calc(2.2rem + 0.625vw), 3.6rem);
`;

const Ul = styled.ul`
  margin-top: 15px;
`;

export default Home;
