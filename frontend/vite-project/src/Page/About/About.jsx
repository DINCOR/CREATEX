import React from 'react';
import { Link } from 'react-router-dom';
import './About.scss';

import logo from '../../assets/logo.svg';
import loginIcon from '../../assets/loginIcon.svg';
import playIcon from '../../assets/playIcon.svg';
import aboutVideoImage from '../../assets/aboutVideoImage.png';
import arrowRight from '../../assets/arrowRight.svg';
import arrowSm from '../../assets/arrowSm.svg';
import studentIllustration from '../../assets/studentIllustration.png';

import iconStructured from '../../assets/iconStructured.svg';
import iconFeedback from '../../assets/iconFeedback.svg';
import iconEfficiency from '../../assets/iconEfficiency.svg';
import iconSchedule from '../../assets/iconSchedule.svg';

import courseMark from '../../assets/courseMark.png';
import courseManag from '../../assets/courseManag.png';
import courseHr from '../../assets/courseHr.png';
import courseDesign from '../../assets/courseDesign.png';
import courseDevel from '../../assets/courseDevel.png';

import quoteIcon from '../../assets/quoteIcon.svg';
import studentPhoto from '../../assets/studentPhoto.png';
import arrowLeft from '../../assets/arrowLeft.svg';

import courseFive from '../../assets/courseFive.png';
import courseOne from '../../assets/courseOne.png';
import courseFour from '../../assets/courseFour.png';
import courseTwo from '../../assets/courseTwo.png';
import courseThree from '../../assets/courseThree.png';
import kathrynSpeaker from '../../assets/kathrynSpeaker.png';
import fisherCourse from '../../assets/fisherCourse.png';

import blogOne from '../../assets/blogOne.png';
import blogTwo from '../../assets/blogTwo.png';
import blogThree from '../../assets/blogThree.png';
import playSmall from '../../assets/playSmall.svg';
import micIcon from '../../assets/micIcon.svg';
import fileIcon from '../../assets/fileIcon.svg';
import calendarIcon from '../../assets/calendarIcon.svg';
import clockIcon from '../../assets/clockIcon.svg';

import subscribeLeft from '../../assets/subscribeLeft.png';
import subscribeRight from '../../assets/subscribeLeft.png';

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

import courseInDepth from '../../assets/courseInDepth.png';
import courseHigher from '../../assets/courseHigher.png';
import courseSential from '../../assets/courseSential.png';
import courseHappyHome from '../../assets/courseHappyHome.png';
import courseOrSale from '../../assets/courseOrSale.png';
import courseSunsetRealty from '../../assets/courseSunsetRealty.png';

import courseAtlantis from '../../assets/courseAtlantis.png';
import courseDelMar from '../../assets/courseDelMar.png';
import courseComplete from '../../assets/courseComplete.png';
import courseNational from '../../assets/courseNational.png';
import courseGYM from '../../assets/courseGYM.png';
import courseUnStrategy from '../../assets/courseUnStrategy.png';

