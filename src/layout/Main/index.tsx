import { FC } from 'react'
import Header from 'layout/Header'
import Footer from 'layout/Footer'

import './style.scss'

interface IProps {
  children: JSX.Element[] | JSX.Element
}

const Main: FC<IProps> = ({
  children
}) => { 
  return (
    <div className="l_main">
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default Main
