import React from "react";
import './CSS/Hero.css';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString(' HELLO, I\'m VENKY' )
                            .pauseFor(2500)
                            .deleteAll()
                            .typeString('Welcome to my Portfolio website' )
                            .pauseFor(1500)
                            .deleteAll()
                            .typeString('CheckOut myWork here👉' )
                            .start();
                    }}
                />
                <p>                                </p>
                <a href="#projects" className="btn">
                    Checkout my work here →
                </a>
            </div>
        </section>
    );
}

export default Hero;
