import { ChangeEvent, useState, useContext, FC } from 'react'
import { useHistory } from 'react-router-dom'
import Header from 'layout/Header'
import SelectInput from 'components/SelectInput'
import Input from 'components/Input'
import Check from 'components/Check'
import Button from 'components/Button'

import PersonMobile from 'assets/img/person.png'
import PersonDesktop from 'assets/img/person2.png'

import  appCtx, { IContext } from 'context'

import './style.scss'

const options = [
  {
    id: '1',
    label: 'DNI',
    value: 'DNI',
    text: 'DNI'
  },
  {
    id: '2',
    label: 'CE',
    value: 'CE',
    text: 'CE'
  }
]

interface IObject {
  label: string
  value: string
  id: string
  text: string
}

const Login:FC<any> = (props) => {
  const [phone, setPhone] = useState<string>('')
  const [placa, setPlaca] = useState<string>('')
  const [numberDocument, setNumberDocument] = useState<string>('')
  const [documentType, setDocumentType] = useState<IObject>({ id: '', label: '', text:'', value: '' })
  const [check, setCheck] = useState<boolean>(false)

  const context = useContext<IContext>(appCtx)

  const history = useHistory()

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>, cb: Function) => {
    cb(e.target.value)
  }

  const onChangeSelect = (json: IObject) => {
    setDocumentType(json)
  }

  const getInfoPerson = async () => {
    let response
    try {
      response = await fetch('https://randomuser.me/api/?nat=us&randomapi', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      response = response.json()
    } catch (error) {
      console.error(error)
    }

    return response
  }

  const validForm = () => {
    let isValid = true
    if (documentType.id === '') {
      isValid = false
    }

    if (numberDocument === ''
      || (documentType.value === 'DNI' && numberDocument.length !== 8)
      || (documentType.value === 'CE' && numberDocument.length !== 12)) {
      isValid = false
    }

    if (placa === '') {
      isValid = false
    }

    if (phone === '' && phone.length >= 9) {
      isValid = false
    }

    if (!check) {
      isValid = false
    }

    return isValid
  }

  const iQuote = async () => {
    const isValid = validForm()

    if (!isValid) return
    try {
      const response = await getInfoPerson()
      context.name = response.results[0]?.name?.first
      context.typeDocument = documentType
      context.numberDocument = numberDocument
      context.celPhone = phone
      context.placa = placa
      context.email = response.results[0].email
      history.push('/datos-auto')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="p_login">
      <div className="p_login_header">
        <Header />
        <div className="p_login_header_ads">
          <div className="p_login_header_text">
            <h3>¡NUEVO!</h3>
            <h1>
              Seguro Vehicular <br/> <span>Tracking</span>
            </h1>
            <p className="">Cuentanos donde le haras seguimiento a tu seguro</p>
          </div>
          <picture>
            <source media="(min-width: 1000px)" srcSet={PersonDesktop} />
            <source media="(min-width: 700px)" srcSet={PersonMobile} />
            <img src={PersonMobile} alt="person"/>
          </picture>
        </div>
      </div>
      <div className="p_login_body">
        <div className="p_login_form">
          <h2>Déjanos tus datos</h2>
          <SelectInput
            onChangeInput={(e) => onChangeInput(e, setNumberDocument)}
            onChangeSelect={onChangeSelect}
            placeHolderInput="Nro. de doc"
            placeHolderSelect="Doc."
            valueInput={numberDocument}
            options={options}
            selected={documentType}
          />
          <br/>
          <Input
            onChange={(e) => onChangeInput(e, setPhone)}
            placeholder="Celular"
            value={phone}
          />
          <br/><br/>
          <Input
            onChange={(e) => onChangeInput(e, setPlaca)}
            placeholder="Placa"
            value={placa}
          />
          <br/><br/>
          <div className="p_login_form_check">
            <div>
              <Check
                onChange={() => setCheck(prevState => !prevState)}
                defaultChecked={check}
              />
            </div>
            <p>
              Acepto la <a href="#">Política de Protecciòn de Datos Personales</a>
              y los <a href="">Términos y Condiciones</a>.
            </p>
          </div>
          <br/><br/>
          <div className="flex_center">
            <Button 
              name="COTÍZALO"
              onClick={iQuote}
            />
          </div>
          <br/><br/><br/>
        </div>
      </div>
    </div>
  )
}

export default Login
