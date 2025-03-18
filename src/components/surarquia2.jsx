import React from "react";
import "./surarquia2.css";

function Sura2() {
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
                <h2>SURARQUIA 2</h2>
            </div>
            
            <div className="sura2-subtitulo">PROMO REELS</div>

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
                        Felipe y Alejandro llegaron a mí para que realizara un par de reels promocionales para Instagram
                        y TikTok, de su nueva e interesante propuesta con la que estaban recién emprendiendo: bolsos
                        hechos a mano y diseñados por hombres, bajo el nombre de la marca “Surarquia”. <br />
                        <br />
                        Conceptualicé, dirigí, hice la dirección de fotografía y operación de cámara, gaffer, grabé detalles
                        sonoros, para posteriormente editar y corregir de color éstas piezas de la mano con lo que ellos
                        me pedían que era básicamente mostrar un poco el proceso de handcrafting y diseño de los
                        bolsos. <br />
                        <br />
                        Quise crear un aura de intimidad relacionada al proceso de realización, desde el taller dónde a
                        mano maquetan, diseñan, fabrican y posteriormente estilizan estos bolsos que venden en su
                        tienda física en Barcelona, y en la página web de la marca. <br />
                        <br />
                        <strong>Cliente:</strong> Surarquia <br />
                        <br />
                        <strong>Localización:</strong> Barcelona, España
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

            <div className="sura2-copyright">© 2025 ELEAZAR UBIEDA</div>
        </div>
    );
}

export default Sura2;