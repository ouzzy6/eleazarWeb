import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./surarquia2.css";

function Sura2() {
    const { t } = useLanguage();

    return (
        <div className="sura2-container">
            {/* Navbar como en Mormon */}
            <div className="sura2-navbar">
                <div className="sura2-logo">
                    <a href="/" className="sura2-logo"><h1>ELEAZAR UBIEDA</h1></a>
                    <a href="/" className="sura2-logo"><h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3></a>
                </div>
            </div>

            <div className="sura2-titulo">
                <h2>{t.sura2Title}</h2>
            </div>
            
            <div className="sura2-subtitulo">{t.sura2Subtitle}</div>

            {/* Contenedor del video y texto */}
            <div className="sura2-content-container">
                <div className="sura2-video">
                    <iframe 
                        src="https://www.youtube.com/embed/IGijRymQ-FY?si=EQ64iNgli1tKBnuh" 
                        title="YouTube video" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="sura2-texto">
                    <ul>
                        <div dangerouslySetInnerHTML={{ __html: t.suraText }} />
                    </ul>
                </div>
            </div>

            <div className="sura2-imagenes-container">
                <div className="sura2-imagen-frame">
                    <img src="surarquia 2.1.png" alt="Imagen 1" />
                </div>
                <div className="sura2-imagen-frame">
                    <img src="surarquia 2.2.png" alt="Imagen 2" />
                </div>
                <div className="sura2-imagen-frame">
                    <img src="surarquia 2.3.png" alt="Imagen 3" />
                </div>
            </div>

            <div className="sura2-copyright">{t.copyright}</div>
        </div>
    );
}

export default Sura2;