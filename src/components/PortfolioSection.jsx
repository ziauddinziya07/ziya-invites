import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PortfolioItem from "./PortfolioItem";
import $ from "jquery";
import "../styles/PortfolioSection.css";

function PortfolioSection(props) {
    const { setIsHomePage, topCardsList, loadComplete } = props;

    useEffect(() => {
        setIsHomePage(true);

        $(".navbar").removeClass("nav-blue-bg");
    }, []);

    if (loadComplete) {
        setTimeout(() => {
            let i = 0;
            let interval = setInterval(() => {
                $(".portfolio-item .logo-image").eq(i).addClass("hidden");
                i++;
                if (i >= topCardsList.length) clearInterval(interval);
            }, 700);
        }, 1000);
    }

    return (
        <section id="portfolio-section" data-aos="fade-up" data-aos-delay="300">
            <div className="portfolio-section-wrapper">
                <div className="portfolio-section-header">
                    <h2>PORTFOLIO</h2>
                    <p>
                        Have a look at our Portfolio, The following cards are
                        the most popular ones among all our cards. These cards
                        not only catched the attention of many users but also
                        touched the deep of their hearts.
                    </p>
                </div>
                <div className="row">
                    {topCardsList.map((card, index) => {
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
                <Link id="portfolio-link" className="button" to="/portfolio">
                    View More
                </Link>
            </div>
        </section>
    );
}

export default PortfolioSection;
