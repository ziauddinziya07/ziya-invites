import React from "react";
import PortfolioItem from "./PortfolioItem";
import "../styles/Portfolio.css";

function Portfolio() {
    return (
        <section id="portfolio" data-aos="fade-up" data-aos-delay="300">
            <div className="portfolio-wrapper">
                <div className="portfolio-title">
                    <h2>PORTFOLIO</h2>
                    <p>
                        Have a look at our Portfolio, The following cards are
                        the most popular ones among all our cards. These cards
                        not only catched the attention of many users but also
                        touched the deep of their hearts.
                    </p>
                </div>
                <div className="row">
                    <PortfolioItem
                        itemLink="https://ramadan-iftar-party.netlify.app/"
                        imgSrc="ramadan-iftar-party.png"
                        title="Ramadan Iftar Party"
                        delay="100"
                    />
                    <PortfolioItem
                        itemLink="https://3-shabi-shabeena.netlify.app/"
                        imgSrc="3-shabi-shabeena.png"
                        title="3 Shabi Shabeena"
                        delay="200"
                    />
                    <PortfolioItem
                        itemLink="http://taher-weds-sabiya.netlify.app/"
                        imgSrc="taher-weds-sabiya.png"
                        title="Taher Weds Sabiya"
                        delay="300"
                    />
                    <PortfolioItem
                        itemLink="https://zain-naming-cermony.netlify.app/"
                        imgSrc="zain-naming-cermony.png"
                        title="Zain Naming Cermony"
                        delay="400"
                    />
                </div>
                <button className="btn">View More</button>
            </div>
        </section>
    );
}

export default Portfolio;
