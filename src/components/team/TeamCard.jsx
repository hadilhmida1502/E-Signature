import React from "react"
//import { team } from "../../dummydata"
import hsan from '../../public/images/hsan.jpg';
import achraf from '../../public/images/achraf.jpg';
import haithem from '../../public/images/haithem1.jpg';
import khaled from '../../public/images/khaled.jpg';

export default function TeamCard() {
  return (
    <>
        <div className='items shadow'>
          <div className='img'>
            <img src={hsan} alt='' />
            {/* <div className='overlay'></div> */}
          </div>
          <div className='details'>
            <h2 className="name">Mr. Hassen Baccouche</h2>
            <p className="work">CEO OF E-SOLUTIONS</p>
          </div>
        </div>

        <div className='items shadow'>
          <div className='img'>
            <img src={achraf} alt='' />
          </div>
          <div className='details'>
            <h2 className="name">Mr. Mohamed Achraf Besbes</h2>
            <p className="work">BACK-END MANAGER</p>
          </div>
        </div>

        <div className='items shadow'>
          <div className='img'>
            <img src={haithem} alt='' />
          </div>
          <div className='details'>
            <h2 className="name">Mr. Haithem Sahlia</h2>
            <p className="work">FRONT-END MANAGER</p>
          </div>
        </div>

        <div className='items shadow'>
          <div className='img'>
            <img src={khaled} alt='' />
          </div>
          <div className='details'>
            <h2 className="name">Mr. Khaled Ben Salem</h2>
            <p className="work">Marketing Manager</p>
          </div>
        </div>
      
    </>
  )
}
