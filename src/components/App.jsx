import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Preloader from "./Preloader.jsx";
import Navbar from "./Navbar";
import Main from "./Main";
import Contact from "./Contact";
import BackToTopBtn from "./BackToTopBtn";
import Portfolio from "./Portfolio.jsx";
import NewCard from "./NewCard.jsx";
import $ from "jquery";

// Firebase Realtime Database
import { db } from "../firebase/firebase-config";
import { ref, onValue } from "firebase/database";

// Styles
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/App.css";

function App() {
    const [isHomePage, setIsHomePage] = useState(false);
    const [cardsList, setCardsList] = useState([]);
    const [topCardsList, setTopCardsList] = useState([]);

    const [loadComplete, setLoadComplete] = useState(false);

    useEffect(() => {
        onValue(ref(db), (snapshot) => {
            if (snapshot.exists()) {
                const obj = snapshot.val();
                if (obj !== null) {
                    const list = [];
                    const topList = [];
                    for (const key in obj) {
                        list.push(obj[key]);
                        if (obj[key].priority === "high" && topList.length <= 8)
                            topList.push(obj[key]);
                    }

                    setLoadComplete(true);
                    setCardsList(list);
                    setTopCardsList(topList);
                } else {
                    console.log("No data is available");
                }
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
            <Router>
                <Preloader />
                <Navbar isHomePage={isHomePage} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Main
                                setIsHomePage={setIsHomePage}
                                topCardsList={topCardsList}
                                loadComplete={loadComplete}
                            />
                        }
                    />
                    <Route
                        path="portfolio"
                        element={
                            <Portfolio
                                setIsHomePage={setIsHomePage}
                                cardsList={cardsList}
                            />
                        }
                    />
                    <Route
                        path="new-card"
                        element={<NewCard setIsHomePage={setIsHomePage} />}
                    />
                </Routes>
                <Contact isHomePage={isHomePage} />
                <BackToTopBtn />
            </Router>
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
