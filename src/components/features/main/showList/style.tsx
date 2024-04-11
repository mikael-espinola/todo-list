import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 0.5em;
  padding: 0.12em;

  @media screen and (min-width: 800px) {
    width: 30em;
  }
`;

export const List = styled.ul``;

export const Message = styled.strong`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1em;
  font-size: 19px;
  color: gray;
`;
