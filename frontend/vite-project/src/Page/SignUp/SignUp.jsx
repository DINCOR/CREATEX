import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.scss';

import closeIcon from '../../assets/closeIcon.svg';
import eyeIcon from '../../assets/eyeIcon.svg';
import fbIcon from '../../assets/facebookGray.svg';
import googleIcon from '../../assets/googleIconGray.svg';
import twIcon from '../../assets/twitterRed.svg';
import inIcon from '../../assets/linkedinGray.svg';

function SignUp() {
    return (
        <div className="auth-page-signup">
            <div className="auth-modal">
                <div className="modal-header">
                    <div className="header-spacer"></div>
                    <h1 className="modal-title">Sign up</h1>
                    <Link to="/" className="close-btn">
                        <img src={closeIcon} alt="" className="close-icon" />
                    </Link>
                </div>

                <p className="modal-desc">
                    Registration takes less than a minute but gives you full control over your
                    studying.
                </p>

                <div className="auth-form">
                    <div className="form-group">
                        <p className="form-label">Full Name</p>
                        <div className="form-input">
                            <input
                                className="input-placeholder"
                                type="text"
                                placeholder="Your full name"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <p className="form-label">Email</p>
                        <div className="form-input">
                            <input
                                className="input-placeholder"
                                type="email"
                                placeholder="Your working email"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <p className="form-label">Password</p>
                        <div className="form-input">
                            <input
                                className="input-placeholder"
                                type="password"
                                placeholder="*********"
                            />
                            <img src={eyeIcon} alt="" className="eye-icon" />
                        </div>
                    </div>

                    <div className="form-group">
                        <p className="form-label">Confirm Password</p>
                        <div className="form-input">
                            <input
                                className="input-placeholder"
                                type="password"
                                placeholder="*********"
                            />
                            <img src={eyeIcon} alt="" className="eye-icon" />
                        </div>
                    </div>

                    <div className="form-options">
                        <div className="checkbox-cont">
                            <input type="checkbox" />
                            <p className="checkbox-text">Remember me</p>
                        </div>
                    </div>

                    <button className="auth-btn">Sign up</button>
                </div>

                <div className="auth-bottom">
                    <p className="auth-text">Already have an account?</p>
                    <Link to="/login" className="auth-link">
                        Sign in
                    </Link>
                </div>

                <div className="auth-socials">
                    <div className="social-divider">
                        <p className="divider-text">Or sign in with</p>
                    </div>
                    <div className="social-icons">
                        <img src={fbIcon} alt="" className="soc-icon" />
                        <img src={googleIcon} alt="" className="soc-icon" />
                        <img src={twIcon} alt="" className="soc-icon" />
                        <img src={inIcon} alt="" className="soc-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
