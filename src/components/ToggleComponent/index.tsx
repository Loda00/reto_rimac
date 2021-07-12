import { FC, useState } from 'react'
import Check from 'components/CheckSlideComponent'

import ArrowRed from 'assets/img/arrow_red.png'
import Add from 'assets/img/icon_add.png'
import Rest from 'assets/img/icon_rest.png'

import './style.scss'

interface IProps {
  onChange: (event: any) => void
  name?: string
  checked: boolean
  label: any
  photo?: string
}

const ToggleComponent:FC<IProps> = ({
  children, name, checked, label, onChange, photo
}) => {
  const [show, setShow] = useState<boolean>(false)
  const id = Math.floor(Math.random() * 1000000000);

  return (
    <>
      <div className="c_toggle">
        <div className="c_toogle__profile">
          <img src={photo} alt="" />
        </div>
        <div className="c_toggle__description">
          <label className="c_toggle__checkbox" htmlFor={String(id)}>
            <span>{label}</span> <img className={`${show && 'c_toggle__checkbox__arrow'}`} src={ArrowRed} alt="" />  
          </label>
          <input type="checkbox" hidden checked={show} id={String(id)} onChange={() => setShow(!show)} className="c_toogle_check_hide"/>
          <input type="checkbox" hidden onChange={onChange} name={name}  checked={checked} />
          <Check
            id={String(id-1)}
            label={label}
            checked={checked}
            onChange={onChange}
            hideDesktop
          />
          <p className="c_toggle_icon" onClick={onChange}>
            {
              checked
                ? <><img src={Rest} alt="" /> QUITAR</>
                : <><img src={Add} alt="" /> AGREGAR</>
            }
          </p>
          <div className="c_toggle__hide">
            <div className="c_toggle__content">
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="c_toggle_bar"></div>
    </>
  )
}

export default ToggleComponent
