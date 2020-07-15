import React, { Component } from 'react';
import "./Header.css";
import image from "../../logo.svg";

class Header extends Component {

    render() {
        return (
            <header className="container-fluid">
                <div className="inner-header">
                    <div className="logo">
                        <img src={image} />
                    </div>
                    <div className="form">

                        <div className="first">
                            <div><p className="normal">Email or phone</p></div>
                            <div><p className="normal">Password</p></div>
                            <div></div>
                        </div>
                        <div className="second">
                            <div><input type="text" /></div>
                            <div><input type="text" /></div>
                            <div><button type="button">Log In</button></div>
                        </div>
                        <div className="third">
                            <div></div>
                            <div><p className="sub-normal">Forgotten account?</p></div>
                            <div></div>
                        </div>

                    </div>
                </div>
                Header
            </header>
        );
    }
}

export default Header;