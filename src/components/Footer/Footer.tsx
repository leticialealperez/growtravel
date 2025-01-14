import { FooterStyled } from "./FooterStyled";

export function Footer() {
  return (
    <FooterStyled>
      <small>&copy; Copyright {new Date().getFullYear()}.</small>
    </FooterStyled>
  );
}
