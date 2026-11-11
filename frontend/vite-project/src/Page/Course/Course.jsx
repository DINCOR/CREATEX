import { Link } from 'react-router-dom';
import './Course.scss';

import logo from '../../assets/logo.svg';
import loginIcon from '../../assets/loginIcon.svg';
import checkIcon from '../../assets/checkIcon.svg';
import fbIcon from '../../assets/facebookGray.svg';
import beIcon from '../../assets/beIcon.svg';
import twIcon from '../../assets/twitterGray.svg';
import inIcon from '../../assets/linkedInRed.svg';
import quoteIcon from '../../assets/quoteIcon.svg';
import studentPhoto from '../../assets/studentPhoto.png';
import arrowLeft from '../../assets/arrowLeft.svg';
import arrowRight from '../../assets/arrowRight.svg';
import arrowRightGray from '../../assets/arrowRightGray.svg';
import courseProgramImage from '../../assets/courseProgramImage.png';
import courseRegisterImage from '../../assets/courseRegisterImage.png';

import courseOne from '../../assets/courseOne.png';
import courseTwo from '../../assets/courseTwo.png';

import fisherCourse from '../../assets/fisherCourse.png';

import footerLogo from '../../assets/footerLogo.svg';
import ytIcon from '../../assets/ytIcon.svg';
import tgIcon from '../../assets/tgIcon.svg';
import igIcon from '../../assets/igIcon.svg';
import phoneIco from '../../assets/phoneIco.svg';
import mailIco from '../../assets/mailIco.svg';

import starRed from '../../assets/starRed.svg';
import playRed from '../../assets/playRed.svg';
import personRed from '../../assets/personRed.svg';

import HeartFot from '../../assets/HeartFot.svg';

