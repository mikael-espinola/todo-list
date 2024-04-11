import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid black;
  width: 100%;
  margin-top: 0.5em;
  padding: 0.12em;
`;

export const Tag = styled.label`
  color: black;
  font-style: italic;
`;
export const List = styled.ul``;
export const Item = styled.li`
  border: 1px solid black;
  margin: 0.2em;
  border-radius: 5px;
  padding: 0 0.1em;
`;
export const Title = styled.h3``;
export const Details = styled.p`
  padding: 1em;
`;

export const ContainerDetails = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const FinalDate = styled.p``;
export const Status = styled.p``;

export const Actions = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-evenly;
`;

export const ActionButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 18px;
`;
