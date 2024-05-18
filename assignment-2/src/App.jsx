import React,{ useState } from 'react'
import Counter from './Counter';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='App'>
     <Counter count={count} setCount={setCount}/>
     </div>
    </>
  )
}

export default App
