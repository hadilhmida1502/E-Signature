import React from "react"
import { blog } from "../../../dummydata"
import { Link } from "react-router-dom"
import "./footer.css"
//import img1 from '../../public/images/img1.jpg';
//import img2 from '../../public/images/img2.jpg';
//import img3 from '../../public/images/img3.jpg';

export default function Footer() {
return (
    <>
        <section className='newletter'>
            <div className='container flexSB'>
            <div className='left row'>
              <h1>Newsletter - Stay tune to get the latest update</h1>
            </div>
            <div className='right row'>
                <input type='text' placeholder='Your Email Here ...' />
                <i className='fa fa-paper-plane'></i>
            </div>
            </div>
        </section>
        <footer>
            <div className='container padding'>
            <div className='box logo'>
                <h1>E-SIGNATURES</h1>
                <span>SIGN DOCUMENTS ONLINE</span>
                <p>Get legally-binding eSignatures now!</p><br/>
                <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                  <i className='fab fa-facebook-f icon'></i>
                </a>
                <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                  <i className='fab fa-twitter icon'></i>
                </a>
                <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                  <i className='fab fa-instagram icon'></i>
                </a>
                <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                  <i className='fab fa-linkedin icon'></i>
                </a>
                
            </div>
            <div className='box link'>
            <h3>Explore</h3>
            <ul className="Explore-color">
              <a href="/"><li>Home</li></a>
              <a href="about"><li>About Us</li></a>
              <a href="team"><li>Team</li></a>
            </ul>
          </div>

          <div className='box link'>
            <br/><br/><br/><br/>
            <ul className="Explore-color">
              <a href="login"><li>Login Page</li></a>
              <a href="/"><li>Register Page</li></a>
            </ul>
          </div>
          
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                4th Floor. Immeuble El Ghomrassi, Monastir, TUNISIA
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +216 94 405 202
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@entrepriseesolutions.com
              </li>
            </ul>
          </div>
            
            </div>
        </footer>
        <div className='legal'>
            <p>
            ©2023 | Copyright  <i className='fa fa-heart'></i> All rights reserved
            </p>
        </div>
    </>
)
}
