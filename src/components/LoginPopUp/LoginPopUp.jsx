import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
const LoginPopUp = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = useState("Login")

    return (
        <div className='login-popup'>
            <form className='login-popup-container'>

                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {
                        currentState === "Login" ? <></> : <input type="text" placeholder='Your Name' required />
                    }

                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <button>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>Buy Counting. i agree to the terms of use & privicy policy.</p>
                </div>
                {
                    currentState === "Login" ?
                        <p onClick={() => setCurrentState("Sign Up")}>Create a new Account? <span>Click Here</span></p> :
                        <p onClick={() => setCurrentState("Login")}>Already Have an Account? <span>Login Here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopUp
