import React, { useState, useEffect, useRef } from 'react';
import { Stepper } from 'react-form-stepper'
import { useNavigate } from 'react-router-dom';
import {FileUploader}  from 'react-drag-drop-files';
import axios from "axios";
import './step1.css';

function Step1() {
    const navigate = useNavigate();
    const inputElement = useRef();
    const fileTypes = ["pdf"];
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

    const handleChange = (file) => {
      setFile(file);
    };

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
        .then((result) => {
          ///console.log(result.data.id)
          navigate(`/Step2/${result.data.id}`)
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
                    /*activeColor="#ffd813"
                    defaultColor="#eee"
                    completeColor="#ffbd13"
                    activeTitleColor="#fff"
                    completeTitleColor="#eee"
                    defaultTitleColor="#bbb"
                    circleFontColor="#000"
                    completeBarColor="#ffbd13"*/
                    steps={[
                      { label: "Step 1" },
                      { label: "Step 2" },
                      { label: "Step 3" },
                    ]}
                    currentStep={1}
                    //id="step-number"
                  />
                </div>
                <div className='col-12  mb-5 d-flex align-items-center justify-content-center'>
                  <div className="">
                    <div class="mb-3"><br/>
                      <label for="exampleInputEmail1" className="form-label">Title</label>
                      <input type="email" ref={inputElement} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <label for="exampleInputEmail1" className="form-label">Upload pdf</label>
                    <FileUploader
                    style={{  }}
                      multiple={true}
                      handleChange={handleChange}
                      name="file"
                      types={fileTypes}
                    />
                    <p style={{ color: "#164d40" }} >{file ? `File name: ${file[0].name}` : "No files uploaded yet !"}</p>
                  </div>        
                </div>
                <div className='col-12 mb-5' style={{ float: 'right', width: '43.5%' }}>
                <a  href="#" class="btn btn-secondary m-1 mt-5 float-end">&laquo; Previous</a>&nbsp;&nbsp;&nbsp;
                <a  href="/step2"><button  onClick={handleNext} class="btn btn-success m-1 mt-5 float-end">Next &raquo;</button></a>
                </div>
            </div>
          </div>
          <br /><br /><br />
        </div>
      </div>
    </>
  );
}

export default Step1