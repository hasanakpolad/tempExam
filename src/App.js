import React, { useState } from 'react'

function App() {
  const [tempValue, setTempValue] = useState(10)
  const [tempColor, setTempColor] = useState("cold")

  var tempVal;


  const incrTemp = () => {
    tempVal = tempValue + 1
    if (tempVal === 30) return;

    if (tempVal > 15)
      setTempColor('hot')
    setTempValue(tempVal)
  }
  const decrTemp = () => {
    if (tempVal === -30) return;

    tempVal = tempValue - 1
    if (tempVal < 16)
      setTempColor('cold')
    setTempValue(tempVal)
  }
  return (
    <div className='app-container'>
      <div className="temperature-diplay-container">
        <div className={`temperature-display ${tempColor}`}>{tempValue}°C</div>
      </div>
      <div className="button-container">
        <button onClick={() => incrTemp()}>+</button>
        <button onClick={() => decrTemp()}>-</button>
      </div>
    </div>
  )
}

export default App
