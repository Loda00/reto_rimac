import { FC, ChangeEvent } from 'react'

import './style.scss'

interface IProps {
  id: string
  label: any
  name?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  checked: boolean
  className?: string
  hideDesktop?: boolean 
}

const CheckSlideComponent :FC<IProps> = ({
  id, checked, className, label, name, onChange, hideDesktop = false
}) => {
  return (
    <div className={`c_check_slide ${className} ${hideDesktop && 'c_check_slide__hide'}`}>
      <input type="checkbox" name={name} id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default CheckSlideComponent
