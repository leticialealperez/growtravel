import { Fragment } from "react/jsx-runtime";
import { Header } from "../components/Header/Header";
import { ButtonStyled } from "../components/Button/ButtonStyled";
import { Footer } from "../components/Footer/Footer";
import { ImageStyled } from "../components/Image/ImageStyled";
import { ParagraphStyled } from "../components/Paragraph/ParagraphStyled";
import { SectionStyled } from "../components/Section/SectionStyled";
import { TableStyled } from "../components/Table/TableStyled";
import { TitleStyled } from "../components/Title/TitleStyled";

import imgHome from "../assets/home.svg";
import imgQuemSomos from "../assets/aeroporto.svg";
import { FloatButton } from "../components/FloatButton/FloatButton";

export function Home() {
  return (
    <Fragment>
      <Header />

      <main>
        <SectionStyled $direction="row" $reverse $gap={24}>
          <ImageStyled src={imgHome} alt="Buscar viagens pelo mundo" />

          <div>
            <TitleStyled $textAlign="center">GrowTravel</TitleStyled>
            <ParagraphStyled $textAlign="center">
              O melhor serviço para você!
            </ParagraphStyled>
            <ButtonStyled $primary>Saiba Mais!</ButtonStyled>
          </div>
        </SectionStyled>

        <SectionStyled
          id="quem-somos"
          $direction="row"
          $gap={48}
          $maxContainerWidth={50}
        >
          <ImageStyled src={imgQuemSomos} alt="Aeroporto" />

          <div>
            <TitleStyled $textAlign="left">Quem somos</TitleStyled>
            <ParagraphStyled $textAlign="left">
              Somos apaixonados por criar experiências de viagem inesquecíveis.
              Nossa agência de turismo é formada por uma equipe experiente e
              dedicada, que busca transformar seus sonhos de viagem em
              realidade.
            </ParagraphStyled>
            <ParagraphStyled $textAlign="left">
              Acreditamos que viajar é mais do que apenas conhecer novos
              lugares, é uma oportunidade de viver novas aventuras e criar
              memórias duradouras. Por isso, oferecemos um atendimento
              personalizado, com roteiros exclusivos e serviços de alta
              qualidade, para que você possa desfrutar de cada momento da sua
              viagem.
            </ParagraphStyled>
          </div>
        </SectionStyled>

        <SectionStyled
          id="planos"
          $direction="column"
          $gap={48}
          $maxContainerWidth={100}
        >
          <TitleStyled $textAlign="center">Planos</TitleStyled>

          <div>
            <TableStyled>
              <thead>
                <tr>
                  <th></th>
                  <th>Plano 1</th>
                  <th>Plano 2</th>
                  <th>Plano 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Suporte 24h</th>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <th>Serviços de quarto</th>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <th>Guia turístico</th>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <th>Roteiro de trilhas</th>
                  <td>❌</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <th>Serviço personalizado</th>
                  <td>❌</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <th>Área VIP</th>
                  <td>❌</td>
                  <td>❌</td>
                  <td>✅</td>
                </tr>
              </tbody>
            </TableStyled>
          </div>
        </SectionStyled>
      </main>

      <Footer />

      <FloatButton
        link="https://wa.me/5551999887766?text=Ol%C3%A1,%20tudo%20bem?"
        title="Entre em contato pelo WhatsApp"
      />
    </Fragment>
  );
}
