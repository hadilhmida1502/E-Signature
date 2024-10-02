import React from "react"
import Heading from "../../common/heading/Heading"
import "./testimonal.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Im1 from '../../../public/images/Im1.jpg';

const Testimonal = () => {
  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
          <Heading subtitle='E-Signature that scales with your workflow' title='Sign documents online with legally-binding e-Signatures.' />
          <Row>      
            <div className='content grid2'>
                <Col md={4}>
                  <div className='items shadow'>
                    <div className='box flex'>
                      <div className='img'>
                        <img src={Im1} alt='' />
                      </div>
                      <div className='name'>
                        <h1>Your Privacy Is Our Priority</h1>
                      </div>
                    </div>
                    <p className="desc">Keeping your data secure is important to us. Our legally binding signature technology complies with ESIGN and UETA requirements, and we supply an electronic certificate with every signed document.</p>
                  </div>
                </Col>

                <Col md={4}>
                  <div className='items shadow'>
                    <div className='box flex'>
                      <div className='img'>
                        <img src={Im1} alt='' />
                      </div>
                      <div className='name'>
                        <h1>Sign Wherever You Are</h1>
                      </div>
                    </div>
                    <p className="desc">Previously, to sign and send documents, you were chained to your desk. Today, you can do it anywhere, in the office or on the other side of the world. You can even manage important documents from your cell phone.</p>
                  </div>
                </Col>

                <Col md={4}>
                  <div className='items shadow'>
                    <div className='box flex'>
                      <div className='img'>
                        <img src={Im1} alt='' />
                      </div>
                      <div className='name'>
                        <h1>Connect Electronic Signatures To Your Tools With Our API</h1>
                      </div>
                    </div>
                    <p className="desc">The flexible E-Signature API scales and integrates seamlessly with the software you already use, allowing you to send, retrieve or sign an unlimited number of documents from virtually any tool, and store them securely.</p>
                  </div>
                </Col>
            </div>
          </Row>
        </div>
      </section>
    </>
  )
}

export default Testimonal