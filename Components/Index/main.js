import React from 'react'
import "../../CSS/main.css"
import desktop from '../../images/desktop.svg'
import img1 from '../../images/img1.svg'
import img2 from '../../images/img2.svg'
import img3 from '../../images/img3.svg'
import img4 from '../../images/img4.svg'
import img5 from '../../images/img5.svg'
import img6 from '../../images/img6.svg'
import img10 from '../../images/img10.jpg'
import gif1 from '../../images/gif1.gif'
import edu1 from '../../images/edu1.jpg'
import edu2 from '../../images/edu2.jpg'
import edu3 from '../../images/edu3.jpg'
import after12th from '../../images/after12th.jpeg.jpg'
import graduation from '../../images/graduation.jpg'
import { Link } from 'react-router-dom'



function main() {
  
  return (
    <div>
      <div className="parent">
    <div className="navigation">
      <div className="home">
        <div className="container">
          <div className="home-page row">
            <div className="home-data pb-5 col-lg-6 col-md-12">
              <h1>DISCOVER <br/> YOUR PREFECT CAREER</h1>
              <p style={{textAlign:'start'}}>Make smart decisions with our revolutionary AI enabled <br/> career guidance tools and expert career
                counsellors</p>
              <button className="btn btn-outline-primary" type="submit">GET STARTED</button>
            </div>
            <div className="home-img col-lg-6 col-md-12">
              <img src={img10} alt="career-image" id="animation"/>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md">
            <img  style={{marginTop:'-15px'}} src={desktop} alt=""/>
            </div>
          </div>
        </div>

        <div style={{backgroundColor: 'white'}} className="container">
          <div className="row p-5">
            <div className="col-lg-4 col-md-6 ">
              <h1 style={{fontSize:'30px',fontFamily: 'calibri',marginTop:'70px',color: 'blue'}}>How can coaching help?</h1>
              <p style={{fontSize:'17px',fontFamily:'calibri',marginTop:'20px'}}>Many people feel a sense of relief after
                sharing their concerns with a life coach or career coach who <br/> with empathy and without judgment.</p>
            </div>
            <div className="col-lg-4 col-md-6">
              <h1 style={{fontSize:'30px',fontFamily: 'calibri',marginTop:'70px',color: 'blue'}}>Gain practical strategies
              </h1>
              <p style={{fontSize:'17px',fontFamily:'calibri',marginTop:'20px'}}>Build confidence, stop procrastinating,
                improve communication skills and relationships, advance your <br/>career and manage challenges, such as,
                life transitions, executive functioning problems and ADHD, learning differences, and negative thinking –
                we will help you get back on track!
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
          <h1 style={{fontSize:'30px',fontFamily: 'calibri',marginTop:'70px',color: 'blue'}}>Whatever your challenge</h1>
              <p style={{fontSize:'17px',fontFamily:'calibri',marginTop:'20px'}}>We will work with you to clarify your
                needs, set achievable goals, and design a plan to help you go from where you are to where you want to
                be.
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid bg-dark">
          <div className="container">
            <div className="row bg-dark mt-5" style={{color: 'white'}}>
              <h1 style={{marginTop: '5%', textAlign: 'center'}}>Shaping the Career Guidance Landscape</h1>
              <h6 style={{textAlign: 'center'}}>Comprehensive career guidance solutions for students, parents, educators
                and
                schools
              </h6>
              <div className="col-lg-4 col-md-4 mt-5">
                <div className="img-fluid" style={{textAlign: 'center'}}><img src={img1} alt="images"/>
                  <p style={{padding:'30px'}}>Enable students to identify their best-fit career with our world-className career
                    assessment and
                    personalised guidance.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 mt-5">
                <div className="img-fluid" style={{textAlign: 'center'}}><img src={img2} alt="images"/>
                  <p style={{padding:'30px'}}>Empower students to learn all about the professional world with virtual
                    career
                    simulations, exhaustive career library, career blogs and vlogs.
                    .</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 mt-5">
                <div className="img-fluid" style={{textAlign: 'center'}}><img src={img3} alt="images"/>
                  <p style={{padding:'30px'}}>Pave student’s way to their dream college with our end-to-end college
                    application guidance,
                    <br/>scholarship drive and corporate internship program.
                    .
                  </p>
                </div>
              </div>
              <div className="row bg-dark " style={{color: "white"}}>
                <div className="col-lg-4 col-md-4  col-sm-12 mt-3">
                  <div className="img-fluid" style={{textAlign: 'center'}}><img src={img4}
                      alt="images"/>
                    <p style={{padding:'30px'}}>Enable schools in creating a career guidance ecosystem in sync with the
                      vision of New Education
                      Policy
                      .</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4  col-sm-12 mt-3">
                  <div className="img-fluid" style={{textAlign: 'center'}}><img src={img5}
                      alt="images"/>
                    <p style={{padding:'30px'}}>Empower educators to become International Certified Career Coaches and
                      build
                      a career in career
                      guidance & counselling
                      .</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4  col-sm-12 mt-3">
                  <div className="img-fluid" style={{textAlign: 'center'}}><img src={img6}
                      alt="images"/>
                    <p style={{padding:'30px'}}>Revolutionary assessment platform and technology driven career guidance
                      solutions for educators to
                      boost their career guidance & counselling practice. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <center className='center1'>
    <div className="contanier slides">
    <div className="row">
      <div className="slide">
        <div className="item" style={{backgroundImage: `url(${edu1})`,backgroundSize:'cover'}}>
          <div className="content">
            <div className="name">
              <h1></h1>
            </div>
            <button className="bg-primary">Learn more</button>
          </div>
        </div>
        <div className="item" style={{backgroundImage: `URL(${edu2})`, backgroundSize:'cover'}}>
          <div className="content">
            <div className="name" style={{color: 'black'}}>After 10th</div>
            <Link to='/courses/After10th'><button className="bg-primary">Learn more</button></Link>
          </div>
        </div>
        <div className="item" style={{backgroundImage: `URL(${after12th})`,backgroundSize:'cover'}}>
          <div className="content">
            <div className="name" style={{color: 'black'}}>After 12th</div>
            <Link to='/courses/After12th'><button className="bg-primary">Learn more</button></Link>
          </div>
        </div>
        <div className="item" style={{backgroundImage: `URL(${graduation})`, backgroundSize:'cover'}}>
          <div className="content">
            <div className="name" style={{color: 'black'}}>After Graduation</div>
            <Link to='/courses/Graduation'><button className="bg-primary">Learn more</button></Link>
          </div>
        </div>
        <div className="button">
          <button className="prev"><i className="fa-solid fa-arrow-left"></i></button>
          <button className="next"><i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
    
  </div></center> */}
  
      </div>
    
    </div>
    
  </div>
  
  <div className="container-fluid" style={{ backgroundColor: 'black', color: 'white'}}>
    <div className="row">
      <div className="col-lg">
        <p id="p20">Let's work together on your <br/>
        <p id="p21"> Dream to make it successful </p>
        </p>
        <br/>
        <p id="p22"> Lorem ipsum dolor sit amet consecteturadipisicing elit.</p>
        <p id="p23">adipisicing elit. consectetur adipisicing elit</p>
        <p id="p24">adipisicing elit.elit.</p> <br/>
        <center><button id="btn20"><u>Learn more</u></button></center>
      </div>
    </div>
  </div>
  <div className="container-fluid ps-5" style={{marginTop: '5%'}}>
    <div className="container">
      <div className="row mt-5">
        <h1 style={{textAlign: 'center'}}>Mock tests</h1>
        <div className="col-lg-6 col-md-6 mt-5">
        <div className="img-fluid"><img style={{width: '100%'}} src={gif1} alt=""/></div>
        </div>
        <div className="col-lg-6 col-md-6 mt-5 ps-5 ">
          <h1>Advanced Assessment & Best-Fit Matches</h1>
          <p>- This assessment is used to find out our Interest with basic questions <br/>
            - career assessment: Orientation Style, Interest, Personality, Aptitude . <br/>
            - in-depth career report with personalised development plans. View <br/> - Sample Report
            Get your best-fit career recommendations based on over all <br/>
            - By using this assessment you will find out Interest instead of differnt fieldsets <br/>
            - career assessment: Orientation Style, Interest, Personality, Aptitude . <br/>
            - in-depth career report with personalised development plans. View <br/> - Sample Report
            Get your best-fit career recommendations based on over all <br/>
            - By using this assessment you will find out Interest instead of differnt fieldsets</p>
          <button className="btn btn-outline-primary" style={{marginTop: '5%'}}type="submit"> Free demo</button>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid pb-3" style={{backgroundColor: 'skyblue' ,textAlign: 'center'}}>
    <div className="row mt-5">
      <div className="col-lg-6 col-md-6 mt-5 ">
        <h1><b>Contact</b></h1>
        <p style={{marginTop: '5%', marginLeft:  '4%'}}>500 Terry Francine Street,<br/>
          San Francisco, CA 94158</p>
        <p style={{marginTop: '5%', marginRight: '2%'}}>Tel: 123-456-7890 <br/>
          Fax: 123-456-7890</p>
        <p style={{marginTop: '5%', marginRight: '3%'}}>info@mysite.com</p>
        <i style={{fontSize: '180%', marginLeft: '2%' ,marginTop: '3%'}} className="fa-brands fa-square-instagram"></i>
        <i style={{fontSize: '180%', marginLeft: '2%' ,marginTop: '3%'}} className="fa-brands fa-square-twitter"></i>
        <i style={{fontSize: '180%', marginLeft: '2%' ,marginTop: '3%'}} className="fa-brands fa-facebook"></i>
        <i style={{fontSize: '180%', marginLeft: '2%' ,marginTop: '3%'}} className="fa-brands fa-youtube"></i>
        <p style={{marginTop: '5%', marginLeft: '8%'}}>© 2035 by Personal Life Coach. <br/> Powered and secured by
          Wix</p>
      </div>
      <div className="col-lg-6 col-md-6"
        style={{textAlign: 'start',fontSize: '150%',display: 'flex',flexDirection: 'row', color: 'black', marginBottom: '5%'}}>
        <form>
          <label for="fname"
            style={{color: '#222831',fontSize: '20px', fontWeight: '400', fontStyle: 'italic', fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Firstname*</label>
          <label
            style={{marginLeft: '35%', color: '#222831' ,fontSize: '20px', fontWeight: '400', fontStyle: 'italic', fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}
            for="lname">Lastname*</label><br/>
          <input type="text" id="fname" name="fname" required
            style={{borderRadius: '5px', border: 'none', border: '1px solid gray',width:'50%'}}/>
          <input type="text" id="lname" name="lname"
            style={{borderRadius: '5px', border: 'none', border: '1px solid gray', width:'50%'}}/><br/>
          <label for="email"
            style={{color: '#222831', fontSize: '20px',width:'100%', fontWeight: '400', fontStyle: 'italic',fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Email*</label>
          <br/>
          <input style={{width: '100%', borderRadius: '5px',width:'100%', border: 'none', border: '1px solid gray'}} type="email" id="email/"
            name="email"/>
          <label for="subject"
            style={{color: '#222831', fontSize: '20px',width:'100%', fontWeight: '400', fontStyle: 'italic',fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Subject*</label>
          <br/>
          <input style={{width: '100%', borderRadius: '5px', border: 'none', border: '1px solid gray'}} type="text" id="Subject"
            name="subject"/>
          <label for="comment"
            style={{color: '#222831', fontSize: '20px',width:'100%', fontWeight: '400', fontStyle: 'italic',fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>Comment*</label>
          <br/>
          <input style={{height: '25%',width: '100%' ,borderRadius: '5px', border: 'none', border: '1px solid gray'}} type="text"
            id="comment" name="comment"/>
          <input type="submit" id="submit" value="submit" onclick="st()" className=" btn btn-dark mt-4 ms-1"
            style={{color: 'white', backgroundColor: 'black'}}/>
          <input type="reset" style={{backgroundColor: 'black' ,color:'white'}} className="btn btn-dark mt-4 ms-2 "/>
        </form>
      </div>
    </div>
    
  </div>
    </div>
  )
}

export default main
