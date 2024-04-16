import React, { useEffect, useState } from "react";
import { Container, Title, ContainerButton, ThemeButton, Mode } from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  currentStatus,
  currentTheme,
  toggleStatus,
} from "../../redux/darkModeSlice";

function Header() {
  const status = useSelector(currentStatus);
  const theme = useSelector(currentTheme);
  const dispatch = useDispatch();

  const toggle = () => {
    theme === "dark"
      ? dispatch(toggleStatus("light"))
      : dispatch(toggleStatus("dark"));
  };

  return (
    <Container>
      <Title>To-do List</Title>
      <ContainerButton>
        {!status && <Mode>Dark</Mode>}
        <ThemeButton onClick={toggle}></ThemeButton>
        {status && <Mode>Light</Mode>}
      </ContainerButton>
    </Container>
  );
}

export default Header;
