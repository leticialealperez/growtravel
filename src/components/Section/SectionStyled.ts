import styled, { css } from "styled-components";

interface SectionStyledProps {
  $direction: "row" | "column";
  $reverse?: boolean;
  $gap: number;
  $maxContainerWidth?: number;
}

export const SectionStyled = styled.section<SectionStyledProps>`
  flex-direction: ${(props) =>
    props.$reverse ? `${props.$direction}-reverse` : props.$direction};
  gap: ${(props) => `${props.$gap}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px 24px;
  border-bottom: 1px solid #cccccc;

  & > div {
    ${(props) =>
      props.$maxContainerWidth &&
      css`
        width: ${props.$maxContainerWidth + "%"};
      `};
  }
`;
