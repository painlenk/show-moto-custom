import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { GlobalStyle } from "../styles/globals";
import { Container } from "./home";

const Home: NextPage = () => {
  return (
    <Container>
      <h1>Hellow world</h1>
    </Container>
  );
};

export default Home;
