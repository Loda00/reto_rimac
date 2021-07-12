import { FC, Children } from 'react'
import Sidebar from 'layout/Sidebar'

import './style.scss'

interface IObjectSidebar {
  step: number
  name: string
}

interface IProps {
  children: JSX.Element[] | JSX.Element
  step: number
  arraySidebar: Array<IObjectSidebar>
  setStep: Function
}

const Tab: FC<IProps> = ({ children, step, arraySidebar, setStep }) => {
  const chidrenArray = Children.toArray(children);

  return (
    <div>
      <div className="l_container">
        <Sidebar step={step} arraySidebar={arraySidebar} setStep={setStep} />
        <div className={`${![2].includes(step + 1) && 'l_container__views_padding'} l_container__views`}>
          {chidrenArray[step]}
        </div>
      </div>
    </div>
  )
}

export default Tab
