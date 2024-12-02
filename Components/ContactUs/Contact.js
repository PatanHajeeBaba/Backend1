import React from 'react'
import { Row,Col,Container, Form } from 'react-bootstrap';
import Phone from '../../images/phone.webp'
import Sub from '../../images/formsub.avif'
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const link = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d61015.538155098475!2d82.0740096!3d17.09850285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m1!3e6!5e0!3m2!1sen!2sin!4v1732895007080!5m2!1sen!2sin"
    const [formData, setFormData] = useState({

      Fname : "",
      Lname : "",
      Email : "",
      Phone : "",
      Country : "",
      Msg : "",
      
    })
    const [errors, setErrors] = useState({});

    const validateForm = () => {
      const newErrors = {};
      if (!formData.Fname) {
          newErrors.Fname = 'First name is required';
      }
      if (!formData.Lname) {
          newErrors.Lname = 'Last name is required';
      }
      if (!formData.Email) {
          newErrors.Email = 'Email is required';
      }
      
      if (!formData.Phone) {
          newErrors.Phone = 'Phone number is required';
      }
       if (!formData.Country) {
          newErrors.Country = 'Country  is required';
      }
       if (!formData.Msg) {
          newErrors.Msg = 'Msg  is required';
      }
      

      return newErrors;
  };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

   

    const handleSubmit = (event) => {
      event.preventDefault();
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
      } else {
          setErrors({});
             try {
          axios.post("http://localhost:4608/contact", formData).then((resp) => {
            alert(resp.data.msg)
            window.location.reload();
          });
         
        } catch (err) {
          alert("API call failed");
        }
          // alert("Form Submitted Successfully")
          // console.log('Form submitted with:', formData);
      }
      // if (validateForm()) {
      //   try {
      //     axios.post("http://localhost:5000/adduser", formData).then((resp) => {
      //       alert(resp.data.msg)
      //       window.location.reload();
      //     });
         
      //   } catch (err) {
      //     alert("API call failed");
      //   }
      // }
      
  };


  return (
    <div className='contact-page container-fluid'>

        <Row className='ch-row'>
        <Col lg={12} className='ch-col' >
            <h1>Contact Us</h1>
        </Col>  
        </Row>        
        <Container>
        <Row className='cu-form'>
          <Col lg={6}  className='form-left '>
             <div className=''>
             <div className='col-email '>
                <div><span><i class="fa-solid fa-envelope"></i></span>Email:</div>
                <div>madhavbobili@gmail.com</div>
              </div>
              <div  className='col-phone '>
                <div><span ><i class="fa-solid fa-phone"></i></span>Phone:</div>
                <div>8328309191</div>
              </div>
             </div>
              <div className='col-lo '><span><i class="fa-solid fa-location-dot"></i></span>Office location</div>
              <div className='col-loc'>
              <iframe src={link} width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </Col>
          <Col lg={6} className='form-right'>
                <img src={Phone} />
          
          </Col>

        </Row>
        <Row className='cu-form'>
          <Col lg={6} className='form2-left'>
             <img src={Sub} />
          </Col>
          <Col lg={6} className='form2-right '>
              <h3>Interact with Us</h3>
              <Form   onSubmit={handleSubmit}>
              <Row>
                <Col lg={6} className=''>
                  <div className='ipt-div'>
                    <label htmlFor='first-name'>First name:</label>
                    <input 
                    type='text' 
                    placeholder='Enter your first name' 
                    name='Fname'
                    value={formData.Fname}
                    onChange={handleChange} 
                    /><span className='user'><i class="fa-solid fa-user"></i></span>
                  </div>
                    {errors.Fname && <p className="error">{errors.Fname}</p>}
                </Col>
                <Col lg={6} className=''>
                  <div className='ipt-div'>
                    <label htmlFor='last-name'>Last name:</label>
                    <input type='text' placeholder='Enter your last name' name='Lname'  value={formData.Lname}
                    onChange={handleChange}  /><span className='user'><i class="fa-solid fa-user"></i></span>

                  </div>
                    {errors.Lname && <p className="error">{errors.Lname}</p>}
                </Col>
               
              </Row>
              <Row>
                <Col lg={12} className=''>
                  <div className='ipt-div'>
                    <label htmlFor='email'>Email:</label><br></br>
                    <input type='email' placeholder='Enter your email' name='Email'  value={formData.Email}
                    onChange={handleChange} id='email' /><span className='em'><i class="fa-solid fa-envelope"></i></span>

                  </div>
                    {errors.Email && <p className="error">{errors.Email}</p>}
                </Col>
              </Row>
              <Row>
                <Col lg={12} className=''>
                  <div className='ipt-div'>
                    <label htmlFor='phno'>Phone:</label><br></br>
                    <input type='number' placeholder='Enter your mobile number' name='Phone'   value={formData.Phone}
                    onChange={handleChange} id='phno' maxLength={10} /><span className='num'><i class="fa-solid fa-phone"></i></span>
                  </div>
                    {errors.Phone && <p className="error">{errors.Phone}</p>}
                </Col>
              </Row>
              <Row>
                <Col lg={12} className=''>
                  <div className='ipt-div'>
                    <label htmlFor='country'>Country:</label><br></br>
                    <select className="form-select" aria-label="Default select example" name='Country'  value={formData.Country}
                    onChange={handleChange}>
                     <option value="#">Country</option>
                     <option value="India">India</option>
                     <option value="USA">USA</option>
                     <option value="Japan">Japan</option>
                   </select>
                  </div>
                   {errors.Country && <p className="error">{errors.Country}</p>}
                </Col>
              </Row>
              <Row>
                <Col lg={12} className=''>
                  <div className='ipt-div'>
                    <label htmlFor='msg'>Message:</label><br></br>
                    <textarea placeholder='Type message here' name='Msg' value={formData.Msg}
                    onChange={handleChange}></textarea>

                  </div>
                    {errors.Msg && <p className="error">{errors.Msg}</p>}
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <center>
                  <input type='submit' />
                  </center>
                </Col>
              </Row>
          
              </Form>
          </Col>

        </Row>
        </Container>
            

    </div>
  );
};

export default Contact;
