import React from 'react';
import codingImage from '../../images/coding.avif';
import digitalMarketingImage from '../../images/digital marketing.avif';
import medicineImage from '../../images/medice.avif';
import hotelManagementImage from '../../images/hotel.avif';
import lawJournalismImage from '../../images/law.avif';
import financeAndEconomicsImage from '../../images/Finance and Economics.avif';
import mbaImage from '../../images/MBA.avif';
import graduationImage from '../../images/a_g.jpg';

function Graduation() {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6 col-md-12 mt-4">
            <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '25px' }}>
              WHAT AFTER GRADUATION COURSES?
            </h1>
            <h5 style={{ fontSize: '20px', fontFamily: 'calibri' }}>
              'Get your master's degree'
            </h5>
            <p style={{textAlign:'start', fontSize:'16px'}}>
              Going to grad school may be necessary for certain jobs. So you'll want to consider your career goals. Even
              if it's not required, having a master's degree can be advantageous depending on your career goals and if you
              would like to increase your earning potential.
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <img src={graduationImage} alt="Graduation" className='img-fluid'/>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mt-5">
            <center>
              <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '25px', marginLeft: '30px', marginTop: '60px' }}>
                SOME OF THE BEST COURSES AFTER GRADUATION!
              </h1>
            </center>
          </div>
        </div>
        <div className="row g-4 mt-4">
          {[
            {
              title: "MASTER'S",
              description: "The branch of science and technology concerned with the design, building, and use of engines, machines, and structures.",
              imgSrc: codingImage,
              link: "/courses/graduation/Master"
            },
            {
              title: "DIGITAL MARKETING",
              description: "The promotion of brands to connect with potential customers using the internet and other forms of digital communication.",
              imgSrc: digitalMarketingImage,
              link: "/courses/graduation/DigitalMarketing"
            },
            {
              title: "MEDICINE",
              description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
              imgSrc: medicineImage,
              link: "/courses/graduation/Medicine"
            },
            {
              title: "HOTEL MANAGEMENT",
              description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
              imgSrc: hotelManagementImage,
              link: ""
            },
            {
              title: "CODING",
              description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
              imgSrc: codingImage,
              link: "#"
            },
            {
              title: "LAW JOURNALISM",
              description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
              imgSrc: lawJournalismImage,
              link: "#"
            },
            {
              title: "FINANCE AND ECONOMICS",
              description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
              imgSrc: financeAndEconomicsImage,
              link: "#"
            },
            {
              title: "MBA",
              description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
              imgSrc: mbaImage,
              link: "#"
            }
          ].map((course, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12 my-4 " key={index}>
              <div className="card" style={{ width: '100%' }}>
                <img src={course.imgSrc} className="card-img-top" alt={course.title} />
                <div className="card-body">
                  < h5 className="card-title">{course.title}</h5>
                  <p className="card-text" style={{textAlign:'start'}}>{course.description}</p>
                  <a href={course.link} className="btn btn-primary">LEARN MORE</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Graduation;