import styled from "styled-components";

interface ImageStyledProps {
  $customWidth: string;
}

export const ImageStyled = styled.img<ImageStyledProps>`
  width: ${(props) => props.$customWidth};
`;
