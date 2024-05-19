import React from 'react'

function Counter({count,setCount}) {
    const increment=()=>{setCount(count=>count+1)}
    const decrement=()=>{setCount(count=>(count>1)?count-1:count)}
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter;