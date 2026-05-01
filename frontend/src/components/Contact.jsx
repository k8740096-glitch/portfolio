import React, {useState} from "react";
import "./Contact.css";
const Contact = () => {
    return (
        <div className="contact-container">
            <section id="c1">
            <h2 className="section-title">Contact Me</h2>
            <div className="Contact-card">
                <p>
                    ✉️Email:
                    <a href="mailto:k8740096@gmail.com">k8740096@gmail.com</a>
                </p>
                <p>
                    📱Phone:
                    <a href="tel:+918360196693">+91 83601 96693</a>
                </p>
                <p>Indeed:
                <a href="https://profile.indeed.com/p/khushboow-hctwt7p" target="_blank" rel="noreferrer">
                View Resume
                </a>
                </p>
                
            </div>
            </section>
        </div>
    )
}
export default Contact;