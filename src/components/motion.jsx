import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./motion.css";

function Motion() {
    const { t } = useLanguage();

    return (
        <div className="motion-container">
            {/* Navbar como en Mormon */}
            <div className="motion-navbar">
                <div className="motion-logo">
                    <a href="/" className="motion-logo"><h1>ELEAZAR UBIEDA</h1></a>
                    <a href="/" className="motion-logo"><h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3></a>
                </div>
            </div>

            <div className="motion-titulo">
                <h2>{t.motionTitle}</h2>
            </div>
            
            <div className="motion-subtitulo">{t.motionSubtitle}</div>

            {/* Contenedor del video y texto */}
            <div className="motion-content-container">
                <div className="motion-video">
                    <iframe 
                        src="https://www.youtube.com/embed/aXonEvurQwM?si=lvzj48_P4OJCSgl5" 
                        title="YouTube video" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="motion-texto">
                    <ul>
                        <div dangerouslySetInnerHTML={{ __html: t.motionText }} />
                    </ul>
                </div>
            </div>

            <div className="motion-imagenes-container">
                <div className="motion-imagen-frame">
                    <img src="motions 3.png" alt="Imagen 1" />
                </div>
                <div className="motion-imagen-frame">
                    <img src="motions 4.png" alt="Imagen 2" />
                </div>
                <div className="motion-imagen-frame">
                    <img src="motions 5.png" alt="Imagen 3" />
                </div>
            </div>

            <div className="motion-copyright">{t.copyright}</div>
        </div>
    );
}

export default Motion;