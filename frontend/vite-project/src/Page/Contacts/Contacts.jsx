import { Link } from 'react-router-dom';
import './Contacts.scss';

import logo from '../../assets/logo.svg';
import loginIcon from '../../assets/loginIcon.svg';
import chatIcon from '../../assets/chatIcon.svg';
import phoneIco from '../../assets/phoneIco.svg';
import locationIcon from '../../assets/locationIcon.svg';
import mapImage from '../../assets/mapPic.png';
import contactIllustration from '../../assets/contactIllustration.png';
import checkIcon from '../../assets/checkIcon.svg';

import footerLogo from '../../assets/footerLogo.svg';
import fbIcon from '../../assets/fbIcon.svg';
import twIcon from '../../assets/twIcon.svg';
import ytIcon from '../../assets/ytIcon.svg';
import tgIcon from '../../assets/tgIcon.svg';
import igIcon from '../../assets/igIcon.svg';
import inIcon from '../../assets/inIcon.svg';
import mailIco from '../../assets/mailIco.svg';
import arrowRight from '../../assets/arrowRight.svg';

import HeartFot from '../../assets/HeartFot.svg';

function Contacts() {
    return (
        <>
            <header className="header">
                <div className="header-container">
                    <div className="left">
                        <Link to="/">
                            <img src={logo} alt="" className="logo" />
                        </Link>
                    </div>
                    <nav className="nav">
                        <Link to="/about" className="nav-link">
                            About Us
                        </Link>
                        <Link to="/courses" className="nav-link">
                            Courses
                        </Link>
                        <Link to="/events" className="nav-link">
                            Events
                        </Link>
                        <Link to="/blog" className="nav-link">
                            Blog
                        </Link>
                        <Link to="/contacts" className="nav-link nav-link-active">
                            Contacts
                        </Link>
                    </nav>
                    <div className="right">
                        <Link to="/contacts" className="btn-orange">
                            Get consultation
                        </Link>
                        <div className="login">
                            <img src={loginIcon} alt="" className="login-icon" />
                            <Link to="/login" className="login-text">
                                Log in / Register
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <main className="main">
                <section className="contact-info">
                    <div className="container">
                        <div className="info-left">
                            <p className="info-subtitle">CONTACT INFO</p>
                            <h1 className="info-title">Get in touch</h1>

                            <div className="info-list">
                                <div className="info-item">
                                    <img src={chatIcon} alt="" className="info-icon" />
                                    <div className="info-text-cont">
                                        <p className="info-label">Talk to us:</p>
                                        <p className="info-value">hello@createx.com</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <img src={phoneIco} alt="" className="info-icon" />
                                    <div className="info-text-cont">
                                        <p className="info-label">Call us:</p>
                                        <p className="info-value">(405) 555-0128</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <img src={locationIcon} alt="" className="info-icon" />
                                    <div className="info-text-cont">
                                        <p className="info-label">Address:</p>
                                        <p className="info-value">
                                            2464 Royal Ln. Mesa, New Jersey 45463, USA
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="info-socials">
                                <p className="social-label">FOLLOW US:</p>
                                <div className="social-icons">
                                    <img src={fbIcon} alt="" className="soc-icon" />
                                    <img src={twIcon} alt="" className="soc-icon" />
                                    <img src={ytIcon} alt="" className="soc-icon" />
                                    <img src={tgIcon} alt="" className="soc-icon" />
                                    <img src={igIcon} alt="" className="soc-icon" />
                                    <img src={inIcon} alt="" className="soc-icon" />
                                </div>
                            </div>
                        </div>

                        <div className="info-right">
                            <img src={mapImage} alt="" className="map-image" />
                        </div>
                    </div>
                </section>

                <section className="contact-form-section">
                    <div className="container">
                        <div className="form-left">
                            <img src={contactIllustration} alt="" className="form-pic" />
                        </div>
                        <div className="form-right">
                            <p className="form-subtitle">ANY QUESTIONS?</p>
                            <h2 className="form-title">Drop us a line</h2>

                            <div className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <p className="form-label">First Name*</p>
                                        <div className="form-input">
                                            <div className="input-spacer"></div>
                                            <p className="input-placeholder">Your first name</p>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <p className="form-label">Last Name*</p>
                                        <div className="form-input">
                                            <div className="input-spacer"></div>
                                            <p className="input-placeholder">Your last name</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <p className="form-label">Email*</p>
                                        <div className="form-input">
                                            <div className="input-spacer"></div>
                                            <p className="input-placeholder">Your working email</p>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <p className="form-label">Phone</p>
                                        <div className="form-input">
                                            <div className="input-spacer"></div>
                                            <p className="input-placeholder">Your phone number</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <p className="form-label">Message*</p>
                                    <div className="form-input textarea">
                                        <div className="input-spacer"></div>
                                        <p className="input-placeholder">Your message</p>
                                    </div>
                                </div>

                                <div className="form-bottom">
                                    <div className="form-check">
                                        <div className="checkbox-box">
                                            <input type="checkbox" />
                                        </div>
                                        <p className="check-text">
                                            I agree to receive communications from Createx Online
                                            School
                                        </p>
                                    </div>
                                    <button className="send-btn">Send message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-col-1">
                        <img src={footerLogo} alt="" className="footer-logo" />
                        <p className="footer-desc">
                            Createx Online School is a leader in online studying. We have lots of
                            courses and programs from the main market experts. We provide relevant
                            approaches to online learning, internships and employment in the largest
                            companies in the country.
                        </p>
                        <div className="footer-socials">
                            <img src={fbIcon} alt="" className="soc-icon" />
                            <img src={twIcon} alt="" className="soc-icon" />
                            <img src={ytIcon} alt="" className="soc-icon" />
                            <img src={tgIcon} alt="" className="soc-icon" />
                            <img src={igIcon} alt="" className="soc-icon" />
                            <img src={inIcon} alt="" className="soc-icon" />
                        </div>
                    </div>

                    <div className="footer-col">
                        <p className="footer-title">SITE MAP</p>
                        <div className="footer-links-block">
                            <Link to="/about" className="footer-link">
                                About Us
                            </Link>
                            <Link to="/courses" className="footer-link">
                                Courses
                            </Link>
                            <Link to="/events" className="footer-link">
                                Events
                            </Link>
                            <Link to="/blog" className="footer-link">
                                Blog
                            </Link>
                            <Link to="/contacts" className="footer-link">
                                Contacts
                            </Link>
                        </div>
                    </div>

                    <div className="footer-col">
                        <p className="footer-title">COURSES</p>
                        <div className="footer-links-block">
                            <Link to="/courses" className="footer-link">
                                Marketing
                            </Link>
                            <Link to="/courses" className="footer-link">
                                Management
                            </Link>
                            <Link to="/courses" className="footer-link">
                                HR & Recruiting
                            </Link>
                            <Link to="/courses" className="footer-link">
                                Design
                            </Link>
                            <Link to="/courses" className="footer-link">
                                Development
                            </Link>
                        </div>
                    </div>

                    <div className="footer-col">
                        <p className="footer-title">CONTACT US</p>
                        <div className="footer-contact-block">
                            <div className="footer-contact">
                                <img src={phoneIco} alt="" className="contact-icon" />
                                <p className="contact-text">(405) 555-0128</p>
                            </div>
                            <div className="footer-contact">
                                <img src={mailIco} alt="" className="contact-icon" />
                                <p className="contact-text">hello@createx.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="footer-col-long">
                        <div className="footer-long-inner">
                            <p className="footer-title">SIGN UP TO OUR NEWSLETTER</p>
                            <div className="footer-form">
                                <input
                                    type="text"
                                    className="footer-input"
                                    placeholder="Email address"
                                />
                                <img src={arrowRight} alt="" className="footer-input-arrow" />
                            </div>
                            <p className="footer-note">
                                *Subscribe to our newsletter to receive communications and early
                                updates from Createx SEO Agency.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-container">
                        <p className="footer-copy">
                            © All rights reserved. Made with
                            <span className="heart">
                                <img src={HeartFot} alt="" />
                            </span>
                            by Createx Studio
                        </p>
                        <div className="footer-up">
                            <p className="up-text">GO TO TOP</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Contacts;
