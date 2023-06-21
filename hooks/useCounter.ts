import { useState } from 'react'

const useCounter = (value: number, max: number, min = 0) => {
  const [count, setCount] = useState(value)

  const increase = () => {
    if (count !== max) setCount((preCount) => preCount + 1)
  }

  const decrease = () => {
    if (count !== min) setCount((preCount) => preCount - 1)
  }

  return [count, increase, decrease, setCount]
}

export default useCounter
