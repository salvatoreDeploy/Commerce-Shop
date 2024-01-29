import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from "../assets/Logo.svg";
import { CartButton, Container, Header } from "../styles/pages/app";
import Image from "next/image";
import { Handbag } from "@phosphor-icons/react";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <CartButton>
          <Handbag size={24} />
        </CartButton>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
