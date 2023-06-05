import { useState } from 'react'

const useCounter = (value:number,max:number,min:number = 0) => {
  const [count,setCount] = useState(value)

  const increase = () => {
    if (count === max) return
    return setCount(count + 1)
  }

  const decrease = () => {
    if (count === min) return
    return setCount(count - 1)
  }

  return [count,increase,decrease,setCount]
}

export default useCounter