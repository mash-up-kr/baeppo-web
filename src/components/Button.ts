import styled from "styled-components";

interface ButtonProps {
  width?: string;
  mt?: string;
  ml?: string;
  px?: string;
  py?: string;
  color?: string;
  bgColor?: string;
  fontWeight?: string;
  withBorder?: boolean;
}

const Button = styled.button<ButtonProps>`
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.py || "21px"} ${(props) => props.px || "0"};
  ${(props) => props.ml && `margin-left: ${props.ml};`}
  ${(props) => props.mt && `margin-top: ${props.mt};`}
  color: ${(props) => props.color || "white"};
  font-weight: ${(props) => props.fontWeight || "700"};
  font-size: 16px;
  background-color: ${(props) => props.bgColor || "#6b37ff"};
  border: ${(props) => (props.withBorder ? `1px solid ${props.color}` : "none")};
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
