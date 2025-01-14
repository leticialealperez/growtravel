import { FloatButtonStyled } from "./FloatButtonStyled";
import imgWhatsappIcon from "../../assets/social.png";

interface FloatButtonProps {
  link: string;
  title: string;
}

export function FloatButton(props: FloatButtonProps) {
  return (
    <FloatButtonStyled href={props.link} title={props.title} target="_blank">
      <img src={imgWhatsappIcon} alt="Icone Whatsapp" />
    </FloatButtonStyled>
  );
}
