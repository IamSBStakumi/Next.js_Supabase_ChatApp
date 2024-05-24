"use client";

import styled from "styled-components";

const ChannelName = styled.h1`
  font-size: clamp(2.4rem, calc(2.2rem + 0.625vw), 3.6rem);
`;

const Form = styled.form`
  margin: 15px clamp(0.8rem, calc(1.3rem + 0.575vw), 2rem);
`;

const NameInput = styled.input`
  display: block;
  margin: 5px;
  padding: 0 4px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 0 1px #ccc inset;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &: focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgb(33, 150, 243) inset;
  }
`;

const Textarea = styled.textarea`
  display: block;
  margin: 5px;
  padding: 0 4px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 0 1px #ccc inset;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  resize: vertical;

  &: focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgb(33, 150, 243) inset;
  }
`;

const PostButton = styled.button`
  padding: 0 10px;

  &: active {
    cursor: pointer;
  }

  &: hover {
    filter: brightness(1.2);
  }

  &: disabled {
    cursor: not-allowed;
    color: #c7c7c7;
    filter: brightness(1);
  }
`;

export { ChannelName, Form, NameInput, PostButton, Textarea };
