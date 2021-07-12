import { MouseEvent, FC } from 'react'
import './style.scss'

interface IProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  name: string
  disabled?: boolean
}

const Button: FC<IProps> = ({
  onClick,
  name,
  disabled
}) => {
  return (
    <button
      className="c_button"
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  )
}

export default Button
