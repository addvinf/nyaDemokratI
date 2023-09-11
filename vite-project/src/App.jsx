import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import FullForm from './components/FullForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <FullForm />
  


    </div>
  )
}

export default App
