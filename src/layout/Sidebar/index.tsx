import { FC } from 'react'
import IconBack from 'assets/img/icon_back.png'

import './style.scss'

interface IObjectSidebar {
  step: number
  name: string
}

interface IProps {
  step: number
  arraySidebar: Array<IObjectSidebar>
  setStep: Function
}

const Sidebar: FC<IProps> = ({ step, arraySidebar, setStep }) => {
  const styles = {
    width: `${(step + 1) * 100 / arraySidebar.length}%`
  }

  return (
    <>
      <div className="l_sidebar__mobile">
        {step > 0 && 
          <img onClick={() => setStep((prevState: number) => prevState - 1)} src={IconBack} alt="back"/>
        }
        <p>Paso {step + 1} de {arraySidebar.length}</p>
        <div className="l_sidebar__bar">
          <div style={styles} />
        </div>
      </div>
      <div className="l_sidebar__desktop">
        {
          arraySidebar.map((item: IObjectSidebar, i) => (
            <div className={`l_sidebar__options ${i === step ? 'l_sidebar__options_active' : ''}`}>
              <div>{item.step}</div>
              <p>{item.name}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Sidebar
