import React from 'react'
import "../../CSS/main.css"
import gif1 from '../../images/gif1.gif'
import gif2 from '../../images/gif2.gif'
import gif3 from '../../images/gif3.gif'
import { Link } from 'react-router-dom'
const Services = () => {
  return (
    <div className="container-fluid bg-light mt-5">
      <div className="container-fluid bg-dark">
        <div className="container">
        <div className="row bg-dark g-3" id="bgimg2">
            <div className="col-lg-4 col-md-4 mt-5">
              <div className="card mt-5 p-5 mx-2" style={{ width: '23rem', textAlign: 'center' }}>
                <h2>FREE <br />CONSULTATION</h2>
                <div className="card-body">
                  <p className="card-text">
                    Use this area to describe one of <br /> your services.
                  </p>
                  <hr />
                  <p>45 min</p>
                  <Link to='/services/Book' className="btn btn-primary" style={{ marginTop: '15%' }}>
                    Book now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mt-5">
              <div className="card mt-5 p-5 mx-4" style={{ width: '23rem', textAlign: 'center' }}>
                <h2>ONLINE <br />COACHING</h2>
                <div className="card-body">
                  <p className="card-text">
                    Use this area to describe one of <br /> your services.
                  </p>
                  <hr />
                  <p>45 min</p>
                  <Link to='/services/Book' className="btn btn-primary" style={{ marginTop: '15%' }}>
                    Book now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mt-5">
              <div className="card mt-5 p-5 mx-5" style={{ width: '23rem', textAlign: 'center' }}>
                <h2>SELF IMPROVEMENT <br />WORKSHOP</h2>
                <div className="card-body">
                  <p className="card-text">
                    Use this area to describe one of <br /> your services.
                  </p>
                  <hr />
                  <p>45 min</p>
                  <Link to='/services/Book' className="btn btn-primary" style={{ marginTop: '0%' }}>
                    Book now
                  </Link>
                </div>
              </div>
            </div>
            <button className="bg-primary" id="btn5" style={{ marginTop: '5%',width:'150px', height:'40px', borderRadius:'10px', border:'none',color:'white', marginBottom:'25px'  }}>
              More services
            </button>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <h1 style={{marginTop: '3%' }}>
            <u>Services !</u>
          </h1>
          <div className="col-lg-5 col-md-12 mt-3 ps-1 p-3">
            <p>
              <h4>Personalised Guidance from Experts</h4>
              <br />
              Plan your career, stream/subject combinations, course, college <br /> and more through expert
              guidance
              <br />
              <br />
              All our career coaches are International Certified Career Coaches <br /> who have mentored over 2.5
              million students
              <br />
              <br />
              Make the right choice with personalised career counselling and <br /> all-round support for all your
              queries
            </p>
            <br />
            <Link to='/services/Book' className="btn btn-primary" style={{ marginTop: '0%' }}>
              Book now
            </Link>
            <br />
          </div>
          <div className="col-lg-6 mt-3 p-3">
            <div className="img-fluid">
              <img style={{ width: '100%', marginBottom: '5%' }} src={gif2} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mt-3 p-3">
            <div className="img-fluid">
              <img style={{ width: '100%', marginBottom: '5%' }} src={gif1} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mt-3 ps-5 p-3">
            <p>
              <h3>Career Roadmap Planner</h3>
              Compare and shortlist from thousands of colleges for your target <br /> and back-up careers
              <br />
              <br />
              Learn about scholarships and entrance exams for colleges and get <br /> real-time alerts
              <br />
              <br />
              Plan a comprehensive roadmap to your dream career with guidance <br /> from our career coaches
            </p>
            <br />
            <Link to='/services/Book' className="btn btn-primary" style={{ marginTop: '0%' }}>
              Book now
            </Link>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 mt-3 ps-5 p-3">
            <p>
              <h4>Extensive Support & Resources</h4>
              Exhaustive career library with details like work description, career <br /> path, colleges and pros & cons
              <br />
              Expert-written articles, webinars and vlogs on all things career <br /> - trends, inspiration and guidance
              <br />
              Career e-guides, entrance exam calendars, resume preparation <br /> and regular updates
            </p>
            <br />
            <Link to='/services/Book' className="btn btn-primary" style={{ marginTop: '0%' }}>
              Book now
            </Link>
            <br />
          </div>
          <div className="col-lg-6 mt-3 p-3">
            <div className="img-fluid">
              <img style={{ width: '100%', marginBottom: '5%' }} src={gif3} alt="" />
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default Services;