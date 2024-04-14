import React from "react";
import CreateTodo from "../create/Create";
import { useDispatch, useSelector } from "react-redux";
import { selectedId } from "../../../redux/editingSlice";

function EditTodo() {
  return <CreateTodo />;
}

export default EditTodo;
