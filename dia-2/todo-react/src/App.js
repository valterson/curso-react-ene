import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoForm, TodoList, ErrorMessage, Footer } from "./components/todo";
import { addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo } from "./lib/todoHelpers";
import { pipe, partial } from "./lib/utils";

class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Learn JSX", isComplete: false },
      { id: 2, name: "Buidl an Awesome App", isComplete: false },
      { id: 3, name: "Ship It!", isComplete: false }
    ],
    currentTodo: ''
  }

  handleRemoveTodo = (id, evt) => {
    evt.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({ todos: updatedTodos });
  }

  handleToggle = (id) => {
    const getUpdatedTodos = pipe(
      findById,
      toggleTodo,
      partial(updateTodo, this.state.todos)
    )
    // const todo = findById(id, this.state.todos);
    // const toggled = toggleTodo(todo);
    // const updatedTodos = updateTodo(this.state.todos, toggled);
    const updatedTodos = getUpdatedTodos(id, this.state.todos);

    this.setState({ todos: updatedTodos });
  }

  handleInputChange = (evt) => {
    this.setState({ currentTodo: evt.target.value })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const newId = generateId();
    const newTodo = {
      id: newId,
      name: this.state.currentTodo,
      isComplete: false
    };
    const updatedTodos = addTodo(this.state.todos, newTodo);

    this.setState({ todos: updatedTodos, currentTodo: '', errorMessage: '' });
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault();
    this.setState({ errorMessage: 'Please supply the todo name' });
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Todos</h1>
        </header>
        <div className="Todo-App">
          <ErrorMessage message={this.state.errorMessage} />
          <TodoForm
            currentTodo={this.state.currentTodo}
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}
          />
          <TodoList
            todos={this.state.todos}
            handleToggle={this.handleToggle}
            handleRemoveTodo={this.handleRemoveTodo}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
