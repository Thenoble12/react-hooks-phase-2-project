import logo from './logo.svg';
import './App.css';
import React, { useState, createContext, useEffect } from 'react';
import Login from './Login';
import Register from './Register';
import Inventories from './Inventories';
import Landing from './Landing';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import NoMatch from 'react-router-nomatch'
import NavBar from './NavBar';


function App() {
  const [ userAccounts, setUserAccounts ] = useState([])  
  const [ activeUser, setActiveUser ] = useState(null)
  const [ inventories, setInvetories ] = useState({})

  return (
    <div className="App">
          { activeUser ? <NavBar user={activeUser} logout={setActiveUser} /> : null }
            <Routes>   
                { activeUser ? <Route path="/" element={<Inventories inventories={inventories}  />} /> 
                             : <Route path="/" element={<Login activeAccount={setActiveUser} accountInventories={setInvetories} />} />}           
                <Route path='/register' element={<Register  />} />   
                <Route path="*" element={<Navigate to="/" replace />} />   
            </Routes>
    </div>
  );
}

export default App;














//       {/* <AuthProvider > */}

// {/* <Landing >  */}
//  {/* <Route path='/home' element={<Inventories inventories={activeUser.inventories} />} /> */}
//                 {/* <Route path="*" element={<NoMatch />} />               */}
//               {/* </Landing>  */}

// //const [ isLoggedIn, setIsLoggedIn ] = useState(false)
// //import AuthProvider from '../Auth/AuthProvider';
// //import ProtectedRoute from '../Auth/ProtectedRoute';
// /*
//                                                   "firstName": "",
//                                                   "lastName": "",
//                                                   "email": "",
//                                                   "username": "",
//                                                   "password": "",
//                                                   */

//                                                               {/* <Route path='/inventories' element={
//                   <ProtectedRoute>
//                     <Inventories user={activeUser} />
//                   </ProtectedRoute>
//                 }/> */}
//                 {/* <Route path='/account' element={
//                   <ProtectedRoute>
//                     <Inventories user={activeUser} />
//                   </ProtectedRoute>
//                 }/>     */}