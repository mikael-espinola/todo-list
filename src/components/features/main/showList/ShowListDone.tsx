import React, { useEffect, useState } from "react";
import { Container, List, Message } from "./style";
import RenderTodo from "../../renderTodo/RenderTodo";
import { useSelector } from "react-redux";
import { Todo, todosList } from "../../../redux/todoSlice";

interface Value {
  booleanValue: boolean;
}

function ShowListDone() {
  const [listStatus, setListStatus] = useState(false);
  const [doneList, setDoneList] = useState<Todo[]>();
  const list = useSelector(todosList);

  useEffect(() => {
    let newList = list.filter((todo) => todo.status === true);
    newList.length > 0 ? setListStatus(true) : setListStatus(false);
    setDoneList(newList);
  }, [list]);

  return (
    <Container>
      {listStatus ? (
        <List>
          {doneList && doneList.map((todo) => <RenderTodo todo={todo} />)}
        </List>
      ) : (
        <>
          <Message>It all up! </Message>
        </>
      )}
    </Container>
  );
}

export default ShowListDone;
