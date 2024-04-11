import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 0.5em;
  margin: 1em 0;
`;

export const ListsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
`;
