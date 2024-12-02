import React from 'react';
import InterImage from '../../images/intermediate.jpg'; // Change this to a relevant Intermediate image path
import Ai from '../../images/ai.jpg';
import job from '../../images/job.avif';
import gen from '../../images/gen.jpg';
function Intermediate() {
  return (
    <div>
      <div className="container">
        <div className="col-lg-12 mt-5">
          <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '40px', marginTop: '70px' }}>
            INTERMEDIATE EDUCATION
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-6 mt-2 p-4">
            <p style={{ padding: '30px' }}>
              Intermediate education, often referred to as pre-university education, serves as a bridge between secondary education and higher studies. It provides students with foundational knowledge and skills in various streams such as Science, Commerce, and Arts. In this article, we explain the significance of intermediate education, the courses available, and the job opportunities for students after completion.
            </p>
          </div>
          <div className="col-lg-6">
            <img style={{ height: '40vh', marginLeft: '100px' }} className="img-fluid" src={InterImage} alt="Intermediate Education" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px' }}>
              INTERMEDIATE COURSES
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <p style={{ paddingLeft: '30px' }}>
              Intermediate education offers various courses that cater to different interests and career paths. Here are some common streams and courses offered:
            </p>
            <div>
              <ul>
                <li>MPC (Mathematics, Physics, Chemistry): Prepares students for engineering and technical fields.</li>
                <li>BIPC (Biology, Physics, Chemistry): Focuses on medical and life science careers.</li>
                <li>CEC (Commerce, Economics, Civics): Ideal for students interested in business and finance.</li>
                <li>MEC (Mathematics, Economics, Commerce): Combines math with commerce for business-oriented careers.</li>
                <li>Vocational Courses: Specialized programs focusing on skills like IT, hospitality, and design.</li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <img style={{ marginLeft: '100px', height: '37vh' }} className="img-fluid" src={Ai} alt="AI" /><br />
            <img style={{ marginLeft: '100px', marginTop: '100px', height: '35vh' }} className="img-fluid" src={gen} alt="Intermediate Courses" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px', marginTop: '60px' }}>
              JOB OPPORTUNITIES
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div style={{ marginLeft: '30px' }}>
              <ul>
                <li>
                  <h1 style={{ fontSize: '22px', marginTop: '30px' }}>Engineering and Technical Roles:</h1>
                  Students from the MPC stream can pursue engineering degrees and technical jobs in various sectors.
                </li>
                <li>
                  <h1 style={{ fontSize: '22px', marginTop: '30px' }}>Healthcare Careers:</h1>
                  BIPC students can explore opportunities in medicine, nursing, and biotechnology.
                </li>
                <li>
                  <h1 style={{ fontSize: '22px', marginTop: '30px' }}>Business and Finance:</h1>
                  CEC and MEC students can enter fields like accounting, business management, and finance.
                </li>
                <li>
                  <h1 style={{ fontSize: '22px', marginTop: '30px' }}>Vocational Opportunities:</h1>
                  Students can pursue careers in specialized fields such as hospitality, IT, and design based on their vocational training.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <img style={{ marginTop: '-20px' }} src={job} alt="Job Opportunities" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intermediate;