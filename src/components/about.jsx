import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./about.css";

function AboutMe() {
    const { t } = useLanguage();

    return (
        <div className="aboutme-container">
            {/* Navbar como en Mormon */}
            <div className="aboutme-navbar">
                <div className="aboutme-logo">
                    <a href="/" className="aboutme-logo"><h1>ELEAZAR UBIEDA</h1></a>
                    <a href="/" className="aboutme-logo"><h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3></a>
                </div>
            </div>

            <div className="aboutme-titulo">
                <h2>{t.aboutMeTitle}</h2>
            </div>

            {/* Contenedor del texto y foto */}
            <div className="aboutme-content-container">
                <div className="aboutme-texto">
                    <div dangerouslySetInnerHTML={{ __html: t.aboutMeText }} />
                </div>
                <div className="aboutme-foto">
                    <img src="eleazar.png" alt="Foto de Eleazar Ubieda" />
                </div>
            </div>

            <div className="aboutme-copyright">{t.copyright}</div>
        </div>
    );
}

export default AboutMe;