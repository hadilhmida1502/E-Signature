import React, { useState, useEffect, useRef } from 'react';
import { Stepper } from 'react-form-stepper'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Step3() {
    const navigate = useNavigate();
    const inputElement = useRef();
    const [file, setFile] = useState(null);
    const [isSticky, setIsSticky] = useState(false);
    const handleScroll = () => {
        setIsSticky(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNext = () => {
        let formData = new FormData();
        formData.append('title', inputElement.current.value);
            let fileName = `achraf.pdf`;
        formData.append('file', file[0], fileName);
        axios.post(`http://192.168.1.14/e-signature/e-signatureBackend/public/api/templates`,formData,{
            headers: {
            "Content-type": "multipart/form-date",
        },
        })
        .catch((res) => {
        });
    };

    return (
    <>
        <div className='main-table'>
            <header className={isSticky ? 'sticky' : ''}>
            <a href="/" className="logo">Home Page</a>
            <ul>
                <li><a href="/table">Templates</a></li>
                <li><a href="#">Signature</a></li>
                <li><a href="#">UserMenu</a></li>
            </ul>
            </header>
            <div className='container mt-5'>
            <br/><br/><br/><br/>
            <div>
                <h1 className="styled-title1">Create</h1>
                <h1 className="styled-title">TEMPLATE...</h1>
            </div>
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-12'>
                        <Stepper
                            steps={[
                            { label: "Step 1" },
                            { label: "Step 2" },
                            { label: "Step 3" },
                            ]}
                            currentStep={3}
                        />
                    </div>
                    <div className='col-12  mb-5 d-flex align-items-center justify-content-center'>
                    <div className="">                
                    </div>        
                    </div>
                    <div className='col-12 mb-5' style={{ float: 'right', width: '43.5%' }}>
                    <a  href="/step2" class="btn btn-secondary m-1 mt-5 float-end">&laquo; Previous</a>&nbsp;&nbsp;&nbsp;
                    <a  href="#"><button  onClick={handleNext} class="btn btn-success m-1 mt-5 float-end">Next &raquo;</button></a>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            </div>
        </div>
        </>
    );
}

export default Step3