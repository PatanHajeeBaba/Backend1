import React from 'react';
import hackImage1 from '../../images/hack1.avif';
import hackImage2 from '../../images/hack2.jpeg.jpg';
import hackImage3 from '../../images/hack4.jpeg.jpg';
import jobImage from '../../images/job.avif';
import downloadImage from '../../images/download.jpeg.jpg';

function Hacking() {
  return (
    <div className="container">
      <div className="col-lg-12 mt-5 ">
        <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px' }}>
          ETHICAL HACKING
        </h1>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <p style={{ padding: '30px' }}>
            Ethical hacking, also known as penetration testing or white-hat hacking, involves deliberately probing computer systems, networks, and applications to identify vulnerabilities and security weaknesses before malicious hackers can exploit them. Practitioners, known as ethical hackers, use the same techniques and tools as cybercriminals but do so with permission and a constructive purpose. Their goal is to uncover and address potential security flaws, ensuring robust defenses against unauthorized access and data breaches.
          </p>
        </div>
        <div className="col-lg-6">
          <img style={{ height: '40svh', marginLeft: '30px' }} className="img-fluid" src={hackImage1} alt="Ethical Hacking" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px' }}>
            HACKING COURSES
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <p style={{ paddingLeft: '30px' }}>
            If you're interested in learning about ethical hacking and cybersecurity, there are many reputable courses available. Here are some popular options:
          </p>
          <ul>
            <li>
              Cybrary - Offers a range of courses on ethical hacking, including introductory and advanced topics. Courses are often free, but there are premium options available as well.
            </li>
            <br />
            <li>
              Udemy - Features a variety of courses on ethical hacking, such as "The Complete Ethical Hacking Course" by Ermin Kreponic and "Learn Ethical Hacking From Scratch" by Zaid Sabih. These courses often include hands-on labs and practical exercises.
            </li>
            <br />
            <li>
              Coursera - Provides courses from institutions like the University of London and the University of California, Irvine. Courses such as "Introduction to Cyber Security" and "Cybersecurity Specialization" cover a broad range of topics.
            </li>
            <br />
            <li>
              SANS Institute - Known for its high-quality training in cybersecurity and ethical hacking. SANS offers certifications like the GIAC Penetration Tester (GPEN) and courses on various aspects of cybersecurity.
            </li>
            <br />
            <li>
              Pluralsight - Features a variety of security-focused courses, including those on ethical hacking and penetration testing. Their courses are organized by skill level and are often led by industry experts.
            </li>
            <br />
            <li>
              TryHackMe - A hands-on platform that offers guided labs and challenges for learning ethical hacking and cybersecurity skills in a more interactive way.
            </li>
            <br />
          </ul>
        </div>
        <div className="col-md">
          <img style={{ marginLeft: '100px' }} className="img-fluid" src={hackImage2} alt="Hacking Course 1" />
          <br />
          <img style={{ marginLeft: '100px', marginTop: '100px' }} className="img-fluid" src={hackImage3} alt="Hacking Course 2" />
          <img style={{ marginLeft: '100px', marginTop: '100px' }} className="img-fluid" src={downloadImage} alt="Download" />
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
              <li>Typical Duration: 3 to 4 years.</li>
              <br />
              <li>Details: In many countries, such as the United States, Canada, and Australia, a bachelor's degree in engineering generally takes 4 years to complete. In some European countries, it may take 3 years.</li>
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
            <img style={{ marginTop: '-20px' }} src={jobImage} alt="Job Opportunities" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hacking;