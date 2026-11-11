import { Link } from 'react-router-dom';
import './BlogPost.scss';

import logo from '../../assets/logo.svg';
import loginIcon from '../../assets/loginIcon.svg';
import searchIcon from '../../assets/searchIcon.svg';
import arrowSm from '../../assets/arrowSm.svg';
import arrowRight from '../../assets/arrowRight.svg';
import arrowLeft from '../../assets/arrowLeft.svg';
import arrowRightGray from '../../assets/arrowRightGray.svg';
import quoteIcon from '../../assets/quoteIcon.svg';
import checkIcon from '../../assets/checkIcon.svg';
import fbIcon from '../../assets/fbIcon.svg';
import twIcon from '../../assets/twIcon.svg';
import inIcon from '../../assets/inIcon.svg';
import fbIconGray from '../../assets/facebookGray.svg';
import twIconGray from '../../assets/twitterGray.svg';
import linkedInRed from '../../assets/linkedInRed.svg';

import micIcon from '../../assets/micIcon.svg';
import playSmall from '../../assets/playSmall.svg';
import fileIcon from '../../assets/fileIcon.svg';
import calendarIcon from '../../assets/calendarIcon.svg';
import clockIcon from '../../assets/clockIcon.svg';
import footerLogo from '../../assets/footerLogo.svg';
import ytIcon from '../../assets/ytIcon.svg';
import tgIcon from '../../assets/tgIcon.svg';
import igIcon from '../../assets/igIcon.svg';
import phoneIco from '../../assets/phoneIco.svg';
import mailIco from '../../assets/mailIco.svg';
import HeartFot from '../../assets/HeartFot.svg';

import courseFour from '../../assets/courseFour.png';
import blogPicGlasses from '../../assets/blogPicGlasses.jpg';
import trendingOne from '../../assets/blogOne.png';
import trendingTwo from '../../assets/blogTwo.png';
import trendingThree from '../../assets/blogThree.png';
import libraryIllustration from '../../assets/libraryIllustration.png';
import blogSix from '../../assets/blogPicSnake.png';

