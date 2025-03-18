import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./dollhouse.css";

function Doll() {
    const { t } = useLanguage();

    return (
        <div className="doll-container">
            {/* Navbar como en Mormon */}
            <div className="doll-navbar">
                <div className="doll-logo">
                    <a href="/" className="doll-logo"><h1>ELEAZAR UBIEDA</h1></a>
                    <a href="/" className="doll-logo"><h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3></a>
                </div>
            </div>

            <div className="doll-titulo">
                <h2>{t.dollTitle}</h2>
            </div>
            
            <div className="doll-subtitulo">{t.dollSubtitle}</div>

            {/* Contenedor del video y texto */}
            <div className="doll-content-container">
                <div className="doll-video">
                    <iframe 
                        src="https://www.youtube.com/embed/Pw9lpRb-4-Y?si=A7kTzohyAa5c7-jy" 
                        title="YouTube video" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="doll-texto">
                    <ul>
                        <div dangerouslySetInnerHTML={{ __html: t.dollText }} />
                    </ul>
                </div>
            </div>

            <div className="doll-imagenes-container">
                <div className="doll-imagen-frame">
                    <img src="doll 2.png" alt="Imagen 1" />
                </div>
                <div className="doll-imagen-frame">
                    <img src="doll 3.png" alt="Imagen 2" />
                </div>
                <div className="doll-imagen-frame">
                    <img src="doll 4.png" alt="Imagen 3" />
                </div>
            </div>

            <div className="doll-copyright">{t.copyright}</div>
        </div>
    );
}

export default Doll;