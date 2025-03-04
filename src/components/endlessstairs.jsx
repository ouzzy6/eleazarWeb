import React from "react";
import "./endlessstairs.css";


function Endless() {
    

    return (
        
        <div className="logo-container">
    {/* Logo */}
    <div className="logo">
        <a href="/" className="logo"><h1>ELEAZAR UBIEDA</h1></a>
        <a href="/" className="logo"><h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3></a>
    </div>

    <div className="titulo">
        <h2>ENDLESSTAIRS</h2>
        </div>
        
        <div className="subtitulo">ESCRITO Y DIRIGIDO POR ELEAZAR UBIEDA</div>

        {/* Contenedor del video y texto */}
    <div className="content-container">
        {/* Video */}
        <div className="video">
            <iframe 
                src="https://www.youtube.com/embed/5J5KB2U4YJE?si=r810QvRVQTciu_PY" 
                title="YouTube video" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
        </div>
        {/* Texto explicativo */}
        {/* Texto explicativo */}
<div className="texto">
    <p className="titulo-texto">Seleccionado en cuatro festivales de cine internacionales entre 2021 y 2022:</p>
    <ul>
        <li><strong>Selección Oficial en:</strong> Subtravelling International Short Film Festival 2021 en Barcelona,
        España/ Seúl, Corea.</li>
        <li><strong>Selección Oficial en:</strong> Zeitimpuls shortfilm festival 2021 en Viena, Austria.</li>
        <li><strong>Selección Oficial en:</strong> Lift- Off Global Network 2022 en Reino Unido.</li>
        <li><strong>Selección Oficial en:</strong> Festival Renuac 2022 en Santiago de Chile.</li>
       
    </ul>
</div>


        
    </div>

    <div className="imagenes-container">
    <div className="imagen-frame">
        <img src="endless 3.png" alt="Imagen 1" />
    </div>
    <div className="imagen-frame">
        <img src="endless 4.png" alt="Imagen 2" />
    </div>
    <div className="imagen-frame">
        <img src="endless 5.png" alt="Imagen 3" />
    </div>
</div>

<div className="copyright">© 2025 ELEAZAR UBIEDA</div>
    

</div>



    );
}

export default Endless;