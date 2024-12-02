import React from 'react';
import navyImage1 from '../../images/navy2.jpg';
import navyImage2 from '../../images/navy4.jpeg.jpg';
import navyImage3 from '../../images/navy.jpeg.jpg';
import navyImage4 from '../../images/navy3.jpeg.jpg';
import jobImage from '../../images/job.avif';

function Navy() {
  return (
    <div>
      <div className="container">
        <div className="col-lg-12 mt-5 ">
          <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px' }}>
            MERCHANT NAVY
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <p style={{ padding: '30px' }}>
              The Merchant Navy refers to the commercial fleet of ships and vessels engaged in transporting goods and passengers across international waters. Unlike naval forces, which are primarily focused on defense and military operations, the Merchant Navy operates in the commercial sector, providing crucial logistical support to global trade. Merchant Navy personnel, including deck officers, engineers, and ratings, play vital roles in the safe and efficient operation of these vessels.
            </p>
          </div>
          <div className="col-lg-6">
            <img style={{ height: '40svh', marginLeft: '30px' }} className="img-fluid" src={navyImage1} alt="Merchant Navy" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px' }}>
              MERCHANT NAVY COURSES
            </h1>
          </div>
        </div>
        <div className="row" style={{ marginTop: '10px' }}>
          <div className="col-lg-6">
            <p style={{ paddingLeft: '30px' }}>
              Navy courses are designed to provide specialized training and education for individuals pursuing careers in naval forces, including various branches such as the Navy, Marine Corps, and Coast Guard. These courses cover a range of subjects tailored to the specific roles and responsibilities within the naval services. Here’s an overview of common navy courses:
            </p>
            <ul>
              <li>
                Naval Academy Programs: <br />
                Duration: Typically 4 years. <br />
                Curriculum: Includes military training, leadership development, naval history, maritime strategy, engineering, navigation, and international relations.
                <br />
                Officer Candidate School (OCS): <br />
                Duration: 12 weeks (U.S. Navy) or similar in other countries. <br />
                Curriculum: Focuses on leadership, military protocols, naval operations, and physical fitness training.
              </li>
              <br />
              <li>
                Marine Engineering: <br />
                Duration: Varies; often part of a degree program or specialized training. <br />
                Curriculum: Shipboard systems, propulsion technologies, mechanical maintenance, and maritime safety.
                <br />
                Naval Architecture: <br />
                Duration: Typically part of a degree program in naval architecture or marine engineering. <br />
                Curriculum: Design and construction of ships, hydrodynamics, and structural analysis.
                <br />
                Electrical and Electronics Engineering: <br />
                Duration: Varies; often part of a degree program or specialized training. <br />
                Curriculum: Shipboard electrical systems, radar and communications systems, and electronic warfare.
              </li>
              <br />
              <li>
                Weapons Systems: <br />
                Duration: Varies; typically part of specialized training. <br />
                Curriculum: Operation and maintenance of naval weapons systems, including missiles, guns, and torpedoes.
                <br />
                Naval Warfare: <br />
                Duration: Varies; often part of advanced officer training or specialized courses.
                Curriculum: Naval tactics, strategy, and joint operations
              </li>
              <br />
            </ul>
          </div>
          <div className="col-md">
            <img style={{ marginLeft: '100px' }} className="img-fluid" src={navyImage2} alt="Navy Course " />
            <br />
            <img style={{ marginLeft: '100px', marginTop: '100px' }} className="img-fluid" src={navyImage3} alt="Navy Course" />
            <img style={{ marginLeft: '100px', marginTop: '100px' }} className="img-fluid" src={navyImage4} alt="Navy Course" />
          </div>
        </div>
        <div className="col-lg-12">
          <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px' }}>
            MERCHANT NAVY CURRICULUM & DURATION:
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <p style={{ padding: '30px', marginTop: '-50px' }}>
              <ul>
                <li>
                  Typical Duration: 3 to 4 years.
                </li>
                <br />
                <li>
                  Details: In many countries, such as the United States, Canada, and Australia, a bachelor's degree in engineering generally takes 4 years to complete. In some European countries, it may take 3 years.
                </li>
                <br />
                <li>
                  Core Courses:
                  <ul>
                    <li>Mathematics: Calculus, differential equations, linear algebra, probability, and statistics.</li>
                    <li>Physics: Mechanics, electromagnetism, thermodynamics, and materials science.</li>
                    <li>Chemistry: General chemistry and, in some cases, organic or physical chemistry.</li>
                  </ul>
                </li>
                <br />
                <li>
                  Engineering Fundamentals:
                  <ul>
                    <li>Introduction to Engineering: Basic concepts and problem-solving techniques.</li>
                    <li>Engineering Mechanics: Statics, dynamics, and fluid mechanics.</li>
                    <li>Thermodynamics: Principles of heat and energy transfer.</li>
                    <li>Electrical Circuits: Basic concepts of circuit theory and analysis.</li>
                  </ul>
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px', marginTop: '60px' }}>
              JOB OPPORTUNITIES
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul style={{ marginLeft: '30px' }}>
                <li><h1 style={{ fontSize: '22px', marginTop: '30px' }}></h1>Retail and Sales: Positions in customer service, sales, or store management.</li>
                <li><h1 style={{ fontSize: '22px', marginTop: '30px' }}></h1>Office Administration: Roles such as administrative assistant or office clerk.</li>
                <li><h1 style={{ fontSize: '22px', marginTop: '30px' }}></h1>Hospitality: Jobs in hotels, restaurants, or travel and tourism.</li>
                <li><h1 style={{ fontSize: '22px' }}>Government jobs</h1>Competitive Exams: Prepare for exams like SSC, UPSC, or state-level exams for various administrative and clerical positions.</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <img style={{ marginTop: '-20px' }} src={jobImage} alt="Job Opportunities" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navy;