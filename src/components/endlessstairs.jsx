import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./endlessstairs.css";

function Endless() {
    const { t } = useLanguage();

    return (
        <div className="endless-container">
            {/* Navbar como en Mormon */}
            <div className="endless-navbar">
                <div className="endless-logo">
                    <a href="/" className="endless-logo"><h1>ELEAZAR UBIEDA</h1></a>
                    <a href="/" className="endless-logo"><h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3></a>
                </div>
            </div>

            <div className="endless-titulo">
                <h2>{t.endlessTitle}</h2>
            </div>
            
            <div className="endless-subtitulo">{t.endlessSubtitle}</div>

            {/* Contenedor del video y texto */}
            <div className="endless-content-container">
                <div className="endless-video">
                    <iframe 
                        src="https://www.youtube.com/embed/5J5KB2U4YJE?si=r810QvRVQTciu_PY" 
                        title="YouTube video" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="endless-texto">
                    <p className="endless-titulo-texto">{t.endlessTextTitle}</p>
                    <ul>
                        <li><strong>{t.endlessSelectionLabel}</strong> {t.endlessSelectionSubtravelling}</li>
                        <li><strong>{t.endlessSelectionLabel}</strong> {t.endlessSelectionZeitimpuls}</li>
                        <li><strong>{t.endlessSelectionLabel}</strong> {t.endlessSelectionLiftOff2022}</li>
                        <li><strong>{t.endlessSelectionLabel}</strong> {t.endlessSelectionRenuac}</li>
                    </ul>
                </div>
            </div>

            <div className="endless-imagenes-container">
                <div className="endless-imagen-frame">
                    <img src="endless 3.png" alt="Imagen 1" />
                </div>
                <div className="endless-imagen-frame">
                    <img src="endless 4.png" alt="Imagen 2" />
                </div>
                <div className="endless-imagen-frame">
                    <img src="endless 5.png" alt="Imagen 3" />
                </div>
            </div>

            <div className="endless-copyright">{t.copyright}</div>
        </div>
    );
}

export default Endless;