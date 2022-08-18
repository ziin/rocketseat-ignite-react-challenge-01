import { Todo } from './Todo'

import styles from './TodosList.module.css'

interface TodosListProps {
  todos: Todo[]
  onCompleteTodo: (id: string) => void
  onDeleteTodo: (id: string) => void
}

export function TodosList({
  todos,
  onCompleteTodo,
  onDeleteTodo,
}: TodosListProps) {
  return (
    <div className={styles.todos}>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            onComplete={onCompleteTodo}
            onDelete={onDeleteTodo}
          />
        ))}
      </ul>
    </div>
  )
}
