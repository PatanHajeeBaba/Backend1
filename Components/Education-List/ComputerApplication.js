import React from 'react';
import com from '../../images/com.jpeg.jpg'
import computer from '../../images/computer.jpeg.jpg'
import computer2 from '../../images/computer2.jpeg.jpg'
import Job from '../../images/job.avif'
function ComputerApplication() {
  return (
    <div>
      <div className="container">
        <div className="col-lg-12 mt-5 ">
          <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px' }}>
            COMPUTER APPLICATION AND IT
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <p style={{ padding: '30px' }}>
              Computer applications are versatile software programs designed to perform specific tasks or solve particular problems for users, ranging from personal productivity to complex business operations. These applications encompass a wide array of types, including word processors, spreadsheets, databases, and graphics software, as well as more specialized tools for fields such as engineering, finance, and entertainment.
            </p>
          </div>
          <div className="col-lg-6">
            <img style={{ height: '40svh', marginLeft: '30px' }} className="img-fluid" src={com} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px' }}>
              COMPUTER APPLICATION COURSES
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
                Basic Computer Applications
                <br />
                Course Topics: Introduction to computer systems, operating systems, file management, word processing, spreadsheets, presentations.
                <br />
                Skills Acquired: Proficiency in using software like Microsoft Office Suite (Word, Excel, PowerPoint), basic troubleshooting, and understanding of computer hardware and software basics.
              </li>
              <br />
              <li>
                Advanced Office Applications
                <br />
                Content: Advanced features of applications such as Microsoft Office or Google Workspace, including macros, complex formulas, and data analysis.
                <br />
                Skills Gained: Enhanced productivity, automation of repetitive tasks, and sophisticated data manipulation.
              </li>
              <br />
              <li>
                Database Management Systems
                <br />
                Content: Principles of database design, SQL (Structured Query Language), and the use of database management systems (DBMS) like MySQL, Oracle, or Microsoft Access.
                <br />
                Skills Gained: Designing, querying, and managing relational databases.
              </li>
              <br />
              <li>
                Web Development
                <br />
                Content: Fundamentals of web design and development, including HTML, CSS, JavaScript, and content management systems (CMS).
                <br />
                Skills Gained: Building and maintaining websites, understanding web technologies, and creating interactive web applications.
              </li>
              <br />
              <li>
                Software Development
                <br />
                Course Topics: Programming languages (e.g., Python, Java, C++), software development lifecycle, debugging, and version control.
                <br />
                Skills Acquired: Writing and testing code, understanding software development methodologies, and creating applications for various platforms.
              </li>
              <br />
            </ul>
          </div>
          <div className="col-md">
            <img style={{ marginLeft: '100px', width: '300px' }} className="img-fluid" src={computer} alt="" /><br />
            <img style={{ marginLeft: '100px', marginTop: '100px' }} className="img-fluid" src={com} alt="" />
            <img style={{ marginTop: '100px', marginLeft: '100px' }} className="img-fluid" src={computer2} alt="" />
          </div>
        </div>
        <div className="col-lg-12">
          <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px' }}>
            COMPUTER APPLICATION CURRICULUM & DURATION:
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <p style={{ padding: '30px', marginTop: '-50px' }}>
              <ul>
                <li>
                  Certificate Programs <br />
                  Duration: Typically 6 months to 1 year. <br />
                  Introduction to Computer Applications: Basics of operating systems, file management. <br />
                  Office Applications: Word processing, spreadsheets, presentations. <br />
                  Database Basics: Introduction to databases and SQL. <br />
                  Web Development Basics: HTML, CSS. <br />
                  Fundamentals of Programming: Basic programming concepts (optional)
                </li>
                <br />
                <li>
                  Introductory Courses: Basic computer applications and office tools. <br />
                  Specialized Skills: Web development, programming, data analysis. <br />
                  Project-Based Learning: Hands-on projects to apply learned skills in real-world scenarios. <br />
                  Career Preparation: Resume building, interview preparation, and job search strategies.
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
                  <h1 style={{ fontSize: '22px', marginTop: '30px' }}></h1>Retail and Sales: Positions in customer service, sales, or store management.
                </li>
                <li>
                  <h1 style={{ fontSize: '22px', marginTop: '30px' }}></h1>Office Administration: Roles such as administrative assistant or office clerk.
                </li>
                <li>
                  <h1 style={{ fontSize: '22px', marginTop: '30px' }}></h1>Hospitality: Jobs in hotels, restaurants, or travel and tourism.
                </li>
                <li>
                  <h1 style={{ fontSize: '22px' }}>Government jobs</h1>Competitive Exams: Prepare for exams like SSC, UPSC, or state-level exams for various administrative and clerical positions.
                </li>
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

export default ComputerApplication;