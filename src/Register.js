import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css"

function Register() {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [username, setUserName ] = useState();
    const [password, setPassword] = useState();
    const [confirmed, setConfirmed] = useState();

    let disable = !(password && confirmed && password === confirmed)

    const handleConfirmation1 = () => {
        if (password && confirmed) {
            if (password === confirmed) return <span>✔️</span>                
        }
    }
    
    const handleConfirmation2 = () => {
        if (password && confirmed) {
            if (password === confirmed) return <span>✔️</span>
            else { return <span color="red">❌</span> }
        }
    }
    
    const resetForm = () => {
        setFirstName("")
        setLastName("")
        setEmail("")
        setUserName("")
        setPassword("")
        setConfirmed("")
    }

    const handleSubmit = (e) => {
        e.preventDefault();        
        
        const userInfo = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            password: password,
            inventories: [{
                inventoryName: "",
                inventory: [{
                    name: "",
                    price: 0,
                    quantity: 0,
                    condition: "",
                    description: "",
                }]
            }]
        };
        fetch(`http://localhost:4000/users`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
        })
            .then((r) => r.json())
            .then((data) => {
                alert("Account has been sucessfully created!!!")
                resetForm()
            })
        }            
    

    return (
        <div className="register_componet">            
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                
                            <div className="input-container">
                                <label>First Name </label>
                                <input onChange={(e)=>setFirstName(e.target.value)} type="text" name="firstName" required />   
                            </div> 
                        
                            <div className="input-container">
                                <label>Last Name </label>
                                <input onChange={(e)=>setLastName(e.target.value)} type="text" name="lastName" required />                    
                            </div>  
                       
                            <div className="input-container">
                                <label>Email </label>
                                <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" required />                    
                            </div>
                        
                            <div className="input-container">
                                <label>Username </label>
                                <input onChange={(e)=>setUserName(e.target.value)} type="text" name="username" required />                    
                            </div> 
                       
                            <div className="input-container">
                                <label>Password </label>
                                <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" required />
                                {handleConfirmation1()}                                              
                            </div>
                     
                            <div className="input-container">
                                <label>Confirm Password </label>
                                <input onChange={(e)=>setConfirmed(e.target.value)} type="password" name="confirmPassword" required />                    
                                {handleConfirmation2()}
                            </div> 
                      
                    <div className="button-container">                    
                        <button type="submit" class="btn" disabled={disable}>Register</button>
                    </div>               

                       
            </form>
            <div className="link-container">
                    <Link to="/login">Already Have an Account?</Link>
            </div> 
        </div>
    )
}

export default Register

