import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useState } from 'react'

import './App.css'

import Admin from './routes/Admin'


import User from './routes/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<User/>}/>
        <Route exact path="/admin" element={<Admin/>}/>
      </Routes>       
    </Router>
    
  )
}

export default App
