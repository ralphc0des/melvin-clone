import { Inter } from "next/font/google";
import { useState } from "react";
import Carousel from "../component/Carousel/Carousel";
import Container from "../component/Container/Container";
import ExchangeRate from "../component/ExchangeComponent/ExchangeRate";
import BodyText from "../component/BodyText/BodyText";
import Slider from "../component/Slider/Slider";
import Header from "../component/Navbar/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Header />
      <Carousel />
      <Container>
        <ExchangeRate />
        <Slider />
      </Container>
      <BodyText />
    </main>
  );
}
