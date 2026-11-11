import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.scss';

import logo from '../../assets/logo.svg';
import loginIcon from '../../assets/loginIcon.svg';
import searchIcon from '../../assets/searchIcon.svg';
import loadIcon from '../../assets/loadIcon.svg';

import courseOne from '../../assets/courseOne.png';
import courseTwo from '../../assets/courseTwo.png';
import courseThree from '../../assets/courseThree.png';
import courseFour from '../../assets/courseFour.png';
import courseFive from '../../assets/courseFive.png';
import courseSix from '../../assets/courseSix.png';
import courseSeven from '../../assets/courseSeven.png';
import courseEight from '../../assets/courseEight.png';
import courseNine from '../../assets/courseNine.png';

import quoteIcon from '../../assets/quoteIcon.svg';
import studentPhoto from '../../assets/studentPhoto.png';
import arrowLeft from '../../assets/arrowLeft.svg';
import arrowRight from '../../assets/arrowRight.svg';
import certificateBg from '../../assets/certificateBg.png';
import brandOne from '../../assets/brandOne.png';
import brandTwo from '../../assets/brandTwo.png';
import brandThree from '../../assets/brandThree.png';
import subscribeLeft from '../../assets/subscribeLeft.png';
import footerLogo from '../../assets/footerLogo.svg';
import fbIcon from '../../assets/fbIcon.svg';
import twIcon from '../../assets/twIcon.svg';
import ytIcon from '../../assets/ytIcon.svg';
import tgIcon from '../../assets/tgIcon.svg';
import igIcon from '../../assets/igIcon.svg';
import inIcon from '../../assets/inIcon.svg';
import phoneIco from '../../assets/phoneIco.svg';
import mailIco from '../../assets/mailIco.svg';
import arrowSm from '../../assets/arrowSm.svg';

import HeartFot from '../../assets/HeartFot.svg';

