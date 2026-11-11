import { Link } from 'react-router-dom';
import './Homepage.scss';

import logo from '../../assets/logo.svg';
import playIcon from '../../assets/playIcon.svg';
import heroImage from '../../assets/heroImage.png';
import aboutImage from '../../assets/aboutImage.png';
import checkIcon from '../../assets/checkIcon.svg';
import courseOne from '../../assets/courseOne.png';
import courseTwo from '../../assets/courseTwo.png';
import courseThree from '../../assets/courseThree.png';
import courseFour from '../../assets/courseFour.png';
import courseFive from '../../assets/courseFive.png';
import courseSix from '../../assets/courseSix.png';
import benefitsImage from '../../assets/benefitsImage.png';
import starIcon from '../../assets/starIcon.svg';
import likeIcon from '../../assets/likeIcon.svg';
import libraryIcon from '../../assets/libraryIcon.svg';
import chatIcon from '../../assets/chatIcon.svg';

import certificateBg from '../../assets/certificateBg.png';
import brandOne from '../../assets/brandOne.png';
import brandTwo from '../../assets/brandTwo.png';
import brandThree from '../../assets/brandThree.png';
import tutorOne from '../../assets/tutorOne.png';
import tutorTwo from '../../assets/tutorTwo.png';
import tutorThree from '../../assets/tutorThree.png';
import tutorFour from '../../assets/tutorFour.png';
import quoteIcon from '../../assets/quoteIcon.svg';
import studentPhoto from '../../assets/studentPhoto.png';
import arrowLeft from '../../assets/arrowLeft.svg';
import arrowRight from '../../assets/arrowRight.svg';

import blogOne from '../../assets/blogOne.png';
import blogTwo from '../../assets/blogTwo.png';
import blogThree from '../../assets/blogThree.png';
import playSmall from '../../assets/playSmall.svg';
import micIcon from '../../assets/micIcon.svg';
import fileIcon from '../../assets/fileIcon.svg';
import calendarIcon from '../../assets/calendarIcon.svg';
import clockIcon from '../../assets/clockIcon.svg';
import arrowSm from '../../assets/arrowSm.svg';
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
import HeartFot from '../../assets/HeartFot.svg';
import loginIcon from '../../assets/loginIcon.svg';

