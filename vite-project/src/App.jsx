import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useState } from 'react'
//Den här är trasig vet inte varför
import { UserListProvider } from './context/UserListContext';

import './App.css'

import Admin from './routes/Admin'
import User from './routes/User'

function App() {


  return (
    <UserListProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<User/>}/>
          <Route exact path="/admin" element={<Admin/>}/>
        </Routes>       
    </Router>
    </UserListProvider>
    
    
  )
}

export default App
