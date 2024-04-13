import React, { useState } from "react";

import {
  Button,
  Form,
  Input,
  TextArea,
  Label,
  InputContainer,
  Container,
  CloseButton,
  FirstContainer,
} from "./style";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/todoSlice";

import { IoCloseCircleOutline } from "react-icons/io5";
import { closeStatus } from "../../../redux/toggleSlice";

function CreateTodo() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [finalDate, setFinalDate] = useState("");

  const handleData = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (title === "" || description === "" || finalDate === "") {
      return alert("All fields are required... Try again.");
    }
    dispatch(
      addTodo({
        title,
        description,
        finalDate,
      })
    );
    dispatch(closeStatus());
    setDescription("");
    setFinalDate("");
    setTitle("");
  };

  const handleCloseTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(closeStatus());
  };

  return (
    <FirstContainer>
      <Container>
        <Form>
          <InputContainer>
            <CloseButton onClick={handleCloseTab}>
              <IoCloseCircleOutline color="#fff" />
            </CloseButton>
            <Label>Title:</Label>
            <Input
              widthMax={100}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title..."
              name="title"
              type="text"
            />
            <Label>Description:</Label>
            <TextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description..."
              name="description"
            />
            <Label>When?</Label>
            <Input
              widthMax={50}
              value={finalDate}
              onChange={(e) => setFinalDate(e.target.value)}
              name="finalDate"
              type="date"
            />
            <Button onClick={handleData}>save</Button>
          </InputContainer>
        </Form>
      </Container>
    </FirstContainer>
  );
}

export default CreateTodo;
