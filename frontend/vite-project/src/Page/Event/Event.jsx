import { Link } from 'react-router-dom';
import './Event.scss';

import logo from '../../assets/logo.svg';
import loginIcon from '../../assets/loginIcon.svg';
import checkIcon from '../../assets/checkIcon.svg';
import kathrynSpeaker from '../../assets/kathrynSpeaker.png';
import fbIcon from '../../assets/fbIcon.svg';
import twIcon from '../../assets/twIcon.svg';
import inIcon from '../../assets/inIcon.svg';
import arrowLeft from '../../assets/arrowLeft.svg';
import arrowRight from '../../assets/arrowRight.svg';
import arrowRightGray from '../../assets/arrowRightGray.svg';
import subscribeEventImage from '../../assets/subscribeEventImage.png';
import eventRegisterImage from '../../assets/eventRegisterImage.png';

import footerLogo from '../../assets/footerLogo.svg';
import ytIcon from '../../assets/ytIcon.svg';
import tgIcon from '../../assets/tgIcon.svg';
import igIcon from '../../assets/igIcon.svg';
import phoneIco from '../../assets/phoneIco.svg';
import mailIco from '../../assets/mailIco.svg';
import HeartFot from '../../assets/HeartFot.svg';

import DelMar from '../../assets/DelMar.svg';
import SentinalCons from '../../assets/SentinalCons.svg';
import National from '../../assets/National.svg';

import fbIconGray from '../../assets/facebookGray.svg';
import beIconGray from '../../assets/beIcon.svg';
import twIconGray from '../../assets/twitterGray.svg';
import inIconGray from '../../assets/linkedInRed.svg';

