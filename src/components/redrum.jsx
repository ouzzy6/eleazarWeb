import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./redrum.css";

function Redrum() {
    const { t } = useLanguage();

    return (
        <div className="redrum-container">
            {/* Navbar como en Mormon */}
            <div className="redrum-navbar">
                <div className="redrum-logo">
                    <a href="/" className="redrum-logo"><h1>ELEAZAR UBIEDA</h1></a>
                    <a href="/" className="redrum-logo"><h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3></a>
                </div>
            </div>

            <div className="redrum-titulo">
                <h2>{t.redrumTitle}</h2>
            </div>
            
            <div className="redrum-subtitulo">{t.redrumSubtitle}</div>

            {/* Contenedor del video y texto */}
            <div className="redrum-content-container">
                <div className="redrum-video">
                    <iframe 
                        src="https://www.youtube.com/embed/W-X1MMDimHE?si=_DZUB--IGizmN0gA" 
                        title="YouTube video" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="redrum-texto">
                    <ul>
                        <div dangerouslySetInnerHTML={{ __html: t.redrumText }} />
                    </ul>
                </div>
            </div>

            <div className="redrum-imagenes-container">
                <div className="redrum-imagen-frame">
                    <img src="redrum 3.png" alt="Imagen 1" />
                </div>
                <div className="redrum-imagen-frame">
                    <img src="redrum 4.png" alt="Imagen 2" />
                </div>
                <div className="redrum-imagen-frame">
                    <img src="redrum 5.png" alt="Imagen 3" />
                </div>
            </div>

            <div className="redrum-copyright">{t.copyright}</div>
        </div>
    );
}

export default Redrum;