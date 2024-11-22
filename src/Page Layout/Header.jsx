import React  from "react";
import './Header.css'

const Header = () => { 
    return (
        <section className="h-wrapper">
          <div className="flexCenter paddings innerWidth h-container">
            <img src="./Site-logo.png" alt="logo" width={100} />

            <div className="h-menu">
                <a href="">Home</a>
                <a href="">Ebook</a>
                <a href="">Abook</a>
                <a href="">Magazine</a>
              <button>
                <a href="">KotaPlus</a>
              </button>
            </div>
          </div>
        </section>
    );
};
export default Header;


