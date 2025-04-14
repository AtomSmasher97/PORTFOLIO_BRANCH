import React from "react";
import './CSS/Hero.css';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString(' HELLO, I\'m VENKY')
                            .pauseFor(2500)
                            .deleteAll()
                            .typeString('Welcome to my Portfolio website')
                            .pauseFor(1500)
                            .deleteAll()
                            .typeString('Checkout my work here  <br/> 👇 ')  
                            .start();
                    }}
                /> 
                {/* <div className="work-link-container">   
                  <a href="#projects" className="work-link">
                      Checkout my work here 👉
                  </a>
                 </div> */}
            </div>
        </section>
    );
}

export default Hero;
