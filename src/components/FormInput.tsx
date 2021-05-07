import React, { FC } from "react";
import styled from "styled-components";

import Input, { InputProps } from "./Input";

interface FormInputProps extends InputProps {
  label: string;
  isError?: boolean;
  goodMessage?: string;
  errorMessage?: string;
}

const FormInput: FC<FormInputProps> = ({
  label,
  isError,
  goodMessage,
  errorMessage,
  width,
  value,
  mt,
  ml,
  ...inputProps
}: Omit<FormInputProps, "ref" | "as">) => (
  <FormInputWrapper width={width} mt={mt} ml={ml}>
    <Label>
      {label}
      {value && <MessageArea isError={isError}>{isError ? errorMessage : goodMessage}</MessageArea>}
    </Label>
    <Input value={value} {...inputProps} />
  </FormInputWrapper>
);

export default FormInput;

const Label = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 9px;
  padding-left: 16px;
  font-weight: 500;
  font-size: 18px;
`;

const MessageArea = styled.span<Pick<FormInputProps, "isError">>`
  margin-left: 16px;
  color: ${(props) => (props.isError ? "red" : "#6B37FF")};
  font-size: 14px;
`;

const FormInputWrapper = styled.div<Pick<FormInputProps, "width" | "mt" | "ml">>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || "100%"};
  ${(props) => props.ml && `margin-left: ${props.ml};`}
  ${(props) => props.mt && `margin-top: ${props.mt};`}
`;
