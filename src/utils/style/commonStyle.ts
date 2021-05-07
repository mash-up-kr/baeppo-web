import { css } from "styled-components";

const ellipsisText = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const resetUl = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export { ellipsisText, resetUl };