function About() {
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
                        <Link to="/about" className="nav-link nav-link-active">
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
                <section className="about-hero">
                    <div className="container">
                        <div className="about-hero-left">
                            <p className="about-subtitle">ABOUT US</p>
                            <h1 className="about-title">Createx Online School</h1>
                            <p className="about-desc">
                                Createx Online School is a leader in online studying. We have lots
                                of courses and programs from the main market experts.
                            </p>
                            <p className="about-desc">
                                We provide relevant approaches to online learning, internships and
                                employment in the largest companies in the country. Our educational
                                programs help you get a new specialty from scratch. During your
                                studies, we will help you find a job. Check the courses and online
                                events that we organise.
                            </p>
                            <div className="about-buttons">
                                <Link to="/events" className="btn-white">
                                    Explore events
                                </Link>
                                <Link to="/courses" className="btn-orange">
                                    Browse courses
                                </Link>
                            </div>
                        </div>
                        <div className="about-hero-right">
                            <img src={studentIllustration} alt="" className="about-hero-pic" />
                        </div>
                    </div>
                </section>

                <section className="about-video">
                    <div className="container">
                        <div className="video-left">
                            <div className="play-btn">
                                <img src={playIcon} alt="" className="play-icon" />
                                <p className="video-text">Watch Video</p>
                            </div>
                            <div className="video-wrapper">
                                <img src={aboutVideoImage} alt="" className="video-pic" />
                            </div>
                        </div>
                        <div className="video-right">
                            <div className="stats-list">
                                <div className="stat-item">
                                    <p className="stat-number">1200</p>
                                    <p className="stat-label">students graduated</p>
                                </div>
                                <div className="stat-item">
                                    <p className="stat-number">84</p>
                                    <p className="stat-label">completed courses</p>
                                </div>
                                <div className="stat-item">
                                    <p className="stat-number">16</p>
                                    <p className="stat-label">qualified tutors</p>
                                </div>
                                <div className="stat-item">
                                    <p className="stat-number">5</p>
                                    <p className="stat-label">years of experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-values">
                    <div className="container">
                        <div className="values-top">
                            <p className="values-subtitle">WE ALWAYS STAND FOR</p>
                            <h2 className="values-title">Our core values</h2>
                        </div>
                        <div className="values-list">
                            <div className="value-item">
                                <div className="value-item-inner">
                                    <img src={iconStructured} alt="" className="value-icon" />
                                    <p className="value-name">Structured Approach</p>
                                    <p className="value-desc">
                                        Aenean urna dictum adipiscing nec, cras quisque. Nunc in
                                        mauris.
                                    </p>
                                </div>
                            </div>
                            <div className="value-item">
                                <div className="value-item-inner">
                                    <img src={iconFeedback} alt="" className="value-icon" />
                                    <p className="value-name">Professional Feedbacks</p>
                                    <p className="value-desc">
                                        Culpa nostrud commodo ea consequat reprehenderit aliquip.
                                    </p>
                                </div>
                            </div>
                            <div className="value-item">
                                <div className="value-item-inner">
                                    <img src={iconEfficiency} alt="" className="value-icon" />
                                    <p className="value-name">Efficiency</p>
                                    <p className="value-desc">
                                        Viverra scelerisque consequat net. Adipisicing esse
                                        consequat.
                                    </p>
                                </div>
                            </div>
                            <div className="value-item">
                                <div className="value-item-inner">
                                    <img src={iconSchedule} alt="" className="value-icon" />
                                    <p className="value-name">Flexible Shedule</p>
                                    <p className="value-desc">
                                        Aute eiusmod dolore dolore deserunt veniam ad deserunt.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-directions">
                    <div className="container">
                        <div className="directions-top">
                            <p className="directions-subtitle">OUR MAIN DIRECTIONS</p>
                            <h2 className="directions-title">What do we teach</h2>
                        </div>
                        <div className="directions-grid">
                            <div className="direction-card">
                                <div className="direction-pic-cont bg-pink">
                                    <img src={courseMark} alt="" className="direction-pic" />
                                </div>
                                <div className="direction-info">
                                    <div className="direction-tag tag-marketing">
                                        <p>Marketing</p>
                                    </div>
                                    <p className="direction-desc">
                                        Odio posuere netus quisque faucibus lectus arcu donec. Eget
                                        dictum eu viverra faucibus. Viverra scelerisque consequat.
                                    </p>
                                    <Link to="/courses" className="direction-link">
                                        <p className="link-text">Check courses</p>
                                        <img src={arrowSm} alt="" className="link-arrow" />
                                    </Link>
                                </div>
                            </div>

                            <div className="direction-card">
                                <div className="direction-pic-cont bg-gray">
                                    <img src={courseManag} alt="" className="direction-pic" />
                                </div>
                                <div className="direction-info">
                                    <div className="direction-tag tag-management">
                                        <p>Management</p>
                                    </div>
                                    <p className="direction-desc">
                                        Odio posuere netus quisque faucibus lectus arcu donec. Eget
                                        dictum eu viverra faucibus. Viverra scelerisque consequat.
                                    </p>
                                    <Link to="/courses" className="direction-link">
                                        <p className="link-text">Check courses</p>
                                        <img src={arrowSm} alt="" className="link-arrow" />
                                    </Link>
                                </div>
                            </div>

                            <div className="direction-card">
                                <div className="direction-pic-cont bg-blue">
                                    <img src={courseHr} alt="" className="direction-pic" />
                                </div>
                                <div className="direction-info">
                                    <div className="direction-tag tag-hr">HR & Recruiting</div>
                                    <p className="direction-desc">
                                        Odio posuere netus quisque faucibus lectus arcu donec. Eget
                                        dictum eu viverra faucibus. Viverra scelerisque consequat.
                                    </p>
                                    <Link to="/courses" className="direction-link">
                                        <p className="link-text">Check courses</p>
                                        <img src={arrowSm} alt="" className="link-arrow" />
                                    </Link>
                                </div>
                            </div>

                            <div className="direction-card">
                                <div className="direction-pic-cont bg-light-gray">
                                    <img src={courseDesign} alt="" className="direction-pic" />
                                </div>
                                <div className="direction-info">
                                    <div className="direction-tag tag-design">
                                        <p>Design</p>
                                    </div>
                                    <p className="direction-desc">
                                        Odio posuere netus quisque faucibus lectus arcu donec. Eget
                                        dictum eu viverra faucibus. Viverra scelerisque consequat.
                                    </p>
                                    <Link to="/courses" className="direction-link">
                                        <p className="link-text">Check courses</p>
                                        <img src={arrowSm} alt="" className="link-arrow" />
                                    </Link>
                                </div>
                            </div>

                            <div className="direction-card">
                                <div className="direction-pic-cont bg-dark">
                                    <img src={courseDevel} alt="" className="direction-pic" />
                                </div>
                                <div className="direction-info">
                                    <div className="direction-tag tag-development">
                                        <p>Development</p>
                                    </div>
                                    <p className="direction-desc">
                                        Odio posuere netus quisque faucibus lectus arcu donec. Eget
                                        dictum eu viverra faucibus. Viverra scelerisque consequat.
                                    </p>
                                    <Link to="/courses" className="direction-link">
                                        <p className="link-text">Check courses</p>
                                        <img src={arrowSm} alt="" className="link-arrow" />
                                    </Link>
                                </div>
                            </div>

                            <div className="direction-card coming-soon">
                                <p className="coming-text">New studying program coming soon...</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-process">
                    <div className="container">
                        <div className="process-left">
                            <p className="process-subtitle">STUDYING PROCESS</p>
                            <h2 className="process-title">That’s how we do it</h2>

                            <div className="process-steps">
                                <div className="step-item">
                                    <div className="step-dot"></div>
                                    <div className="step-info">
                                        <p className="step-label">STEP 1</p>
                                        <p className="step-name">Watching online video lectures</p>
                                        <p className="step-desc">
                                            Aliquam turpis viverra quam sit interdum blandit posuere
                                            pellentesque. Nisl, imperdiet gravida massa neque.
                                        </p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-dot"></div>
                                    <div className="step-info">
                                        <p className="step-label">STEP 2</p>
                                        <p className="step-name">Passing test</p>
                                        <p className="step-desc">
                                            Facilisis pellentesque quis accumsan ultricies. Eu
                                            egestas eget feugiat lacus, amet, sollicitudin egestas
                                            laoreet etiam.
                                        </p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-dot"></div>
                                    <div className="step-info">
                                        <p className="step-label">STEP 3</p>
                                        <p className="step-name">Curator's feedback</p>
                                        <p className="step-desc">
                                            Eget amet, enim pharetra leo egestas nisl, odio interdum
                                            facilisis. Aliquet orci varius volutpat egestas facilisi
                                            lobortis.
                                        </p>
                                    </div>
                                </div>
                                <div className="step-item">
                                    <div className="step-dot"></div>
                                    <div className="step-info">
                                        <p className="step-label">STEP 4</p>
                                        <p className="step-name">Corrections if needed</p>
                                        <p className="step-desc">
                                            Non tempor pulvinar tincidunt aliquam. Placerat
                                            ultricies malesuada dui auctor.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="process-right">
                            <img src={studentIllustration} alt="" className="process-pic" />
                        </div>
                    </div>
                </section>

                <section className="about-team">
                    <div className="container">
                        <div className="team-top">
                            <p className="team-subtitle">BEST TUTORS ARE ALL HERE</p>
                            <h2 className="team-title">Meet our team</h2>
                        </div>
                        <div className="team-grid">
                            <div className="tutor-card">
                                <div className="tutor-pic-cont">
                                    <img src={courseFive} alt="" className="tutor-pic" />
                                </div>
                                <p className="tutor-name">Dianne Russell</p>
                                <p className="tutor-role">Founder and CEO</p>
                            </div>

                            <div className="tutor-card">
                                <div className="tutor-pic-cont">
                                    <img src={courseOne} alt="" className="tutor-pic" />
                                </div>
                                <p className="tutor-name">Jerome Bell</p>
                                <p className="tutor-role">Founder and Program Director</p>
                            </div>

                            <div className="tutor-card">
                                <div className="tutor-pic-cont">
                                    <img src={courseFour} alt="" className="tutor-pic" />
                                </div>
                                <p className="tutor-name">Kristin Watson</p>
                                <p className="tutor-role">Marketer, Curator of Marketing Course</p>
                            </div>

                            <div className="tutor-card">
                                <div className="tutor-pic-cont">
                                    <img src={courseTwo} alt="" className="tutor-pic" />
                                </div>
                                <p className="tutor-name">Marvin McKinney</p>
                                <p className="tutor-role">PM, Curator of Management Course</p>
                            </div>

                            <div className="tutor-card">
                                <div className="tutor-pic-cont">
                                    <img src={courseThree} alt="" className="tutor-pic" />
                                </div>
                                <p className="tutor-name">Leslie Alexander Li</p>
                                <p className="tutor-role">Curator of HR & Recruiting Course</p>
                            </div>

                            <div className="tutor-card">
                                <div className="tutor-pic-cont">
                                    <img src={kathrynSpeaker} alt="" className="tutor-pic" />
                                </div>
                                <p className="tutor-name">Kathryn Murphy</p>
                                <p className="tutor-role">Analyst and Marketing specialist</p>
                            </div>

                            <div className="tutor-card">
                                <div className="tutor-pic-cont">
                                    <img src={fisherCourse} alt="" className="tutor-pic" />
                                </div>
                                <p className="tutor-name">Brooklyn Simmons</p>
                                <p className="tutor-role">Curator of Development Course</p>
                            </div>

                            <div className="tutor-card">
                                <div className="tutor-pic-cont">
                                    <img src={courseTwo} alt="" className="tutor-pic" />
                                </div>
                                <p className="tutor-name">Cody Fisher</p>
                                <p className="tutor-role">UX Designer, Curator of Design Course</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-testimonials">
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

                <section className="about-partners">
                    <div className="container">
                        <div className="partners-top">
                            <p className="partners-subtitle">BEST JOBS FOR YOU</p>
                            <h2 className="partners-title">Our students work here</h2>
                        </div>
                        <div className="partners-grid">
                            <div className="partner-logo">
                                <img src={courseInDepth} alt="InDepth Consulting" />
                            </div>
                            <div className="partner-logo">
                                <img src={courseHigher} alt="Higher Fit" />
                            </div>
                            <div className="partner-logo">
                                <img src={courseSential} alt="Sential Consulting" />
                            </div>
                            <div className="partner-logo">
                                <img src={courseHappyHome} alt="Happy Home" />
                            </div>
                            <div className="partner-logo">
                                <img src={courseOrSale} alt="ForSale" />
                            </div>
                            <div className="partner-logo">
                                <img src={courseSunsetRealty} alt="Sunset Realty" />
                            </div>

                            <div className="partner-logo">
                                <img src={courseAtlantis} alt="Atlantis Health" />
                            </div>
                            <div className="partner-logo">
                                <img src={courseDelMar} alt="Del Mar Strategy" />
                            </div>
                            <div className="partner-logo">
                                <img src={courseComplete} alt="Complete Health" />
                            </div>
                            <div className="partner-logo">
                                <img src={courseNational} alt="National" />
                            </div>
                            <div className="partner-logo">
                                <img src={courseGYM} alt="Ultimate Gym" />
                            </div>
                            <div className="partner-logo">
                                <img src={courseUnStrategy} alt="United Strategy" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-blog">
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
                                <div className="blog-pic-cont">
                                    <img src={blogOne} alt="" className="blog-pic" />
                                    <div className="blog-tag">
                                        <img src={micIcon} alt="" className="tag-icon" />
                                        <p className="tag-text">Podcast</p>
                                    </div>
                                </div>
                                <div className="blog-card-bottom">
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
                            </div>

                            <div className="blog-card">
                                <div className="blog-pic-cont ">
                                    <img src={blogTwo} alt="" className="blog-pic" />
                                    <div className="blog-tag">
                                        <img src={playSmall} alt="" className="tag-icon" />
                                        <p className="tag-text">Video</p>
                                    </div>
                                </div>
                                <div className="blog-card-bottom">
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
                                        What to do and who to talk to if you want to get feedback on
                                        the product
                                    </h3>
                                    <p className="blog-desc">
                                        Neque a, senectus consectetur odio in aliquet nec eu.
                                        Ultricies ac nibh urna urna sagittis faucibus...
                                    </p>
                                    <div className="blog-link">
                                        <p className="link-text">Watch</p>
                                        <img src={arrowSm} alt="" className="link-arrow" />
                                    </div>
                                </div>
                            </div>

                            <div className="blog-card">
                                <div className="blog-pic-cont ">
                                    <img src={blogThree} alt="" className="blog-pic" />
                                    <div className="blog-tag">
                                        <img src={fileIcon} alt="" className="tag-icon" />
                                        <p className="tag-text">Article</p>
                                    </div>
                                </div>
                                <div className="blog-card-bottom">
                                    <div className="blog-meta">
                                        <p className="meta-category">Design</p>
                                        <div className="meta-dot"></div>
                                        <img src={calendarIcon} alt="" className="meta-icon" />
                                        <p className="meta-date">August 8, 2020</p>
                                    </div>
                                    <h3 className="blog-title-card">
                                        Should you choose a creative profession if you are attracted
                                        to creativity?
                                    </h3>
                                    <p className="blog-desc">
                                        Curabitur nisl tincidunt eros venenatis vestibulum ac
                                        placerat. Tortor, viverra sed vulputate ultrices...
                                    </p>
                                    <div className="blog-link">
                                        <p className="link-text">Read</p>
                                        <img src={arrowSm} alt="" className="link-arrow" />
                                    </div>
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
                            <div className="sub-input-cont">
                                <div className="sub-spacer"></div>
                                <p className="sub-placeholder">Your working email</p>
                            </div>
                            <button className="btn-orange sub-btn">Subscribe</button>
                        </div>
                    </div>
                    <img src={subscribeRight} alt="" className="sub-pic-right" />
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

export default About;