function Courses() {
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
                        <Link to="/blog" className="nav-link nav-link-active">
                            Blog
                        </Link>
                        <Link to="/contacts" className="nav-link">
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
                <section className="courses-page">
                    <div className="container">
                        <div className="courses-top">
                            <p className="courses-subtitle">ENJOY YOUR STUDYING!</p>
                            <h1 className="courses-title">Our online courses</h1>
                        </div>

                        <div className="courses-filter">
                            <div className="filter-left">
                                <button className="filter-btn filter-btn-active">
                                    <div className="filter-btn-inner">
                                        <p className="filter-name">All</p>
                                        <p className="filter-count">17</p>
                                    </div>
                                </button>
                                <button className="filter-btn">
                                    <div className="filter-btn-inner">
                                        <p className="filter-name">Marketing</p>
                                        <p className="filter-count">4</p>
                                    </div>
                                </button>
                                <button className="filter-btn">
                                    <div className="filter-btn-inner">
                                        <p className="filter-name">Management</p>
                                        <p className="filter-count">3</p>
                                    </div>
                                </button>
                                <button className="filter-btn">
                                    <div className="filter-btn-inner">
                                        <p className="filter-name">HR & Recruiting</p>
                                        <p className="filter-count">2</p>
                                    </div>
                                </button>
                                <button className="filter-btn">
                                    <div className="filter-btn-inner">
                                        <p className="filter-name">Design</p>
                                        <p className="filter-count">3</p>
                                    </div>
                                </button>
                                <button className="filter-btn">
                                    <div className="filter-btn-inner">
                                        <p className="filter-name">Development</p>
                                        <p className="filter-count">5</p>
                                    </div>
                                </button>
                            </div>
                            <div className="filter-right">
                                <div className="search-input-cont">
                                    <div className="search-spacer"></div>
                                    <p className="search-placeholder">Search course...</p>
                                </div>
                                <img src={searchIcon} alt="" className="search-icon" />
                            </div>
                        </div>

                        <div className="courses-grid">
                            <div className="courses-row">
                                <Link to="/course" className="course-card">
                                    <div className="course-pic-cont">
                                        <img src={courseOne} alt="" className="course-pic" />
                                    </div>
                                    <div className="course-info">
                                        <div className="container-info">
                                            <div className="course-tag course-tag-marketing">
                                                <div className="tag-spacer"></div>
                                                <p className="tag-text">Marketing</p>
                                                <div className="tag-spacer"></div>
                                            </div>
                                            <p className="course-name">
                                                The Ultimate Google Ads Training Course
                                            </p>
                                            <p className="course-price">
                                                $100
                                                <span className="course-author">
                                                    | by Jerome Bell
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/course" className="course-card">
                                    <div className="course-pic-cont">
                                        <img src={courseTwo} alt="" className="course-pic" />
                                    </div>
                                    <div className="course-info">
                                        <div className="container-info">
                                            <div className="course-tag course-tag-management">
                                                <div className="tag-spacer"></div>
                                                <p className="tag-text">Management</p>
                                                <div className="tag-spacer"></div>
                                            </div>
                                            <p className="course-name">
                                                Product Management Fundamentals
                                            </p>
                                            <p className="course-price">
                                                $480
                                                <span className="course-author">
                                                    | by Marvin McKinney
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/course" className="course-card">
                                    <div className="course-pic-cont">
                                        <img src={courseThree} alt="" className="course-pic" />
                                    </div>
                                    <div className="course-info">
                                        <div className="container-info">
                                            <div className="course-tag course-tag-hr">
                                                <div className="tag-spacer"></div>
                                                <p className="tag-text">HR & Recruiting</p>
                                                <div className="tag-spacer"></div>
                                            </div>
                                            <p className="course-name">
                                                HR Management and Analytics
                                            </p>
                                            <p className="course-price">
                                                $200
                                                <span className="course-author">
                                                    | by Leslie Alexander Li
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="courses-row">
                                <Link to="/course" className="course-card">
                                    <div className="course-pic-cont">
                                        <img src={courseFour} alt="" className="course-pic" />
                                    </div>
                                    <div className="course-info">
                                        <div className="container-info">
                                            <div className="course-tag course-tag-marketing">
                                                <div className="tag-spacer"></div>
                                                <p className="tag-text">Marketing</p>
                                                <div className="tag-spacer"></div>
                                            </div>
                                            <p className="course-name">
                                                Brand Management & PR Communications
                                            </p>
                                            <p className="course-price">
                                                $530
                                                <span className="course-author">
                                                    | by Kristin Watson
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/course" className="course-card">
                                    <div className="course-pic-cont">
                                        <img src={courseFive} alt="" className="course-pic" />
                                    </div>
                                    <div className="course-info">
                                        <div className="container-info">
                                            <div className="course-tag course-tag-design">
                                                <div className="tag-spacer"></div>
                                                <p className="tag-text">Design</p>
                                                <div className="tag-spacer"></div>
                                            </div>
                                            <p className="course-name">Graphic Design Basic</p>
                                            <p className="course-price">
                                                $500
                                                <span className="course-author">
                                                    | by Guy Hawkins
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/course" className="course-card">
                                    <div className="course-pic-cont">
                                        <img src={courseSix} alt="" className="course-pic" />
                                    </div>
                                    <div className="course-info">
                                        <div className="container-info">
                                            <div className="course-tag course-tag-management">
                                                <div className="tag-spacer"></div>
                                                <p className="tag-text">Management</p>
                                                <div className="tag-spacer"></div>
                                            </div>
                                            <p className="course-name">
                                                Business Development Management
                                            </p>
                                            <p className="course-price">
                                                $400
                                                <span className="course-author">
                                                    | by Dianne Russell
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="courses-row">
                                <Link to="/course" className="course-card">
                                    <div className="course-pic-cont">
                                        <img src={courseSeven} alt="" className="course-pic" />
                                    </div>
                                    <div className="course-info">
                                        <div className="container-info">
                                            <div className="course-tag course-tag-development">
                                                <div className="tag-spacer"></div>
                                                <p className="tag-text">Development</p>
                                                <div className="tag-spacer"></div>
                                            </div>
                                            <p className="course-name">
                                                Highload Software Architecture
                                            </p>
                                            <p className="course-price">
                                                $600
                                                <span className="course-author">
                                                    | by Brooklyn Simmons
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/course" className="course-card">
                                    <div className="course-pic-cont">
                                        <img src={courseEight} alt="" className="course-pic" />
                                    </div>
                                    <div className="course-info">
                                        <div className="container-info">
                                            <div className="course-tag course-tag-hr">
                                                <div className="tag-spacer"></div>
                                                <p className="tag-text">HR & Recruiting</p>
                                                <div className="tag-spacer"></div>
                                            </div>
                                            <p className="course-name">
                                                Human Resources – Selection and Recruitment
                                            </p>
                                            <p className="course-price">
                                                $150
                                                <span className="course-author">
                                                    | by Kathryn Murphy
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/course" className="course-card">
                                    <div className="course-pic-cont">
                                        <img src={courseNine} alt="" className="course-pic" />
                                    </div>
                                    <div className="course-info">
                                        <div className="container-info">
                                            <div className="course-tag course-tag-design">
                                                <div className="tag-spacer"></div>
                                                <p className="tag-text">Design</p>
                                                <div className="tag-spacer"></div>
                                            </div>
                                            <p className="course-name">
                                                User Experience. Human-centered Design
                                            </p>
                                            <p className="course-price">
                                                $240
                                                <span className="course-author">
                                                    | by Cody Fisher
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="courses-load">
                            <img src={loadIcon} alt="" className="load-icon" />
                            <p className="load-text">Load more</p>
                        </div>
                    </div>
                </section>

                <section className="testimonials">
                    <div className="container">
                        <div className="testimonials-top">
                            <p className="testimonials-subtitle">TESTIMONIALS</p>
                            <h2 className="testimonials-title">What our students say</h2>
                        </div>

                        <div className="testimonial-wrapper">
                            <img src={arrowLeft} alt="" className="arrow-left" />

                            <div className="testimonial-card">
                                <div className="testimonial-inner">
                                    <img src={quoteIcon} alt="" className="quote-icon" />
                                    <p className="quote-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Justo, amet lectus quam viverra mus lobortis fermentum amet,
                                        eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus
                                        ornare turpis quis non. Congue tortor in euismod vulputate
                                        etiam eros. Pulvinar neque pharetra arcu diam maecenas diam
                                        integer in.
                                    </p>
                                    <div className="quote-author">
                                        <img src={studentPhoto} alt="" className="author-photo" />
                                        <div className="author-info">
                                            <p className="author-name">Eleanor Pena</p>
                                            <p className="author-role">Position, Course</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <img src={arrowRight} alt="" className="arrow-right" />
                        </div>

                        <div className="testimonials-dots">
                            <div className="dot dot-active"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </div>
                    </div>
                </section>

                <section className="certificate">
                    <div className="container">
                        <div className="certificate-text">
                            <p className="certificate-subtitle">CREATE X CERTIFICATE</p>
                            <h2 className="certificate-title">Your expertise will be confirmed</h2>
                            <p className="certificate-desc">
                                We are accredited by international professional organizations and
                                institutes:
                            </p>
                            <div className="certificate-brands">
                                <img src={brandOne} alt="" className="brand-logo" />
                                <img src={brandTwo} alt="" className="brand-logo" />
                                <img src={brandThree} alt="" className="brand-logo" />
                            </div>
                        </div>
                        <div className="certificate-pic">
                            <img src={certificateBg} alt="" />
                        </div>
                    </div>
                </section>

                <section className="subscribe">
                    <img src={subscribeLeft} alt="" className="sub-pic-left" />
                    <div className="sub-container">
                        <p className="sub-subtitle">DON'T MISS ANYTHING</p>
                        <h2 className="sub-title">Subscribe to the Createx School announcements</h2>
                        <div className="sub-form">
                            <div className="sub-input-cont">
                                <div className="sub-spacer"></div>
                                <p className="sub-placeholder">Your working email</p>
                            </div>
                            <button className="btn-orange sub-btn">Subscribe</button>
                        </div>
                    </div>
                    <img src={subscribeLeft} alt="" className="sub-pic-right" />
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

export default Courses;
