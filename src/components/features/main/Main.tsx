import React, { useEffect, useState } from "react";
import { Button, Container } from "./style";
import Create from "./create/Create";
import ShowList from "./showList/ShowList";
import { useDispatch, useSelector } from "react-redux";
import { openStatus, currentAction } from "../../redux/toggleSlice";

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
      <ShowList />
    </Container>
  );
}

export default Main;
