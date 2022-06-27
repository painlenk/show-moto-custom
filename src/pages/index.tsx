import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";

import { Container } from "./home";

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Home;
