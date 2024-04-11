import React, { useEffect, useState } from "react";
import {
  Container,
  ContainerDetails,
  Item,
  List,
  Title,
  Details,
  FinalDate,
  Status,
  Tag,
  Actions,
  ActionButton,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  Todo,
  completeTodo,
  deleteTodo,
  todosList,
} from "../../../redux/todoSlice";

import { IoTrash } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { GiReturnArrow } from "react-icons/gi";

function ShowList() {
  const [listStatus, setListStatus] = useState(false);
  const list = useSelector(todosList);
  const dispatch = useDispatch();

  useEffect(() => {
    list.length > 0 ? setListStatus(true) : setListStatus(false);
  }, [list]);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, todo: Todo) => {
    e.preventDefault();
    dispatch(deleteTodo(todo.id));
  };
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>, todo: Todo) => {
    e.preventDefault();
  };
  const handleComplete = (
    e: React.MouseEvent<HTMLButtonElement>,
    todo: Todo
  ) => {
    e.preventDefault();
    dispatch(completeTodo(todo.id));
  };

  return (
    <Container>
      {listStatus ? (
        <List>
          {list.map((todo) => (
            <Item key={todo.id}>
              <Title>
                <Tag>Title:</Tag> {todo.title}
              </Title>
              <Details>
                <Tag>Description: </Tag>
                {todo.description}
              </Details>
              <ContainerDetails>
                <FinalDate>
                  <Tag>Final time: </Tag> {todo.finalDate}
                </FinalDate>
                <Status>
                  <Tag>Status: </Tag>
                  {todo.status === false ? "Pending..." : "Completed!"}
                </Status>
                <Actions>
                  <Tag>Actions: </Tag>
                  <ActionButton
                    title="delete"
                    onClick={(e) => handleDelete(e, todo)}
                  >
                    <IoTrash />
                  </ActionButton>
                  <ActionButton
                    title="edit"
                    onClick={(e) => handleEdit(e, todo)}
                  >
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
              </ContainerDetails>
            </Item>
          ))}
        </List>
      ) : (
        <Title>Nothing to showup.</Title>
      )}
    </Container>
  );
}

export default ShowList;
