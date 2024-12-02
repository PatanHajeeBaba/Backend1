import React from 'react'
import Dip from '../../images/dip.jpg'
import Inter from '../../images/inter.jpg'
import Market from '../../images/marketing.jpeg.jpg'
import Iiit from '../../images/iiit.jpg'
import Anime from '../../images/animaion-designer.jpg'
import Graphic from '../../images/graphic-designer.jpg'
import Data from '../../images/Data Entry Operator.jpg'
import Event from '../../images/Event management.jpg'
import { Link, Route, Routes } from 'react-router-dom'

function After_10th() {
    return (
        <div>
            <div class="container-fluid">
                <div class="container-fluid">
                    <div class="container">
                        <div class="row  pt-5">
                            <div class="col-lg-12 ">
                                <center> <h1 style={{ color: 'blue', fontFamily: 'calibri', fontSize: '30px', marginLeft: '30px' }}>SOME OF THE BEST COURSES AFTER 10TH</h1></center>
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-lg-3 col-md-6 col-sm-12  my-4">
                                <div class="card" style={{width: '20rem'}}>
                                    <img style={{height: '200PX'}} src={Dip} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">DIPLOMA</h5>
                                        <p class="card-text">Polytechnic Diploma courses in India are pursued after passing 10th or 12th as per the requirements of course.</p>
                                        <Link to='/courses/After10th/Diploma' class="btn btn-primary">LEARN MORE</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 my-4">
                                <div class="card" style={{width: '20rem'}}>
                                    <img style={{height: '200PX'}} src={Inter} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">INTERMEDIATE</h5>
                                        <p class="card-text">The Intermediate Education, also known as Higher Secondary Classes 11th & 12th class is a two-year course.</p>
                                        <Link to='/courses/After10th/intermediate' class="btn btn-primary">LEARN MORE</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12  mt-4">
                                <div class="card" style={{width: '20rem'}}>
                                    <img style={{height: '200PX'}} src={Market} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">DIGITAL MARKETING</h5>
                                        <p class="card-text">Digital marketing is the component of marketing that uses the Internet  digital technologies and marketing, it is a business.</p>
                                        <Link to='/courses/After10th/DigitalMarketing' class="btn btn-primary">LEARN MORE</Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12  mt-4">
                                <div class="card" style={{width: '20rem'}}>
                                    <img style={{height: '200PX'}} src={Iiit} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">IIIT </h5>
                                        <p class="card-text">Industrial training institutes (ITI) and industrial training centers (ITC) is a qualification and are post-secondary schools.</p>
                                        <Link to='/courses/After10th/IIIT' class="btn btn-primary">LEARN MORE</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col-lg-3 col-md-6 col-sm-12  mt-4">
                                <div class="card" style={{width: '20rem'}}>
                                    <img style={{height: '200PX'}} src={Anime} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">ANIMATION</h5>
                                        <p class="card-text">Animation is a filmmaking technique by which still images are manipulated to create moving images,it's creates a sliders,in a animation. </p>
                                        <a href="#" class="btn btn-primary">LEARN MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 my-4">
                                <div class="card" style={{width: '20rem'}}>
                                    <img style={{height: '200PX'}} src={Graphic} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">GRAPHIC DESINER</h5>
                                        <p class="card-text">A graphic designer is a professional who practices the discipline of graphic design, either within companies or organizations or independently.</p>
                                        <a href="#" class="btn btn-primary">LEARN MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12  my-4">
                                <div class="card" style={{width: '20rem'}}>
                                    <img style={{height: '200PX'}} src={Data} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">DATA ENTRY</h5>
                                        <p class="card-text">A data entry clerk, also known as data preparation and control operator, data registration and control operator, and data preparation and registration.</p>
                                        <a href="#" class="btn btn-primary">LEARN MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12  my-4">
                                <div class="card" style={{width: '20rem'}}>
                                    <img style={{height: '200px'}} src={Event} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title"> EVENT MANAGEMENT </h5>
                                        <p class="card-text">Event management is the application of project management to the creation and development of small and/or large-scale personal or corporate events such as festivals</p>
                                        <a href="#" class="btn btn-primary">LEARN MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
           {/* <Routes>
           </Routes> */}
        </div>
    )
}

export default After_10th
