import { ChangeEvent, FC } from 'react'
import Select from 'components/Select'
import Input from 'components/Input'

import './style.scss'

interface IObject {
  label: string
  value: string
  id: string
  text: string
}

interface IProps {
  onChangeSelect: (item: IObject) => void
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
  valueInput: string
  selected: IObject
  options: Array<IObject>
  placeHolderSelect: string,
  placeHolderInput: string
}

const SelectInput: FC<IProps> = ({
  onChangeInput,
  onChangeSelect,
  valueInput,
  selected,
  options,
  placeHolderSelect,
  placeHolderInput
}) => {
  return (
    <div className="c_selectInput">
      <Select
        onChange={onChangeSelect}
        placeholder={placeHolderSelect}
        showLabel={false}
        selected={selected}
        options={options}
      />
      <Input
        onChange={onChangeInput}
        placeholder={placeHolderInput}
        value={valueInput}
      />
    </div>
  )
}

export default SelectInput
