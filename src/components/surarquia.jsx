import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./surarquia.css";

function Sura() {
    const { t } = useLanguage();

    return (
        <div className="sura-container">
            {/* Navbar como en Mormon */}
            <div className="sura-navbar">
                <div className="sura-logo">
                    <a href="/" className="sura-logo"><h1>ELEAZAR UBIEDA</h1></a>
                    <a href="/" className="sura-logo"><h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3></a>
                </div>
            </div>

            <div className="sura-titulo">
                <h2>{t.suraTitle}</h2>
            </div>
            
            <div className="sura-subtitulo">{t.suraSubtitle}</div>

            {/* Contenedor del video y texto */}
            <div className="sura-content-container">
                <div className="sura-video">
                    <iframe 
                        src="https://www.youtube.com/embed/FkZHJZ97gZU?si=B7ht_zYduIwNcmpK" 
                        title="YouTube video" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="sura-texto">
                    <ul>
                        <div dangerouslySetInnerHTML={{ __html: t.suraText }} />
                    </ul>
                </div>
            </div>

            <div className="sura-imagenes-container">
                <div className="sura-imagen-frame">
                    <img src="surarquia 1.2.png" alt="Imagen 1" />
                </div>
                <div className="sura-imagen-frame">
                    <img src="surarquia 1.4.png" alt="Imagen 2" />
                </div>
                <div className="sura-imagen-frame">
                    <img src="surarquia 1.5.png" alt="Imagen 3" />
                </div>
            </div>

            <div className="sura-copyright">{t.copyright}</div>
        </div>
    );
}

export default Sura;