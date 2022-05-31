import React from "react";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PricingBoxBilingualCard(props) {
    const { delay } = props;
    return (
        <div
            className="price-box col-lg-4"
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            <div className="pricing-box-wrapper bordered-yellow mid-box">
                <h5>Bilingual Card</h5>
                <h3>
                    <span className="currency-sign">₹</span>500
                    <span className="per-card">per card</span>
                </h3>
                <ul>
                    <li>
                        <FontAwesomeIcon
                            className="tick-mark-icon"
                            icon={faCheck}
                        />
                        Unique Design
                    </li>
                    <li>
                        <FontAwesomeIcon
                            className="tick-mark-icon"
                            icon={faCheck}
                        />
                        Unique URL For Your Card
                    </li>
                    <li>
                        <FontAwesomeIcon
                            className="tick-mark-icon"
                            icon={faCheck}
                        />
                        Lifetime Access to Your Card
                    </li>
                    <li>
                        <FontAwesomeIcon
                            className="tick-mark-icon"
                            icon={faCheck}
                        />
                        Heart Touching BG Music
                    </li>
                    <li>
                        <FontAwesomeIcon
                            className="tick-mark-icon"
                            icon={faCheck}
                        />
                        Best Animated Features
                    </li>
                    <li>
                        <FontAwesomeIcon
                            className="tick-mark-icon"
                            icon={faCheck}
                        />
                        Countdown For Your Event
                    </li>
                    <li>
                        <FontAwesomeIcon
                            className="tick-mark-icon"
                            icon={faCheck}
                        />
                        <span>Language Changing Functionality</span>
                    </li>
                    <li>
                        <FontAwesomeIcon
                            className="tick-mark-icon"
                            icon={faCheck}
                        />
                        <span>Switch to EN, UR, TE ...</span>
                    </li>
                    <li>
                        <FontAwesomeIcon
                            className="tick-mark-icon"
                            icon={faCheck}
                        />
                        <span>Phone and Whatsapp Support</span>
                    </li>
                    <li className="na">
                        <FontAwesomeIcon
                            className="tick-mark-icon"
                            icon={faXmark}
                        />
                        <span>Unique Card for each Geust</span>
                    </li>
                    <li className="na">
                        <FontAwesomeIcon
                            className="tick-mark-icon"
                            icon={faXmark}
                        />
                        <span>Upto 1,000 Unique Card URLs</span>
                    </li>
                    <li className="na">
                        <FontAwesomeIcon
                            className="tick-mark-icon"
                            icon={faXmark}
                        />
                        <span>Each Card Have Unique Geust Name</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default PricingBoxBilingualCard;
