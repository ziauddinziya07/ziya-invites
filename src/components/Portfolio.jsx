import React, { useEffect } from "react";
import PortfolioItem from "./PortfolioItem";

import { Link } from "react-router-dom";

import $ from "jquery";
import "../styles/Portfolio.css";

function Portfolio(props) {
    const { setIsHomePage, cardsList } = props;

    useEffect(() => {
        setIsHomePage(false);
        /***
         * Changing portfolio nav bg
         */
        $(".navbar").addClass("nav-blue-bg");
        window.scrollTo(0, 0);
        setTimeout(() => {
            let i = 0;
            let interval = setInterval(() => {
                $(".portfolio-item .logo-image").eq(i).addClass("hidden");
                i++;
                if (i >= cardsList.length) clearInterval(interval);
            }, 700);
        }, 1000);
        // eslint-disable-next-line
    }, []);
    return (
        <section id="portfolio">
            <div className="portfolio-wrapper">
                <div className="portfolio-header">
                    <h2>PORTFOLIO</h2>
                    <p>
                        Have a look at our Portfolio, The following cards are
                        the most popular ones among all our cards. These cards
                        not only catched the attention of many users but also
                        touched the deep of their hearts.
                    </p>
                </div>
                <div className="row">
                    {cardsList.map((card, index) => {
                        return (
                            <PortfolioItem
                                key={index}
                                id={index}
                                itemLink={card.URL}
                                imgSrc={card.image}
                                title={card.name}
                            />
                        );
                    })}
                </div>
                <Link id="portfolio-link" className="button" to="/">
                    Home
                </Link>
            </div>
        </section>
    );
}

export default Portfolio;
