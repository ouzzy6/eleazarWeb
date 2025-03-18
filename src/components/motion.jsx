import React from "react";
import "./motion.css";

function Motion() {
    return (
        <div className="motion-container">
            {/* Navbar como en Mormon */}
            <div className="motion-navbar">
                <div className="motion-logo">
                    <a href="/" className="motion-logo"><h1>ELEAZAR UBIEDA</h1></a>
                    <a href="/" className="motion-logo"><h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3></a>
                </div>
            </div>

            <div className="motion-titulo">
                <h2>MOTION GRAPHICS AND ANIMATION PORTFOLIO</h2>
            </div>
            
            <div className="motion-subtitulo">PROMO VIDEO</div>

            {/* Contenedor del video y texto */}
            <div className="motion-content-container">
                <div className="motion-video">
                    <iframe 
                        src="https://www.youtube.com/embed/aXonEvurQwM?si=lvzj48_P4OJCSgl5" 
                        title="YouTube video" 
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="motion-texto">
                    <ul>
                        Esto es una recopilación de varios trabajos que he hecho en la parte de animación y motion
                        graphics a través del uso de softwares como Adobe After Effects y DaVinci Resolve. <br />
                        <br />
                        Como se puede evidenciar hay varias técnicas utilizadas en cada fragmento, como lo son: la
                        metamorfosis entre letras y formas, la rotoscopia, el uso de máscaras y estilización de color,
                        animación de caracteres y creación desde cero de interfaces a nivel visual.
                    </ul>
                </div>
            </div>

            <div className="motion-imagenes-container">
                <div className="motion-imagen-frame">
                    <img src="motions 3.png" alt="Imagen 1" />
                </div>
                <div className="motion-imagen-frame">
                    <img src="motions 4.png" alt="Imagen 2" />
                </div>
                <div className="motion-imagen-frame">
                    <img src="motions 5.png" alt="Imagen 3" />
                </div>
            </div>

            <div className="motion-copyright">© 2025 ELEAZAR UBIEDA</div>
        </div>
    );
}

export default Motion;