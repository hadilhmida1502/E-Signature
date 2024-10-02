import React from 'react'
import { Link } from "react-router-dom"
import Heading from "../../common/heading/Heading"
import "./hero.css"

export default function Hero() {
return (
    <>
        <section className='hero'>
            <div className='container'>
                <div className='row'>
                    <Heading subtitle='WELCOME TO E-SIGNATURE' title='More than just electronic signature software' />
                    <p>Improve the Speed and Security of your Documents with <br/>E-Signatures's fluid Electronic Eignature software.</p>
                    <div className='button'>
                        <button className='primary-btn'>
                            GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                        <button>
                            REGISTER NOW<i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div className='margin'></div>
    </>
)
}

