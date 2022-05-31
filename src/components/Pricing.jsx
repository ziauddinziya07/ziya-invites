import React from "react";
import PricingBoxProCard from "./PricingBoxProCard";
import PricingBoxBaseCard from "./PricingBoxBaseCard";
import PricingBoxBilingualCard from "./PricingBoxBilingualCard";
import "../styles/Pricing.css";

function Pricing() {
    return (
        <section id="pricing" data-aos="fade-up">
            <div className="pricing-wrapper">
                <div className="pricing-title">
                    <h2>PRICING</h2>
                    <p>
                        We have made three types of card services which have
                        different features and pricing. Each type of card holds
                        it's Uniqueness and developed based on the people's
                        interest and usecases.
                    </p>
                </div>
                <div className="row">
                    <PricingBoxBaseCard delay="100" />
                    <PricingBoxBilingualCard delay="300" />
                    <PricingBoxProCard delay="500" />
                </div>
            </div>
        </section>
    );
}

export default Pricing;
