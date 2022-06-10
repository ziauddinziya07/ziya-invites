import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import "../styles/Navbar.css";

function Navbar(props) {
    const { isHomePage } = props;

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
         * **/
        $(window).on("scroll", function () {
            const navLinks = $(".navbar-nav .nav-item .nav-link");

            try {
                let index = 0;
                for (let i = 0, len = navLinks.length; i < len; i++) {
                    const id = "#" + navLinks[i].href.split("#")[1];

                    const idTopPos = $(id).position().top - 150;
                    if ($(window).scrollTop() > idTopPos) {
                        index = i;
                    }
                }

                $(".navbar-nav .nav-item .nav-link").removeClass("active");
                $(".full-scrn-nav .list-item .link").removeClass("active");
                $(".navbar-nav .nav-item .nav-link")
                    .eq(index)
                    .addClass("active");
                $(".full-scrn-nav .list-item .link")
                    .eq(index)
                    .addClass("active");
            } catch (e) {}
        });
    }, []);

    /****
     *
     * Scroll event for the Navbar
     *
     * ****/
    useEffect(() => {
        $(window).on("scroll", function () {
            if (window.scrollY > 50) {
                $(".navbar").addClass("nav-bg");
            } else {
                $(".navbar").removeClass("nav-bg");
            }
        });
    }, []);

    return (
        <section id="navbar">
            <nav className="navbar fixed-top navbar-dark navbar-expand-lg">
                {isHomePage ? (
                    <a className="navbar-brand" href="#header">
                        Ziya Invites
                    </a>
                ) : (
                    <Link className="navbar-brand" to="/">
                        Ziya Invites
                    </Link>
                )}
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
                        <li className="nav-item">
                            {isHomePage ? (
                                <a className="nav-link active" href="#header">
                                    Home
                                </a>
                            ) : (
                                <Link className="home-link " to="/">
                                    Home
                                </Link>
                            )}
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
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
                            <li className="nav-item">
                                <a className="nav-link" href="#pricing">
                                    Pricing
                                </a>
                            </li>
                        )}
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
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
                            <li className="list-item">
                                {isHomePage ? (
                                    <a
                                        href="#header"
                                        className="link active"
                                        onClick={handleNavToggle}
                                    >
                                        Home
                                    </a>
                                ) : (
                                    <Link
                                        to="/"
                                        className="home-link"
                                        onClick={handleNavToggle}
                                    >
                                        Home
                                    </Link>
                                )}
                            </li>
                            <li className="list-item">
                                <a
                                    href={
                                        isHomePage
                                            ? "#portfolio-section"
                                            : "#portfolio"
                                    }
                                    className="link"
                                    onClick={handleNavToggle}
                                >
                                    Portfolio
                                </a>
                            </li>
                            {isHomePage && (
                                <li className="list-item">
                                    <a
                                        href="#pricing"
                                        className="link"
                                        onClick={handleNavToggle}
                                    >
                                        Pricing
                                    </a>
                                </li>
                            )}
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
