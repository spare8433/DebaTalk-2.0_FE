
import { useState } from "react"

export default (inputValue = ''):[string,(e: React.ChangeEvent<any>) => void, React.Dispatch<React.SetStateAction<string>>] => {
  const [value, setValue] = useState(inputValue)
  
  const onChangeValue = (e: React.ChangeEvent<any>) => setValue(e.currentTarget.value)

  return [value,onChangeValue,setValue]
}