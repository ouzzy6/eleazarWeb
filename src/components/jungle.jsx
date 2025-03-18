import React from "react";
import "./jungle.css";

function Jungle() {
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
                <h2>JUNGLE SURF SAFARIS</h2>
            </div>
            
            <div className="jungle-subtitulo">PROMO VIDEO</div>

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
                        Ésta vez Jungle Surf Safaris acudió a mi para que realizara éste video promocional, con el fin de
                        tener una presencia más sólida en la internet y redes sociales, y por supuesto, promocionar sus
                        servicios de tours de iniciación en el surf para principiantes en las hermosas playas del silvestre y
                        colorido Algarve en el sur de Portugal. <br />
                        <br />
                        Fui el realizador íntegro de ésta pieza, dirigiéndola, haciendo la dirección de fotografía y operación
                        de cámara, para posteriormente editarla, corregirla a nivel de color y componer, grabar y mezclar
                        la música que hice específicamente para éste vídeo. <br />
                        <br />
                        Mi idea fue plasmar la aventura que supone el ir de excursión por el Algarve para iniciarse y
                        sumergirse en el mundo del surf, de la mano de amigables y expertos instructores que te llevarán
                        de la mano con la mejor de las vibras a montar tu primera ola, bajo el exquisito paisaje que
                        brindan las maravillosas playas como lo son Vale Figueiras, y muchas otras de la zona. <br />
                        <br />
                        <strong>Cliente:</strong> Jungle Surf Safaris <br />
                        <br />
                        <strong>Localización:</strong> Lagos, Portugal
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

            <div className="jungle-copyright">© 2025 ELEAZAR UBIEDA</div>
        </div>
    );
}

export default Jungle;