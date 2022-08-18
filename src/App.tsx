import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { TodosList } from './components/TodosList'

export function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const [text, setText] = useState('')

  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  function handleCreateTodo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!text.trim()) return

    const newTodo = {
      id: uuidv4(),
      text,
      completed: false,
    }
    setTodos([...todos, newTodo])
    setText('')
  }

  function handleCompleteTodo(id: string) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  function handleDeleteTodo(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const total = todos.length
  const totalCompleted = todos.filter((todo) => todo.completed).length
  const isEmpty = total === 0

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <form onSubmit={handleCreateTodo} className={styles.form}>
          <Input
            placeholder="Adicione uma nova tarefa"
            value={text}
            onChange={handleTextChange}
          />
          <Button icon="plus" type="submit">
            Criar
          </Button>
        </form>

        <div className={styles.todosHeader}>
          <div>
            <span>Tarefas criadas</span>
            <span>{total}</span>
          </div>
          <div>
            <span>Concluídas</span>
            <span>
              {totalCompleted} de {total}
            </span>
          </div>
        </div>

        {isEmpty ? (
          <div className={styles.todosListEmpty}>
            <img src="src/assets/clipboard.png" />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <br />
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        ) : (
          <TodosList
            todos={todos}
            onCompleteTodo={handleCompleteTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        )}
      </main>
    </div>
  )
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
