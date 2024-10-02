import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter , Routes, Route } from "react-router-dom"
//import { Router ,Routes ,Route } from 'react-router-dom'
import Home from "./components/home/Home"
import About from "./components/about/About"
import Team from "./components/team/Team"
import Footer from "./components/common/footer/Footer"
import LoginPage from "./components/login/LoginPage"
import RegisterPage from "./components/register/RegisterPage"
import Table from "./components/table/Table"
import Step1 from "./components/steps/Step1"
import Step2 from "./components/steps/Step2"
import Step3 from "./components/steps/Step3"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" />
      <Route index element={<><Header/><Home/><Footer/></>} />
      <Route path="about"  element={<><Header/><About/><Footer/></>} />
      <Route path="team"  element={<><Header/><Team /><Footer/></>} />
      
      <Route path="login"  element={<LoginPage />} />
      <Route path="register"  element={<RegisterPage />} />
      <Route path="table"  element={<Table />} /> 
      <Route path="step1"  element={<Step1 />} />
      <Route path="step2"  element={<Step2 />} />
      <Route path="step3"  element={<Step3 />} />
      
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;