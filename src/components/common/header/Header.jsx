import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

export default function Header() {
    const [click, setClick] = useState(false)
return (
    <>
        <Head />
        <div className="headerr">
            <nav className='flexSB'>
            <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
                <li><Link to='/'>&nbsp;&nbsp;&nbsp;HOME&nbsp;</Link></li>
                <li><Link to='/about'>&nbsp;ABOUT US&nbsp;</Link></li>
                <li><Link to='/team'>&nbsp;TEAM</Link></li>
            </ul>
            <Link to='/login'>
                <div className='start'>
                    <div className='button'>LOGIN PAGE</div>
                </div>
            </Link>
            <button className='toggle' onClick={() => setClick(!click)}>
                {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
            </button>
            </nav>
        </div>
    </>
)
}
