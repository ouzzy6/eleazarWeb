// src/components/Home.jsx
import React from "react";
import "./home.css";  // Asegúrate de tener este archivo CSS

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
                        <img src="public\pexels-bkrustev-225203.jpg" alt="Frame 1" />
                        <span className="frame-text">Frame 1 - Video Description</span>
                    </div>
                    <div className="video-frame">
                        <img src="public\pexels-david-bartus-43782-1131407.jpg" alt="Frame 2" />
                        <span className="frame-text">Frame 1 - Video Description</span>
                    </div>
                    <div className="video-frame">
                        <img src="public\pexels-dreamypixel-547119.jpg" alt="Frame 3" />
                        <span className="frame-text">Frame 1 - Video Description</span>
                    </div>
                    <div className="video-frame">
                        <img src="public\pexels-johnnoibn-1448136.jpg" alt="Frame 4" />
                        <span className="frame-text">Frame 1 - Video Description</span>
                    </div>
                    <div className="video-frame">
                        <img src="public\pexels-kinkate-368260.jpg" alt="Frame 5" />
                        <span className="frame-text">Frame 1 - Video Description</span>
                    </div>
                    <div className="video-frame">
                        <img src="public\pexels-kyleroxas-2138922.jpg" alt="Frame 6" />
                        <span className="frame-text">Frame 1 - Video Description</span>
                    </div>
                    <div className="video-frame">
                        <img src="public\pexels-pixabay-302549.jpg" alt="Frame 7" />
                        <span className="frame-text">Frame 1 - Video Description</span>
                    </div>
                    <div className="video-frame">
                        <img src="public\pexels-pixabay-462118.jpg" alt="Frame 8" />
                        <span className="frame-text">Frame 1 - Video Description</span>
                    </div>
                </div>

                {/* Tercer grupo de 3 frames (en formato horizontal) */}
                <div className="video-grid-short">
                    <div className="video-frame-short">
                        <img src="public\pexels-julien-goettelmann-44396125-14417806.jpg" alt="Frame 9" />
                        <span className="frame-text-short">Short 1 - Video Description</span>
                    </div>
                    <div className="video-frame-short">
                        <img src="public\pexels-blue-18733673.jpg" alt="Frame 10" />
                        <span className="frame-text-short">Short 1 - Video Description</span>
                    </div>
                    <div className="video-frame-short">
                        <img src="public\pexels-karolina-grabowska-5625109.jpg" alt="Frame 11" />
                        <span className="frame-text-short">Short 1 - Video Description</span>
                    </div>
                </div>
            </div>

            <div className="copyright">© 2025 ELEAZAR UBIEDA</div>

        </div>


    );
}

export default Home;
