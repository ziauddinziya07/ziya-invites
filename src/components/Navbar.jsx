import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import "../styles/Navbar.css";

function Navbar() {
    let isFullNavActive = false;
    function handleNavToggle() {
        if (!isFullNavActive) {
            $(".navbar-collapse").css({
                display: "none",
            });
            $(".full-scrn-nav").css({
                display: "block",
            });
            $("#menu-btn").toggle();
            isFullNavActive = !isFullNavActive;
        } else {
            $(".full-scrn-nav").css({
                display: "none",
            });
            $("#menu-btn").toggle();
            isFullNavActive = !isFullNavActive;
        }
    }

    useEffect(() => {
        /**
         * Changing the active-link for respective sections in the Navbar when
         * page scrolled
         *  */
        $(window).on("scroll", function () {
            const navLinks = $(".navbar-nav .nav-item .nav-link");

            let index = 0;
            for (let i = 0, len = navLinks.length; i < len; i++) {
                const id = "#" + navLinks[i].href.split("#")[1];

                const idTopPos = $(id).position().top - 150;
                if ($(window).scrollTop() > idTopPos) {
                    index = i;
                }
            }

            $(".navbar-nav .nav-item").removeClass("active");
            $(".full-scrn-nav .list-item").removeClass("active");
            $(".full-scrn-nav .list-item").eq(index).addClass("active");
            $(".navbar-nav .nav-item").eq(index).addClass("active");
        });
    }, []);

    return (
        <section id="navbar">
            <nav className="navbar fixed-top navbar-dark navbar-expand-lg">
                <a className="navbar-brand" href="#header">
                    Ziya Invites
                </a>
                <button
                    className="navbar-toggler"
                    id="menu-btn"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={handleNavToggle}
                >
                    <FontAwesomeIcon
                        icon={faBars}
                        className="navbar-toggler-icon"
                    />
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#header">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#portfolio">
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#pricing">
                                Pricing
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="full-scrn-nav">
                <div className="full-scrn-nav-wrapper">
                    <div className="full-scrn-nav-content">
                        <button
                            className="navbar-toggler"
                            onClick={handleNavToggle}
                        >
                            <FontAwesomeIcon
                                icon={faXmark}
                                className="navbar-toggler-icon xmark"
                            />
                        </button>
                        <ul>
                            <li className="list-item active">
                                <a
                                    href="#header"
                                    className="link"
                                    onClick={handleNavToggle}
                                >
                                    Home
                                </a>
                            </li>
                            <li className="list-item">
                                <a
                                    href="#portfolio"
                                    className="link"
                                    onClick={handleNavToggle}
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li className="list-item">
                                <a
                                    href="#pricing"
                                    className="link"
                                    onClick={handleNavToggle}
                                >
                                    Pricing
                                </a>
                            </li>
                            <li className="list-item">
                                <a
                                    href="#contact"
                                    className="link"
                                    onClick={handleNavToggle}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Navbar;
