import React, { ChangeEvent, FC } from 'react'

import './style.scss'

interface IProps {
  label?: string
  name?: string
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  type?: string
}

const Radio: FC<IProps> = ({
  label = '', name, checked = false, onChange, type = 'radio',
}) => {
  const id = Math.random().toString()
  return (
    <div className="c_radio">
      <input
        id={id}
        type={type}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Radio
