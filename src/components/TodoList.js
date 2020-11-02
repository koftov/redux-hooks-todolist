import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAction, toggleTodoAction } from "../redux";

const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => dispatch(toggleTodoAction(todo.id))}
          />
          <span className={todo.complete ? "complete" : null}>{todo.name}</span>
          <span
            className="delete-button"
            onClick={() => dispatch(deleteTodoAction(todo.id))}
          >
            X
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
