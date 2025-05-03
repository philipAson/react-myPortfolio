import { Routes, Route, useNavigate } from "react-router-dom";
import { useRef } from "react";

import Header from "./ContentElements/Header";
import NavBar from "./ContentElements/NavBar";
import BackgroundDotTrail from "./ContentElements/BackgroundDotTrail";
import Home from "./ContentElements/Home";
import About from "./ContentElements/About";
import Slider from "./ContentElements/Slider";

const Overlay = () => {
    const navigate = useNavigate();

    // 💡 Alla bokstäver/länkar registreras här
    const letterRefs = useRef([]);
    letterRefs.current = []; // rensa varje render

    const registerLetter = (ref, trigger) => {
        letterRefs.current.push({ ref, trigger });
    };

    const navigateHome = () => navigate("/");
    const navigateAbout = () => navigate("/about");

    return (
        <div className="OverlayContainer">
            <BackgroundDotTrail letterRefs={letterRefs} />

            <div className="TopRow">
                <Header registerLetter={registerLetter} />
                <NavBar
                    navigateHome={navigateHome}
                    navigateAbout={navigateAbout}
                    registerLetter={registerLetter}
                />
            </div>

            <div className="contentContainer">
                <Routes>
                    <Route
                        path="/"
                        element={<Home registerLetter={registerLetter} />}
                    />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>

            <div className="BottomRow">
                <p className="footer-paragraph">
                    font: Le Murmure by Jérémy Landes. Distributed by
                    velvetyne.fr.
                </p>
                <img src="my_stack_curve_up_transparent.png" alt="curve" />
            </div>

            <div className="rightVertical">
                <Slider />
            </div>
        </div>
    );
};

export default Overlay;
