import React from 'react'
import { useLocation } from 'react-router-dom'

import './style.scss'

const Footer = () => {
  const location = useLocation()
  return (
    <>
      {
        location.pathname === '/gracias' &&
        <div className="l_footer">
          <p>© 2020 RIMAC Seguros y Reaseguros.</p>
        </div>
      }
    </>
  )
}

export default Footer
