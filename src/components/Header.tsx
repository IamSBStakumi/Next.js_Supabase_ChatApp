"use client";

import Link from "next/link";
import styled from "styled-components";

const Header = () => {
  return (
    <Body>
      <ul className="w-full max-w-xl m-auto flex font-medium flex-row">
        <li>
          <Link className="text-gray-700 hover:text-blue-700" href="/">
            Home
          </Link>
        </li>
      </ul>
    </Body>
  );
};

const Body = styled.div`
  width: 100%;
  box-shadow: 2px 2px 2px #c7c7c7;

  font-size: clamp(2.4rem, calc(2.2rem + 0.625vw), 2.9rem);
`;

export default Header;
