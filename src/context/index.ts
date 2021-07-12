import { createContext } from 'react'

export interface IContext {
  name: string
  typeDocument: any
  numberDocument: any
  celPhone: any
  placa: any
  email: string
  age: any
  brand: any
  haveGas: any
  sumAssured: any
  step: number
}

export const data: IContext = {
  name: '',
  typeDocument: '',
  numberDocument: '',
  celPhone: '',
  placa: '',
  age: {id: '', label: '', text: '', value: '' },
  brand: {id: '', label: '', text: '', value: '' },
  haveGas: '',
  sumAssured: '',
  step: 0,
  email: ''
}

const AppContext = createContext(data)

export default AppContext
