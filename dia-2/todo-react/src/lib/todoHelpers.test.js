import { addTodo, findById, toggleTodo, updateTodo, removeTodo } from "./todoHelpers";

test('addTodo should add the passed todo to the list', () => {
  // Arrange
  const startTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false }
  ];
  const newTodo = { id: 3, name: 'three', isComplete: false };
  const expected = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
    { id: 3, name: 'three', isComplete: false }
  ];

  // Act
  const result = addTodo(startTodos, newTodo);

  // Assert
  expect(result).toEqual(expected);
});

test('addTodo should not mutate the existing todo array', () => {
  // Arrange
  const startTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false }
  ];
  const newTodo = { id: 3, name: 'three', isComplete: false };

  // Act
  const result = addTodo(startTodos, newTodo);

  // Assert
  expect(result).not.toBe(startTodos);
});

test('findById should return the expected item from an array', () => {
  // Arrange
  const startTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
    { id: 3, name: 'three', isComplete: false }
  ];
  const expected = { id: 2, name: 'two', isComplete: false };

  // Act
  const result = findById(2, startTodos);

  // Assert
  expect(result).toEqual(expected);
});

test('toggleTodo should toggle the isComplete prop of a todo', () => {
  // Arrange
  const startTodo = { id: 2, name: 'two', isComplete: false };
  const expected = { id: 2, name: 'two', isComplete: true };

  // Act
  const result = toggleTodo(startTodo);

  // Assert
  expect(result).toEqual(expected);
});

test('toggleTodo should not mutate the original todo', () => {
  // Arrange
  const startTodo = { id: 2, name: 'two', isComplete: false };

  // Act
  const result = toggleTodo(startTodo);

  // Assert
  expect(result).not.toBe(startTodo);
});

test('updateTodo should update an item by id', () => {
  // Arrange
  const startTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
    { id: 3, name: 'three', isComplete: false }
  ];
  const updatedTodo = { id: 2, name: 'two', isComplete: true };
  const expectedTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: true },
    { id: 3, name: 'three', isComplete: false }
  ]

  // Act
  const result = updateTodo(startTodos, updatedTodo);

  // Assert
  expect(result).toEqual(expectedTodos);
});

test('updateTodo should not mutate the original array', () => {
  // Arrange
  const startTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
    { id: 3, name: 'three', isComplete: false }
  ];
  const updatedTodo = { id: 2, name: 'two', isComplete: true };

  // Act
  const result = updateTodo(startTodos, updatedTodo);

  // Assert
  expect(result).not.toBe(startTodos);
});

test('updateTodo should not mutate the updated item', () => {
  // Arrange
  const startTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
    { id: 3, name: 'three', isComplete: false }
  ];
  const updatedTodo = { id: 2, name: 'two', isComplete: true };

  // Act
  const result = updateTodo(startTodos, updatedTodo);

  // Assert
  expect(result[1]).not.toBe(updatedTodo);
});

test('removeTodo should remove an item by id', () => {
  // Arrange
  const startTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
    { id: 3, name: 'three', isComplete: false }
  ];
  const targetId = 2;
  const expectedTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 3, name: 'three', isComplete: false }
  ];

  // Act
  const result = removeTodo(startTodos, targetId);

  // Assert
  expect(result).toEqual(expectedTodos);
});

test('removeTodo should not mutate the original array', () => {
  // Arrange
  const startTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
    { id: 3, name: 'three', isComplete: false }
  ];
  const targetId = 2;

  // Act
  const result = removeTodo(startTodos, targetId);

  // Assert
  expect(result).not.toBe(startTodos);
});