function Event() {
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
                <section className="event-hero">
                    <div className="container">
                        <p className="hero-subtitle">ONLINE LECTURE</p>
                        <h1 className="hero-title">
                            Formation of the organizational structure of the company in the face of
                            uncertainty
                        </h1>
                    </div>
                </section>

                <section className="event-about">
                    <div className="container">
                        <div className="about-left">
                            <h2 className="about-title">We will talk about:</h2>

                            <div className="talk-list">
                                <div className="talk-item talk-item-active">
                                    <div className="talk-header">
                                        <p className="talk-lesson">Theme 1.</p>
                                        <p className="talk-name">
                                            Aliquet lectus urna viverra in odio.
                                        </p>
                                    </div>
                                    <p className="talk-desc">
                                        Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec
                                        pulvinar aliquet donec enim, ornare. Lacus facilisi
                                        curabitur turpis varius mauris. Nisi, tempus risus, odio mi
                                        suscipit sed. Curabitur faucibus porttitor quis sem lacus,
                                        arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.
                                    </p>
                                </div>
                                <div className="talk-item">
                                    <div className="talk-header">
                                        <p className="talk-lesson">Theme 2.</p>
                                        <p className="talk-name">
                                            Orci commodo, viverra orci mollis ut euismod.
                                        </p>
                                    </div>
                                </div>
                                <div className="talk-item">
                                    <div className="talk-header">
                                        <p className="talk-lesson">Theme 3.</p>
                                        <p className="talk-name">
                                            Sagittis vitae facilisi rutrum amet mauris quisque vel.
                                        </p>
                                    </div>
                                </div>
                                <div className="talk-item">
                                    <div className="talk-header">
                                        <p className="talk-lesson">Theme 4.</p>
                                        <p className="talk-name">
                                            In id dolor quis nunc, urna hendrerit pharetra.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about-right">
                            <div className="info-card">
                                <div className="info-block-time">
                                    <p className="info-label">TIME</p>
                                    <p className="info-value">August 5, 11:00 – 14:00</p>
                                    <p className="info-desc">
                                        Metus turpis sit lorem lacus, in elit tellus lacus.
                                    </p>
                                </div>
                                <div className="info-block-price">
                                    <p className="info-label">PRICE</p>
                                    <p className="info-value">Free</p>
                                    <p className="info-desc">
                                        Nulla sem adipiscing adipiscing felis fringilla. Adipiscing
                                        mauris quam ac elit tristique dis.
                                    </p>
                                </div>
                                <div className="info-block-event">
                                    <p className="info-label">EVENT ON FACEBOOK</p>
                                </div>
                                <button className="info-btn">Join the event</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="event-speaker">
                    <div className="container">
                        <div className="speaker-pic-cont">
                            <img src={kathrynSpeaker} alt="" className="speaker-pic" />
                        </div>
                        <div className="speaker-info">
                            <p className="speaker-subtitle">SPEAKER</p>
                            <h2 className="speaker-title">Kathryn Murphy</h2>
                            <p className="speaker-role">
                                Analyst and Marketing specialist in IT company
                            </p>
                            <p className="speaker-desc">
                                Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus
                                curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet
                                id semper semper quis commodo, consequat. Massa rhoncus sit morbi
                                odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie
                                laoreet at massa sed pharetra. Ac commodo platea id habitasse proin.
                                Nullam sit nec ipsum posuere non. Nam vel aliquam tristique
                                sollicitudin interdum quam.
                            </p>

                            <div className="speaker-brands">
                                <img src={DelMar} alt="" className="brand-img" />
                                <img src={SentinalCons} alt="" className="brand-img" />
                                <img src={National} alt="" className="brand-img" />
                            </div>

                            <div className="speaker-socials">
                                <img src={fbIconGray} alt="" className="soc-icon" />
                                <img src={beIconGray} alt="" className="soc-icon" />
                                <img src={twIconGray} alt="" className="soc-icon" />
                                <img src={inIconGray} alt="" className="soc-icon" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="for-whom">
                    <div className="container">
                        <div className="whom-left">
                            <div className="whom-left-inner">
                                <p className="whom-subtitle">FOR WHOM?</p>
                                <h2 className="whom-title">Who will benefit from the event:</h2>
                            </div>
                        </div>
                        <div className="whom-right">
                            <div className="whom-right-inner">
                                <div className="whom-item">
                                    <img src={checkIcon} alt="" className="whom-icon" />
                                    <p className="whom-text">
                                        Specialists with more than 1 year of active work experience
                                    </p>
                                </div>
                                <div className="whom-item">
                                    <img src={checkIcon} alt="" className="whom-icon" />
                                    <p className="whom-text">
                                        Mobile app designers who want to improve their skills in
                                        solving business problems, creating and testing
                                        human-centered interfaces
                                    </p>
                                </div>
                                <div className="whom-item">
                                    <img src={checkIcon} alt="" className="whom-icon" />
                                    <p className="whom-text">
                                        Professional designers who want to feel more confident in UX
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="event-subscribe">
                    <div className="container">
                        <div className="sub-inner">
                            <div className="sub-left">
                                <img src={subscribeEventImage} alt="" className="sub-pic" />
                            </div>
                            <div className="sub-right">
                                <h2 className="sub-title">
                                    Don’t want to miss the best events? Subscribe to our newsletter!
                                </h2>
                                <div className="sub-form">
                                    <div className="sub-input-cont">
                                        <div className="sub-spacer"></div>
                                        <p className="sub-placeholder">Your working email</p>
                                    </div>
                                    <button className="sub-btn">Subscribe</button>
                                </div>
                                <div className="sub-check">
                                    <input type="checkbox" />
                                    <p className="check-text">
                                        I agree to receive communications from Createx Online School
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="register">
                    <div className="container">
                        <div className="register-left">
                            <p className="register-subtitle">DON'T MISS THE EVENT</p>
                            <h2 className="register-title">Leave a request</h2>

                            <div className="register-form">
                                <div className="form-group">
                                    <p className="form-label">Full Name</p>
                                    <div className="form-input">
                                        <div className="input-spacer"></div>
                                        <p className="input-placeholder">Your full name</p>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <p className="form-label">Email</p>
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
                                <button className="register-btn">Join the event</button>
                            </div>
                            <p className="register-note">
                                * You will receive a link to the online lecture in an email after
                                registration.
                            </p>
                        </div>
                        <div className="register-right">
                            <img src={eventRegisterImage} alt="" className="register-pic" />
                        </div>
                    </div>
                </section>

                <section className="other-events">
                    <div className="container">
                        <div className="other-top">
                            <div className="other-titles">
                                <p className="other-subtitle">CHECK OTHER ONLINE EVENTS</p>
                                <h2 className="other-title">You may be interested in</h2>
                            </div>
                            <div className="other-arrows">
                                <img src={arrowLeft} alt="" className="other-arrow" />
                                <img src={arrowRightGray} alt="" className="other-arrow" />
                            </div>
                        </div>

                        <div className="other-grid">
                            <Link to="/event" className="event-card">
                                <div className="event-info">
                                    <div className="event-date-row">
                                        <p className="event-day">05</p>
                                        <p className="event-month">Aug</p>
                                    </div>
                                    <p className="event-time">11:00 – 14:00</p>
                                    <p className="event-title">
                                        Formation of the organizational structure of the company in
                                        the face of uncertainty.
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
                        </div>

                        <div className="other-bottom">
                            <p className="other-text">Do you want more?</p>
                            <div className="other-btn-spacer"></div>
                            <button className="btn-orange other-btn">Explore all events</button>
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

export default Event;
