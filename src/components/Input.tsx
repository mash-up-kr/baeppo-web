import React, { FC, useCallback } from "react";
import styled from "styled-components";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  mt?: string;
  ml?: string;
  width?: string;
  fontSize?: string;
  onValueChange: (value: string) => void;
}

const Input: FC<InputProps> = ({
  onValueChange,
  ...inputProps
}: Omit<InputProps, "ref" | "as">) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onValueChange(e.target.value);
    },
    [onValueChange],
  );

  return <StyledInput onChange={handleChange} {...inputProps} />;
};

const StyledInput = styled.input<Omit<InputProps, "onValueChange">>`
  width: ${(props) => props.width || "100%"};
  ${(props) => props.ml && `margin-left: ${props.ml};`}
  ${(props) => props.mt && `margin-top: ${props.mt};`}
  padding: 16px;
  font-size: ${(props) => props.fontSize || "16px"};
  border: 1px solid #d8d8d8;
  border-radius: 8px;
  outline: none;

  &::placeholder {
    color: rgba(90, 90, 90, 0.5);
  }
`;

export default Input;
