import { Link } from 'react-router-dom';
import './Blog.scss';

import logo from '../../assets/logo.svg';
import loginIcon from '../../assets/loginIcon.svg';
import arrowDown from '../../assets/arrowDown.svg';
import searchIcon from '../../assets/searchIcon.svg';
import arrowSm from '../../assets/arrowSm.svg';
import arrowRight from '../../assets/arrowRight.svg';

import blogOne from '../../assets/blogOne.png';
import blogTwo from '../../assets/blogTwo.png';
import blogThree from '../../assets/blogThree.png';
import blogPicLaptop from '../../assets/blogPicLaptop.png';
import blogPicTypewriter from '../../assets/blogPicTypewriter.jpg';
import blogPicGlasses from '../../assets/blogPicGlasses.jpg';
import blogPicSnake from '../../assets/blogPicSnake.png';
import blogPicFlowers from '../../assets/blogPicFlowers.png';

import playSmall from '../../assets/playSmall.svg';
import micIcon from '../../assets/micIcon.svg';
import fileIcon from '../../assets/fileIcon.svg';
import calendarIcon from '../../assets/calendarIcon.svg';
import clockIcon from '../../assets/clockIcon.svg';

import libraryIllustration from '../../assets/libraryIllustration.png';

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

function Blog() {
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
                <section className="blog-page">
                    <div className="container">
                        <div className="blog-top">
                            <p className="blog-subtitle">OUR BLOG</p>
                            <h1 className="blog-title">Createx School Journal</h1>
                        </div>

                        <div className="blog-controls">
                            <div className="controls-left">
                                <button className="filter-btn filter-btn-active">All</button>
                                <button className="filter-btn">
                                    <img src={fileIcon} alt="" className="filter-icon" />
                                    <p className="filter-text">Articles</p>
                                </button>
                                <button className="filter-btn">
                                    <img src={playSmall} alt="" className="filter-icon" />
                                    <p className="filter-text">Videos</p>
                                </button>
                                <button className="filter-btn">
                                    <img src={micIcon} alt="" className="filter-icon" />
                                    <p className="filter-text">Podcasts</p>
                                </button>
                            </div>

                            <div className="controls-right">
                                <div className="control-group">
                                    <p className="control-label">Blog category</p>
                                    <div className="select-wrapper">
                                        <p className="select-text">all themes</p>
                                        <img src={arrowDown} alt="" className="select-icon" />
                                    </div>
                                </div>
                                <div className="search-wrapper">
                                    <p className="search-text">Search blog...</p>
                                    <img src={searchIcon} alt="" className="search-icon" />
                                </div>
                            </div>
                        </div>

                        <div className="blog-grid">
                            <div className="blog-row">
                                <Link to="/blog-post" className="blog-card">
                                    <div className="blog-pic-cont bg-blue">
                                        <img src={blogOne} alt="" className="blog-pic" />
                                        <div className="blog-tag">
                                            <img src={micIcon} alt="" className="tag-icon" />
                                            <p className="tag-text">Podcast</p>
                                        </div>
                                    </div>
                                    <div className="blog-meta-inner">
                                        <div className="blog-meta">
                                            <div className="meta-item-inner">
                                                <p className="meta-category">Marketing</p>
                                            </div>
                                            <div className="meta-dot"></div>
                                            <div className="meta-item-date">
                                                <img
                                                    src={calendarIcon}
                                                    alt=""
                                                    className="meta-icon"
                                                />
                                                <p className="meta-date">September 4, 2020</p>
                                            </div>
                                            <div className="meta-dot"></div>
                                            <div className="meta-item-time">
                                                <img src={clockIcon} alt="" className="meta-icon" />
                                                <p className="meta-time">36 min</p>
                                            </div>
                                        </div>
                                        <h3 className="blog-title-card">
                                            What is traffic arbitrage and does it really make money?
                                        </h3>
                                        <p className="blog-desc">
                                            Pharetra, ullamcorper iaculis viverra parturient sed id
                                            sed. Convallis proin dignissim lacus, purus gravida...
                                        </p>
                                        <div className="blog-link">
                                            <p className="link-text">Listen</p>
                                            <img src={arrowSm} alt="" className="link-arrow" />
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/blog-post" className="blog-card">
                                    <div className="blog-pic-cont bg-light-gray">
                                        <img src={blogTwo} alt="" className="blog-pic" />
                                        <div className="blog-tag">
                                            <img src={fileIcon} alt="" className="tag-icon" />
                                            <p className="tag-text">Article</p>
                                        </div>
                                    </div>
                                    <div className="blog-meta-inner">
                                        <div className="blog-meta">
                                            <div className="meta-item-inner">
                                                <p className="meta-category">Development</p>
                                            </div>
                                            <div className="meta-dot"></div>
                                            <div className="meta-item-date">
                                                <img
                                                    src={calendarIcon}
                                                    alt=""
                                                    className="meta-icon"
                                                />
                                                <p className="meta-date">September 1, 2020</p>
                                            </div>
                                        </div>
                                        <h3 className="blog-title-card">
                                            How to choose the first programming language for a
                                            beginner
                                        </h3>
                                        <p className="blog-desc">
                                            Turpis sed at magna laoreet gravida consequat tortor
                                            placerat. Gravida vitae aliquet enim egestas dui...
                                        </p>
                                        <div className="blog-link">
                                            <p className="link-text">Read</p>
                                            <img src={arrowSm} alt="" className="link-arrow" />
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/blog-post" className="blog-card">
                                    <div className="blog-pic-cont bg-yellow">
                                        <img src={blogThree} alt="" className="blog-pic" />
                                        <div className="blog-tag">
                                            <img src={playSmall} alt="" className="tag-icon" />
                                            <p className="tag-text">Video</p>
                                        </div>
                                    </div>
                                    <div className="blog-meta-inner">
                                        <div className="blog-meta">
                                            <div className="meta-item-inner">
                                                <p className="meta-category">Design</p>
                                            </div>
                                            <div className="meta-dot"></div>
                                            <div className="meta-item-date">
                                                <img
                                                    src={calendarIcon}
                                                    alt=""
                                                    className="meta-icon"
                                                />
                                                <p className="meta-date">August 8, 2020</p>
                                            </div>
                                            <div className="meta-dot"></div>
                                            <div className="meta-item-time">
                                                <img src={clockIcon} alt="" className="meta-icon" />
                                                <p className="meta-time">40 min</p>
                                            </div>
                                        </div>
                                        <h3 className="blog-title-card">
                                            Should you choose a creative profession if you are
                                            attracted to creativity?
                                        </h3>
                                        <p className="blog-desc">
                                            Curabitur nisl tincidunt eros venenatis vestibulum ac
                                            placerat. Tortor, viverra sed vulputate ultrices...
                                        </p>
                                        <div className="blog-link">
                                            <p className="link-text">Watch</p>
                                            <img src={arrowSm} alt="" className="link-arrow" />
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="blog-row">
                                <Link to="/blog-post" className="blog-card-long">
                                    <div className="blog-pic-cont-long">
                                        <img src={blogPicGlasses} alt="" className="blog-pic" />
                                        <div className="blog-tag">
                                            <img src={fileIcon} alt="" className="tag-icon" />
                                            <p className="tag-text">Article</p>
                                        </div>
                                    </div>
                                    <div className="blog-meta-inner">
                                        <div className="blog-meta">
                                            <div className="meta-item-inner">
                                                <p className="meta-category">HR & Recruiting</p>
                                            </div>
                                            <div className="meta-dot"></div>
                                            <div className="meta-item-date">
                                                <img
                                                    src={calendarIcon}
                                                    alt=""
                                                    className="meta-icon"
                                                />
                                                <p className="meta-date">August 3, 2020</p>
                                            </div>
                                        </div>
                                        <h3 className="blog-title-card">
                                            HR statistics: job search, interviews, hiring and
                                            recruiting
                                        </h3>
                                        <p className="blog-desc">
                                            Massa, lectus nibh consectetur aliquet nunc risus
                                            aenean. Leo hac netus bibendum diam adipiscing aenean
                                            nisl. Molestie nulla massa at sit vitae pellentesque mi
                                            etiam. Morbi commodo tempor, massa vivamus. A molestie
                                            semper bibendum pretium...
                                        </p>
                                        <div className="blog-link">
                                            <p className="link-text">Read</p>
                                            <img src={arrowSm} alt="" className="link-arrow" />
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/blog-post" className="blog-card">
                                    <div className="blog-pic-cont bg-green">
                                        <img src={blogPicLaptop} alt="" className="blog-pic" />
                                        <div className="blog-tag">
                                            <img src={playSmall} alt="" className="tag-icon" />
                                            <p className="tag-text">Video</p>
                                        </div>
                                    </div>
                                    <div className="blog-meta-inner">
                                        <div className="blog-meta">
                                            <div className="meta-item-inner">
                                                <p className="meta-category">Management</p>
                                            </div>
                                            <div className="meta-dot"></div>
                                            <div className="meta-item-date">
                                                <img
                                                    src={calendarIcon}
                                                    alt=""
                                                    className="meta-icon"
                                                />
                                                <p className="meta-date">August 2, 2020</p>
                                            </div>
                                            <div className="meta-dot"></div>
                                            <div className="meta-item-time">
                                                <img src={clockIcon} alt="" className="meta-icon" />
                                                <p className="meta-time">45 min</p>
                                            </div>
                                        </div>
                                        <h3 className="blog-title-card">
                                            What to do and who to talk to if you want to get
                                            feedback on the product
                                        </h3>
                                        <p className="blog-desc">
                                            Neque a, senectus consectetur odio in aliquet nec eu.
                                            Ultricies ac nibh urna urna sagittis faucibus. Curabitur
                                            nisl tincidunt eros venenatis...
                                        </p>
                                        <div className="blog-link">
                                            <p className="link-text">Watch</p>
                                            <img src={arrowSm} alt="" className="link-arrow" />
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="blog-row">
                                <Link to="/blog-post" className="blog-card">
                                    <div className="blog-pic-cont bg-purple">
                                        <img src={blogPicSnake} alt="" className="blog-pic" />
                                        <div className="blog-tag">
                                            <img src={micIcon} alt="" className="tag-icon" />
                                            <p className="tag-text">Podcast</p>
                                        </div>
                                    </div>
                                    <div className="blog-meta-inner">
                                        <div className="blog-meta">
                                            <div className="meta-item-inner">
                                                <p className="meta-category">Design</p>
                                            </div>
                                            <div className="meta-dot"></div>
                                            <div className="meta-item-date">
                                                <img
                                                    src={calendarIcon}
                                                    alt=""
                                                    className="meta-icon"
                                                />
                                                <p className="meta-date">July 28, 2020</p>
                                            </div>
                                            <div className="meta-dot"></div>
                                            <div className="meta-item-time">
                                                <img src={clockIcon} alt="" className="meta-icon" />
                                                <p className="meta-time">36 min</p>
                                            </div>
                                        </div>
                                        <h3 className="blog-title-card">
                                            What are color profiles and how they work in graphic
                                            design
                                        </h3>
                                        <p className="blog-desc">
                                            Aliquam vulputate hendrerit quam sollicitudin urna enim
                                            viverra gravida. Consectetur urna arcu eleifend...
                                        </p>
                                        <div className="blog-link">
                                            <p className="link-text">Listen</p>
                                            <img src={arrowSm} alt="" className="link-arrow" />
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/blog-post" className="blog-card">
                                    <div className="blog-pic-cont bg-pink">
                                        <img src={blogPicFlowers} alt="" className="blog-pic" />
                                        <div className="blog-tag">
                                            <img src={playSmall} alt="" className="tag-icon" />
                                            <p className="tag-text">Video</p>
                                        </div>
                                    </div>
                                    <div className="blog-meta-inner">
                                        <div className="blog-meta">
                                            <div className="meta-item-inner">
                                                <p className="meta-category">Management</p>
                                            </div>
                                            <div className="meta-dot"></div>
                                            <div className="meta-item-date">
                                                <img
                                                    src={calendarIcon}
                                                    alt=""
                                                    className="meta-icon"
                                                />
                                                <p className="meta-date">July 15, 2020</p>
                                            </div>
                                            <div className="meta-dot"></div>
                                            <div className="meta-item-time">
                                                <img src={clockIcon} alt="" className="meta-icon" />
                                                <p className="meta-time">45 min</p>
                                            </div>
                                        </div>
                                        <h3 className="blog-title-card">
                                            Startup: how to build a team that will live longer than
                                            a year
                                        </h3>
                                        <p className="blog-desc">
                                            Nisi, massa ut sit faucibus et diam. Faucibus at
                                            malesuada at justo scelerisque in nisl, urna...
                                        </p>
                                        <div className="blog-link">
                                            <p className="link-text">Watch</p>
                                            <img src={arrowSm} alt="" className="link-arrow" />
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/blog-post" className="blog-card">
                                    <div className="blog-pic-cont bg-light-gray">
                                        <img src={blogPicTypewriter} alt="" className="blog-pic" />
                                        <div className="blog-tag">
                                            <img src={fileIcon} alt="" className="tag-icon" />
                                            <p className="tag-text">Article</p>
                                        </div>
                                    </div>
                                    <div className="blog-meta-inner">
                                        <div className="blog-meta">
                                            <div className="meta-item-inner">
                                                <p className="meta-category">Marketing</p>
                                            </div>
                                            <div className="meta-dot"></div>
                                            <div className="meta-item-date">
                                                <img
                                                    src={calendarIcon}
                                                    alt=""
                                                    className="meta-icon"
                                                />
                                                <p className="meta-date">July 9, 2020</p>
                                            </div>
                                        </div>
                                        <h3 className="blog-title-card">
                                            How to get customers to love your business from the
                                            start
                                        </h3>
                                        <p className="blog-desc">
                                            Malesuada in augue mi feugiat morbi a aliquet enim.
                                            Elementum lacus, pellentesque etiam arcu tristique ac...
                                        </p>
                                        <div className="blog-link">
                                            <p className="link-text">Read</p>
                                            <img src={arrowSm} alt="" className="link-arrow" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="blog-pagination">
                            <p className="page-num page-num-active">1</p>
                            <p className="page-num">2</p>
                            <p className="page-num">3</p>
                            <p className="page-num">4</p>
                            <img src={arrowRight} alt="" className="page-arrow" />
                        </div>
                    </div>
                </section>

                <section className="subscribe-blog">
                    <div className="container">
                        <div className="sub-inner">
                            <div className="sub-left">
                                <img src={libraryIllustration} alt="" className="sub-pic" />
                            </div>

                            <div className="sub-right">
                                <h2 className="sub-title">
                                    Want to get the best articles weekly? Subscribe to our
                                    newsletter!
                                </h2>

                                <div className="sub-form">
                                    <div className="sub-input-cont">
                                        <div className="sub-spacer"></div>
                                        <input
                                            type="text"
                                            placeholder="Your working email"
                                            className="sub-placeholder"
                                        />
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

export default Blog;
