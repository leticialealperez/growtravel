import { HeaderStyled } from "./HeaderStyled";

export function Header() {
  return (
    <HeaderStyled>
      <nav>
        <ul>
          <li>
            <a href="#quem-somos">Quem somos</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#planos">Planos</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
}
