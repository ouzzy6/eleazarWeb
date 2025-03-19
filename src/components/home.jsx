import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./home.css";

function Home() {
    const navigate = useNavigate();
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
                    <div className="video-frame libro-frame" onClick={() => navigate('/mormon')}>
                        <img src="/libro de mormón.png" alt="Frame 1" />
                        <span className="frame-text">EL LIBRO DE MORMÓN</span>
                    </div>
                    <div className="video-frame endless-frame" onClick={() => navigate('/endlessstairs')}>
                        <img src="/endlesstairs (1).png" alt="Frame 2" />
                        <span className="frame-text">ENDLESSTAIRS</span>
                    </div>
                    <div className="video-frame redrum-frame" onClick={() => navigate('/redrum')}>
                        <img src="/redrum-2.png" alt="Frame 3" />
                        <span className="frame-text">REDRUM</span>
                    </div>
                    <div className="video-frame grande-frame" onClick={() => navigate('/cortos')}>
                        <img src="/cortos en grande (1).png" alt="Frame 4" />
                        <span className="frame-text">CORTOS EN GRANDE</span>
                    </div>
                    <div className="video-frame jungle-frame" onClick={() => navigate('/jungle')}>
                        <img src="/jungle.png" alt="Frame 5" />
                        <span className="frame-text">JUNGLE</span>
                    </div>
                    <div className="video-frame panda-frame" onClick={() => navigate('/panda')}>
                        <img src="/panda.png" alt="Frame 6" />
                        <span className="frame-text">PANDA</span>
                    </div>
                    <div className="video-frame danza-frame" onClick={() => navigate('/danza')}>
                        <img src="/danza alejandro.png" alt="Frame 7" />
                        <span className="frame-text">DANZA</span>
                    </div>
                    <div className="video-frame motion-frame" onClick={() => navigate('/motion')}>
                        <img src="/motions 1.png" alt="Frame 8" />
                        <span className="frame-text">MOTION GRAPHICS AND ANIMATION PORTFOLIO</span>
                    </div>
                </div>

                <div className="video-grid-short">
                    <div className="video-frame-short surarquia2-frame" onClick={() => navigate('/surarquia2')}>
                        <img src="/surarquia 2.png" alt="Frame 9" />
                        <span className="frame-text-short">SURARQUIA 2</span>
                    </div>
                    <div className="video-frame-short surarquia1-frame" onClick={() => navigate('/surarquia')}>
                        <img src="/surarquia.png" alt="Frame 10" />
                        <span className="frame-text-short">SURARQUIA</span>
                    </div>
                    <div className="video-frame-short doll-frame" onClick={() => navigate('/dollhouse')}>
                        <img src="/dollhouse disco.png" alt="Frame 11" />
                        <span className="frame-text-short">DOLLHOUSE DISCO</span>
                    </div>
                </div>
            </div>

            <div className="copyright">{t.copyright}</div>
        </div>
    );
}

export default Home;