import React from 'react'
import './LoginPage.css'
//import { Link } from "react-router-dom"
import logo from './pictures/logo.png'
import welcomeimg from './pictures/11.png'

function LoginPage() {

const handlesubmit=(event)=>{
    event.preventDefault();
}

return (
    <div className='main-login'>
        <div className='login-contain'>
            <div className='left-side'>
                <div className='img-class'>
                    <img src={logo} id='img-id' alt='' srcSet=''/>
                </div>
                <form onSubmit={handlesubmit}>
                    <label for="email1">Email</label>
                        <input placeholder='Enter your email...' type='email' id='email1' />
                    <label for="pwd1">Password</label>
                        <input placeholder='Enter your password...' type='password' id='pwd1' />
                    <button type='submit' id='sub_butt'>Login</button>
                </form>
                <div className='footer'>
                    <h4><b>Don't have an account ? <a href='/register'> Register Now </a></b></h4>
                </div>
            </div>
            <div className='right-side'>
                <div className='welcomeNote'>
                    <h2><b>Welcome Back!</b></h2>
                </div>
                <div className='welcomeImg'>
                    <img src={welcomeimg} id='wel-img-id' alt='' srcSet=''/>
                </div>
            </div>
        </div>
    </div>
)
}

export default LoginPage;
