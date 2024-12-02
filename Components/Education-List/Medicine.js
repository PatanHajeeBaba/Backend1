import React from 'react';
import medicalImage from '../../images/medical.avif';
import dentalImage from '../../images/Doctor of dental medicine.jpg';
import medicineImage from '../../images/Doctor of medicine.jpg';
import osteopathicImage from '../../images/Doctor of osteopathic medicine.jpg';

function Medicine() {
  return (
    <div>
      <div className="container">
        <div className="col-lg-12 mt-5 ">
          <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px' }}>
            MEDICAL
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <p style={{ padding: '30px' }}>
              A medical degree is a professional degree admitted to those who have passed coursework in the fields of medicine and/or surgery from an accredited medical school. Obtaining a degree in medicine allows for the recipient to continue on into specialty training with the end goal of securing a license to practice within their respective jurisdiction. Medical graduates may also pursue non-clinical careers including those in basic research and positions within the healthcare industry. A worldwide study conducted in 2011 indicated on average: 64 university exams, 130 series exams, and 174 assignments are completed over the course of 5.5 years. As a baseline, students need greater than an 85% in prerequisite courses to enrol for the aptitude test in these degree programs.
            </p>
          </div>
          <div className="col-lg-6">
            <img style={{ width: '300px', height: '200px', borderRadius: '5px', marginLeft: '100px' }} className="img-fluid" src={medicalImage} alt="Medical" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px' }}>
              MEDICAL
            </h1>
          </div>
        </div>
        <div className="row" style={{ marginTop: '10px' }}>
          <div className="col-lg-6">
            <p style={{ paddingLeft: '30px' }}>
              Digital marketing effectively began in 1990 when the Archie search engine was created as an index for FTP sites. In the 1980s, the storage capacity of computers was already large enough to store huge volumes of customer information. Companies started choosing online techniques, such as database marketing, rather than limited list brokers. Databases allowed companies to track customers' information more effectively, transforming the relationship between buyer and seller.
            </p>
            <ul>
              <li>
                <b>Doctor of medicine</b>
                <br />
                Course Topics: After completing medical school, you can earn a doctor of medicine (MD) degree. Before a student can enter into an MD program, they typically need to earn at least a bachelor’s degree in a related field. Another entry requirement is a satisfactory score on the Medical College Admissions Test (MCAT).
              </li>
              <br />
              <li>
                <b>Bachelor of science in nursing</b>
                <br />
                Content: If you get a bachelor of science degree in nursing (BSN), you can work as a registered nurse. Registered nurses, or RNs, provide basic patient care, such as taking and recording vitals and administering medications. They work alongside other medical professionals, including physicians, in hospitals, health care clinics, care facilities, and other locations.
              </li>
              <br />
              <li>
                <b>Master of Science in physician assistant studies</b>
                <br />
                Content: If you're interested in working as a physician assistant, you can pursue a master of science in physician assistant studies degree. A physician assistant, or PA, directly assists a physician by providing patient care and handling other clinical and administrative duties. This master’s program requires the completion of a bachelor’s degree in a related field. Working as a PA may also require passing the Physician Assistant National Certification Exam (PANCE).
              </li>
              <br />
              <li>
                <b>Doctor of osteopathic medicine</b>
                <br />
                Content: A doctor of osteopathic medicine, or DO, is similar to an MD degree and allows you to work as a physician. Doctors of osteopathic medicine typically focus on a more holistic treatment approach when working with patients. The requirements for a DO program are similar to those of an MD program and include a bachelor’s degree in a related field and a satisfactory score on the MCAT.
              </li>
              <br />
              <li>
                <b>Doctor of dental medicine</b>
                <br />
                Content: A doctor of dental medicine, or DDM, allows you to become a practicing dentist. A DDM program is similar to an MD or DO program, requiring at least a bachelor's degree and a satisfactory score on an admission test called the Dental Aptitude Test.
              </li>
              <br />
            </ul>
          </div>
          <div className="col-md">
            <img style={{ marginLeft: '100px', width: '300px', height: '200px', borderRadius: '5px' }} className="img-fluid" src={dentalImage} alt="Doctor of Dental Medicine" />
            <br />
            <img style={{ marginLeft: '100px', marginTop: '100px', width: '300px', height: '200px', borderRadius: '5px' }} className="img-fluid" src={medicineImage} alt="Doctor of Medicine" />
            <img style={{ marginTop: '100px', marginLeft: '100px', width: '300px', height: '200px', borderRadius: '5px' }} className="img-fluid" src={osteopathicImage} alt="Doctor of Osteopathic Medicine" />
            <img style={{ marginTop: '100px', marginLeft: '100px', width: '300px', height: '200px', borderRadius: '5px' }} className="img-fluid" src={dentalImage} alt="Doctor of Dental Medicine" />
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
                <li>
                  <h1 style={{ fontSize: '22px', marginTop: '30px' }}></h1><b>Doctor:</b> Becoming a medical doctor by earning an MBBS degree is one of the most common and prestigious medical careers in India. After completing MBBS, doctors can choose to specialize in various fields through postgraduate courses such as MD, MS, or DNB.
                </li>
                <li>
                  <h1 style={{ fontSize: '22px', marginTop: '30px' }}></h1><b>Dentist:</b> Dentists specialize in oral health care. They can earn a BDS degree and further specialize in MDS.
                </li>
                <li>
                  <h1 style={{ fontSize: '22px', marginTop: '30px' }}></h1><b>Cardiologist:</b> A cardiologist is a medical doctor who specializes in diagnosing, preventing, and treating diseases and conditions related to the cardiovascular system, which includes the heart and blood vessels.
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <img style={{ marginTop: '60px', marginLeft: '120px', width: '300px', height: '200px', borderRadius: '5px' }} src={medicalImage} alt="Medical" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Medicine;