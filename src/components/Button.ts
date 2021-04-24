import styled from "styled-components";

interface ButtonProps {
  width?: string;
  mt?: string;
  ml?: string;
  color?: string;
  bgColor?: string;
}

const Button = styled.button<ButtonProps>`
  width: ${(props) => props.width || "100%"};
  padding: 21px 0;
  ${(props) => props.ml && `margin-left: ${props.ml};`}
  ${(props) => props.mt && `margin-top: ${props.mt};`}
  color: ${(props) => props.color || "white"};
  font-weight: 700;
  font-size: 16px;
  background-color: ${(props) => props.bgColor || "#6b37ff"};
  border: none;
  border-radius: 11px;
  outline: none;
  cursor: pointer;

  &:disabled {
    color: white;
    background-color: #dbdbdb;
    cursor: default;
  }
`;

export default Button;
