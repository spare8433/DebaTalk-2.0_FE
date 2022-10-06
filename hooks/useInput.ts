import { useState } from "react"

export default (inputValue = ''):[string,(e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState(inputValue)
  
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

  return [value,onChangeValue]
}