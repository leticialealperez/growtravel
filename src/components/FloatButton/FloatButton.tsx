import { FloatButtonStyled } from "./FloatButtonStyled";
import imgWhatsappIcon from "../../assets/social.png";
import { ImageStyled } from "../Image/ImageStyled";

interface FloatButtonProps {
  link: string;
  title: string;
}

export function FloatButton(props: FloatButtonProps) {
  return (
    <FloatButtonStyled href={props.link} title={props.title} target="_blank">
      <ImageStyled
        src={imgWhatsappIcon}
        alt="Icone Whatsapp"
        $customWidth="60px"
      />
    </FloatButtonStyled>
  );
}
