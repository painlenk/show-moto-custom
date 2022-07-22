import type { NextPage } from "next";
import React from "react";
import { Header } from "../components/Header";

import { Container } from "../../styles/home";

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Home;
