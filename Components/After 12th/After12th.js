import React from 'react';
import engineer from '../../images/engineering.jpeg.jpg'
import software from '../../images/Custom-Software-Development.jpg'
import hacking from '../../images/hacking.jpg'
import navy from '../../images/Career-in-The-Merchant-Navy.webp'
import aviation from '../../images/aviation.jpeg.jpg'
import architecture from '../../images/archeitecutre.jpeg.jpg'
import law from '../../images/law.jpeg.jpg'
import CA from '../../images/ca.jpeg.jpg'
import commerce from '../../images/ecommerece.jpeg.jpg'
import marketing from '../../images/marketing.jpeg.jpg'
import hotel from '../../images/doctor.jpeg.jpg'
import after12th from '../../images/After-12th.jpg'
import '../../CSS/main.css'
import {  Link } from 'react-router-dom';
function After12th() {  
  return (
    
      <div className="container-fluid">
        <div className="container-fluid">
          <div className="row ps-5 pt-5" >
            <div className="col-lg-6 col-md-12 mt-4">
              <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '25px' }}>
                WHAT AFTER 12th COURSES ?
              </h1>
              <h5 style={{ fontSize: '20px', fontFamily: 'calibri' }}>
                'Get your Graduation or best courses'
              </h5>
              <p style={{textAlign:'start', fontSize:'16px'}}>
                Going to grad school may be necessary for certain jobs. So you'll want to consider your career goals. Even if it's not required, having a master's degree can be advantageous depending on your career goals and if you would like to increase your earning potential.
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <img style={{ width: '100%' }} src={after12th} alt="" />
            </div>
          </div>

          <div className="row g-3">
            <div className="col-lg-12 mt-5">
              <center>
                <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '25px', marginLeft: '30px', marginTop: '60px' }}>
                  SOME OF THE BEST COURSES AFTER GRADUATION !
                </h1>
              </center>
            </div>
          </div>
          <div className="row ps-5">
            {[
              {
                title: 'ENGINEERING',
                imgSrc: engineer,
                description: 'Engineering is the practice of using natural science, mathematics, and the engineering design process to solve technical problems and improve systems.',
                link: '/courses/After12th/Engineering'
              },
              {
                title: 'Computer Application',
                imgSrc: software,
                description: 'An application program is a computer program designed to carry out a specific task other than one relating to the operation of the computer itself.',
                link: '/courses/After12th/Application'
              },
              {
                title: 'Ethical Hacking',
                imgSrc: hacking,
                description: 'Hacking is the misuse of devices and networks to cause damage, steal data, or disrupt activity. Learn about the different types of hackers.',
                link: '/courses/After12th/Hacking'
              },
              {
                title: 'Merchant Navy',
                imgSrc: navy,
                description: 'A navy, naval force, military maritime fleet is the branch of a nation\'s armed forces and is like an army of the ocean and related functions.',
                link: '/courses/After12th/Navy'
              },
            ].map((course, index) => (
              <div className="col-lg-3 col-md-6 col-sm-12 mt-4" key={index}>
                <div className="card" style={{ width: '100%' }}>
                  <img src={course.imgSrc} className="card-img-top" alt={course.title} style={{ height: '190px' }} />
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text" style={{textAlign:'start'}}>{course.description}</p>
                    <Link to={course.link} className="btn btn-primary">LEARN MORE</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row ps-5" style={{ display: 'flex', justifyContent: 'space-around' }}>
            {[
              {
                title: 'Aviation',
                imgSrc: aviation,
                description: 'Aircraft includes fixed-wing and rotary-wing types, morphable wings, wing-less lifting bodies, as well as lighter-than-air craft such as hot air balloons and airships.',
                link: '/courses/After12th/Aviation'
              },
              {
                title: 'Architecture',
                imgSrc: architecture,
                description: 'Architecture is the design and construction of buildings and other physical structures that serve practical and aesthetic functions.',
                link: '/courses/After12th/Architecture'
              },
              {
                title: 'Law',
                imgSrc: law,
                description: 'Law is the design and case and other physical structures that serve practical and aesthetic functions and sources that provide justice to the cases.',
                link: '/courses/After12th/Law'
              },
              {
                title: 'Medical Course',
                imgSrc: hotel,
                description: 'Medical courses are educational programs that provide basic knowledge and training to students in the field of medicine, including various branches like paramedical science.',
                link: '/courses/After12th/Medical'
              },
            ].map((course, index) => (
              <div className="col-lg-3 col-md-6 col-sm-12 mt-4" key={index}>
                <div className="card" style={{ width: '100%', height:'100%' }}>
                  <img src={course.imgSrc} className="card-img-top" alt={course.title} style={{ height: '190px' }} />
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text" style={{textAlign:'start'}}>{course.description}</p>
                    <Link to={course.link} className="btn btn-primary">LEARN MORE</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row ps-5">
            {[
              {
                title: 'CA',
                imgSrc: CA,
                description: 'Chartered Accountants or CA are professionals responsible for financial accounting and reporting, management accounting, audit, insurance, and finance economics.',
                link: '/courses/After12th/ca'
              },
              {
                title: 'E-commerce',
                imgSrc: commerce,
                description: 'E-commerce is the buying and selling of goods and services over the internet. Learn about the different types of e-commerce and successful strategies.',
                link: '/courses/After12th/Commerce'
              },
              {
                title: 'Marketing',
                imgSrc: marketing,
                description: 'Marketing is the act of satisfying and retaining customers. It is one of the primary components of business management and commerce.',
                link: '/courses/After12th/Marketing'
              },
              {
                title: 'Hotel Management',
                imgSrc: hotel,
                description: 'Hotel management is an area of the hospitality industry that involves overseeing the operations of a hotel location, including managing staff and services.',
                link: '/courses/After12th/Hotel'
              },
            ].map((course, index) => (
              <div className="col-lg-3 col-md-6 col-sm-12 my-4" key={index}>
                <div className="card" style={{ width: '100%' }}>
                  <img src={course.imgSrc} className="card-img-top" alt={course.title} style={{ height: '190px' }} />
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text" style={{textAlign:'start'}}>{course.description}</p>
                    <Link to={course.link} className="btn btn-primary">LEARN MORE</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      
      </div>
  
  );
}

export default After12th;