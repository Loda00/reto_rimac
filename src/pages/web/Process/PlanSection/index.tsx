import { FC, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { IProps } from 'pages/web/Process/interfaces'

import Toggle from 'components/ToggleComponent'
import { SlideComponent, SlideItemComponent } from 'components/SlideComponent'
import Button from 'components/Button'

import  appCtx, { IContext } from 'context'

import IconBack from 'assets/img/icon_back_red.png'
import imageTheft from 'assets/img/icon_theft.png'
import imageDamage from 'assets/img/icon_damage.png'
import imageLost from 'assets/img/icon_perdidatotal.png'
import IconFlexible from 'assets/img/flexible.svg'

import person from 'assets/img/person_good.png'
import person2 from 'assets/img/persona_good_desktop.png'
import checkGreen from 'assets/img/check_green.png'

import './style.scss'

const PlanSection: FC<IProps> = ({ setStep }) => {
  const [slideActive, setSlideActive] = useState<number>(0);
  const [checkedTheft, setCheckedTheft] = useState<boolean>(false);
  const [checkedDamage, setCheckedDamage] = useState<boolean>(false);
  const [checkedLost, setCheckedLost] = useState<boolean>(false);
  const [acumulated, setAcumulate] = useState<number>(20)

  const context = useContext<IContext>(appCtx)

  const l10nEN = new Intl.NumberFormat("en-US", {currency: "EUR", minimumFractionDigits: 2 })

  const calcAcumulate = (cb: Function, type: string) => {
    let count = acumulated
    cb((prevState: boolean) => !prevState)

    if (type === 'robo') {
      if (!checkedTheft) {
        count += 15
      } else if (checkedTheft) {
        count -= 15
      }
    }

    if (type === 'danio') {
      if  (!checkedDamage) {
        count += 20
      } else if (checkedDamage) {
        count -= 20
      }
    }

    if (type === 'perdida') {
      if (!checkedLost) {
        count += 50
      } else if (checkedLost) {
        count -= 50
      }
    }

    setAcumulate(count)
  }

  const history = useHistory()

  const onSlide = (index: number) => {
		setSlideActive(index);
	}

  const iWantProduct = () => {
    history.push('/gracias')
  }

  return (
    <div className="p_plan">
      <div className="p_plan__coverage">
        <div className="p_plan__my_coverage">
          <div onClick={() => setStep((prevState: number) => prevState - 1)} className="p_plan__come_back">
            <img src={IconBack} alt="" />
            <span>VOLVER</span>
          </div>
          <h2>Mira las coberturas</h2>
          <p>Conoce las coberturas para tu plan</p>
          <div className="p_plan__card_coverage">
            <div className="p_plan__card_coverage_info">
              <p className="p_plan__card_placa">Placa: {context.placa}</p>
              <p className="p_plan__card_car">{context.brand.text}</p>
              <p className="p_plan__card_edit" onClick={() => setStep((prevState: number) => prevState -1)} >EDITAR</p>
            </div>
            <picture>
              <source media="(min-width: 1000px)" srcSet={person2} />
              <source media="(min-width: 700px)" srcSet={person} />
              <img src={person} alt="person"/>
            </picture>
          </div>
        </div>
        <div className="p_plan__detail_coverage">
          <h2>Agrega o quita coberturas</h2>
            <SlideComponent lineSwipe={false} showLine={true} slideActive={slideActive} classHeaderContainer="" onSlide={onSlide}>
              <SlideItemComponent title={<>Protege a <br />tu auto</>}>
                <div className="p_plan__detail_content_coverage">
                  <Toggle
                    label="Llanta robada"
                    checked={checkedTheft}
                    onChange={() => calcAcumulate(setCheckedTheft, 'robo')}
                    photo={imageTheft}
                  >
                    <p>
                      He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo 
                      (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el 
                      centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una 
                      pitón a un sitio de esos de poner las bicis
                    </p>
                  </Toggle>
                  <Toggle
                    label={<> Choque y/o pasarte <br /> la luz roja </>}
                    checked={checkedDamage}
                    onChange={() => calcAcumulate(setCheckedDamage, 'danio')}
                    photo={imageDamage}
                  >
                    <p>
                      He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo 
                      (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el 
                      centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una 
                      pitón a un sitio de esos de poner las bicis
                    </p>
                  </Toggle>
                  <Toggle
                    label={<>Atropello en la vía <br /> Evitamiento </>}
                    checked={checkedLost}
                    onChange={() => calcAcumulate(setCheckedLost, 'perdida')}
                    photo={imageLost}
                  >
                    <p>
                      He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo 
                      (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el 
                      centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una 
                      pitón a un sitio de esos de poner las bicis
                    </p>
                  </Toggle>
                </div>
              </SlideItemComponent>
              <SlideItemComponent title={<>Protege a los <br />que te rodea</>}>
                <div className="p_plan__detail_content_coverage">
                  <Toggle
                    label={<>Llanta robada</>}
                    checked={false}
                    onChange={() => {}}
                    photo={imageTheft}
                  >
                    <p>
                      He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo 
                      (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el 
                      centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una 
                      pitón a un sitio de esos de poner las bicis
                    </p>
                  </Toggle>
                </div>
              </SlideItemComponent>
              <SlideItemComponent title={<>Mejora tu <br />plan</>}>
                <div className="p_plan__detail_content_coverage">
                  <Toggle
                    label={<>Llanta robada</>}
                    checked={true}
                    onChange={() => {}}
                    photo={imageTheft}
                  >
                    <p>
                      He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo 
                      (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el 
                      centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una 
                      pitón a un sitio de esos de poner las bicis
                    </p>
                  </Toggle>
                </div>
              </SlideItemComponent>
            </SlideComponent>
        </div>
      </div>
      <div className="p_plan__want">
        <div className="p_plan__want_price">
          <div>
            <p>${l10nEN.format(acumulated)}</p>
            <span>mensuales</span>
          </div>
          <img src={IconFlexible} alt="" />
        </div>
        <p className="p_plan__want_include">El precio incluye:</p>
        <p><img src={checkGreen} alt="" />Llanta de respuesto</p>
        <p><img src={checkGreen} alt="" />Analisis de motor</p>
        <p><img src={checkGreen} alt="" />Aros gratis</p>
        <br />
        <Button
          name="LO QUIERO"
          onClick={iWantProduct}
        />
      </div>
    </div>
  )
}

export default PlanSection
