import React from "react";
import {
  ActionButton,
  Actions,
  ContainerDetails,
  Details,
  FinalDate,
  Item,
  Status,
  Tag,
  Title,
} from "./style";

import { IoTrash } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { Todo, completeTodo, deleteTodo } from "../../redux/todoSlice";
import { openStatus } from "../../redux/toggleSlice";
import { setTodoId } from "../../redux/editingSlice";

interface Render {
  todo: Todo;
}

function RenderTodo({ todo }: Render) {
  const dispatch = useDispatch();
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, todo: Todo) => {
    e.preventDefault();
    dispatch(deleteTodo(todo.id));
  };
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>, todo: Todo) => {
    e.preventDefault();
    dispatch(setTodoId(todo.id));
    dispatch(openStatus());

    console.log(todo);
  };
  const handleComplete = (
    e: React.MouseEvent<HTMLButtonElement>,
    todo: Todo
  ) => {
    e.preventDefault();
    dispatch(completeTodo(todo.id));
  };
  return (
    <Item key={todo.id}>
      <Title>{todo.title}</Title>
      <Details>{todo.description}</Details>
      <ContainerDetails>
        <Status>
          <Tag>Status: </Tag>
          {todo.status === false ? "Pending..." : "Completed!"}
        </Status>
        <Actions>
          <Tag>Actions: </Tag>
          <ActionButton title="delete" onClick={(e) => handleDelete(e, todo)}>
            <IoTrash />
          </ActionButton>
          <ActionButton title="edit" onClick={(e) => handleEdit(e, todo)}>
            {todo.status === false ? <FaRegEdit /> : ""}
          </ActionButton>
          <ActionButton onClick={(e) => handleComplete(e, todo)}>
            {todo.status === false ? (
              <IoCheckmarkDoneSharp title="complete" />
            ) : (
              <GiReturnArrow title="undo" />
            )}
          </ActionButton>
        </Actions>
        <FinalDate>
          <Tag>Final time: </Tag> {todo.finalDate}
        </FinalDate>
      </ContainerDetails>
    </Item>
  );
}
export default RenderTodo;
