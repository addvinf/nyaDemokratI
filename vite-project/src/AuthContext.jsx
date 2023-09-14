// AuthContext.js
import React, { createContext, useContext, useState } from 'react';


const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const encodedPassword = "c3845b39dcca6149df7e7d54d23ee54cc4070210918987ce13dcc6477a8fdfea"; 

  const login = (password) => {
    if (password === encodedPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Fel lösenord");
    }
  }

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
