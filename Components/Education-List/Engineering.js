import React from 'react';
import engi1 from '../../images/eng1.jpg'
import engi2 from '../../images/eng2..jpeg.jpg'
import engi3 from '../../images/eng3.jpeg.jpg'
import engi4 from '../../images/eng4.jpeg.jpg'
import engi6 from '../../images/eng6.jpeg.jpg'
import Job from '../../images/job.avif'

function Engineering() {
  return (
    <div>
      <div className="container">
        <div className="col-lg-12 mt-5 ">
          <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px', marginTop: '60px' }}>
            ENGINEERING
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <p style={{ padding: '30px' }}>
              Engineering is a multifaceted discipline that applies scientific principles and mathematical techniques to design, analyze, and improve systems, structures, and technologies. It encompasses a wide range of specialized fields, including mechanical, civil, electrical, and chemical engineering, each addressing unique challenges and contributing to advancements in various industries. With a strong emphasis on problem-solving and critical thinking, engineering not only drives technological progress but also plays a crucial role in shaping a better, more connected, and sustainable future.
            </p>
          </div>
          <div className="col-lg-6">
            <img style={{ height: '40svh', marginLeft: '30px' }} className="img-fluid" src={engi1} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px' }}>
              ENGINEERING COURSES
            </h1>
          </div>
        </div>
        <div className="row" style={{ marginTop: '10px' }}>
          <div className="col-lg-6">
            <p style={{ paddingLeft: '30px' }}>
              Engineering courses are specialized programs typically lasting 1 to 4 years that focus on practical and technical aspects of engineering. They are designed to provide students with foundational knowledge and hands-on skills in various engineering fields. Here are some common Engineering courses:
            </p>
            <ul>
              <li>
                Mechanical Engineering: Deals with the design, analysis, and manufacturing of mechanical systems and devices. Applications range from engines and machinery to heating and cooling systems.
              </li>
              <br />
              <li>
                Civil Engineering: Focuses on infrastructure projects like buildings, roads, bridges, and water supply systems. It includes sub-disciplines like structural, environmental, and transportation engineering.
              </li>
              <br />
              <li>
                Electrical Engineering: Concerned with electrical systems, electronics, and electromagnetism. It covers areas like power generation, telecommunications, and control systems.
              </li>
              <br />
              <li>
                Chemical Engineering: Involves the design and optimization of processes that transform raw materials into useful products, such as chemicals, pharmaceuticals, and energy.
              </li>
              <br />
              <li>
                Software Engineering: Focuses on the development and maintenance of software systems, including applications, operating systems, and network systems.
              </li>
              <br />
              <li>
                Aerospace Engineering: Specializes in the design and development of aircraft and spacecraft, including their systems and components.
              </li>
              <br />
              <li>
                Biomedical Engineering: Combines engineering principles with medical and biological sciences to design and develop medical devices, diagnostic equipment, and treatment technologies.
              </li>
              <br />
              <li>
                Industrial Engineering: Focuses on optimizing complex systems and processes, often involving manufacturing, logistics, and operations management to improve efficiency and productivity.
              </li>
              <br />
              <li>
                Environmental Engineering: Addresses environmental issues and the design of systems to protect and improve the environment, including waste management, water treatment, and pollution control.
              </li>
              <br />
            </ul>
          </div>
          <div className="col-md">
            <img style={{ marginLeft: '100px' }} className="img-fluid" src={engi2} alt="" /><br />
            <img style={{ marginLeft: '100px', marginTop: '100px' }} className="img-fluid" src={engi3} alt="" />
            <img style={{ marginLeft: '100px', marginTop: '100px' }} className="img-fluid" src={engi4} alt ="" />
            <img style={{ marginLeft: '100px', marginTop: '100px' }} className="img-fluid" src={engi6} alt="" />
          </div>
        </div>
        <div className="col-lg-12">
          <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px' }}>
            ENGINEERING CURRICULUM & DURATION:
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
                <li><h1 style={{ fontSize: '22px', marginTop: '30px' }}>Retail and Sales:</h1> Positions in customer service, sales, or store management.</li>
                <li><h1 style={{ fontSize: '22px', marginTop: '30px' }}>Office Administration:</h1> Roles such as administrative assistant or office clerk.</li>
                <li><h1 style={{ fontSize: '22px', marginTop: '30px' }}>Hospitality:</h1> Jobs in hotels, restaurants, or travel and tourism.</li>
                <li><h1 style={{ fontSize: '22px', marginTop: '30px' }}>Government jobs:</h1> Competitive Exams: Prepare for exams like SSC, UPSC, or state-level exams for various administrative and clerical positions.</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <img style={{ marginTop: '-20px' }} src={Job} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Engineering;