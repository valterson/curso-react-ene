import React from "react";
import { TodoItem } from "./";

export const TodoList = ({ todos, handleToggle, handleRemoveTodo }) => {
	const todoItem = todos.map(todo => (
		<TodoItem
			key={todo.id}
			handleToggle={handleToggle}
			handleRemoveTodo={handleRemoveTodo}
			{...todo}
		/>
	))

	return (
		<div className="Todo-list">
			<ul>
				{todoItem}
			</ul>
		</div>
	)
};