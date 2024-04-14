import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonContainer,
  Form,
  Input,
  InputContainer,
  Label,
  TextArea,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { closeStatus } from "../../redux/toggleSlice";
import { Todo, addTodo, editTodo, todosList } from "../../redux/todoSlice";
import { clearTodoId, selectedId } from "../../redux/editingSlice";

function FormTemplate() {
  const dispatch = useDispatch();
  const isId = useSelector(selectedId);
  const [title, setTitle] = useState<string | undefined>("");
  const [newTitle, setNewTitle] = useState<string | undefined>("");
  const [description, setDescription] = useState<string | undefined>("");
  const [finalDate, setFinalDate] = useState<string | undefined>("");
  const list = useSelector(todosList);

  useEffect(() => {
    if (isId === 0) {
      return;
    }

    const todoToEdit = list.find((todo) => todo.id === isId);
    setTitle(todoToEdit?.title);
    setNewTitle(title);
    setDescription(todoToEdit?.description);
    setFinalDate(todoToEdit?.finalDate);
  }, [isId]);

  const handleCloseTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(clearTodoId());
    dispatch(closeStatus());
  };

  const handleData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title === "" || description === "" || finalDate === "") {
      return alert("All fields are required... Try again.");
    } else if (isId === 0) {
      dispatch(
        addTodo({
          title,
          description,
          finalDate,
        })
      );
      dispatch(closeStatus());
    } else if (isId > 0) {
      dispatch(
        editTodo({
          isId,
          title,
          description,
          finalDate,
        })
      );

      dispatch(clearTodoId());
      dispatch(closeStatus());
    }
    setDescription("");
    setFinalDate("");
    setTitle("");
  };

  return (
    <Form onSubmit={handleData}>
      <InputContainer>
        <Label>Title:</Label>
        <Input
          widthmax={100}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={"Title..."}
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
          widthmax={50}
          value={finalDate}
          onChange={(e) => setFinalDate(e.target.value)}
          name="finalDate"
          type="date"
        />
        <ButtonContainer>
          <Button type="submit">save</Button>
          <Button onClick={handleCloseTab}>close</Button>
        </ButtonContainer>
      </InputContainer>
    </Form>
  );
}

export default FormTemplate;
