import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import Inventories from "./Inventories";



function Login({ activeAccount }) {

    const [ activeAccounts, setActiveAccounts] = useState([])   
    const [ username, setUsername ] = useState("")   
    const [ password, setPassword ] = useState("")

    

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = activeAccounts.find((account) => account.username === username && account.password === password )
        console.log(user)
        if (user) {
            activeAccount(user);
        }
        else {
            alert("Username or Password is Incorrect!!!") 
        }        
    }

    function handleErrors(response) {
        if (!response.ok) throw new Error(response.status);
        return response;
    }
    
    
    useEffect(() => {
        fetch(`http://localhost:4000/users/`)    
        .then(handleErrors)    
        .then((resp) => resp.json())
        .then((data) => setActiveAccounts([...data]))                 
    }, [])


    return (
        <div>            
            <h2>Login</h2>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <div className="input-container">
                    <label>Username </label>
                    <input onChange={(e)=>setUsername(e.target.value)} type="text" name="username" required />                    
                </div>      
                <div className="input-container">
                    <label>Password </label>
                    <input onChange={(e)=>setPassword(e.target.value)}type="password" name="password" required />                    
                </div> 
                <div className="button-container">                    
                    <button type="submit" class="btn">Login</button>
                </div>  
                <div className="link-container">
                    <Link to="/register">Need an Account?</Link>
                </div>      
            </form>
        </div>
    )
}

export default Login

