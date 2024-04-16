import styled from "styled-components";

export const Container = styled.div`
  height: 5em;
  background-color: #5b5858;
  color: #fff;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  position: relative;

  @media screen and (min-width: 800px) {
    width: 90%;
  }
`;

export const Title = styled.h1``;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 2.5em;
  position: absolute;
  right: 1em;
  top: 4px;

  @media screen and (min-width: 700px) {
    right: 5em;
    width: 4em;
  }
`;

export const ThemeButton = styled.button`
  border-radius: 22px;
  padding: 1em;
  font-size: 5px;

  @media screen and (min-width: 700px) {
    font-size: 12px;
  }
`;

export const Mode = styled.p`
  color: #fff;
  font-size: 7px;
  @media screen and (min-width: 700px) {
    font-size: 12px;
  }
`;
