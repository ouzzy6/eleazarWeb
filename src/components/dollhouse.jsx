import React from "react";
import "./dollhouse.css";


function Doll() {
    

    return (
        
        <div className="logo-container">
    {/* Logo */}
    <div className="logo">
        <a href="/" className="logo"><h1>ELEAZAR UBIEDA</h1></a>
        <a href="/" className="logo"><h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3></a>
    </div>

    <div className="titulo">
        <h2>DOLLHOUSE DISCO</h2>
        </div>
        
        <div className="subtitulo">PROMO REELS</div>

        {/* Contenedor del video y texto */}
    <div className="content-container">
        {/* Video */}
        <div className="video">
            <iframe 
                src="https://youtube.com/embed/Pw9lpRb-4-Y?si=A7kTzohyAa5c7-jy" 
                title="YouTube video" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
        </div>
        {/* Texto explicativo */}
        {/* Texto explicativo */}
<div className="texto">
    
    <ul>
    Rosie es una reconocida dj en la escena nocturna actual en Barcelona, bajo su seudónimo Stacey
Cute organiza fiestas electrónicas feministas, donde el propósito es exponer el trabajo artístico de
distintas mujeres en el ámbito musical, visual e incluso estético a nivel de tatuajes y diseño de
uñas acrílicas. <br />
<br />
Bajo el nombre de “Dollhouse Disco” se dan estas fiestas en distintas locaciones en la ciudad
cada cierto tiempo, y Rosie quiso que yo retratara la esencia de estos eventos, de una forma
auténtica y global de todo lo que reúnen estas fiestas. <br />
<br />
Conceptualicé y grabé para luego editar y corregir a nivel de color en un formato de 9:16 para
Instagram y TikTok, lo cuál era el propósito de ésta pieza, la promoción de dichos eventos en
redes sociales. <br />
<br />
<strong>Cliente:</strong> Dollhouse Disco <br />
<br />
<strong>Localización:</strong> Barcelona, España
    </ul>
</div>


        
    </div>

    <div className="imagenes-container">
    <div className="imagen-frame">
        <img src="doll 2.png" alt="Imagen 1" />
    </div>
    <div className="imagen-frame">
        <img src="doll 3.png" alt="Imagen 2" />
    </div>
    <div className="imagen-frame">
        <img src="doll 4.png" alt="Imagen 3" />
    </div>
</div>

<div className="copyright">© 2025 ELEAZAR UBIEDA</div>
    

</div>



    );
}

export default Doll;