import React from "react";
import "./redrum.css";


function Redrum() {
    

    return (
        
        <div className="logo-container">
    {/* Logo */}
    <div className="logo">
        <a href="/" className="logo"><h1>ELEAZAR UBIEDA</h1></a>
        <a href="/" className="logo"><h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3></a>
    </div>

    <div className="titulo">
        <h2>REDRUM</h2>
        </div>
        
        <div className="subtitulo">BY NAGORE GONZÁLEZ</div>

        {/* Contenedor del video y texto */}
    <div className="content-container">
        {/* Video */}
        <div className="video">
            <iframe 
                src="https://www.youtube.com/embed/W-X1MMDimHE?si=_DZUB--IGizmN0gA" 
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
    Tras el diseño y la confección de su última colección hace un par de años atrás, Nagore recurrió a
mis servicios para la dirección y realización de éste fashion film, con pinceladas de una estética
kitsch acompañada de una cinematografía un tanto bizarra. <br />
<br />
Fui el realizador, director, director de fotografía, operador de cámara, gaffer, editor y colorista de
ésta pieza, bajo las nociones artísticas y estéticas que Nagore planteó en su colección titulada
REDRUM. El montaje de éste fashion film fue inspirado en la Nouvelle Vague, con repeticiones
minuciosamente calculadas en diversos momentos de la sucesión de la pieza para remarcar
elementos específicos en la confección de las distintas piezas de vestuario de dicha colección. <br />
<br />
El sentido de éste fashion film era la promoción de REDRUM de Nagore González, previo a su
paso por pasarelas de moda (runways) tanto locales como internacionales. <br />
<br />
<strong>Cliente:</strong> Nagore González <br />
<br />
<strong>Localización:</strong> Barcelona, España
    </ul>
</div>


        
    </div>

    <div className="imagenes-container">
    <div className="imagen-frame">
        <img src="redrum 3.png" alt="Imagen 1" />
    </div>
    <div className="imagen-frame">
        <img src="redrum 4.png" alt="Imagen 2" />
    </div>
    <div className="imagen-frame">
        <img src="redrum 5.png" alt="Imagen 3" />
    </div>
</div>

<div className="copyright">© 2025 ELEAZAR UBIEDA</div>
    

</div>



    );
}

export default Redrum;