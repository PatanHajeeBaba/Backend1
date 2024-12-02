import React from 'react';
import IIITImage from '../../images/iiit.jpg'; // Change this to a relevant IIIT image path
import Ai from '../../images/ai.jpg';
import job from '../../images/job.avif';

function IIIT() {
  return (
    <div>
      <div className="container">
        <div className="col-lg-12  mt-5">
          <h1 style={{ color: 'green', fontFamily: 'calibri', fontSize: '30px', marginLeft: '40px' }}>
            IIIT EDUCATION
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-6 mt-2 p-4">
            <p style={{ padding: '30px' }}>
              Indian Institutes of Information Technology (IIITs) offer specialized education in Information Technology and Computer Science. These institutes focus on providing a blend of theoretical knowledge and practical skills, preparing students for careers in the ever-evolving tech industry. In this article, we explain what IIITs offer, the courses available, and the job opportunities for graduates.
            </p>
          </div>
          <div className="col-lg-6">
            <img style={{ height: '40vh', marginLeft: '100px' }} className="img-fluid" src={IIITImage} alt="IIIT" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 style={{ color: 'green', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px', marginTop: '60px' }}>
              IIIT COURSES
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <p style={{ paddingLeft: '30px' }}>
              IIITs offer a variety of undergraduate and postgraduate programs focused on technology and engineering. Here are some common courses offered:
            </p>
            <div>
              <ul>
                <li>B.Tech in Computer Science and Engineering: Focuses on software development, algorithms, and data structures.</li>
                <li>B.Tech in Electronics and Communication Engineering: Covers electronics, communication systems, and signal processing.</li>
                <li>M.Tech in Information Technology: Advanced studies in IT, preparing students for research and specialized roles.</li>
                <li>M.Tech in Artificial Intelligence: Focuses on AI techniques, machine learning, and data science.</li>
                <li>PhD Programs: Research opportunities in various fields of technology and engineering.</li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <img style={{ marginLeft: '100px', height: '37vh' }} className="img-fluid" src={Ai} alt="AI" /><br />
            <img style={{ marginLeft: '100px', marginTop: '100px', height: '35vh' }} className="img-fluid" src="../../Dreamweb/images/gen.jpg" alt="IIIT Courses" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 style={{ color: 'green', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px', marginTop: '60px' }}>
              JOB OPPORTUNITIES
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div style={{ marginLeft: '30px' }}>
              <ul>
                <li>
                  <h1 style={{ fontSize: '22px', marginTop: '30px' }}>Software Development:</h1>
                  Graduates can pursue roles in designing and developing software applications across various industries.
                </li>
                <li>
                  <h1 style={{ fontSize: '22px', marginTop: '30px' }}>Data Science:</h1>
                  Opportunities in data analysis, machine learning, and artificial intelligence.
                </li>
                <li>
                  <h1 style={{ fontSize: '22px', marginTop: '30px' }}>Cybersecurity:</h1>
                  Roles focused on protecting systems and networks from cyber threats.
                </li>
                <li>
                  <h1 style={{ fontSize: '22px', marginTop: '30px' }}> Research and Development:</h1>
                  Opportunities in academic and industrial research, contributing to technological advancements.
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

export default IIIT;