function Course() {
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

            <main className="main-course">
                <section className="course-hero">
                    <div className="container">
                        <p className="hero-subtitle">COURSE</p>
                        <h1 className="hero-title">
                            User Experience. Principles of Human-Centered Design
                        </h1>
                    </div>
                </section>

                <section className="course-about">
                    <div className="container">
                        <div className="about-left">
                            <h2 className="about-title">About the course</h2>
                            <p className="about-text">
                                Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo
                                aenean congue in sagittis, felis maecenas amet varius at.
                                Pellentesque euismod in faucibus at elementum. Tellus maecenas
                                libero est tempus sit cras at malesuada diam. Consequat senectus
                                dictumst non hac dignissim montes, pretium, egestas molestie. Sed
                                magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus
                                nunc tincidunt tortor, mi nulla pellentesque
                            </p>

                            <h3 className="learn-title">You will learn:</h3>
                            <div className="learn-list">
                                <div className="learn-item">
                                    <img src={checkIcon} alt="" className="learn-icon" />
                                    <p className="learn-text">
                                        A fermentum in morbi pretium aliquam adipiscing donec
                                        tempus.
                                    </p>
                                </div>
                                <div className="learn-item">
                                    <img src={checkIcon} alt="" className="learn-icon" />
                                    <p className="learn-text">
                                        Vulputate placerat amet pulvinar lorem nisl.
                                    </p>
                                </div>
                                <div className="learn-item">
                                    <img src={checkIcon} alt="" className="learn-icon" />
                                    <p className="learn-text">
                                        Consequat feugiat habitant gravida quisque elit bibendum id
                                        adipiscing sed.
                                    </p>
                                </div>
                                <div className="learn-item">
                                    <img src={checkIcon} alt="" className="learn-icon" />
                                    <p className="learn-text">
                                        Etiam duis lobortis in fames ultrices commodo nibh.
                                    </p>
                                </div>
                                <div className="learn-item">
                                    <img src={checkIcon} alt="" className="learn-icon" />
                                    <p className="learn-text">
                                        Fringilla in nec risus congue venenatis pretium posuere nec.
                                    </p>
                                </div>
                                <div className="learn-item">
                                    <img src={checkIcon} alt="" className="learn-icon" />
                                    <p className="learn-text">
                                        Cursus eu pretium, vulputate tempus quam massa sed at.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="about-right">
                            <div className="info-card">
                                <div className="info-block">
                                    <p className="info-label">DATES</p>
                                    <p className="info-value">Sept 7 – Nov 2</p>
                                    <p className="info-desc">
                                        Metus turpis sit lorem lacus, in elit tellus lacus.
                                    </p>
                                </div>
                                <div className="info-block">
                                    <p className="info-label">DURATION</p>
                                    <p className="info-value">2 months – 8 lessons</p>
                                    <p className="info-desc">
                                        Rhoncus pellentesque auctor auctor orci vulputate faucibus
                                        quis ut.
                                    </p>
                                </div>
                                <div className="info-block">
                                    <p className="info-label">PRICE</p>
                                    <p className="info-value">$120 per month</p>
                                    <p className="info-desc">
                                        Nulla sem adipiscing adipiscing felis fringilla. Adipiscing
                                        mauris quam ac elit tristique dis.
                                    </p>
                                </div>
                                <button className="info-btn">Join the course</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="course-curator">
                    <div className="container">
                        <div className="curator-pic-cont">
                            <img src={fisherCourse} alt="" className="curator-pic" />
                        </div>
                        <div className="curator-info">
                            <p className="curator-subtitle">COURSE CURATOR</p>
                            <h2 className="curator-title">Cody Fisher</h2>
                            <p className="curator-role">Senior UX designer in IT Product Company</p>

                            <div className="curator-stats">
                                <div className="curator-stat">
                                    <img src={starRed} alt="" />
                                    <p className="stat-value">4.9 rate</p>
                                </div>
                                <div className="curator-stat">
                                    <img src={playRed} alt="" />
                                    <p className="stat-value">4 courses</p>
                                </div>
                                <div className="curator-stat">
                                    <img src={personRed} alt="" />
                                    <p className="stat-value">350 students</p>
                                </div>
                            </div>

                            <p className="curator-desc">
                                Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus
                                curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet
                                id semper semper quis commodo, consequat. Massa rhoncus sit morbi
                                odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie
                                laoreet at massa sed pharetra. Ac commodo platea id habitasse proin.
                                Nullam sit nec ipsum posuere non. Nam vel aliquam tristique
                                sollicitudin interdum quam.
                            </p>

                            <div className="curator-socials">
                                <img src={fbIcon} alt="" className="soc-icon" />
                                <img src={beIcon} alt="" className="soc-icon" />
                                <img src={twIcon} alt="" className="soc-icon" />
                                <img src={inIcon} alt="" className="soc-icon" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="process">
                    <div className="container">
                        <div className="process-top">
                            <p className="process-subtitle">MAIN STEPS</p>
                            <h2 className="process-title">Online learning process</h2>
                        </div>
                        <div className="process-list">
                            <div className="process-item">
                                <p className="process-number">01</p>
                                <p className="process-name">Watching online video lectures</p>
                                <p className="process-desc">
                                    Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam
                                    velit nostrud aliquip sunt.
                                </p>
                            </div>
                            <div className="process-item">
                                <p className="process-number">02</p>
                                <p className="process-name">Passing test</p>
                                <p className="process-desc">
                                    Anim reprehenderit sint voluptate exercitation adipisicing
                                    laborum adipisicing. Minim ad tempor est ea.
                                </p>
                            </div>
                            <div className="process-item">
                                <p className="process-number">03</p>
                                <p className="process-name">Curator's feedback</p>
                                <p className="process-desc">
                                    Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore
                                    dolore et ad et veniam ad deserunt.
                                </p>
                            </div>
                            <div className="process-item process-item-active">
                                <p className="process-number">04</p>
                                <p className="process-name">Corrections if needed</p>
                                <p className="process-desc">
                                    Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit
                                    voluptate ullamco proident ea ad.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="discount">
                    <div className="container">
                        <div className="discount-inner">
                            <div className="discount-top">
                                <h2 className="discount-title">20% discount for early birds!</h2>
                                <div className="timer">
                                    <div className="timer-item">
                                        <p className="timer-value">06</p>
                                        <p className="timer-label">Days</p>
                                    </div>
                                    <div className="timer-item">
                                        <p className="timer-value">18</p>
                                        <p className="timer-label">Hours</p>
                                    </div>
                                    <div className="timer-item">
                                        <p className="timer-value">24</p>
                                        <p className="timer-label">Mins</p>
                                    </div>
                                    <div className="timer-item">
                                        <p className="timer-value">12</p>
                                        <p className="timer-label">Sec</p>
                                    </div>
                                </div>
                            </div>
                            <div className="discount-bottom">
                                <div className="discount-form">
                                    <div className="form-group">
                                        <p className="form-label">Full name</p>
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
                                    <button className="form-btn">Join the course</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="for-whom">
                    <div className="container">
                        <div className="whom-left">
                            <p className="whom-subtitle">FOR WHOM?</p>
                            <h2 className="whom-title">Who will benefit from the course:</h2>
                        </div>
                        <div className="whom-right">
                            <div className="whom-item">
                                <img src={checkIcon} alt="" className="whom-icon" />
                                <p className="whom-text">
                                    Specialists with more than 1 year of active work experience
                                </p>
                            </div>
                            <div className="whom-item">
                                <img src={checkIcon} alt="" className="whom-icon" />
                                <p className="whom-text">
                                    Mobile app designers who want to improve their skills in solving
                                    business problems, creating and testing human-centered
                                    interfaces
                                </p>
                            </div>
                            <div className="whom-item">
                                <img src={checkIcon} alt="" className="whom-icon" />
                                <p className="whom-text">
                                    Professional designers who want to feel more confident in UX
                                </p>
                            </div>
                            <div className="whom-item">
                                <img src={checkIcon} alt="" className="whom-icon" />
                                <p className="whom-text">
                                    Specialists who would like to structure their knowledge, fill in
                                    the gaps
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="program">
                    <div className="container">
                        <div className="program-left">
                            <p className="program-subtitle">COURSE PROGRAM</p>
                            <h2 className="program-title">What will you learn</h2>

                            <div className="program-list">
                                <div className="program-item program-item-active">
                                    <div className="program-header">
                                        <p className="program-lesson">Lesson 1.</p>
                                        <p className="program-name">
                                            Aliquet lectus urna viverra in odio.
                                        </p>
                                    </div>
                                    <p className="program-desc">
                                        Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec
                                        pulvinar aliquet donec enim, ornare. Lacus facilisi
                                        curabitur turpis varius mauris. Nisi, tempus risus, odio mi
                                        suscipit sed. Curabitur faucibus porttitor quis sem lacus,
                                        arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.
                                    </p>
                                </div>
                                <div className="program-item">
                                    <div className="program-header">
                                        <p className="program-lesson">Lesson 2.</p>
                                        <p className="program-name">
                                            Orci commodo, viverra orci mollis ut euismod.
                                        </p>
                                    </div>
                                </div>
                                <div className="program-item">
                                    <div className="program-header">
                                        <p className="program-lesson">Lesson 3.</p>
                                        <p className="program-name">
                                            Sagittis vitae facilisi rutrum amet mauris quisque vel.
                                        </p>
                                    </div>
                                </div>
                                <div className="program-item">
                                    <div className="program-header">
                                        <p className="program-lesson">Lesson 4.</p>
                                        <p className="program-name">
                                            In id dolor quis nunc, urna hendrerit pharetra.
                                        </p>
                                    </div>
                                </div>
                                <div className="program-item">
                                    <div className="program-header">
                                        <p className="program-lesson">Lesson 5.</p>
                                        <p className="program-name">
                                            Est, ut tempus id rutrum facilisi.
                                        </p>
                                    </div>
                                </div>
                                <div className="program-item">
                                    <div className="program-header">
                                        <p className="program-lesson">Lesson 6.</p>
                                        <p className="program-name">Amet nec in pellentesque.</p>
                                    </div>
                                </div>
                                <div className="program-item">
                                    <div className="program-header">
                                        <p className="program-lesson">Lesson 7.</p>
                                        <p className="program-name">
                                            Massa vel arcu mauris, id vel rhoncus mattis quis.
                                        </p>
                                    </div>
                                </div>
                                <div className="program-item">
                                    <div className="program-header">
                                        <p className="program-lesson">Lesson 8.</p>
                                        <p className="program-name">
                                            Neque, cursus sapien nulla id.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="program-right">
                            <img src={courseProgramImage} alt="" className="" />
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

                <section className="register">
                    <div className="container">
                        <div className="register-left-course">
                            <img src={courseRegisterImage} alt="" className="register-pic" />
                        </div>
                        <div className="register-right-course">
                            <p className="register-subtitle">
                                LEAVE A REQUEST NOW AND GET 20% OFF!
                            </p>
                            <h2 className="register-title">Register for the course</h2>

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
                                <button className="register-btn">Join the course</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="other-courses">
                    <div className="container">
                        <div className="other-top">
                            <div className="other-titles">
                                <p className="other-subtitle">CHECK OTHER COURSES</p>
                                <h2 className="other-title">You may also like</h2>
                            </div>
                            <div className="other-arrows">
                                <img src={arrowLeft} alt="" className="other-arrow" />
                                <img src={arrowRightGray} alt="" className="other-arrow" />
                            </div>
                        </div>

                        <div className="other-grid">
                            <Link to="/course-single" className="course-card">
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
                                            <span className="course-author">| by Jerome Bell</span>
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/course-single" className="course-card">
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
                        </div>

                        <div className="other-bottom">
                            <p className="other-text">Do you want more courses?</p>
                            <div className="other-btn-spacer"></div>
                            <button className="btn-orange other-btn">View all courses</button>
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

export default Course;
