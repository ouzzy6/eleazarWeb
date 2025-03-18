import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./jungle.css";

function Jungle() {
    const { t } = useLanguage();

    return (
        <div className="jungle-container">
            {/* Navbar como en Mormon */}
            <div className="jungle-navbar">
                <div className="jungle-logo">
                    <a href="/" className="jungle-logo"><h1>ELEAZAR UBIEDA</h1></a>
                    <a href="/" className="jungle-logo"><h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3></a>
                </div>
            </div>

            <div className="jungle-titulo">
                <h2>{t.jungleTitle}</h2>
            </div>
            
            <div className="jungle-subtitulo">{t.jungleSubtitle}</div>

            {/* Contenedor del video y texto */}
            <div className="jungle-content-container">
                <div className="jungle-video">
                    <iframe 
                        src="https://www.youtube.com/embed/emequOdRdnk?si=-e8yyFuM8zgEmyK3" 
                        title="YouTube video" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="jungle-texto">
                    <ul>
                        <div dangerouslySetInnerHTML={{ __html: t.jungleText }} />
                    </ul>
                </div>
            </div>

            <div className="jungle-imagenes-container">
                <div className="jungle-imagen-frame">
                    <img src="jungle 3.png" alt="Imagen 1" />
                </div>
                <div className="jungle-imagen-frame">
                    <img src="jungle 4.png" alt="Imagen 2" />
                </div>
                <div className="jungle-imagen-frame">
                    <img src="jungle portada.png" alt="Imagen 3" />
                </div>
            </div>

            <div className="jungle-copyright">{t.copyright}</div>
        </div>
    );
}

export default Jungle;