function Homepage() {
    return (
        <>
            <header className="header-homepage">
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
                <section className="enjoy">
                    <div className="enjoy-container">
                        <div className="top">
                            <div className="text">
                                <div className="play">
                                    <div className="play-circle">
                                        <img src={playIcon} alt="" className="play-icon" />
                                    </div>
                                    <p className="play-text">Play showreel</p>
                                </div>
                                <h1 className="title">
                                    Enjoy studying with Createx Online Courses
                                </h1>
                                <div className="buttons">
                                    <Link to="/about" className="btn-white">
                                        About us
                                    </Link>
                                    <Link to="/courses" className="btn-orange">
                                        Explore courses
                                    </Link>
                                </div>
                            </div>
                            <div className="pic">
                                <img src={heroImage} alt="" />
                            </div>
                        </div>
                        <div className="stats">
                            <div className="stat">
                                <p className="stat-number">1200</p>
                                <p className="stat-label">Students graduated</p>
                            </div>
                            <div className="stat-dot"></div>
                            <div className="stat">
                                <p className="stat-number">84</p>
                                <p className="stat-label">Completed courses</p>
                            </div>
                            <div className="stat-dot"></div>
                            <div className="stat">
                                <p className="stat-number">16</p>
                                <p className="stat-label">Qualified tutors</p>
                            </div>
                            <div className="stat-dot"></div>
                            <div className="stat">
                                <p className="stat-number">5</p>
                                <p className="stat-label">Years of experience</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about">
                    <div className="container">
                        <div className="about-left">
                            <img src={aboutImage} alt="" className="about-pic" />
                        </div>
                        <div className="about-right">
                            <p className="about-subtitle">WHO WE ARE</p>
                            <h2 className="about-title">Why Createx?</h2>
                            <div className="about-list">
                                <div className="about-item">
                                    <img src={checkIcon} alt="" className="check-icon" />
                                    <p>
                                        A fermentum in morbi pretium aliquam adipiscing donec
                                        tempus.
                                    </p>
                                </div>
                                <div className="about-item">
                                    <img src={checkIcon} alt="" className="check-icon" />
                                    <p>Vulputate placerat amet pulvinar lorem nisl.</p>
                                </div>
                                <div className="about-item">
                                    <img src={checkIcon} alt="" className="check-icon" />
                                    <p>
                                        Consequat feugiat habitant gravida quisque elit bibendum id
                                        adipiscing sed.
                                    </p>
                                </div>
                                <div className="about-item">
                                    <img src={checkIcon} alt="" className="check-icon" />
                                    <p>Etiam duis lobortis in fames ultrices commodo nibh.</p>
                                </div>
                                <div className="about-item">
                                    <img src={checkIcon} alt="" className="check-icon" />
                                    <p>Tincidunt sagittis neque sem ac eget.</p>
                                </div>
                                <div className="about-item">
                                    <img src={checkIcon} alt="" className="check-icon" />
                                    <p>
                                        Ultricies amet justo et eget quisque purus vulputate dapibus
                                        tortor.
                                    </p>
                                </div>
                            </div>
                            <Link to="/about" className="btn-orange">
                                More about us
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="courses">
                    <div className="container">
                        <div className="courses-top">
                            <div>
                                <p className="courses-subtitle">READY TO LEARN?</p>
                                <h2 className="courses-title">Featured Courses</h2>
                            </div>
                            <Link to="/courses" className="btn-white">
                                View all courses
                            </Link>
                        </div>
                        <div className="courses-grid">
                            <div className="courses-row">
                                <div className="course-card">
                                    <img src={courseOne} alt="" className="course-pic" />
                                    <div className="course-info">
                                        <div className="container-info">
                                            <p className="course-tag course-tag-marketing">
                                                Marketing
                                            </p>
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
                                </div>
                                <div className="course-card">
                                    <img src={courseTwo} alt="" className="course-pic" />
                                    <div className="course-info">
                                        <div className="container-info">
                                            <p className="course-tag course-tag-management">
                                                Management
                                            </p>
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
                                </div>
                            </div>
                            <div className="courses-row">
                                <div className="course-card">
                                    <img src={courseThree} alt="" className="course-pic" />
                                    <div className="course-info">
                                        <div className="container-info">
                                            <p className="course-tag course-tag-hr">
                                                HR & Recruiting
                                            </p>
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
                                </div>
                                <div className="course-card">
                                    <img src={courseFour} alt="" className="course-pic" />
                                    <div className="course-info">
                                        <div className="container-info">
                                            <p className="course-tag course-tag-marketing">
                                                Marketing
                                            </p>
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
                                </div>
                            </div>
                            <div className="courses-row">
                                <div className="course-card">
                                    <img src={courseFive} alt="" className="course-pic" />
                                    <div className="course-info">
                                        <div className="container-info">
                                            <p className="course-tag course-tag-management">
                                                Management
                                            </p>
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
                                </div>
                                <div className="course-card">
                                    <img src={courseSix} alt="" className="course-pic" />
                                    <div className="course-info">
                                        <div className="container-info">
                                            <p className="course-tag course-tag-design">Design</p>
                                            <p className="course-name">Graphic Design Basic</p>
                                            <p className="course-price">
                                                $500
                                                <span className="course-author">
                                                    | by Guy Hawkins
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="benefits">
                    <div className="container">
                        <div className="benefits-top">
                            <p className="benefits-subtitle">OUR BENEFITS</p>
                            <h2 className="benefits-title">That’s how we do it</h2>
                        </div>
                        <div className="benefits-tabs">
                            <div className="benefit-tab benefit-tab-active">
                                <img src={starIcon} alt="" className="benefit-icon" />
                                <p className="benefit-text">Experienced Tutors</p>
                            </div>
                            <div className="benefit-tab">
                                <img src={likeIcon} alt="" className="benefit-icon" />
                                <p className="benefit-text">Feedback & Support</p>
                            </div>
                            <div className="benefit-tab">
                                <img src={libraryIcon} alt="" className="benefit-icon" />
                                <p className="benefit-text">24/7 Online Library</p>
                            </div>
                            <div className="benefit-tab">
                                <img src={chatIcon} alt="" className="benefit-icon" />
                                <p className="benefit-text">Community</p>
                            </div>
                        </div>
                        <div className="benefits-content">
                            <div className="benefits-text">
                                <h3 className="content-title">Only practicing tutors</h3>
                                <p className="content-desc">
                                    Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames
                                    dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis
                                    mollis augue. Nunc, sodales tortor sit diam mi amet massa.
                                    Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id
                                    dignissim massa ut amet. Amet enim, nisi tempus vehicula.
                                </p>
                            </div>
                            <div className="benefits-pic">
                                <img src={benefitsImage} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="events">
                    <div className="container">
                        <div className="events-top">
                            <p className="events-subtitle">OUR EVENTS</p>
                            <h2 className="events-title">Lectures & workshops</h2>
                        </div>
                        <div className="events-list">
                            <div className="event-card">
                                <div className="event-date">
                                    <p className="event-day event-day-orange">05</p>
                                    <div className="event-month">
                                        <p className="month-name">August</p>
                                        <p className="month-time">11:00 – 14:00</p>
                                    </div>
                                </div>
                                <div className="event-info">
                                    <p className="event-title">
                                        Formation of the organizational structure of the company in
                                        the face of uncertainty.
                                    </p>
                                    <p className="event-type">Online master-class</p>
                                </div>
                                <Link to="/events" className="event-btn event-btn-white">
                                    View more
                                </Link>
                            </div>
                            <div className="event-card">
                                <div className="event-date">
                                    <p className="event-day event-day-orange">24</p>
                                    <div className="event-month">
                                        <p className="month-name">July</p>
                                        <p className="month-time">11:00 – 12:30</p>
                                    </div>
                                </div>
                                <div className="event-info">
                                    <p className="event-title">
                                        Building a customer service department. Best Practices.
                                    </p>
                                    <p className="event-type">Online lecture</p>
                                </div>
                                <Link to="/events" className="event-btn event-btn-orange">
                                    View more
                                </Link>
                            </div>
                            <div className="event-card">
                                <div className="event-date">
                                    <p className="event-day event-day-orange">16</p>
                                    <div className="event-month">
                                        <p className="month-name">July</p>
                                        <p className="month-time">10:00 – 13:00</p>
                                    </div>
                                </div>
                                <div className="event-info">
                                    <p className="event-title">
                                        How to apply methods of speculative design in practice.
                                        Worldbuilding prototyping.
                                    </p>
                                    <p className="event-type">Online workshop</p>
                                </div>
                                <Link to="/events" className="event-btn event-btn-white">
                                    View more
                                </Link>
                            </div>
                        </div>
                        <div className="events-bottom">
                            <p className="events-more">Do you want more?</p>
                            <Link to="/events" className="btn-orange">
                                Explore all events
                            </Link>
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

                <section className="team">
                    <div className="container">
                        <div className="team-top">
                            <div>
                                <p className="team-subtitle">BEST TUTORS ARE ALL HERE</p>
                                <h2 className="team-title">Meet our team</h2>
                            </div>
                            <div className="team-arrows">
                                <img src={arrowLeft} alt="" className="team-arrow" />
                                <img
                                    src={arrowRight}
                                    alt=""
                                    className="team-arrow team-arrow-active"
                                />
                            </div>
                        </div>
                        <div className="team-list">
                            <div className="tutor-card">
                                <div className="tutor-pic-cont">
                                    <img src={tutorOne} alt="" className="tutor-pic" />
                                </div>
                                <p className="tutor-name">Dianne Russell</p>
                                <p className="tutor-role">Founder and CEO</p>
                            </div>
                            <div className="tutor-card">
                                <div className="tutor-pic-cont">
                                    <img src={tutorTwo} alt="" className="tutor-pic" />
                                </div>
                                <p className="tutor-name">Jerome Bell</p>
                                <p className="tutor-role">Founder and Program Director</p>
                            </div>
                            <div className="tutor-card">
                                <div className="tutor-pic-cont">
                                    <img src={tutorThree} alt="" className="tutor-pic" />
                                </div>
                                <p className="tutor-name">Kristin Watson</p>
                                <p className="tutor-role">Marketer, Curator of Marketing Course</p>
                            </div>
                            <div className="tutor-card">
                                <div className="tutor-pic-cont">
                                    <img src={tutorFour} alt="" className="tutor-pic" />
                                </div>
                                <p className="tutor-name">Marvin McKinney</p>
                                <p className="tutor-role">PM, Curator of Management Course</p>
                            </div>
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

                <section className="blog">
                    <div className="container">
                        <div className="blog-top">
                            <div>
                                <p className="blog-subtitle">OUR BLOG</p>
                                <h2 className="blog-title">Latest posts</h2>
                            </div>
                            <Link to="/blog" className="btn-orange">
                                Go to blog
                            </Link>
                        </div>

                        <div className="blog-grid">
                            <div className="blog-card">
                                <div className="blog-pic-cont bg-blue">
                                    <img src={blogOne} alt="" className="blog-pic" />
                                    <div className="blog-tag">
                                        <img src={micIcon} alt="" className="tag-icon" />
                                        <p className="tag-text">Podcast</p>
                                    </div>
                                </div>
                                <div className="blog-meta">
                                    <p className="meta-category">Marketing</p>
                                    <div className="meta-dot"></div>
                                    <img src={calendarIcon} alt="" className="meta-icon" />
                                    <p className="meta-date">September 4, 2020</p>
                                    <div className="meta-dot"></div>
                                    <img src={clockIcon} alt="" className="meta-icon" />
                                    <p className="meta-time">36 min</p>
                                </div>
                                <h3 className="blog-title-card">
                                    What is traffic arbitrage and does it really make money?
                                </h3>
                                <p className="blog-desc">
                                    Pharetra, ullamcorper iaculis viverra parturient sed id sed.
                                    Convallis proin dignissim lacus, purus gravida...
                                </p>
                                <div className="blog-link">
                                    <p className="link-text">Listen</p>
                                    <img src={arrowSm} alt="" className="link-arrow" />
                                </div>
                            </div>

                            <div className="blog-card">
                                <div className="blog-pic-cont bg-green">
                                    <img src={blogTwo} alt="" className="blog-pic" />
                                    <div className="blog-tag">
                                        <img src={playSmall} alt="" className="tag-icon" />
                                        <p className="tag-text">Video</p>
                                    </div>
                                </div>
                                <div className="blog-meta">
                                    <p className="meta-category">Management</p>
                                    <div className="meta-dot"></div>
                                    <img src={calendarIcon} alt="" className="meta-icon" />
                                    <p className="meta-date">August 25, 2020</p>
                                    <div className="meta-dot"></div>
                                    <img src={clockIcon} alt="" className="meta-icon" />
                                    <p className="meta-time">45 min</p>
                                </div>
                                <h3 className="blog-title-card">
                                    What to do and who to talk to if you want to get feedback on the
                                    product
                                </h3>
                                <p className="blog-desc">
                                    Neque a, senectus consectetur odio in aliquet nec eu. Ultricies
                                    ac nibh urna urna sagittis faucibus...
                                </p>
                                <div className="blog-link">
                                    <p className="link-text">Watch</p>
                                    <img src={arrowSm} alt="" className="link-arrow" />
                                </div>
                            </div>

                            <div className="blog-card">
                                <div className="blog-pic-cont bg-yellow">
                                    <img src={blogThree} alt="" className="blog-pic" />
                                    <div className="blog-tag">
                                        <img src={fileIcon} alt="" className="tag-icon" />
                                        <p className="tag-text">Article</p>
                                    </div>
                                </div>
                                <div className="blog-meta">
                                    <p className="meta-category">Design</p>
                                    <div className="meta-dot"></div>
                                    <img src={calendarIcon} alt="" className="meta-icon" />
                                    <p className="meta-date">August 8, 2020</p>
                                </div>
                                <h3 className="blog-title-card">
                                    Should you choose a creative profession if you are attracted to
                                    creativity?
                                </h3>
                                <p className="blog-desc">
                                    Curabitur nisl tincidunt eros venenatis vestibulum ac placerat.
                                    Tortor, viverra sed vulputate ultrices...
                                </p>
                                <div className="blog-link">
                                    <p className="link-text">Read</p>
                                    <img src={arrowSm} alt="" className="link-arrow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="subscribe">
                    <img src={subscribeLeft} alt="" className="sub-pic-left" />
                    <div className="sub-container">
                        <p className="sub-subtitle">DON'T MISS ANYTHING</p>
                        <h2 className="sub-title">Subscribe to the Createx School announcements</h2>
                        <div className="sub-form">
                            <input
                                type="text"
                                className="sub-input"
                                placeholder="Your working email"
                            />
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

export default Homepage;
