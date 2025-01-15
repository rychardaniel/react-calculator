import { useState } from 'react'
import './App.css'
import ComponentTest from './components/ComponentTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Em breve será uma calculadora...</h3>
      <ComponentTest />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  )
}

export default App
