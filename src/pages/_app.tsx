import theme from "../../styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/globals";

import type { AppProps } from "next/app";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />

    </ThemeProvider>
  );
}

export default MyApp;
