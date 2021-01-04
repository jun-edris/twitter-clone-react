// TODO: Finish up the design
// TODO: Connect the app to the firebase
// TODO: Create an authentication using firebase

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { MdPeopleOutline } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BsChat } from "react-icons/bs";
import './css/Login.css';
function Login() {
    return (
        <div className="login">
            <div className="login_intro_container">
                <div className="login_auth_container">
                    <div className="login_content">
                        <div className="intro_top">
                            <FaTwitter className="intro_logo"/>
                            <span>See what's happening in the world right now</span>
                        </div>
                        <div className="intro_message">
                            <span>Join Twitter today.</span>
                        </div>
                        <div className="intro_bottom">
                            
                            <button>Sign up</button>
                            <button>Log in</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login_text_container">
                    <FaTwitter className="twitter_logo"/>
                    <div className="login_inner_container">
                            <div className="sentences">
                                <FiSearch className="content_logo"/> <span>Follow your interests.</span>
                            </div>
                            <div className="sentences">
                                <MdPeopleOutline className="content_logo"/> <span>Hear what people are talking about.</span>
                            </div>
                            <div className="sentences">
                                <BsChat className="content_logo"/> <span>Join the conversation.</span>
                            </div>
                    </div>
            </div>
            <div className="login_buttons">
                <button>Sign up</button>
                <button>Log in</button>
            </div>
            <div className="login_footer">
            <Router>
                    <Switch>
                        <ul>
                            <li><Link className="links" to="/about">About</Link></li>
                            <li><Link className="links" to="/help">Help Center</Link></li>
                            <li><Link className="links" to="/termsOfService">Terms of Service</Link></li>
                            <li><Link className="links" to="/privacyPolicy">Privacy Policy</Link></li>
                            <li><Link className="links" to="/cookiePolicy">Cookie Policy</Link></li>
                            <li><Link className="links" to="/adsInfo">Ads info</Link></li>
                            <li><Link className="links" to="/blog">Blog</Link></li>
                            <li><Link className="links" to="/status">Status</Link></li>
                            <li><Link className="links" to="/careers">Careers</Link></li>
                            <li><Link className="links" to="/brandResources">Brand Resources</Link></li>
                            <li><Link className="links" to="/advertising">Advertising</Link></li>
                            <li><Link className="links" to="/marketing">Marketing</Link></li>
                            <li><Link className="links" to="/business">Twitter for Business</Link></li>
                            <li><Link className="links" to="/developers">Developers</Link></li>
                            <li><Link className="links" to="/directory">Directory</Link></li>
                            <li><Link className="links" to="/settings">Settings</Link></li>
                            <li>&#169; 2020 Twitter, Inc.</li>
                        </ul>
                    </Switch>
                </Router>
            </div>
            {/* <div className="container_login">
                <div className="login_auth_side">
                    <div className="login_content">
                        <div className="login_top">
                            <FaTwitter className="login_auth_logo" />
                            <h1>See what's happening in the world right now</h1>
                        </div>
                        <div className="login_authorization">
                            <span>Join Twitter today.</span>
                            <button className="auth_buttons">Sign up</button>
                            <button className="auth_buttons">Log in</button>
                        </div>
                    </div>
                </div>
                <div className="login_text_side">
                    <FaTwitter className="twitter_logo"/>
                    <div className="login_description">
                        <div className="sentences">
                            <FiSearch className="description_logos"/><h2>Follow your interests.</h2>
                        </div>
                        <div className="sentences">
                            <MdPeopleOutline className="description_logos"/><h2>Hear what people are talking about.</h2>
                        </div>
                        <div className="sentences">
                            <BsChat className="description_logos"/><h2>Join the conversation.</h2>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="login_footer">
                <Router>
                    <Switch>
                        <ul>
                            <li><Link className="links" to="/about">About</Link></li>
                            <li><Link className="links" to="/help">Help Center</Link></li>
                            <li><Link className="links" to="/termsOfService">Terms of Service</Link></li>
                            <li><Link className="links" to="/privacyPolicy">Privacy Policy</Link></li>
                            <li><Link className="links" to="/cookiePolicy">Cookie Policy</Link></li>
                            <li><Link className="links" to="/adsInfo">Ads info</Link></li>
                            <li><Link className="links" to="/blog">Blog</Link></li>
                            <li><Link className="links" to="/status">Status</Link></li>
                            <li><Link className="links" to="/careers">Careers</Link></li>
                            <li><Link className="links" to="/brandResources">Brand Resources</Link></li>
                            <li><Link className="links" to="/advertising">Advertising</Link></li>
                            <li><Link className="links" to="/marketing">Marketing</Link></li>
                            <li><Link className="links" to="/business">Twitter for Business</Link></li>
                            <li><Link className="links" to="/developers">Developers</Link></li>
                            <li><Link className="links" to="/directory">Directory</Link></li>
                            <li><Link className="links" to="/settings">Settings</Link></li>
                            <li>&#169; 2020 Twitter, Inc.</li>
                        </ul>
                    </Switch>
                </Router>
            </div> */}
        </div>
    )
}

export default Login
