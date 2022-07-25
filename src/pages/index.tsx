import type { NextPage } from "next";
import React from "react";
import { Header } from "../components/Header";
import { Container } from "../../styles/home";
import { MainContent } from "../components/MainContent";

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <MainContent />
    </Container>
  );
};

export default Home;
