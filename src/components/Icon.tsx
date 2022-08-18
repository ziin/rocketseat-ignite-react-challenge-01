import { PlusCircle, Trash } from 'phosphor-react'
import { SVGProps } from 'react'

const icons = {
  plus: PlusCircle,
  trash: Trash,
}

export type IconIds = keyof typeof icons

type IconProps = SVGProps<SVGSVGElement> & {
  id: IconIds
  size?: number
  color?: string
}

const Icon = ({ id, ...props }: IconProps) => {
  const Component = icons[id] as React.ComponentType<SVGProps<SVGSVGElement>>

  if (!Component) {
    throw new Error(`Icon "${id}" not found`)
  }

  return <Component {...props} />
}

export default Icon
