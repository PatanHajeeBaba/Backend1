import React from 'react';
import digitalMarketingImage from '../../images/digital marketing.avif';
import courseImage from '../../images/DIG1.jpg';
import jobImage from '../../images/job.avif';

function DigitalMarketing() {
  return (
    <div className="container">
      <div className="row mt-5 ">
        <div className="col-lg-12">
          <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px' }}>
            DIGITAL MARKETING
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mt-3">
          <p style={{ marginLeft: '40px' }}>
            Digital marketing refers to the use of digital channels, platforms, and tools to promote products, services, or brands to consumers. It encompasses a wide range of activities aimed at reaching and engaging potential customers through online mediums. Key components of digital marketing include:
          </p>
        </div>
        <div className="col-lg-6">
          <img
            style={{ height: '38svh', width: '70%', marginLeft: '70px', marginTop: '-30px' }}
            className="img-fluid"
            src={digitalMarketingImage}
            alt="Digital Marketing"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px', marginTop: '20px' }}>
            DIGITAL MARKETING COURSES
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <ul style={{ marginLeft: '30px' }}>
            <li>
              <h1 style={{ fontSize: '22px', marginTop: '30px' }}>Search Engine Optimization (SEO): </h1>
              Improving a website’s visibility on search engines like Google through optimizing content and technical elements.
            </li>
            <li>
              <h1 style={{ fontSize: '22px', marginTop: '30px' }}>Content Marketing: </h1>
              Creating and sharing valuable content to attract and engage a target audience. This can include blog posts, videos, infographics, and more.
            </li>
            <li>
              <h1 style={{ fontSize: '22px', marginTop: '30px' }}>Social Media Marketing: </h1>
              Using social platforms (Facebook, Instagram, Twitter, LinkedIn, etc.) to build a brand presence, engage with audiences, and drive traffic.
            </li>
            <li>
              <h1 style={{ fontSize: '22px', marginTop: '30px' }}>Pay-Per-Click (PPC) Advertising: </h1>
              Running paid ads on search engines or social media platforms where advertisers pay each time their ad is clicked.
            </li>
            <li>
              <h1 style={{ fontSize: '22px', marginTop: '30px' }}>Analytics and Data: </h1>
              Using tools to measure the effectiveness of digital marketing efforts, track key metrics, and make data-driven decisions.
            </li>
          </ul>
        </div>
        <div className="col-lg-6">
          <img style={{ marginLeft: '50px', marginTop: '150px' }} src={courseImage} alt="Digital Marketing Courses" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 mt-5">
          <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px', marginTop: '30px' }}>
            JOB OPPORTUNITIES
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mt-5">
          <p style={{ marginLeft: '30px', marginTop: '30px' }}>
            These roles can be found in various sectors, from tech startups to large corporations, and offer diverse opportunities depending on your skills and interests. If you’re looking to break into the field, gaining relevant certifications and practical experience through internships or personal projects can be very beneficial.
          </p>
        </div>
        <div className="col-lg-6">
          <img style={{ marginTop: '-20px' }} src={jobImage} alt="Job Opportunities" />
        </div>
      </div>
    </div>
  );
}

export default DigitalMarketing;