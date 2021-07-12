import React from 'react'
import LogoRimac from 'assets/img/logo.svg'
import Phone from 'assets/img/phone.png'

import './style.scss'

const Header = () => {
  return (
    <div className="l_header">
      <img src={LogoRimac} />
      <div className="l_header_contant">
        <img src={Phone} alt="phone"/>
        <p>Llámanos</p>
      </div>
    </div>
  )
}

export default Header
