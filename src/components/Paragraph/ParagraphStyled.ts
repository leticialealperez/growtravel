import styled from "styled-components";

interface ParagraphStyledProps {
  $textAlign: "left" | "center" | "right";
  $fontSize?: number;
}

export const ParagraphStyled = styled.p<ParagraphStyledProps>`
  font-size: ${(props) => props.$fontSize ?? "1rem"};
  margin: 6px 0;
  text-align: ${(props) => props.$textAlign};
`;
