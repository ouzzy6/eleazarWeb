import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./danza.css";

function Danza() {
    const { t } = useLanguage();

    return (
        <div className="danza-container">
            {/* Navbar como en Mormon */}
            <div className="danza-navbar">
                <div className="danza-logo">
                    <a href="/" className="danza-logo"><h1>ELEAZAR UBIEDA</h1></a>
                    <a href="/" className="danza-logo"><h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3></a>
                </div>
            </div>

            <div className="danza-titulo">
                <h2>{t.danzaTitle}</h2>
            </div>
            
            <div className="danza-subtitulo">{t.danzaSubtitle}</div>

            {/* Contenedor del video y texto */}
            <div className="danza-content-container">
                <div className="danza-video">
                    <iframe 
                        src="https://www.youtube.com/embed/WXIvGDhPva0?si=sdXYcXlrq_9kzlt7" 
                        title="YouTube video" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="danza-texto">
                    <ul>
                        <div dangerouslySetInnerHTML={{ __html: t.danzaText }} />
                    </ul>
                </div>
            </div>

            <div className="danza-imagenes-container">
                <div className="danza-imagen-frame">
                    <img src="danza 2.png" alt="Imagen 1" />
                </div>
                <div className="danza-imagen-frame">
                    <img src="danza 3.png" alt="Imagen 2" />
                </div>
                <div className="danza-imagen-frame">
                    <img src="danza 4.png" alt="Imagen 3" />
                </div>
            </div>

            <div className="danza-copyright">{t.copyright}</div>
        </div>
    );
}

export default Danza;