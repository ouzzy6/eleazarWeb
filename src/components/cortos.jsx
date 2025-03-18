import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./cortos.css";

function Cortos() {
    const { t } = useLanguage();

    return (
        <div className="cortos-container">
            {/* Navbar como en Mormon */}
            <div className="cortos-navbar">
                <div className="cortos-logo">
                    <a href="/" className="cortos-logo"><h1>ELEAZAR UBIEDA</h1></a>
                    <a href="/" className="cortos-logo"><h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3></a>
                </div>
            </div>

            <div className="cortos-titulo">
                <h2>{t.cortosTitle}</h2>
            </div>
            
            <div className="cortos-subtitulo">{t.cortosSubtitle}</div>

            {/* Contenedor del video y texto */}
            <div className="cortos-content-container">
                <div className="cortos-video">
                    <iframe 
                        src="https://www.youtube.com/embed/cpjc2JkhdbY?si=HcCdQHq7o-p8Iaw0" 
                        title="YouTube video" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="cortos-texto">
                    <ul>
                        <div dangerouslySetInnerHTML={{ __html: t.cortosText }} />
                    </ul>
                </div>
            </div>

            <div className="cortos-imagenes-container">
                <div className="cortos-imagen-frame">
                    <img src="cortos 3.png" alt="Imagen 1" />
                </div>
                <div className="cortos-imagen-frame">
                    <img src="cortos 4.png" alt="Imagen 2" />
                </div>
                <div className="cortos-imagen-frame">
                    <img src="cortos 5.png" alt="Imagen 3" />
                </div>
            </div>

            <div className="cortos-copyright">{t.copyright}</div>
        </div>
    );
}

export default Cortos;