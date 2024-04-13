import styled from "styled-components";

export const Tag = styled.label`
  color: black;
  font-style: italic;
`;
export const Item = styled.li`
  border: 1px solid black;
  margin: 0.2em;
  border-radius: 5px;
  padding: 0 0.1em;
`;
export const Title = styled.h3`
  padding-left: 0.5em;
`;
export const Details = styled.p`
  padding: 1em;
`;

export const ContainerDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  border-top: 1px solid black;
`;

export const FinalDate = styled.p`
  grid-column: span 2;
  justify-self: center;
  margin: 1em 0 0.5em 0;
`;
export const Status = styled.p`
  justify-self: center;
`;

export const Actions = styled.div`
  justify-self: center;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 800px) {
    width: 80%;
  }
`;

export const ActionButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  font-size: 18px;
`;
