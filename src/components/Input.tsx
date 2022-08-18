interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
import styles from './Input.module.css'

export function Input({ ...props }: InputProps) {
  return <input className={styles.input} {...props} />
}
