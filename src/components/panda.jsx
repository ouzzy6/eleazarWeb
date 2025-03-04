import React from "react";
import "./panda.css";


function Panda() {
    

    return (
        
        <div className="logo-container">
    {/* Logo */}
    <div className="logo">
        <a href="/" className="logo"><h1>ELEAZAR UBIEDA</h1></a>
        <a href="/" className="logo"><h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3></a>
    </div>

    <div className="titulo">
        <h2>AMERICAN PANDA</h2>
        </div>
        
        <div className="subtitulo">PROMO VIDEO FOR CHINESE MARKET</div>

        {/* Contenedor del video y texto */}
    <div className="content-container">
        {/* Video */}
        <div className="video">
            <iframe 
                src="https://www.youtube.com/embed/hmBlW68rsRs?si=cX-fWAAbkB7AM8XX" 
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
    Arnoldo Hurtado, creador y director de American Panda, acudió a mis servicios para realizar un
vídeo promocional para su escuela de inglés online, tomando como target el mercado chino. El
objetivo era captar nuevos clientes del Gran Gigante Asiático para su escuela especializada en
enseñar inglés a infantes a distancia. <br />
<br />
Guionicé, dirigí, hice la dirección de fotografía, operación de cámara, gaffer y captación de sonido,
para posteriormente editar, corregir color y diseñar el sonido de ésta pieza.<br />
<br />
La idea era transmitir algo fresco y llamativo, mostrando con detalle el dinamismo y eficacia del
producto que en éste caso estaba relacionado a la enseñanza en línea, también detallando la
facilidad de adquisición a través de una simulación de compra por medio de una plataforma de
pago china, todo con una estética y vibra infantil, ya que el producto era destinado para los
pequeños de la casa, sin dejar a un lado ese tono de profesionalidad que llamaría la atención a
sus padres, quiénes al final serían los que contratarían éste servicio que provee American Panda. <br />
<br />
<strong>Cliente:</strong> American Panda <br />
<br />
<strong>Localización:</strong> Barcelona, España
    </ul>
</div>


        
    </div>

    <div className="imagenes-container">
    <div className="imagen-frame">
        <img src=" panda 2.png" alt="Imagen 1" />
    </div>
    <div className="imagen-frame">
        <img src="panda 3.png" alt="Imagen 2" />
    </div>
    <div className="imagen-frame">
        <img src="panda 4.png" alt="Imagen 3" />
    </div>
</div>

<div className="copyright">© 2025 ELEAZAR UBIEDA</div>
    

</div>



    );
}

export default Panda;