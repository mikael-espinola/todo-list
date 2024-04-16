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
  StatusColor,
  StatusContainer,
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
  index: number;
}

function RenderTodo({ todo, index }: Render) {
  const dispatch = useDispatch();
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, todo: Todo) => {
    e.preventDefault();
    dispatch(deleteTodo(todo.id));
  };
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>, todo: Todo) => {
    e.preventDefault();
    dispatch(setTodoId(todo.id));
    dispatch(openStatus());
  };
  const handleComplete = (
    e: React.MouseEvent<HTMLButtonElement>,
    todo: Todo
  ) => {
    e.preventDefault();
    dispatch(completeTodo(todo.id));
  };
  return (
    <Item key={index}>
      <Title>{todo.title}</Title>
      <Details>{todo.description}</Details>
      <ContainerDetails>
        <StatusContainer>
          <Status>
            <Tag>Status: </Tag>
            {todo.status === false ? "Pending..." : "Completed!"}
          </Status>
          <StatusColor status={todo.status.toString()} />
        </StatusContainer>
        <Actions>
          <ActionButton title="delete" onClick={(e) => handleDelete(e, todo)}>
            <IoTrash />
          </ActionButton>
          {todo.status === false && (
            <ActionButton title="edit" onClick={(e) => handleEdit(e, todo)}>
              <FaRegEdit />
            </ActionButton>
          )}
          <ActionButton onClick={(e) => handleComplete(e, todo)}>
            {todo.status === false ? (
              <IoCheckmarkDoneSharp title="complete" />
            ) : (
              <GiReturnArrow title="undo" />
            )}
          </ActionButton>
        </Actions>
        <FinalDate>
          {todo.status === false ? (
            <Tag>Final time: {todo.finalDate}</Tag>
          ) : (
            <Tag>Completed at: {todo.finalDate}</Tag>
          )}
        </FinalDate>
      </ContainerDetails>
    </Item>
  );
}
export default RenderTodo;
