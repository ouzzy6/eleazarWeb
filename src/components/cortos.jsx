import React from "react";
import "./cortos.css";


function Cortos() {
    

    return (
        
        <div className="logo-container">
    {/* Logo */}
    <div className="logo">
        <a href="/" className="logo"><h1>ELEAZAR UBIEDA</h1></a>
        <a href="/" className="logo"><h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3></a>
    </div>

    <div className="titulo">
        <h2>CORTOS EN GRANDE 2020</h2>
        </div>
        
        <div className="subtitulo">SPOT OFICIAL</div>

        {/* Contenedor del video y texto */}
    <div className="content-container">
        {/* Video */}
        <div className="video">
            <iframe 
                src="https://www.youtube.com/embed/cpjc2JkhdbY?si=HcCdQHq7o-p8Iaw0" 
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
    Éste proyecto llegó a mí de las manos de José Gil, quien es el fundador y director del festival
Cortos en Grande, festival internacional de cortometrajes radicado entre Santiago y Valparaíso en
Chile. <br />
<br />
Conceptualicé, desarrollé y edité lo que sería éste spot que serviría para promocionar el festival
en redes sociales e internet en general y que fue expuesto en la inauguración del festival en
Santiago de Chile proyectado en pantalla grande y también transmitido en línea. <br />
<br />
Realicé éste vídeo recopilando absolutamente todos los cortometrajes participantes del festival,
visionándolos, seleccionando trozos de los mismos y según el concepto que tracé fui plasmando
partes de dichas películas a lo largo de éste spot para darle una forma narrativa y llamativa que
atrajera al público internacional al festival, el cual era el objetivo principal de ésta pieza. <br />
<br />
<strong>Cliente:</strong> Cortos en Grande <br />
<br />
<strong>Localización:</strong> Santiago/ Valparaíso, Chile
    </ul>
</div>


        
    </div>

    <div className="imagenes-container">
    <div className="imagen-frame">
        <img src="cortos 3.png" alt="Imagen 1" />
    </div>
    <div className="imagen-frame">
        <img src="cortos 4.png" alt="Imagen 2" />
    </div>
    <div className="imagen-frame">
        <img src="cortos 5.png" alt="Imagen 3" />
    </div>
</div>

<div className="copyright">© 2025 ELEAZAR UBIEDA</div>
    

</div>



    );
}

export default Cortos;