import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./footer.css";

const Footer = () => {
    return (
        <div>
                <div className="site-footer">
                    {/* ==========footer container============== */}
                    <div className="container">
                        <footer>
                        <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">"Medicare Home" has provided the best in health care and the latest in medical technology to the people.</p>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>Service</h6>
                            <ul className="footer-links">
                            <li><a href="/services">Women Health</a></li>
                            <li><a href="/services">Children special Care</a></li>
                            <li><a href="/services">Cardiology</a></li>
                            <li><a href="/services">More</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </div>
                        <hr/>
                    <div className="container mx-5">
                        <div className="row">
                        <div className="col-md-7 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
                        <a href="/home"> Pinky Banik</a>.
                            </p>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12n">
                            <ul className="social-icons">
                            <li><a className="facebook" href="#home"> <FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a className="twitter" href="#facebook"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a className="dribbble" href="#dribble"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            <li><a className="linkedin" href="#linkedin"><FontAwesomeIcon icon={faDribbble} /></a></li>   
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
                </footer>
                </div>
                </div>
        </div>
    );
};

export default Footer;