import React, { useState } from 'react'

const useToggle = (value = false) => {
  const [toggle, setToggle] = useState(value)

  const turnOn = () => {
    if (toggle === false) setToggle(true)
  }

  const turnOff = () => {
    if (toggle === true) setToggle(false)
  }
  return [turnOn,turnOff]
}

export default useToggle