import React from 'react';
import mastersImage from '../../images/masters.jpg';
import mbaImage from '../../images/mba.jpg';
import researchImage from '../../images/research.webp';
import artsImage from '../../images/arts.webp';
import studiesImage from '../../images/studies.webp';
import virtualImage from '../../images/virtual.jpg';

function Masters() {
  return (
    <div>
      <div className="container">
        <div className="col-lg-12 mt-5 ">
          <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px' }}>
            MASTERS
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <p style={{ padding: '30px' }}>
              A master's degree (from Latin magister) is a postgraduate academic degree awarded by universities or colleges upon completion of a course of study demonstrating mastery or a high-order overview of a specific field of study or area of professional practice. A master's degree normally requires previous study at the bachelor's level, either as a separate degree or as part of an integrated course. Within the area studied, master's graduates are expected to possess advanced knowledge of a specialized body of theoretical and applied topics; high order skills in analysis, critical evaluation, or professional application; and the ability to solve complex problems and think rigorously and independently.
            </p>
          </div>
          <div className="col-lg-6">
            <img style={{ width: '300px', height: '200px', borderRadius: '5px', marginLeft: '100px' }} className="img-fluid" src={mastersImage} alt="Masters" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px' }}>
              MASTERS DEGREES
            </h1>
          </div>
        </div>
        <div className="row" style={{ marginTop: '10px' }}>
          <div className="col-lg-6">
            <p style={{ paddingLeft: '30px' }}>
              A master's degree, both taught and research-based, can significantly improve your research skills, in-depth knowledge of the subject and increase your employability when embarking on a career. Here are some common masters degrees:
            </p>
            <ul>
              <li>
                <b>Master of Arts (MA)</b>
                Course Topics: A Master of Arts (MA) is usually awarded in disciplines categorised as arts or social sciences, such as communications, education, languages, linguistics, literature, geography, history and music. Candidates are taught through a combination of lectures and seminars and assessed through an examination and/or a dissertation based on an independent research project.
              </li>
              <br />
              <li>
                <b>Master of Research (MRes)</b>
                Content: A Master of Research (MRes) degree is designed to provide training in how to become a researcher. Containing a significantly larger research element than MA or MSc programmes, an MRes may give candidates an advantage if they wish to pursue a PhD or enter a career in research. Note that some institutions may refer to MRes-style degree programmes as an MSc, so it’s worth checking the course content carefully before applying.
              </li>
              <br />
              <li>
                <b>Master by Research (MPhil)</b>
                Content: A Master by Research (MPhil) is an advanced research-based degree which allows the candidate to focus on a particular topic in-depth and independently, to complete a single large research project. An MPhil is often seen as a precursor to a PhD and is often used by institutions to allow students to ‘test the water’ before commencing a PhD degree programme. This often takes longer to complete than other types of master’s degrees – though the length of time and the status awarded to an MPhil varies significantly depending on the country and institution.
              </li>
              <br />
              <li>
                <b>Master of Studies (MSt)</ b>
                Content: Taught in only a few places (including the University of Oxford and the University of Cambridge), a Master of Studies (MSt) degree is comparable to the MA or MSc, requiring both classroom learning and the completion of a thesis and an examination. An MSt can serve as a provisional enrolment for a PhD in some cases. The need for this category of master’s degree partly stems from the fact that at Oxbridge universities students who have completed a Bachelor of Arts are automatically awarded an MA after a defined time-period has passed. In contrast, those with a MSt have completed postgraduate coursework to gain the title.
              </li>
              <br />
              <li>
                <b>Master of Business Administration (MBA)</b>
                Content: The Master of Business Administration (MBA) is designed to give students the skills and knowledge required for career progression in business and management roles. Candidates are given broad training in all aspects of business, allowing them to apply their learning to a variety of careers. Many MBA candidates are mid-career professionals, with most programmes requiring at least three years’ professional experience. You can also choose to combine an MBA with a specialisation such as accounting or finance, and tailor the degree to a specific field of interest. Related master’s degrees include the Master of Professional Accountancy (MPAcc) and Master of Science in Information Systems (MSIS).
              </li>
              <br />
            </ul>
          </div>
          <div className="col-md">
            <img style={{ marginLeft: '100px', width: '300px', height: '200px', borderRadius: '5px' }} className="img-fluid" src={mbaImage} alt="MBA" /><br />
            <img style={{ marginLeft: '100px', marginTop: '100px', width: '300px', height: '200px', borderRadius: '5px' }} className="img-fluid" src={researchImage} alt="Research" />
            <img style={{ marginTop: '100px', marginLeft: '100px', width: '300px', height: '200px', borderRadius: '5px' }} className="img-fluid" src={artsImage} alt="Arts" />
            <img style={{ marginTop: '100px', marginLeft: '100px', width: '300px', height: '200px', borderRadius: '5px' }} className="img-fluid" src={studiesImage} alt="Studies" />
          </div>
        </div>
        <div className="col-lg-12">
          <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px' }}>
            MASTERS DEGREE DURATION:
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <p style={{ padding: '30px', marginTop: '-50px' }}>
              <ul>
                <li>
                  Master's degrees typically take one to three years to complete, through either part-time or full-time study. The specific duration varies depending on the subject, the country in which you study and the type of master's degree you choose.
                </li>
                <br />
                <li>
                  The highest degree is a doctorate, also called a doctoral degree. In terms of university degree levels, both master's and bachelor's degrees rank below doctorates. You can earn a doctorate in a wide array of fields, including the social sciences, business, the humanities, education, engineering, and healthcare.
                </li>
                <br />
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
                <li>
                  <h1 style={{ fontSize: '22px', marginTop: '30px' }}></h1><b>Virtual Reality designer:</b> If addiction to technology bothers you, you won’t like to hear that there is a high demand for VR headsets and other gadgets that could soon become mainstream.
                </li>
                <li>
                  <h1 style={{ fontSize: '22px', marginTop: '30px' }}></h1><b>Biotechnologist:</b> While there are various jobs in the Biotechnology field, you will generally work with advanced tools, trying to fix technical or biological problems, developing new products and so on.
                </li>
                <li>
                  <h1 style={{ fontSize: '22px', marginTop: '30px' }}></h1><b>Teacher/Professor:</b> The importance of quality education should never be underestimated. Having a great teacher, who’s calm, understanding and inspiring can do you a world of good and positively support your development.
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <img style={{ marginTop: '50px', marginLeft: '120px', width: '300px', height: '200px', borderRadius: '5px' }} src={virtualImage} alt="Virtual Reality Designer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Masters;