import { useState, FC, useContext } from 'react'
import Select from 'components/Select'
import Radio from 'components/Radio'
import { optionsAnios, optionsMarca } from 'constants/index'
import Input from 'components/Input'
import Button from 'components/Button'
import { IProps } from 'pages/web/Process/interfaces'

import  appCtx, { data, IContext } from 'context'

import icon_car from 'assets/img/icon_car.png'

import './style.scss'

interface IOptions {
  id: string
  label: string
  text: string
  value: string
}

const DatosAutoSection: FC<IProps> = ({ setStep }) => {
  const [useGas, setUseGas] = useState<string>('USE_GAS')
  const [yearSelected, setYearSelectd] = useState<IOptions>(data.age)
  const [marcaSelected, setMarcaSelectd] = useState<IOptions>(data.brand)
  const [sum, setSum] = useState<number>(12500)
  
  const context = useContext<IContext>(appCtx)

  const validForm = () => {
    let isValid = true
    if (yearSelected.id === '') {
      isValid = false
    }

    if (marcaSelected.id === '') {
      isValid = false
    }

    if (!(sum >= 12500 && sum <= 16500)) {
      isValid = false
    }

    if (marcaSelected.id === '') {
      isValid = false
    }

    return isValid
  }

  const handleNextStep = () => {

    const isValid = validForm()

    if (!isValid) return

    context.haveGas = useGas
    context.age = yearSelected
    context.brand = marcaSelected
    context.sumAssured = sum

    setStep((prevState: number) => prevState + 1)
  }

  const onChange = (type: string) => setUseGas(type)

  return (
    <>
      <h1 className="p_datos_auto__title">¡Hola, <span>{context.name}!</span></h1>
      <p className="p_datos_auto__subtitle">Completa los datos de tu auto</p>
      <div className="p_datos_auto_wrapper">
        <div className="p_datos_auto__content">
          <div className="p_datos_auto__content_form">
            <Select
              onChange={(json) => setYearSelectd(json)}
              selected={yearSelected}
              options={optionsAnios}
            />
            <br/>
            <Select
              onChange={(json) => setMarcaSelectd(json)}
              selected={marcaSelected}
              options={optionsMarca}
            />
          </div>
          <div className="p_datos_auto__ad_mobile">
            <img src={icon_car} alt="" />
            <div className="p_datos_auto__ad_info">
              <span>¿No encuentras el modelo?</span>
              <p>CLIC AQUÍ</p>
            </div>
          </div>
          <div className="p_datos_auto__content_gas">
            <div>
              <p>¿Tu auto es a gas?</p>
            </div>
            <div className="p_datos_auto__have_gas">
              <Radio
                onChange={() => onChange('USE_GAS')}
                checked={useGas === 'USE_GAS'}
                name="useGas"
                label="Sí"
              />
              <Radio
                onChange={() => onChange('NOT_USE_GAS')}
                checked={useGas === 'NOT_USE_GAS'}
                name="useGas"
                label="No"
              />
            </div>
          </div>
          <div className="p_datos_auto__sum_sure">
            <div className="p_datos_auto__sum_info">
              <span>Indica la suma asegurada</span>
              <p>MIN $12.500  <span>|</span> MAX $16,500  </p>
            </div>
            <div className="p_datos_auto_calc">
              <Input
                onChange={(e) => setSum(Number(e.target.value))}
                value={sum}
                type="number"
                placeholder=""
                min={12500}
                max={16500}
              />
            </div>
          </div>
          <Button
            name="CONTINUAR"
            onClick={handleNextStep}
          />
        </div>
        <div className="p_datos_auto__ad_desktop">
          <p>AYUDA</p>
          <div>
            <div className="p_datos_auto__ad_info">
              <span>¿No encuentras <br /> el modelo?</span>
              <p>CLIC AQUÍ</p>
            </div>
            <img src={icon_car} alt="" />
          </div>
        </div>
      </div>
      <div className="p_datos_auto__footer_step">
        © 2020 RIMAC Seguros y Reaseguros.
      </div>
    </>
  )
}

export default DatosAutoSection
