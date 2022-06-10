import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
    faHackerrank,
    faWhatsapp,
    faLinkedinIn,
    faGithub,
    faSkype,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Contact.css";

function Contact(props) {
    const { isHomePage } = props;
    return (
        <section id="contact">
            <div className="contact-title">
                <h2>Contact</h2>
                <p>
                    We'd love to hear from you! Contact us for any questions and
                    feedback through our social links or direlectly on a call
                </p>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 contact-tile">
                    {isHomePage ? (
                        <a href="#header">
                            <h4>Ziya Invites</h4>
                        </a>
                    ) : (
                        <Link to="/">
                            <h4>Ziya Invites</h4>
                        </Link>
                    )}
                    <p>Launched on 31<sup>st</sup> May, 2022</p>
                    <p>Adoni, AP</p>
                    <p>India - 518301</p>
                    <br />
                    <p>
                        <strong>Email: </strong>ziauddinziya07@gmail.com
                    </p>
                    <p>
                        <strong>Call on: </strong>+91 95737 67548
                    </p>
                </div>
                <div className="col-lg-3 col-md-6 contact-tile">
                    <h6>Useful Links</h6>
                    <ul>
                        <li>
                            <span className="icon">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </span>
                            {isHomePage ? (
                                <a href="#header">Home</a>
                            ) : (
                                <Link to="/">Home</Link>
                            )}
                        </li>
                        <li>
                            <span className="icon">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </span>
                            <a
                                href={
                                    isHomePage
                                        ? "#portfolio-section"
                                        : "#portfolio"
                                }
                            >
                                Portfolio
                            </a>
                        </li>

                        {isHomePage && (
                            <li>
                                <span className="icon">
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </span>
                                <a href="#pricing">Pricing</a>
                            </li>
                        )}
                        <li>
                            <span className="icon">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </span>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div id="services" className="col-lg-3 col-md-6 contact-tile">
                    <h6>Our Services</h6>
                    <p>
                        <span className="icon">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                        Invitation Cards
                    </p>
                    <p>
                        <span className="icon">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                        Wedding Cards
                    </p>
                    <p>
                        <span className="icon">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                        Event Cards
                    </p>
                    <p>
                        <span className="icon">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </span>
                        Event Reminders
                    </p>
                </div>
                <div className="col-lg-3 col-md-6 contact-tile">
                    <h6>Our Social Networks</h6>
                    <p>Follow us on the following Social Networks!</p>
                    <div className="social-links-wrapper">
                        <a href="https://wa.me/919573767548">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                        <a href="https://www.linkedin.com/in/ziauddinziya/">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="https://github.com/ziauddinziya07/">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.hackerrank.com/ziauddinziya07?hr_r=1">
                            <FontAwesomeIcon icon={faHackerrank} />
                        </a>
                        <a href="https://join.skype.com/invite/dr2WD0xsdMph">
                            <FontAwesomeIcon icon={faSkype} />
                        </a>
                        <a href="https://ziauddinziya07.github.io">
                            <FontAwesomeIcon icon={faGlobe} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
