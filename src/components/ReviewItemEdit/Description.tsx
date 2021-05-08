import React, { FC, useCallback, useState } from "react";
import styled from "styled-components";

const Description: FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  }, [title, setTitle]);

  const handleDescription = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value);
  }, [description, setDescription]);

  return (
    <Wrapper>
      <Title>후기 쓰기</Title>
      <InputWrapper height={56} marginTop={16}>
        <Input
          value={title}
          placeholder="제목을 작성하세요"
          onChange={handleTitle}
        />
      </InputWrapper>
      <InputWrapper height={124} marginTop={8}>
        <TextArea
          value={description}
          placeholder="자유롭게 작성하세요"
          onChange={handleDescription}
        />
      </InputWrapper>
    </Wrapper>
  );
};

export default Description;

const Wrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  margin-top: 3px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const InputWrapper = styled.div<{ height: number, marginTop: number }>`
  display: flex;
  padding: 14px 20px;
  border: 1px solid #D8D8D8;
  border-radius: 8px;
  margin-top: ${(props) => props.marginTop}px;
  background-color: white;
  
  height: ${(props) => props.height}px;
`;

const Input = styled.input`
  width: 100%;
  margin-right: 10px;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: #11ffee00;

  &::placeholder {
    color: #BBBBBB;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  font-size: 16px;
  resize: none;
  border: none;
  outline: none;
  background-color: #11ffee00;

  &::placeholder {
    color: #BBBBBB;
  }
`;
