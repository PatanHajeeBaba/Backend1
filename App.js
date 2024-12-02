import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './CSS/main.css'
import './CSS/contact.css'
import AuthForm from './Components/AuthForm/AuthForm'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/footer'
import Main from './Components/Index/main'
import Services from './Components/Servies/Services'
import After12th from './Components/After 12th/After12th'
import Engineering from './Components/Education-List/Engineering'
import ComputerApplication from './Components/Education-List/ComputerApplication'
import Hacking from './Components/Education-List/Hacking'
import Navy from './Components/Education-List/Navy'
import Aviation from './Components/Education-List/Aviation'
import Medicine from './Components/Education-List/Medicine'
import Graduation from './Components/After Graduation/Graduation'
import Masters from './Components/Education-List/Masters'
import DigitalMarketing from './Components/Education-List/DigitalMarketing'

import After_10th from './Components/After 10th/After_10th'
import Diploma from './Components/Education-List/Diploma'
import Intermidiate from './Components/Education-List/Intermediate'
import IIIT from './Components/Education-List/IIIT'
import Contact from './Components/ContactUs/Contact'
import Book from './Components/Servies/Book'
import About from './Components/About/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  const [data , setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4608/api') 
      .then(response => {
        setData(response.data.msg); 
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Main/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/services/Book' element={<Book/>}/>
        <Route path='/courses/After10th' element={<After_10th/>}/>
        <Route path='/courses/After10th/Diploma' element={<Diploma/>}/>
        <Route path='/courses/After10th/intermediate' element={<Intermidiate/>}/>
        <Route path='/courses/After10th/IIIT' element={<IIIT/>}/>
        <Route path='/courses/After10th/DigitalMArketing' element={<DigitalMarketing/>}/>

        <Route path='/courses/After12th' element={<After12th/>}/>
          <Route path="/courses/After12th/Engineering" element={<Engineering/>} />
          <Route path="/courses/After12th/Application" element={<ComputerApplication/>} />
          <Route path="/courses/After12th/Hacking" element={<Hacking />} />
          <Route path="/courses/After12th/Navy" element={<Navy />} />
          <Route path="/courses/After12th/Aviation" element={<Aviation />} />
          <Route path="/courses/After12th/Architecture" element={<architecture />} />
          <Route path="/courses/After12th/Law" element={<law />} />
          <Route path="/courses/After12th/Medical" element={<Medicine />} />
        <Route path='/courses/graduation' element={<Graduation/>}/>
        <Route path='/courses/graduation/Master' element={<Masters/>}/>
        <Route path="/courses/graduation/Medicine" element={<Medicine />} />
        <Route path='/courses/graduation/DigitalMarketing' element={<DigitalMarketing/>}/>
      <Route path='/contactus' element={<Contact/>}/>
      <Route path='/LoginForm' element={<AuthForm/>}/>
      </Routes>
      
      </BrowserRouter>
      <Footer/>
       {/* Main content (conditionally rendered when not logged in) */}
      {data}
    </div>
  )
}

export default App
