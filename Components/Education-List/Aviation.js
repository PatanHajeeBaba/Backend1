import React from 'react';
import pilotImage from '../../images/aviation.jpeg.jpg';
import maintenanceImage from '../../images/av2.jpeg.jpg';
import jobImage from '../../images/job.avif';
import wallpaperImage from '../../images/wallpaper2you_440418.jpg';
import th from '../../images/th (1).jpeg.jpg'

function Aviation() {
  return (
    <div className="container">
      <div className="col-lg-12 mt-5">
        <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px'}}>
          AVIATION
        </h1>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <p style={{ padding: '30px' }}>
            Aviation, a field encompassing the design, development, and operation of aircraft, plays a crucial role in connecting people and places across the globe. From its pioneering days with the Wright brothers' first powered flight in 1903 to today's advanced commercial jets and cutting-edge unmanned aerial vehicles, aviation has transformed how we travel, conduct business, and respond to emergencies. The industry relies on a complex interplay of engineering, technology, and regulation to ensure safety, efficiency, and innovation.
          </p>
        </div>
        <div className="col-lg-6">
          <img style={{ height: '40svh', marginLeft: '30px' }} className="img-fluid" src={wallpaperImage} alt="Aviation Wallpaper" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px' }}>
            AVIATION COURSES
          </h1>
        </div>
      </div>
      <div className="row" style={{ marginTop: '10px' }}>
        <div className="col-lg-6">
          <p style={{ paddingLeft: '30px' }}>
            Aviation courses offer specialized training and education for those interested in pursuing careers in the aviation industry. These courses cover a range of topics and skills necessary for various roles, from piloting to aircraft maintenance and air traffic control. Here are some common types of aviation courses:
          </p>
          <ul>
            <li>
              <strong>Pilot Training:</strong> These courses teach the skills required to become a private pilot, commercial pilot, or airline transport pilot. They cover flight theory, navigation, meteorology, and hands-on flight experience. Programs often include simulator training and practical flying hours.
            </li>
            <br />
            <li>
              <strong>Aircraft Maintenance:</strong> Focused on the technical aspects of maintaining and repairing aircraft, these courses cover subjects such as aerodynamics, avionics, propulsion systems, and regulatory standards. They prepare students for roles as aircraft maintenance technicians or engineers.
            </li>
            <br />
            <li>
              <strong>Air Traffic Control:</strong> These courses train individuals to manage the safe and efficient movement of aircraft in the airspace and on the ground. Training includes radar operation, communication procedures, and air traffic control regulations.
            </li>
            <br />
            <li>
              <strong>Aviation Management:</strong> This area of study focuses on the business and operational aspects of the aviation industry. Courses cover topics like airport management, airline operations, aviation safety, and logistics.
            </li>
            <br />
            <li>
              <strong>Aviation Safety and Security:</strong> These courses address safety protocols, risk management, and security measures to ensure the protection of passengers, crew, and aircraft. Topics include emergency procedures, accident investigation, and regulatory compliance.
            </li>
            <br />
          </ul>
        </div>
        <div className="col-md">
          <img style={{ marginLeft: '100px' }} className="img-fluid" src={pilotImage} alt="Pilot Training" />
          <br />
          <img style={{ marginLeft: '100px', marginTop: '100px' }} className="img-fluid" src={maintenanceImage} alt="Aircraft Maintenance" />
          <img style={{ marginLeft: '100px', marginTop: '100px', width: '330px' }} className="img-fluid" src={th} alt="Aviation Image" />
        </div>
      </div>
      <div className="col-lg-12">
        <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px' }}>
          AVIATION CURRICULUM & DURATION:
        </h1>
      </div>
      <div className="row">
        <div className="col-lg-6">
         <br/> <p style={{ padding: '30px', marginTop: '-50px' }}>
            <ul>
              <li>
                <strong>Pilot Training</strong><br />
                Curriculum: Includes subjects such as aerodynamics, flight theory, navigation, meteorology, aircraft systems, and regulations. Students receive practical flight training, simulator sessions, and ground school education.<br />
                Duration:<br />
                Private Pilot License (PPL): Typically 3 to 6 months if training full-time, or 6 to 12 months part-time.<br />
                Commercial Pilot License (CPL): Generally 6 to 12 months full-time, depending on the number of flight hours and training intensity.<br />
                Airline Transport Pilot License (ATPL): Requires several years of flying experience and can take an additional 1 to 2 years of intensive training beyond the CPL.
              </li>
              <br />
              <li>
                <strong>Aircraft Maintenance</strong><br />
                Curriculum: Covers aerodynamics, aircraft systems, avionics, propulsion systems, maintenance procedures, and regulatory compliance. Includes hands-on training with actual aircraft and simulators.<br />
                Duration: Typically 18 to 24 months for a diploma or associate degree program. Some certification programs may be shorter, around 12 to 18 months.
              </li>
              <br />
              <li>
                <strong>Air Traffic Control</strong><br />
                Curriculum: Includes air traffic control procedures, radar operation, communication protocols, and safety regulations. Training often involves simulator practice and real-world exercises.<br />
                Duration: Generally 6 to 12 months, but can vary depending on the country and specific training institution.
              </li>
              <br />
            </ul>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px', marginTop: '10px' }}>
            JOB OPPORTUNITIES
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <ul style={{ marginLeft: '30px' }}>
              <li><h1 style={{ fontSize: '22px', marginTop: '30px' }}>Retail and Sales:</h1> Positions in customer service, sales, or store management.</li>
              <li><h1 style={{ fontSize: '22px', marginTop: '30px' }}>Office Administration:</h1> Roles such as administrative assistant or office clerk.</li>
              <li><h1 style={{ fontSize: '22px', marginTop: '30px' }}>Hospitality:</h1> Jobs in hotels, restaurants, or travel and tourism.</li>
              <li><h1 style={{ fontSize: '22px' }}>Government jobs</h1> Competitive Exams: Prepare for exams like SSC, UPSC, or state-level exams for various administrative and clerical positions.</li>
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

export default Aviation;