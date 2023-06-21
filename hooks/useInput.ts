import { useState } from 'react'

type ElementType = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

type UseInputType = <T extends ElementType = HTMLInputElement>(
  inputValue?: string,
) => [string, (e: React.ChangeEvent<T>) => void, React.Dispatch<React.SetStateAction<string>>]

const useInput: UseInputType = (inputValue = '') => {
  const [value, setValue] = useState(inputValue)

  const onChange = (e: React.ChangeEvent<ElementType>) => {
    setValue(e.currentTarget.value)
  }

  return [value, onChange, setValue]
}

export default useInput
