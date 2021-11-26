import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

const About = () => {
    return (
        <div>
            
<div class="aboutus-section" id="about">
        <div class="container mt-5 py-5">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-12">
                    {/* {=======* About Us div * */}
                    <div class="aboutus">
                        <h2 class="aboutus-title">About Us</h2>
                        <p class="aboutus-text">It is the health, that is the real wealth. Medicare Home has provided the best in health care and the latest in medical technology to the people. Our ultimate client is the entire County population. We are committed to non-discrimination and ensuring that our goal is to transform home health by providing high quality, technology-enabled, multidisciplinary care to our patients in the comfort of their environment.</p>
                        
                        <Link to="/services" ><a class="aboutus-more" href="/">read more</a></Link>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="aboutus-banner">
                        <img src="http://themeinnovation.com/demo2/html/build-up/img/home1/about1.jpg" alt=""></img>
                    </div>
                </div>
                <div class="col-md-5 col-sm-6 col-xs-12">
                    <div class="feature">
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Work with heart</h4>
                                    <p>Customer satisfaction our first priority. Maintaining a positive, empathetic, and professional attitude toward customers at all times.</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Reliable services</h4>
                                    <p>We ensure the best services to our customer. Responding promptly to customer inquiries.</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Great support</h4>
                                    <p>We also provide great suppot, Ensure customer satisfaction and provide professional customer support.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default About;