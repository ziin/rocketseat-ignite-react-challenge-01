import { useCallback, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export function useTodoList() {
  const [todos, setTodos] = useState(defaultTodos)

  function createTodo(text: string) {
    const newTodo = {
      id: uuidv4(),
      text,
      completed: false,
    }
    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  function completeTodo(id: string) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  function deleteTodo(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const total = todos.length
  const totalCompleted = todos.filter((todo) => todo.completed).length
  const isEmpty = total === 0

  return {
    todos,
    total,
    totalCompleted,
    isEmpty,
    createTodo: useCallback(createTodo, []),
    completeTodo: useCallback(completeTodo, []),
    deleteTodo: useCallback(deleteTodo, []),
  }
}

const defaultTodos = [
  {
    id: uuidv4(),
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false,
  },
  {
    id: uuidv4(),
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false,
  },
  {
    id: uuidv4(),
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: false,
  },
  {
    id: uuidv4(),
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: true,
  },
  {
    id: uuidv4(),
    text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: true,
  },
]
