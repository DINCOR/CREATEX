import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.scss';

import closeIcon from '../../assets/closeIcon.svg';
import eyeIcon from '../../assets/eyeIcon.svg';
import fbIcon from '../../assets/facebookGray.svg';
import googleIcon from '../../assets/googleIconGray.svg';
import twIcon from '../../assets/twitterRed.svg';
import inIcon from '../../assets/linkedinGray.svg';

function SignIn() {
    return (
        <div className="auth-page-signin">
            <div className="auth-modal">
                <div className="modal-header">
                    <div className="header-spacer"></div>
                    <h1 className="modal-title">Sign in</h1>
                    <Link to="/" className="close-btn">
                        <img src={closeIcon} alt="" className="close-icon" />
                    </Link>
                </div>

                <p className="modal-desc">
                    Sign in to your account using email and password provided during registration.
                </p>

                <div className="auth-form">
                    <div className="form-group">
                        <p className="form-label">Email</p>
                        <div className="form-input">
                            <input
                                className="input-placeholder"
                                type="text"
                                placeholder="Your working email"></input>
                        </div>
                    </div>

                    <div className="form-group">
                        <p className="form-label">Password</p>
                        <div className="form-input">
                            <input
                                className="input-placeholder"
                                type="text"
                                placeholder="*********"
                            />
                            <img src={eyeIcon} alt="" className="eye-icon" />
                        </div>
                    </div>

                    <div className="form-options">
                        <div className="checkbox-cont">
                            <input type="checkbox" />
                            <p className="checkbox-text">Keep me signed in</p>
                        </div>
                        <a href="#" className="forgot-link">
                            Forgot password?
                        </a>
                    </div>

                    <button className="auth-btn">Sign in</button>
                </div>

                <div className="auth-bottom">
                    <p className="auth-text">Don't have an account?</p>
                    <Link to="/signup" className="auth-link">
                        Sign up
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

export default SignIn;
