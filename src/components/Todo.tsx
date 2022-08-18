import { Checkbox } from './Checkbox'
import styles from './Todo.module.css'
import Icon from './Icon'

interface TodoProps extends Todo {
  onComplete: (id: string) => void
  onDelete: (id: string) => void
}

export function Todo({ id, text, completed, onComplete, onDelete }: TodoProps) {
  return (
    <div className={styles.todo}>
      <Checkbox id={id} checked={completed} onChange={() => onComplete(id)} />
      <p data-completed={completed}>{text}</p>
      <button className={styles.deleteButton} onClick={() => onDelete(id)}>
        <Icon id="trash" size={16} />
      </button>
    </div>
  )
}

export interface Todo {
  id: string
  text: string
  completed: boolean
}
