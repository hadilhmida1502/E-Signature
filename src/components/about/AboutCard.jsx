import React from 'react'
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from '../../public/images/digital-signature.jpg';
import image1 from '../../public/images/image1.jpg';
import image2 from '../../public/images/image2.jpg';


export default function AboutCard() {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src={img} alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='SIGN ANY DOCUMENT' title='Seamless eSignature experience anytime and anywhere !'/>
            <div className='items'>
              <Row>
                <Col>
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={image1} alt='' />
                    </div>
                    <div className='text'>
                      <h2>Quick to Start and Easy to Send</h2>
                      <p>E-Signature allows newcomers to create an account, upload, eSign, and send their first document for signing in minutes — no training or downloads required.</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={image2} alt='' />
                    </div>
                    <div className='text'>
                      <h2>Flexible</h2>
                      <p>It provides the flexibility you need to get the right signatures on the right documents, in the right formats.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  )
}