function BlogPost() {
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
                <section className="post-main">
                    <div className="container post-container">
                        <div className="post-left">
                            <div className="post-top-meta">
                                <img src={fileIcon} alt="" className="post-type-icon" />
                                <p className="post-type">Article</p>
                                <div className="post-meta-line"></div>
                                <p className="post-category">HR & Recruiting</p>
                            </div>

                            <h1 className="post-title">
                                HR statistics: job search, interviews, hiring and recruiting
                            </h1>

                            <div className="post-bottom-meta">
                                <div className="post-date-cont">
                                    <img src={calendarIcon} alt="" className="meta-icon" />
                                    <p className="meta-date">August 3, 2020</p>
                                    <div className="meta-dot"></div>
                                    <img src={clockIcon} alt="" className="meta-icon" />
                                    <p className="meta-time">4 min read</p>
                                </div>
                                <div className="post-share">
                                    <p className="share-text">Share:</p>
                                    <img src={fbIconGray} alt="Facebook" className="share-icon" />
                                    <img src={twIconGray} alt="Twitter" className="share-icon" />
                                    <img src={linkedInRed} alt="LinkedIn" className="share-icon" />
                                </div>
                            </div>

                            <img src={blogPicGlasses} alt="Main Post" className="post-main-pic" />

                            <div className="post-content">
                                <p className="post-paragraph-bold">
                                    Vulputate vitae pellentesque scelerisque luctus consequat mattis
                                    pellentesque dui odio. Interdum aenean sit malesuada ornare sed
                                    gravida rhoncus, congue. Purus auctor nullam diam quis est
                                    hendrerit ac euismod.
                                </p>

                                <p className="post-paragraph">
                                    At facilisi sapien posuere eget nunc senectus proin nullam.
                                    Tortor senectus in et sagittis, vitae diam cras dignissim.
                                    Varius adipiscing eget diam nisi. Orci, consectetur vulputate
                                    metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non
                                    nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio.
                                    Mi varius viverra risus vel.
                                </p>

                                <p className="post-paragraph">
                                    Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci
                                    interdum feugiat lectus libero duis. Nisl massa, elementum
                                    varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed.
                                    Aliquet non sed duis diam vehicula rhoncus. In dictum nullam
                                    tincidunt semper pellentesque purus morbi sed. Ut aliquet velit
                                    pharetra, nisi nunc, non.
                                </p>

                                <div className="post-quote">
                                    <img src={quoteIcon} alt="" className="quote-mark" />
                                    <p className="quote-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Justo, amet lectus quam viverra mus lobortis fermentum amet,
                                        eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus
                                        ornare turpis quis non. Congue tortor in tot euismod
                                        vulputate etiam eros. Vel accumsan at elit neque, ipsum.
                                    </p>
                                </div>

                                <p className="post-paragraph">
                                    Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id
                                    ut erat mattis. Vitae mus blandit in neque amet non fringilla
                                    blandit:
                                </p>

                                <div className="post-list">
                                    <div className="post-list-item">
                                        <img src={checkIcon} alt="" className="list-icon" />
                                        <p className="list-text">
                                            A fermentum in morbi pretium aliquam adipiscing donec
                                            tempus.
                                        </p>
                                    </div>
                                    <div className="post-list-item">
                                        <img src={checkIcon} alt="" className="list-icon" />
                                        <p className="list-text">
                                            Vulputate placerat amet pulvinar lorem nisl.
                                        </p>
                                    </div>
                                    <div className="post-list-item">
                                        <img src={checkIcon} alt="" className="list-icon" />
                                        <p className="list-text">
                                            Consequat feugiat habitant gravida quisque elit bibendum
                                            id adipiscing sed.
                                        </p>
                                    </div>
                                    <div className="post-list-item">
                                        <img src={checkIcon} alt="" className="list-icon" />
                                        <p className="list-text">
                                            Etiam duis lobortis in fames ultrices commodo nibh.
                                        </p>
                                    </div>
                                </div>

                                <p className="post-paragraph">
                                    Enim, vel massa odio diam. Blandit massa gravida feugiat
                                    elementum id nec sed leo. Nisi in ornare lectus eget. Urna,
                                    risus, consectetur volutpat lorem purus. Velit aliquet nibh
                                    vitae maecenas. Consectetur neque ut aliquam eros, purus enim
                                    dignissim aenean vitae. Ultrices fames augue mattis tortor est
                                    justo, pharetra nibh risus. Facilisi at porttitor volutpat
                                    natoque proin amet, nulla. Vivamus ut lobortis sagittis
                                    curabitur tellus convallis eget netus vitae.
                                </p>
                            </div>

                            <div className="post-footer-meta">
                                <div className="post-tags">
                                    <p className="tags-label">Tags:</p>
                                    <div className="tag-item">#learning</div>
                                    <div className="tag-item">#HR</div>
                                    <div className="tag-item-long">#self-development</div>
                                </div>
                                <div className="post-share">
                                    <p className="share-text">Share:</p>
                                    <img src={fbIconGray} alt="Facebook" className="share-icon" />
                                    <img src={twIconGray} alt="Twitter" className="share-icon" />
                                    <img src={linkedInRed} alt="LinkedIn" className="share-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="post-right">
                            <div className="post-search">
                                <p className="search-placeholder">Search blog...</p>
                                <img src={searchIcon} alt="" className="search-icon" />
                            </div>

                            <div className="post-author">
                                <p className="author-title">AUTHOR</p>
                                <div className="author-card">
                                    <img src={courseFour} alt="" className="author-photo" />
                                    <div className="author-info">
                                        <p className="author-name">Kristin Watson</p>
                                        <p className="author-role">Curator of Marketing Course</p>
                                        <div className="author-socials">
                                            <p className="share-text">Share:</p>
                                            <img
                                                src={fbIconGray}
                                                alt="Facebook"
                                                className="share-icon"
                                            />
                                            <img
                                                src={twIconGray}
                                                alt="Twitter"
                                                className="share-icon"
                                            />
                                            <img
                                                src={linkedInRed}
                                                alt="LinkedIn"
                                                className="share-icon"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="post-trending">
                                <p className="trending-title">TRENDING ARTICLES</p>
                                <div className="trending-list">
                                    <div className="trending-item">
                                        <div className="trending-pic-cont ">
                                            <img
                                                src={trendingOne}
                                                alt=""
                                                className="trending-pic"
                                            />
                                        </div>
                                        <div className="trending-info">
                                            <div className="trending-meta">
                                                <img
                                                    src={calendarIcon}
                                                    alt=""
                                                    className="meta-icon"
                                                />
                                                <p className="meta-date">September 4, 2020</p>
                                            </div>
                                            <p className="trending-name">
                                                What is traffic arbitrage and does it really make
                                                money?
                                            </p>
                                        </div>
                                    </div>
                                    <div className="trending-item">
                                        <div className="trending-pic-cont ">
                                            <img
                                                src={trendingTwo}
                                                alt=""
                                                className="trending-pic"
                                            />
                                        </div>
                                        <div className="trending-info">
                                            <div className="trending-meta">
                                                <img
                                                    src={calendarIcon}
                                                    alt=""
                                                    className="meta-icon"
                                                />
                                                <p className="meta-date">July 15, 2020</p>
                                            </div>
                                            <p className="trending-name">
                                                Startup: how to build a team that will live longer
                                                than a year
                                            </p>
                                        </div>
                                    </div>
                                    <div className="trending-item">
                                        <div className="trending-pic-cont ">
                                            <img
                                                src={trendingThree}
                                                alt=""
                                                className="trending-pic"
                                            />
                                        </div>
                                        <div className="trending-info">
                                            <div className="trending-meta">
                                                <img
                                                    src={calendarIcon}
                                                    alt=""
                                                    className="meta-icon"
                                                />
                                                <p className="meta-date">August 2, 2020</p>
                                            </div>
                                            <p className="trending-name">
                                                What to do if you want to get feedback on the
                                                product
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="post-tags-sidebar">
                                <p className="tags-title">TAGS</p>
                                <div className="tags-list">
                                    <div className="tag-btn">#marketing</div>
                                    <div className="tag-btn">#recruiting</div>
                                    <div className="tag-btn tag-btn-active">#coding</div>
                                    <div className="tag-btn">#learning</div>
                                    <div className="tag-btn">#HR</div>
                                    <div className="tag-btn-long">#self-development</div>
                                </div>
                            </div>
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

                <section className="similar-posts">
                    <div className="container">
                        <div className="similar-top">
                            <div className="similar-titles">
                                <p className="similar-subtitle">OUR BLOG</p>
                                <h2 className="similar-title">You may also like</h2>
                            </div>
                            <div className="similar-arrows">
                                <img src={arrowLeft} alt="" className="similar-arrow" />
                                <img src={arrowRightGray} alt="" className="similar-arrow" />
                            </div>
                        </div>

                        <div className="similar-grid">
                            <div className="blog-card">
                                <div className="blog-pic-cont">
                                    <img src={blogSix} alt="" className="blog-pic" />
                                    <div className="blog-tag">
                                        <img src={micIcon} alt="" className="tag-icon" />
                                        <p className="tag-text">Podcast</p>
                                    </div>
                                </div>
                                <div className="blog-col">
                                    <div className="blog-meta">
                                        <p className="meta-category">Design</p>
                                        <div className="meta-dot"></div>
                                        <img src={calendarIcon} alt="" className="meta-icon" />
                                        <p className="meta-date">July 28, 2020</p>
                                        <div className="meta-dot"></div>
                                        <img src={clockIcon} alt="" className="meta-icon" />
                                        <p className="meta-time">36 min</p>
                                    </div>
                                    <h3 className="blog-title-card">
                                        What are color profiles and how they work in graphic design
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
                            </div>

                            <div className="blog-card">
                                <div className="blog-pic-cont ">
                                    <img src={trendingTwo} alt="" className="blog-pic" />
                                    <div className="blog-tag">
                                        <img src={fileIcon} alt="" className="tag-icon" />
                                        <p className="tag-text">Article</p>
                                    </div>
                                </div>
                                <div className="blog-col">
                                    <div className="blog-meta">
                                        <p className="meta-category">Development</p>
                                        <div className="meta-dot"></div>
                                        <img src={calendarIcon} alt="" className="meta-icon" />
                                        <p className="meta-date">September 1, 2020</p>
                                    </div>
                                    <h3 className="blog-title-card">
                                        How to choose the first programming language for a beginner
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
                            </div>

                            <div className="blog-card">
                                <div className="blog-pic-cont">
                                    <img src={trendingThree} alt="" className="blog-pic" />
                                    <div className="blog-tag">
                                        <img src={fileIcon} alt="" className="tag-icon" />
                                        <p className="tag-text">Article</p>
                                    </div>
                                </div>
                                <div className="blog-col">
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

                        <div className="similar-bottom">
                            <p className="similar-text">
                                Do you want more articles, podcasts and videos?
                            </p>
                            <Link to="/blog" className="btn-orange similar-btn">
                                Go to blog
                            </Link>
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

export default BlogPost;
