import React,{useState} from 'react'
import './RegisterPage.css';
import { Link } from "react-router-dom";
import logo from './pictures/registerPng.png';
import registerImg from './pictures/registerPng.png';

function RegisterPage() {

  const[email,setemail]=useState('');
  const[Fusername,setFusername]=useState('');
  const[Susername,setSusername]=useState('');
  const[pwd1,setpwd1]=useState('');
  const[pwd2,setpwd2]=useState('');

  const handlesubmit=(event)=>{
    event.preventDefault();
}

  return (
    <div className='main-register'>
      <div className='left-side'>
        <div className='header'>
          <img src={logo} id='logo-img' alt='' srcSet=''/>
        </div>
        <div className='body'>
            <img src={registerImg} id='reg-img' alt='' srcSet=''/>
        </div>
        <p>
        La signature en ligne facilite la validation de contrats et accords, offrant une solution rapide, 
        sécurisée et éco-responsable. Signez des documents importants sans les imprimer ni les numériser, 
        accélérant les transactions, réduisant les coûts, et assurant la conformité légale, pour une efficacité maximale.
        </p>
      </div>
      <div className='right-side'>
        <div className='top-right'>
          <p>
            Already have an Account?
            <Link id='Links-signin' to='/login'>Sign In</Link>
          </p>
        </div>
        <div className='body-right'>
          <div className='container'>
            <h1><b>Create Account!</b></h1>
            <form onSubmit={handlesubmit}>
              <div className='input-group'>
                <h5><b>First Name</b></h5>
                <input type='text' name='Fname' value={Fusername} onChange={(event)=>{setFusername(event.target.value)}} id='fname' />
              </div>

              <div className='input-group'>
                <h5><b>Last Name</b></h5>
                <input type='text' name='Lname' value={Susername} onChange={(event)=>{setSusername(event.target.value)}} id='lname' />
              </div>

              <div className='input-group'>
                <h5><b>Email</b></h5>
                <input type='Email' name='email' value={email} onChange={(event)=>{setemail(event.target.value)}} id='email1' />
              </div>

              <div className='input-group'>
                <h5><b>Password</b></h5>
                <input type='password' name='pwd' value={pwd1} onChange={(event)=>{setpwd1(event.target.value)}} id='pwd1' />
              </div>

              <div className='input-group'>
                <h5><b>Confirm Password</b></h5>
                <input type='password' name='pwd' value={pwd2} onChange={(e)=>{setpwd2(e.target.value)}} id='pwd2' />
              </div>

              <input type='submit' id='sbtn' value='Submit' />

            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage;
