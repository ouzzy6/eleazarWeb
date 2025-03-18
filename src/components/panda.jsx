import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./panda.css";

function Panda() {
    const { t } = useLanguage();

    return (
        <div className="panda-container">
            {/* Navbar como en Mormon */}
            <div className="panda-navbar">
                <div className="panda-logo">
                    <a href="/" className="panda-logo"><h1>ELEAZAR UBIEDA</h1></a>
                    <a href="/" className="panda-logo"><h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3></a>
                </div>
            </div>

            <div className="panda-titulo">
                <h2>{t.pandaTitle}</h2>
            </div>
            
            <div className="panda-subtitulo">{t.pandaSubtitle}</div>

            {/* Contenedor del video y texto */}
            <div className="panda-content-container">
                <div className="panda-video">
                    <iframe 
                        src="https://www.youtube.com/embed/hmBlW68rsRs?si=cX-fWAAbkB7AM8XX" 
                        title="YouTube video" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="panda-texto">
                    <ul>
                        <div dangerouslySetInnerHTML={{ __html: t.pandaText }} />
                    </ul>
                </div>
            </div>

            <div className="panda-imagenes-container">
                <div className="panda-imagen-frame">
                    <img src="panda 2.png" alt="Imagen 1" />
                </div>
                <div className="panda-imagen-frame">
                    <img src="panda 3.png" alt="Imagen 2" />
                </div>
                <div className="panda-imagen-frame">
                    <img src="panda 4.png" alt="Imagen 3" />
                </div>
            </div>

            <div className="panda-copyright">{t.copyright}</div>
        </div>
    );
}

export default Panda;