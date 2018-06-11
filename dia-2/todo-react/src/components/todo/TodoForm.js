import React from "react";

export const TodoForm = ({ currentTodo, handleInputChange, handleSubmit }) => (
  <form action="" onSubmit={handleSubmit}>
    <input
        type="text"
        value={currentTodo}
        onChange={handleInputChange}
    />
  </form>
);
