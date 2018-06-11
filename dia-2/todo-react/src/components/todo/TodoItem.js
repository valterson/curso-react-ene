import React from "react";
import { partial } from '../../lib/utils';

export const TodoItem = ({ isComplete, name, handleToggle, id, handleRemoveTodo }) => {
  const toggle = partial(handleToggle, id);
  const removeTodo = partial(handleRemoveTodo, id)

  return (
    <li>
      <span className="delete-item">
        <b onClick={removeTodo}>X</b>
      </span>
      <input
        type="checkbox"
        checked={isComplete}
        onChange={toggle}
      />{" "}
      {name}
    </li>
  )
};