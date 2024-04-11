import React, { useEffect, useState } from "react";
import { Container, List, Message } from "./style";
import { useSelector } from "react-redux";
import { Todo, todosList } from "../../../redux/todoSlice";
import RenderTodo from "../../renderTodo/RenderTodo";

interface Value {
  booleanValue: boolean;
}

function ShowList({ booleanValue }: Value) {
  const [listStatus, setListStatus] = useState(false);
  const list = useSelector(todosList);

  useEffect(() => {
    list.length > 0 ? setListStatus(true) : setListStatus(false);
  }, [list]);

  return (
    <Container>
      {listStatus ? (
        <List>
          {list.map((todo) => {
            return todo.status === booleanValue && <RenderTodo todo={todo} />;
          })}
        </List>
      ) : (
        <>
          {list.map((todo) => {
            return todo.status === !booleanValue && <RenderTodo todo={todo} />;
          })}
          <Message>It all up! </Message>
        </>
      )}
    </Container>
  );
}

export default ShowList;
