import { useState } from 'react';

import DatosAutosSection from './DatosAutosSection'
import PlanSection from './PlanSection'
import Tab from 'components/Tab'

interface IObjectSidebar {
  step: number
  name: string
}

const Index = () => {
  const [step, setStep] = useState(0);

  const arraySidebar: Array<IObjectSidebar> = [
    {
      step: 1,
      name: 'Datos del auto'
    },
    {
      step: 2,
      name: 'Arma tu plan'
    }
  ]

  return (
    <>
      <Tab step={step} arraySidebar={arraySidebar} setStep={setStep}>
        <DatosAutosSection setStep={setStep} />
        <PlanSection setStep={setStep} />
      </Tab>
    </>
  );
};

export default Index;