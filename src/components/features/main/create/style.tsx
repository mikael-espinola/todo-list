import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  background-color: coral;
`;

export const Label = styled.p`
  padding: 0.4em;
  width: 100%;
  font-size: 14px;
`;

export const Form = styled.form`
  display: flex;
  padding: 0.4em;
  flex-direction: column;
  width: 100%;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Input = styled.input`
  padding: 0.6em;
  width: 100%;
  margin: 0.1em;
`;
export const Button = styled.button`
  padding: 0.4em;
  margin-top: 0.4em;
  width: 100%;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 8px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 18px;
`;
