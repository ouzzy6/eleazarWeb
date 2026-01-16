import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/LanguageContext";
import "./contact.css";

function Contact() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reemplaza estos valores con los tuyos
        const serviceID = "service_wzth4qh";
        const templateID = "template_e8a7pjh";
        const publicKey = "pu5nU8PjLwSpoWbEK";

        emailjs.send(serviceID, templateID, formData, publicKey)
            .then((response) => {
                console.log("Éxito:", response);
                alert(t.successMessage);
                setFormData({ name: "", email: "", message: "" }); // Resetear formulario
            }, (error) => {
                console.log("Error:", error);
                alert(t.errorMessage);
            });
    };

    return (
        <div className="contact-container">
            <div className="contact-navbar">
                <div className="contact-logo">
                    <a href="/" className="contact-logo"><h1>ELEAZAR UBIEDA</h1></a>
                    <a href="/" className="contact-logo"><h3>VIDEOGRAPHER / FILMMAKER / VIDEO EDITOR</h3></a>
                </div>
            </div>

            <div className="contact-titulo">
                <h2>{t.contactTitle}</h2> {/* Añadí el título que faltaba */}
            </div>

            <div className="contact-form-container">
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">{t.nameLabel}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t.namePlaceholder}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">{t.emailLabel}</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t.emailPlaceholder}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{t.messageLabel}</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={t.messagePlaceholder}
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">{t.sendButton}</button>
                </form>
            </div>

            <div className="contact-copyright">{t.copyright}</div>
        </div>
    );
}

export default Contact;