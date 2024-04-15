import styled from "styled-components";

export const Container = styled.div`
  margin: 1em 0;
  align-items: center;
  padding: 0.2em;
  display: block;
`;

export const Text = styled.p`
  text-align: center;
  color: #444;
  @media screen and (max-width: 700px) {
    font-size: 11px;
  }
`;

export const Link = styled.a`
  text-decoration: underline;
  margin: 0 0.2em;
  cursor: pointer;
  color: #444;
`;
