import React from "react";
import Header from "./Header";
import PortfolioSection from "./PortfolioSection";
import Pricing from "./Pricing";

function Main(props) {

    const { setIsHomePage, topCardsList, loadComplete } = props;
    return (
        <>
            <Header />
            <PortfolioSection
                setIsHomePage={setIsHomePage}
                topCardsList={topCardsList}
                loadComplete={loadComplete}
            />
            <Pricing />
        </>
    );
}

export default Main;
