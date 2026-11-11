import { Link } from 'react-router-dom';
import './EventsGrid.scss';

import logo from '../../assets/logo.svg';
import loginIcon from '../../assets/loginIcon.svg';
import arrowDown from '../../assets/arrowDown.svg';
import searchIcon from '../../assets/searchIcon.svg';
import listIcon from '../../assets/listIcon.svg';
import gridIcon from '../../assets/gridIcon.svg';
import arrowRightGray from '../../assets/arrowRightGray.svg';

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
import arrowRight from '../../assets/arrowRight.svg';
import HeartFot from '../../assets/HeartFot.svg';

function EventsGrid() {
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
                <section className="events-page">
                    <div className="container">
                        <div className="events-top">
                            <p className="events-subtitle">OUR EVENTS</p>
                            <h1 className="events-title">Lectures, workshops & master-classes</h1>
                        </div>

                        <div className="events-controls-row">
                            <div className="controls-left">
                                <div className="control-group">
                                    <p className="control-label">Event category</p>
                                    <div className="select-wrapper">
                                        <p className="select-text">all themes</p>
                                        <img src={arrowDown} alt="" className="select-icon" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <p className="control-label">Sort by</p>
                                    <div className="select-wrapper">
                                        <p className="select-text">newest</p>
                                        <img src={arrowDown} alt="" className="select-icon" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <p className="control-label">Show</p>
                                    <div className="select-wrapper select-wrapper-small">
                                        <p className="select-text">9</p>
                                        <img src={arrowDown} alt="" className="select-icon" />
                                    </div>
                                    <p className="control-text">events per page</p>
                                </div>
                            </div>

                            <div className="controls-right">
                                <div className="search-wrapper">
                                    <p className="search-text">Search event...</p>
                                    <img src={searchIcon} alt="" className="search-icon" />
                                </div>
                                <div className="view-toggles">
                                    <img
                                        src={listIcon}
                                        alt=""
                                        className="view-icon view-icon-active"
                                    />
                                    <Link to="/events-grid">
                                        <img src={gridIcon} alt="" className="view-icon" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="events-grid">
                            <div className="events-row">
                                <Link to="/event" className="event-card">
                                    <div className="event-info">
                                        <div className="event-date-row">
                                            <p className="event-day">05</p>
                                            <p className="event-month">Aug</p>
                                        </div>
                                        <p className="event-time">11:00 – 14:00</p>
                                        <p className="event-title">
                                            Formation of the organizational structure of the company
                                            in the face of uncertainty.
                                        </p>
                                        <p className="event-type">Online master-class</p>
                                    </div>
                                    <div className="event-btn event-btn-white">View more</div>
                                </Link>

                                <Link to="/event" className="event-card">
                                    <div className="event-info">
                                        <div className="event-date-row">
                                            <p className="event-day">24</p>
                                            <p className="event-month">Jul</p>
                                        </div>
                                        <p className="event-time">11:00 – 12:30</p>
                                        <p className="event-title">
                                            Building a customer service department. Best Practices.
                                        </p>
                                        <p className="event-type">Online lecture</p>
                                    </div>
                                    <div className="event-btn event-btn-white">View more</div>
                                </Link>

                                <Link to="/event" className="event-card">
                                    <div className="event-info">
                                        <div className="event-date-row">
                                            <p className="event-day">16</p>
                                            <p className="event-month">Jul</p>
                                        </div>
                                        <p className="event-time">10:00 – 13:00</p>
                                        <p className="event-title">
                                            How to apply methods of speculative design in practice.
                                            Worldbuilding prototyping.
                                        </p>
                                        <p className="event-type">Online workshop</p>
                                    </div>
                                    <div className="event-btn event-btn-white">View more</div>
                                </Link>
                            </div>

                            <div className="events-row">
                                <Link to="/event" className="event-card">
                                    <div className="event-info">
                                        <div className="event-date-row">
                                            <p className="event-day">10</p>
                                            <p className="event-month">Jul</p>
                                        </div>
                                        <p className="event-time">9:00 – 14:00</p>
                                        <p className="event-title">
                                            Find and evaluate: search and assessment tools for
                                            candidates.
                                        </p>
                                        <p className="event-type">Online workshop</p>
                                    </div>
                                    <div className="event-btn event-btn-white">View more</div>
                                </Link>

                                <Link to="/event" className="event-card">
                                    <div className="event-info">
                                        <div className="event-date-row">
                                            <p className="event-day">27</p>
                                            <p className="event-month">Jun</p>
                                        </div>
                                        <p className="event-time">15:00 – 19:00</p>
                                        <p className="event-title">
                                            Connection to Microsoft Excel and Google Sheets, Data
                                            Visualization in Power BI.
                                        </p>
                                        <p className="event-type">Online master-class</p>
                                    </div>
                                    <div className="event-btn event-btn-white">View more</div>
                                </Link>

                                <Link to="/event" className="event-card">
                                    <div className="event-info">
                                        <div className="event-date-row">
                                            <p className="event-day">15</p>
                                            <p className="event-month">Jun</p>
                                        </div>
                                        <p className="event-time">11:00 – 12:00</p>
                                        <p className="event-title">
                                            Marketing or growth hacking: main differences and what
                                            business needs
                                        </p>
                                        <p className="event-type">Online lecture</p>
                                    </div>
                                    <div className="event-btn event-btn-orange">View more</div>
                                </Link>
                            </div>

                            <div className="events-row">
                                <Link to="/event" className="event-card">
                                    <div className="event-info">
                                        <div className="event-date-row">
                                            <p className="event-day">02</p>
                                            <p className="event-month">Jul</p>
                                        </div>
                                        <p className="event-time">11:00 – 13:00</p>
                                        <p className="event-title">
                                            How to brief a client and present your design to approve
                                            it from the first show.
                                        </p>
                                        <p className="event-type">Online lecture</p>
                                    </div>
                                    <div className="event-btn event-btn-white">View more</div>
                                </Link>

                                <Link to="/event" className="event-card">
                                    <div className="event-info">
                                        <div className="event-date-row">
                                            <p className="event-day">29</p>
                                            <p className="event-month">May</p>
                                        </div>
                                        <p className="event-time">11:00 – 12:00</p>
                                        <p className="event-title">
                                            Who is a project manager and do I want to be PM?
                                        </p>
                                        <p className="event-type">Online lecture</p>
                                    </div>
                                    <div className="event-btn event-btn-white">View more</div>
                                </Link>

                                <Link to="/event" className="event-card">
                                    <div className="event-info">
                                        <div className="event-date-row">
                                            <p className="event-day">18</p>
                                            <p className="event-month">May</p>
                                        </div>
                                        <p className="event-time">10:00 – 12:00</p>
                                        <p className="event-title">
                                            The company's business page as an additional tool to
                                            support the announcement of vacancies.
                                        </p>
                                        <p className="event-type">Online lecture</p>
                                    </div>
                                    <div className="event-btn event-btn-white">View more</div>
                                </Link>
                            </div>
                        </div>

                        <div className="events-pagination">
                            <p className="page-num page-num-active">1</p>
                            <p className="page-num">2</p>
                            <p className="page-num">3</p>
                            <p className="page-num">4</p>
                            <img src={arrowRightGray} alt="" className="page-arrow" />
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

export default EventsGrid;
