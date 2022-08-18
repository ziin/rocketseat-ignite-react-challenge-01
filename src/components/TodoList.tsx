import { memo } from 'react'
import { Todo } from './Todo'
import styles from './TodoList.module.css'

interface TodoListProps {
  total: number
  isEmpty: boolean
  totalCompleted: number
  completeTodo: (id: string) => void
  createTodo: (text: string) => void
  deleteTodo: (id: string) => void
  todos: Todo[]
}
function TodosList({
  total,
  isEmpty,
  totalCompleted,
  todos,
  completeTodo,
  deleteTodo,
}: TodoListProps) {
  return (
    <>
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
        <Todos
          todos={todos}
          onCompleteTodo={completeTodo}
          onDeleteTodo={deleteTodo}
        />
      )}
    </>
  )
}

export const TodoList = memo(TodosList)

interface TodosProps {
  todos: Todo[]
  onCompleteTodo: (id: string) => void
  onDeleteTodo: (id: string) => void
}

function Todos({ todos, onCompleteTodo, onDeleteTodo }: TodosProps) {
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
