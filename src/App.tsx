import { useState } from 'react'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Input } from './components/Input'
import { Button } from './components/Button'
import { TodoList } from './components/TodoList'
import { useTodoList } from './hooks/useTodoList'

export function App() {
  const todolist = useTodoList()
  const [text, setText] = useState('')

  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value)
  }

  function handleCreateTodo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (text.trim()) {
      todolist.createTodo(text)
      setText('')
    }
  }

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

        <TodoList {...todolist} />
      </main>
    </div>
  )
}
