import React from "react";
import "./mormon.css";


function Mormon() {
    

    return (
        
        <div className="logo-container">
    {/* Logo */}
    <div className="logo">
        <a href="/" className="logo"><h1>ELEAZAR UBIEDA</h1></a>
        <a href="/" className="logo"><h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3></a>
    </div>

    <div className="titulo">
        <h2>LIBRO DE MORMÓN</h2>
        </div>
        
        <div className="subtitulo">ESCRITO Y DIRIGIDO POR ELEAZAR UBIEDA</div>

        {/* Contenedor del video y texto */}
    <div className="content-container">
        {/* Video */}
        <div className="video">
            <iframe 
                src="https://www.youtube.com/embed/T50BmkvRm0U?si=mijV6gA0ROGvulKM" 
                title="YouTube video" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
        </div>
        {/* Texto explicativo */}
        {/* Texto explicativo */}
<div className="texto">
    <p className="titulo-texto">Seleccionado en siete festivales de cine internacionales entre 2020 y 2022:</p>
    <ul>
        <li><strong>Ganador del mejor guión:</strong> Alternative Film Festival 2020 en Toronto, Canadá</li>
        <li><strong>Selección Oficial:</strong> Berlin Flash Film Festival 2020 en Berlín, Alemania</li>
        <li><strong>Selección Oficial:</strong> Lift-Off Global Network 2020 en Reino Unido</li>
        <li><strong>Semi finalista:</strong> Festival del Cinema di Cefalù 2021 en Cefalù, Italia</li>
        <li><strong>Selección Oficial:</strong> LETNetworks' AmLatino Film Festival 2021 en Rockland, Estados Unidos</li>
        <li><strong>Selección Oficial:</strong> Festival Renuac 2022 en Santiago de Chile</li>
        <li><strong>Selección Oficial:</strong> 17th International Asto Short Film Festival 2022 en Patras, Grecia</li>
    </ul>
</div>


        
    </div>

    <div className="imagenes-container">
    <div className="imagen-frame">
        <img src="libro 2.png" alt="Imagen 1" />
    </div>
    <div className="imagen-frame">
        <img src="libro 3.png" alt="Imagen 2" />
    </div>
    <div className="imagen-frame">
        <img src="libro 5.png" alt="Imagen 3" />
    </div>
</div>

<div className="copyright">© 2025 ELEAZAR UBIEDA</div>
    

</div>



    );
}

export default Mormon;