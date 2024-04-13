import React from "react";
import { Container } from "./styles";
import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/features/header/Header";
import Main from "./components/features/main/Main";
import Footer from "./components/features/footer/Footer";

function App() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
      <GlobalStyles />
    </Container>
  );
}

export default App;
