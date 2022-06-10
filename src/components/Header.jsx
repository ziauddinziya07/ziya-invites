import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import "../styles/Header.css";

function Header() {
    const typedElement = useRef();
    const typed = React.useRef();

    useEffect(() => {
        const options = {
            stringsElement: "#typed-strings",
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
        };

        setTimeout(() => {
            typed.current = new Typed(typedElement.current, options);
        }, 2500);

        
    }, []);

    return (
        <section id="header">
            <div className="wrapper">
                <div className="row">
                    <div
                        className="col-lg-6 order-2 order-lg-1 heading"
                        data-aos="fade-up"
                    >
                        <div className="typed-wrapper">
                            <h1>
                                We Make Awesome <span className="break"></span>
                                <span
                                    ref={typedElement}
                                    className="typed-text"
                                ></span>
                                <div id="typed-strings">
                                    <p>Invitaion Cards</p>
                                    <p>Wedding Cards</p>
                                    <p>Event Cards</p>
                                    <p>Event Reminders</p>
                                </div>
                            </h1>
                            <h3>
                                we are the talented card designers taking the
                                circulation process of current generation
                                Digital Cards to the next level
                            </h3>
                        </div>
                    </div>
                    <div
                        className="col-lg-6 order-1 order-lg-2 poster-wrapper"
                        data-aos="zoom-in"
                    >
                        <img
                            className="poster"
                            src="../assets/images/poster.png"
                            alt="Poster"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
