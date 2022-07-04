import React, { useContext, createContext } from 'react'
const AuthContext = createContext(null)

function Landing() {

  const useAuth = () => useContext(AuthContext);    
  const { token } = useAuth()    

  return (
    <div>Landing</div>
  )
}
export default Landing