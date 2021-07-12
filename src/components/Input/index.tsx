import { ChangeEvent, FC } from 'react'
import './style.scss'

interface IProps {
  placeholder: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  name?: string
  value: any
  type?: 'number' | 'text' | 'tel'
  min?: number
  max?: number
}

const Input: FC<IProps>  = ({
  placeholder,
  onChange,
  name,
  value,
  type = 'text',
  min,
  max
}) => {
  return (
    <input
      className="c_input"
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      name={name}
      value={value}
      min={min}
      max={max}
      step="50"
    />
  )
}

export default Input
