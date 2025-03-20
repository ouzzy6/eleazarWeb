import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./home.css";

function Home() {
    const { language, setLanguage, t } = useLanguage();

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <div className="home-container">
            {/* Navbar */}
            <div className="navbar">
                {/* Logo */}
                <div className="logo">
                    <Link to="/" className="logo"><h1>ELEAZAR UBIEDA</h1></Link>
                    <Link to="/" className="logo"><h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3></Link>
                </div>

                {/* Links y selector de idioma */}
                <div className="links">
                    <Link to="/about" className="link">{t.aboutMe}</Link>
                    <Link to="/contact" className="link">{t.contact}</Link>
                    <div className="language-selector">
                        <select className="select" value={language} onChange={handleLanguageChange}>
                            <option value="en">ENGLISH</option>
                            <option value="es">ESPAÑOL</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Portfolio */}
            <div className="portfolio">
                <div className="video-grid">
                    <Link to="/mormon" className="video-frame libro-frame">
                        <img src="/libro de mormón.png" alt="Frame 1" />
                        <span className="frame-text">{t.mormonTitle}</span>
                    </Link>
                    <Link to="/endlessstairs" className="video-frame endless-frame">
                        <img src="/endlesstairs (1).png" alt="Frame 2" />
                        <span className="frame-text">ENDLESSTAIRS</span>
                    </Link>
                    <Link to="/redrum" className="video-frame redrum-frame">
                        <img src="/redrum-2.png" alt="Frame 3" />
                        <span className="frame-text">REDRUM</span>
                    </Link>
                    <Link to="/cortos" className="video-frame grande-frame">
                        <img src="/cortos en grande (1).png" alt="Frame 4" />
                        <span className="frame-text">CORTOS EN GRANDE</span>
                    </Link>
                    <Link to="/jungle" className="video-frame jungle-frame">
                        <img src="/jungle 3.png" alt="Frame 5" />
                        <span className="frame-text">JUNGLE</span>
                    </Link>
                    <Link to="/panda" className="video-frame panda-frame">
                        <img src="/panda.png" alt="Frame 6" />
                        <span className="frame-text">PANDA</span>
                    </Link>
                    <Link to="/danza" className="video-frame danza-frame">
                        <img src="/danza alejandro.png" alt="Frame 7" />
                        <span className="frame-text">{t.danzaTitle}</span>
                    </Link>
                    <Link to="/motion" className="video-frame motion-frame">
                        <img src="/motions 1.png" alt="Frame 8" />
                        <span className="frame-text">MOTION GRAPHICS AND ANIMATION PORTFOLIO</span>
                    </Link>
                </div>

                <div className="video-grid-short">
                    <Link to="/surarquia2" className="video-frame-short surarquia2-frame">
                        <img src="/surarquia 2.png" alt="Frame 9" />
                        <span className="frame-text-short">SURARQUIA 2</span>
                    </Link>
                    <Link to="/surarquia" className="video-frame-short surarquia1-frame">
                        <img src="/surarquia.png" alt="Frame 10" />
                        <span className="frame-text-short">SURARQUIA</span>
                    </Link>
                    <Link to="/dollhouse" className="video-frame-short doll-frame">
                        <img src="/dollhouse disco.png" alt="Frame 11" />
                        <span className="frame-text-short">DOLLHOUSE DISCO</span>
                    </Link>
                </div>
            </div>

            <div className="copyright">{t.copyright}</div>
        </div>
    );
}

export default Home;