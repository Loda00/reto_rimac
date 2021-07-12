import { FC, useState, useRef, useEffect } from 'react'
import './style.scss'
import Arrow from 'assets/img/arrow.png'

interface IObject {
  label: string
  value: string
  id: string
  text: string
}

interface IProps {
  onChange: (item: IObject) => void
  options: Array<IObject>
  selected?: IObject
  placeholder?: string
  showLabel?: boolean
}

const Select : FC<IProps> = ({
  options,
  selected,
  placeholder = 'Seleccionar',
  onChange,
  showLabel = true
}) => {
  const [isOpen, setOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<IObject | undefined>(selected)
  const refDropDown = useRef(null)
  
  useEffect(() => {
    window.addEventListener('click', closeDropDown);
    return () => {
      window.removeEventListener('click', closeDropDown);
    };
  })

  const closeDropDown = (e: any) => {
    if (e.target !== refDropDown.current && isOpen) {
      setOpen(false)
    }
  }

  const toggleDropdown = () => setOpen(!isOpen)
  
  const handleItemClick = (item: IObject) => {
    setSelectedItem(item)
    onChange(item)
    setOpen(false)
  }

  const showValueDefault = () => {
    const value: IObject | undefined = options.find((item: IObject) => item.id === selectedItem?.id)

    return (
      <div className="c_dropdown_selected">
        {showLabel && <p className="label">{value?.label}</p>}
        <p className="text">{value?.text}</p>
      </div>
    )
  }

  return (
    <div className='c_dropdown' ref={refDropDown}>
      <div className='c_dropdown_header' onClick={toggleDropdown}>
        {selectedItem?.id ? showValueDefault(): placeholder}
        <img src={Arrow} alt="arrow" className={`${!isOpen && 'rotate_arrow'}`}/>
      </div>
      <div className={`c_dropdown_body ${isOpen && 'open'}`}>
        {options.map((item: IObject, i: number) => (
          <div className="c_dropdown_item" onClick={() => handleItemClick(item)} id={item.id} key={i}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Select
