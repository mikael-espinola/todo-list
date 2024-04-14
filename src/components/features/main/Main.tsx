import React from "react";
import {
  Button,
  Container,
  ListsContainer,
  ItemContainer,
  Subtitle,
} from "./style";
import Create from "./create/Create";
import { useDispatch, useSelector } from "react-redux";
import { openStatus, currentAction } from "../../redux/toggleSlice";
import ShowListDone from "./showList/ShowListDone";
import ShowListToDo from "./showList/ShowListToDo";

function Main() {
  const status = useSelector(currentAction);
  const dispatch = useDispatch();

  const handleStatus = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(openStatus());
  };

  return (
    <Container>
      <Button onClick={handleStatus}>Add a new To Do</Button>
      {status && <Create />}
      <ListsContainer>
        <ItemContainer>
          <Subtitle>To Do</Subtitle>
          <ShowListToDo />
        </ItemContainer>
        <ItemContainer>
          <Subtitle>Done</Subtitle>
          <ShowListDone />
        </ItemContainer>
      </ListsContainer>
    </Container>
  );
}

export default Main;
