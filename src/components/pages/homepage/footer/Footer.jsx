import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <>
            <div className="footer" id="footer">
                <div className="container">
                    <div className="content">
                        <div className="title">
                            <h4>git in touch</h4>

                            <ul>
                                <li>
                                    {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <a href="mailto:ms12@gmail.com">
                                        ms12@gmail.com
                                    </a>
                                </li>

                                <li>
                                    <FontAwesomeIcon icon={faPhone} />
                                    <a href="tel:01200112233">01200112233</a>
                                </li>
                            </ul>
                        </div>

                        <div className="btn">
                            <a href="#contact">contact me</a>
                        </div>

                        <div className="social">
                            <ul>
                                <li>
                                    <a href="mailto:ms12@gmail.com">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://x.com">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://facebook.com">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </li>
                            </ul>

                            <p>copyright 2024 MS</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
