import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../redux";
import { uuid } from "uuidv4";
const TodoInput = () => {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo.trim === "") return;
    dispatch(addTodoAction({ id: uuid(), name: todo, complete: false }));
  };

  const onChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-div">
        <input
          type="text"
          name="todo"
          placeholder="Add a todo"
          value={todo}
          onChange={onChange}
        />
        <button>Add Todo</button>
      </div>
    </form>
  );
};

export default TodoInput;
