import { Container } from "../../styles/pagesStyles/home";
import type { NextPage } from "next";
import React from "react";

import { MainContent } from "../components/MainContent";

const Home: NextPage = () => {
  return (
    <Container>
      <MainContent />
    </Container>
  );
};

export default Home;
