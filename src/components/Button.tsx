import styles from './Button.module.css'

import Icon, { IconIds } from './Icon'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  icon?: IconIds
}

export function Button({ icon, children, ...props }: ButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {children}
      {icon && <Icon id={icon} />}
    </button>
  )
}
