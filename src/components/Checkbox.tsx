import styles from './Checkbox.module.css'
import Icon from './Icon'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox({ id, ...rest }: CheckboxProps) {
  return (
    <div className={styles.checkbox}>
      <input id={id} {...rest} type="checkbox" />
      <label htmlFor={id} className={styles.checkmark} />
    </div>
  )
}
