import React, { useEffect, useState } from "react";
import { Button, Container, ListsContainer, ItemContainer } from "./style";
import Create from "./create/Create";
import ShowList from "./showList/ShowList";
import { useDispatch, useSelector } from "react-redux";
import { openStatus, currentAction } from "../../redux/toggleSlice";
import { Label } from "./create/style";

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
          <Label>To Do</Label>
          <ShowList booleanValue={false} />
        </ItemContainer>
        <ItemContainer>
          <Label>Done</Label>
          <ShowList booleanValue={true} />
        </ItemContainer>
      </ListsContainer>
    </Container>
  );
}

export default Main;
