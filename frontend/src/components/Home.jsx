import React from "react";
import "./Home.css";
import myImage from "../assets/me.png";

const Home = () => {
    return (
        <div className="container">
            
            <div className="hero">
             <img src={myImage} alt="My Profile" className="profile-img"/>
             <h2 className="name">Khushboo Rani</h2>
             <p className="role">MERN Stack Developer</p>
             <div className="button">
                <button className="btn"><a href="#c2">View Projects</a></button>
                <button className="btn-outline"><a href="#c1">Contact Me</a></button>
             </div>
            </div>
            <section>
                <h2 className="section-title">My Projects</h2>
                <section id="c2">
                <div className="projects">
                      <div className="project-card">
                        <h3>Portfolio Website</h3>
                        <p>My personal portfolio built using Mern Stack.</p>
                    </div>
                   
                    <div className="project-card">
                        <h3><a href="https://todo-app-lnf1.onrender.com">Todo App</a></h3>
                        <p>A full-stack todo app with authentication.</p>
                    </div>
                    
                </div>
                </section>
            </section>
            
        </div>
    );
};
export default Home;