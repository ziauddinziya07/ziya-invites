import "../styles/App.css";
import Preloader from "./Preloader.jsx";
import Pricing from "./Pricing";
import Header from "./Header";
import Navbar from "./Navbar";
import { useEffect } from "react";
import $ from "jquery";
import Portfolio from "./Portfolio";

import AOS from "aos";
import "aos/dist/aos.css";
import BackToTopBtn from "./BackToTopBtn";
import Contact from "./Contact";

function App() {
    useEffect(() => {
        $(document).on("scroll", function () {
            if (window.scrollY > 50) {
                $(".navbar").addClass("nav-bg");
            } else {
                $(".navbar").removeClass("nav-bg");
            }
        });
    }, []);

    setTimeout(() => {
        $("#preloader").fadeOut("slow");
        $("body").removeAttr("style");
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
    }, 2000);

    return (
        <>
            <Preloader />
            <Navbar />
            <Header />
            <Portfolio />
            <Pricing />
            <Contact />
            <BackToTopBtn />
        </>
    );
}

export default App;

// Our invites are very time-effective. We make it only in 2 to 5 working hours,
// and you can send it to your all friends and relatives with just one click.
// Online wedding invitations are trendy among individuals. This latest trend of
// sending cards online is in more demand than any other form. The procedure of
// wedding cards is much cheaper than traditional methods. So take away the
// stress of wedding invitation. We will make it surprisingly, and you can share
//  it on social media easily.

// Make an accurate impression on your guest with a beautiful eCard to announce your event. Wow-factor guaranteed!
// Be Original & Unique
// It’s not just an invite but an occasion to tell the idea of your love through your text, photos.
// Be Eco-Friendly: Go Paperless
// Our eCards are a greener, environmentally friendly alternative to traditional paper stationery. Let’s save the world together!
// Save Money & Time
// We have successfully delivered our “Digital Invitation eCards” worldwide and are waiting to deliver to your country also.
// We make it only within 2-5 working hours, and you can send it to your all friends and relatives with one click.
