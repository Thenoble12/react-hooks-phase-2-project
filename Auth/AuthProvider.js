import React, { createContext } from 'react'
import { Routes, Route, NavLink, useNavigate, Navigate } from 'react-router-dom'
import Auth from "./Auth"

const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [token, setToken] = React.useState(null);
  
    const handleLogin = async () => {
      const token = await Auth();
  
      setToken(token);
      Navigate('/dashboard');
    };
  
    const handleLogout = () => {
      setToken(null);
    };
  
    const value = {
      token,
      onLogin: handleLogin,
      onLogout: handleLogout,
    };
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  };

export default AuthProvider