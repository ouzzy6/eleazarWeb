import React from "react";
import "./danza.css";

function Danza() {
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
                <h2>CLASES DE BAILE CON ALEJANDRO ALTAMIRANO</h2>
            </div>
            
            <div className="danza-subtitulo">PROMO VIDEO</div>

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
                        En ésta ocasión Alejandro me contactó porque necesitaba un vídeo promocional de sus clases de
                        baile, para promocionarlas a través de redes sociales e internet. <br />
                        <br />
                        Hice de realizador, director de fotografía y operador de cámara, y también grabé sonido directo del
                        piano, para posteriormente hacer el trabajo de montaje y edición. <br />
                        <br />
                        Quise hacer algo fuera de la común y decidí dirigirme hacía lo experimental en ésta pieza,
                        creando una sensación de intimidad dentro de la clase de baile y los bailarines, junto con la
                        interpretación musical en directo, cosa que me llamó mucho la atención de su propuesta de
                        clases. <br />
                        <br />
                        <strong>Cliente:</strong> Alejandro Altamirano <br />
                        <br />
                        <strong>Localización:</strong> Barcelona, España
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

            <div className="danza-copyright">© 2025 ELEAZAR UBIEDA</div>
        </div>
    );
}

export default Danza;