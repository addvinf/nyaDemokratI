import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useState } from 'react'
//Den här är trasig vet inte varför
import { UserListProvider } from './context/UserListContext';
import { AuthProvider } from './AuthContext';

import './App.css'

import Admin from './routes/Admin'
import User from './routes/User'
import LockedAdmin from './routes/LockedAdmin'
import UnlockedAdmin from './routes/UnlockedAdmin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserListProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<User/>}/>
          <Route exact path="/lockedadmin" element={<LockedAdmin/>}/>
          <Route exact path="/unlockedadmin" element={<UnlockedAdmin/>}/>
          <Route exact path="/admin" element={<Admin/>}/>
        </Routes>
    </Router>
    </UserListProvider>
    
    
  )
}

export default function WrappedApp() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
