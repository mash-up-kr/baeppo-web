import styled from "styled-components";

interface InputProps {
  mt?: string;
  ml?: string;
  width?: string;
}

const Input = styled.input<InputProps>`
  ${(props) => props.ml && `margin-left: ${props.ml};`}
  ${(props) => props.mt && `margin-top: ${props.mt};`}
  width: ${(props) => props.width || "100%"};
  padding: 16px;
  font-size: 16px;
  border: 1px solid #d8d8d8;
  border-radius: 8px;
  outline: none;

  &::placeholder {
    color: rgba(90, 90, 90, 0.5);
  }
`;

export default Input;
