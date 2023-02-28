import React from "react";
import App from "../App";;

const Header = () => {
    return (
        <div className="header">
            <div className="row1__header col-12">
                <div className="navbar col-12">
                    <div className="logo__header col-2">
                        <img src="./assets/images/logo__header.png" alt="logo"/>
                    </div>

                    <ul className="menu__header col-8">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Products</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Help</a></li>
                    </ul>

                    <div className="action_items__header col-2">
                        <i className="fa-solid fa-magnifying-glass" />
                        <i className="fa-solid fa-user"></i>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>

                <div className="row2__header col-10">
                    <div className="slideShow">
                        <h1 className="col-11">Select Your New Perfect Style</h1>
                        <p className="col-10">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
                        <button className="col-3">shop now</button>
                    </div>

                    <div className="banner">
                        <img src="./assets/images/watch.png.webp" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;