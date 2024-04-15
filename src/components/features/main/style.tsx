import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 400px;
`;

export const Button = styled.button`
  padding: 0.5em;
  margin: 1em 0;
  border: none;
  background-color: #fb9404;
  padding: 0.8em;
  color: #000000;
  border-radius: 7px;
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
  margin-bottom: 0.5em;
  min-height: 100px;
`;

export const Subtitle = styled.p`
  background-color: #5b5858;
  border-radius: 7px;
  color: #fff;
  text-align: center;
  padding: 0.2em;
  font-size: 20px;
`;
