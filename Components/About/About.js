import React from 'react';
import EducareLogo from '../../images/logo.jpg'
import madhav_avtar from '../../images/madhava.jpeg'
import vamsi_avtar from '../../images/vamsii.jpeg'
import hajee_avtar from '../../images/hajee.jpeg'
import venky_avtar from '../../images/venkatesh.jpeg'
import '../../CSS/about.css'



// import './App.css';

// Testimonial Component
const TestimonialCard = ({ imgSrc, altText, name, testimonial }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-12 mt-5">
      <center>
        <img
          className="img-fluid"
          style={{ borderRadius: '100px', width: '120px', height: '120px' }}
          src={imgSrc}
          alt={altText}
        />
      </center>
      <p style={{ padding: '20px', fontSize: '15px', color: 'black', marginTop: '40px' }}>
        {testimonial}
      </p>
      <h1 style={{ fontSize: '18px', fontFamily: 'calibri', float: 'right', marginRight: '50px' }}>
        <b>{name}</b>
      </h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      {/* About Educare Section */}
      <div className="container ">
        <div className="row ">
          <div className="col-lg-6 col-md-6 ps-1  p-5">
            <h1 style={{ marginLeft: '2%' }}><u>About Educare</u></h1>
            <br />
            <p style={{ marginLeft: '2%' }}>
              Educare is the most advanced website for online career assessment, career guidance, and career counselling in India, designed for school students and graduates. Educare helps you discover your perfect career through provided information about the courses and approach to career counselling and career guidance. Get your career into safe hands with Educare, today!
              Nowadays, education is very important to everyone on earth. In our country, everyone knows the potential of education, and all people are trying their best to study and get jobs. But the major problem is 90% of the students don’t know what courses are available, which are high in demand, and they don’t know the complete details about the particular courses. The course may be graduation, inter, or diploma. Many students are doing their degrees without knowing the curriculum, which is unfortunate. After graduation, they are unemployed and then realize they don’t have proper guidance.
            </p>
          </div>
          <div className=" col-md-6 mt-5 ">
            <img id='educare'
              className="img-fluid"
              style={{ height: '50svh',width:'80%', marginLeft: '60px', marginTop: '-5px',borderRadius:'15px' }}
              src={EducareLogo} 
              alt="Logo"
            />
          </div>
        </div>
      
      <div className="row mt-5" >
       <center><h1>TESTIMONIALS</h1></center> 
      </div>

      

       
          

        <div className='row my-4 g-3'>
          <div className='col-md-3'>
            <div className="card">
              <div className="card-img">
              <div className="card-body">
              <img
              className="img-fluid"
              style={{ height: '14svh',width:'40%', marginLeft: '75px',borderRadius:'20px',paddingBottom:'10px' }}
              src={madhav_avtar} 
              alt="Logo"
            />
                <div className="card-text">
                <p>
              Please accept our heartfelt thanks for a wonderful holiday by the beach. The friendliness of your staff, the presentation of the holiday home, and the way you went about your business is a credit to the company. Once again, thank you, we will recommend your company to all our family and friends.
            </p>
                </div>
                <div className="card-title">
                <b style={{marginLeft:'60%'}}>MADHAVA</b>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className='col-md-3'>
            <div className="card">
            <img
              className="img-fluid"
              style={{ height: '14svh',width:'40%', marginLeft: '75px', marginTop: '-2  px',borderRadius:'20px' }}
              src={vamsi_avtar} 
              alt="Logo"
            />
              <div className="card-body">
                <div className="card-text">
                <p>
              Please accept our heartfelt thanks for a wonderful holiday by the beach. The friendliness of your staff, the presentation of the holiday home, and the way you went about your business is a credit to the company. Once again, thank you, we will recommend your company to all our family and friends.
            </p>
                </div>
                <div className="card-title">
                <b style={{marginLeft:'71%'}}>VAMSI</b>

                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card">
            <img
              className="img-fluid"
              style={{ height: '14svh',width:'40%', marginLeft: '75px', marginTop: '-5  px',borderRadius:'20px' }}
              src={hajee_avtar} 
              alt="Logo"
            />
              <div className="card-body">
                <div className="card-text">
                <p>
              Please accept our heartfelt thanks for a wonderful holiday by the beach. The friendliness of your staff, the presentation of the holiday home, and the way you went about your business is a credit to the company. Once again, thank you, we will recommend your company to all our family and friends.
            </p>
                </div>
                <div className="card-title">
                <b style={{marginLeft:'56%'}}>HAJEE BABA</b>

                </div>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card">
            <img
              className="img-fluid"
              style={{ height: '14svh',width:'40%', marginLeft: '75px', marginTop: '-5  px',borderRadius:'20px' }}
              src={venky_avtar} 
              alt="Logo"
            />
              <div className="card-body">
                <div className="card-text">
                <p>
              Please accept our heartfelt thanks for a wonderful holiday by the beach. The friendliness of your staff, the presentation of the holiday home, and the way you went about your business is a credit to the company. Once again, thank you, we will recommend your company to all our family and friends.
            </p>
                </div>
                <div className="card-title">
                <b style={{marginLeft:'56%'}}>VENKATESH</b>

                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default About;