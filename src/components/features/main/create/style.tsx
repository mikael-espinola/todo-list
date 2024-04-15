import styled from "styled-components";

interface InputProps {
  widthmax: number;
}

export const FirstContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #d4cdcd4f;
  z-index: 999;
`;

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: max-content;
  background-color: #5b5858;
  color: #fff;
  border-radius: 7px;

  @media screen and (min-width: 700px) {
    width: 60%;
  }
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
  justify-content: center;
  flex-direction: column;
`;
export const Input = styled.input<InputProps>`
  padding: 0.6em;
  width: ${(props) => props.widthmax}%;
  margin: 0.1em;
  border-radius: 7px;

  @media screen and (min-width: 700px) {
    width: ${(props) => (props.widthmax === 50 ? 20 : props.widthmax)}%;
  }
`;

export const TextArea = styled.textarea`
  min-height: 90px;
  overflow: auto;
  resize: none;
  border-radius: 7px;
  padding: 0.5em;
`;

export const ButtonContainer = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const Button = styled.button`
  padding: 0.8em;
  cursor: pointer;
  color: black;
  border-radius: 7px;
  border: none;

  @media screen and (min-width: 700px) {
    width: 10%;
  }
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
