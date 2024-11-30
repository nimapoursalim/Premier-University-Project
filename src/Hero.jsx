import React from "react";
import './Hero.css'
import HeaderSearchBox from './Components/HeaderSearchBox.jsx';

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter Hero-container">

                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="Header-Container">
                        <p id="orange-circle"><pre> </pre></p>
                        <h1>       
                        Discover Your<br/>
                        Favourite<br/>
                        Books
                        </h1>
                        </div> 
                    </div>
                    <div className="flexColStart hero-description">
                        <span>A site filled with verity of books</span>
                    </div>
                    <div className="search-bar">
                        <input className="search-bar" type="text" />
                        <button className="button">Search</button>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="image-container">
                        <img id="hero-image" src="./Hero-image.jpeg" alt="hero-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;