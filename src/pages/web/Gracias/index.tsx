import { useContext } from 'react'

import Button from 'components/Button'

import  appCtx, { IContext } from 'context'

import welcomeMobile from 'assets/img/welcome_mobile.png'
import welcomeDesktop from 'assets/img/welcome.png'

import './style.scss'

const Gracias = () => {

  const context = useContext<IContext>(appCtx)

  return (
    <div className="p_thanks">
      <div className="p_thanks__image">
        <picture>
          <source media="(min-width: 1000px)" srcSet={welcomeDesktop} />
          <source media="(min-width: 700px)" srcSet={welcomeMobile} />
          <img src={welcomeMobile} alt="person"/>
        </picture>
      </div>
      <div className="p_thanks__content">
        <p className="p_thanks__content_title">
          <span>¡Te damos la bienvenida!</span> <br />
          Cuenta con nosotros <br />
          para proteger tu vehículo
        </p>

        <p className="p_thanks__content_paragraph">
          Enviaremos la confirmación de compra de 
          tu Plan Vehícular Tracking a tu correo: <br />
          {context.email}
        </p>
        <div className="p_thanks__content_button">
          <Button name="CÓMO USAR MI SEGURO" onClick={() => {}} />
        </div>
      </div>
    </div>
  )
}

export default Gracias
