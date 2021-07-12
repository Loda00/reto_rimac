import { ChangeEvent, FC,  } from 'react'
import IconCheck from 'assets/img/check.png'

import './style.scss'

interface IProps {
  onChange: (e: any) => void
  defaultChecked: boolean
}

const Check : FC<IProps> = ({
  onChange,
  defaultChecked = true
}) => {
  const id = Math.random().toString()
  return (
    <div className="c_check">
      <input
        type="checkbox"
        name="1"
        onChange={onChange}
        id={id}
        checked={defaultChecked}
        // defaultChecked={defaultChecked}
      />
      <label htmlFor={id}>
        <img src={IconCheck} alt="check"/>
      </label>
    </div>
  )
}

export default Check
