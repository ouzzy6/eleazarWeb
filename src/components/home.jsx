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
                    <h1>ELEAZAR UBIEDA</h1>
                    <h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3>
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

            
        </div>
    );
}

export default Home;
