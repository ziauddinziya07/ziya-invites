import React from "react";

function PortfolioItem(props) {
    const { title, itemLink, imgSrc, delay } = props;

    return (
        <div
            className="col-lg-3 col-md-6 col-sm-12 portfolio-item"
            data-aos="zoom-in"
            data-aos-delay={delay}
        >
            <div className="prtfolio-item-wrapper">
                <a href={itemLink} target="_blank" rel="noreferrer">
                    <img src={"../assets/thumbnails/" + imgSrc} alt={title} />
                    <h6>{title}</h6>
                </a>
            </div>
        </div>
    );
}

export default PortfolioItem;
