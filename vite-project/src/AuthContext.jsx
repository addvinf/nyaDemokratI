// AuthContext.js
import React, { createContext, useContext, useState } from 'react';


const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const encodedPassword = "aGVtbGlndGxvc2Vub3Jk"; 

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
