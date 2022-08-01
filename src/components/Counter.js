import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  
    const handlePlusClick = () => {
        setCount(count + 1)
    }
    const handleMinClick = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }
  
    return (
      <>
        <button className='btn btnMin' onClick={handleMinClick}>-</button>
        <span>{count}</span>
        <button onClick={handlePlusClick}>+</button>
      </>
    )
  }
  
  export default Counter