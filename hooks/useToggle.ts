import { useState } from 'react'

export default (): [boolean, () => void, () => void] => {
  const [isOn, setCurrentState] = useState(false)

  const turnOn = () => setCurrentState(true)
  const turnOff = () => setCurrentState(false)

  return [isOn, turnOn, turnOff]
}
