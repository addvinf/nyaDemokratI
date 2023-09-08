import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VoteButton from './components/VoteButton.jsx'
import LogInField from './components/LogInField.jsx'
import Header from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <LogInField />
  
      <VoteButton name="Edvin" />
      <VoteButton name="Mats" />

    </div>
  )
}

export default App
