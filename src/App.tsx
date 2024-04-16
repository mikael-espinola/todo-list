import React from "react";
import { Container } from "./styles";
import { GlobalStyles } from "./GlobalStyles";
import Header from "./components/features/header/Header";
import Main from "./components/features/main/Main";
import Footer from "./components/features/footer/Footer";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { currentTheme } from "./components/redux/darkModeSlice";
import { darkTheme, lightTheme } from "./components/features/theme/Theme";

function App() {
  const theme = useSelector(currentTheme);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Container>
        <Header />
        <Main />
        <Footer />
        <GlobalStyles />
      </Container>
    </ThemeProvider>
  );
}

export default App;
