// src/components/Home.jsx

import "./home.css";  // Asegúrate de tener este archivo CSS
import React from "react";


function Home() {

    


    return (
        <div className="home-container">
            {/* Navbar */}
            <div className="navbar">
                {/* Logo */}
                <div className="logo">
                    <a href="/" className="logo"><h1>ELEAZAR UBIEDA</h1></a>
                    <a href="/" className="logo"><h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3></a>
                </div>

                {/* Links y selector de idioma */}
                <div className="links">
                    <a href="#about" className="link">ABOUT ME</a>
                    <a href="#contact" className="link">CONTACT</a>
                    <div className="language-selector">

                        <select className="select">
                            <option value="en">ENGLISH</option>
                            <option value="es">ESPAÑOL</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Portfolio */}
            <div className="portfolio">
                {/* Primer grupo de 8 frames (2 por fila) */}
                <div className="video-grid">
                    <div className="video-frame">
                        <img src="public\libro de mormón.png" alt="Frame 1" />
                        <span className="frame-text">LIBRO DE MORMÓN</span>
                    </div>
                    <div className="video-frame">
                        <img src="public\endlesstairs (1).png" alt="Frame 2" />
                        <span className="frame-text">ENDLESSTAIRS</span>
                    </div>
                    <div className="video-frame redrum-frame">
                        <img src="public\redrum-2.png" alt="Frame 3" />
                        <span className="frame-text">REDRUM</span>
                    </div>
                    <div className="video-frame">
                        <img src="public\cortos en grande (1).png" alt="Frame 4" />
                        <span className="frame-text">CORTOS EN GRANDE</span>
                    </div>
                    <div className="video-frame">
                        <img src="public\jungle.png" alt="Frame 5" />
                        <span className="frame-text">JUNGLE</span>
                    </div>
                    <div className="video-frame">
                        <img src="public\panda.png" alt="Frame 6" />
                        <span className="frame-text">PANDA</span>
                    </div>
                    <div className="video-frame">
                        <img src="public\danza alejandro.png" alt="Frame 7" />
                        <span className="frame-text">DANZA</span>
                    </div>
                    <div className="video-frame">
                        <img src="public\pexels-pixabay-462118.jpg" alt="Frame 8" />
                        <span className="frame-text">EL QUE FALTA</span>
                    </div>
                </div>

                {/* Tercer grupo de 3 frames (en formato horizontal) */}
                <div className="video-grid-short">
                    <div className="video-frame-short">
                        <img src="public\surarquia 2.png" alt="Frame 9" />
                        <span className="frame-text-short">SURARQUIA 2</span>
                    </div>
                    <div className="video-frame-short">
                        <img src="public\surarquia.png" alt="Frame 10" />
                        <span className="frame-text-short">SURARQUIA</span>
                    </div>
                    <div className="video-frame-short">
                        <img src="public\dollhouse disco.png" alt="Frame 11" />
                        <span className="frame-text-short">DOLLHOUSE DISCO</span>
                    </div>
                </div>
            </div>

            <div className="copyright">© 2025 ELEAZAR UBIEDA</div>

        </div>


    );
}

export default Home;
