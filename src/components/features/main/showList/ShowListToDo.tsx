import React, { useEffect, useState } from "react";
import { Container, List, Message } from "./style";
import { useSelector } from "react-redux";
import { Todo, todosList } from "../../../redux/todoSlice";
import RenderTodo from "../../renderTodo/RenderTodo";

interface Value {
  booleanValue: boolean;
}

function ShowList() {
  const [listStatus, setListStatus] = useState(false);
  const [toDoList, setToDoList] = useState<Todo[]>();
  const list = useSelector(todosList);

  useEffect(() => {
    let newList = list.filter((todo) => todo.status === false);
    newList.length > 0 ? setListStatus(true) : setListStatus(false);
    setToDoList(newList);
  }, [list]);

  return (
    <Container>
      {listStatus ? (
        <List>
          {toDoList &&
            toDoList.map((todo, index) => (
              <RenderTodo todo={todo} index={index} />
            ))}
        </List>
      ) : (
        <>
          <Message>Nothing new 'til now... </Message>
        </>
      )}
    </Container>
  );
}

export default ShowList;
