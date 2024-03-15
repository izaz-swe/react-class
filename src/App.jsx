import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LifeCycleMethods from './components/LifeCycleMethods'
import Counter from './components/Counter'
import Hook from './components/Hook'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Life Cycle methods</p>
      <Hook/>
    </>
  )
}

export default App
