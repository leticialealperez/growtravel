import styled from "styled-components";

interface TitleStyledProps {
  $textAlign: "left" | "center" | "right";
}

export const TitleStyled = styled.h2<TitleStyledProps>`
  font-size: 48px;
  margin: 8px 0 24px 0;
  text-align: ${(props) => props.$textAlign};
`;
