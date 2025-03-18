import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./mormon.css";

function Mormon() {
    const { t } = useLanguage();

    return (
        <div className="mormon-container">
            {/* Navbar como en Home */}
            <div className="mormon-navbar">
                <div className="mormon-logo">
                    <a href="/" className="mormon-logo"><h1>ELEAZAR UBIEDA</h1></a>
                    <a href="/" className="mormon-logo"><h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3></a>
                </div>
            </div>

            <div className="mormon-titulo">
                <h2>{t.mormonTitle}</h2>
            </div>
            
            <div className="mormon-subtitulo">{t.mormonSubtitle}</div>

            <div className="mormon-content-container">
                <div className="mormon-video">
                    <iframe 
                        src="https://www.youtube.com/embed/T50BmkvRm0U?si=mijV6gA0ROGvulKM" 
                        title="YouTube video" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="mormon-texto">
                    <p className="mormon-titulo-texto">{t.mormonTextTitle}</p>
                    <ul>
                        <li><strong>{t.mormonWinnerLabel}</strong> {t.mormonWinnerText}</li>
                        <li><strong>{t.mormonSelectionLabel}</strong> {t.mormonSelectionBerlin}</li>
                        <li><strong>{t.mormonSelectionLabel}</strong> {t.mormonSelectionLiftOff2020}</li>
                        <li><strong>{t.mormonSemifinalistLabel}</strong> {t.mormonSemifinalistText}</li>
                        <li><strong>{t.mormonSelectionLabel}</strong> {t.mormonSelectionAmLatino}</li>
                        <li><strong>{t.mormonSelectionLabel}</strong> {t.mormonSelectionRenuac}</li>
                        <li><strong>{t.mormonSelectionLabel}</strong> {t.mormonSelectionAsto}</li>
                    </ul>
                </div>
            </div>

            <div className="mormon-imagenes-container">
                <div className="mormon-imagen-frame">
                    <img src="libro 2.png" alt="Imagen 1" />
                </div>
                <div className="mormon-imagen-frame">
                    <img src="libro 3.png" alt="Imagen 2" />
                </div>
                <div className="mormon-imagen-frame">
                    <img src="libro 5.png" alt="Imagen 3" />
                </div>
            </div>

            <div className="mormon-copyright">{t.copyright}</div>
        </div>
    );
}

export default Mormon;