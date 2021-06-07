import React, { Component } from 'react';
import './styles.css';
import logo from './logo.png';
import fb from './fb-icon.png';
import tw from './twit-icon.png';
import gp from './gp-icon.png';
import inst from './insta-icon.png';
import flk from './flic-icon.png';
import pnt from './pint-icon.png';
import rss from './rss-icon.png';
import mail from './mail-icon.png';


export default class Header extends Component {
    render() {
        return (
            <div className="nav">
                <div className="logo-section">
                <div><img src={logo} alt="logo"/></div>
                <div><h2>Delicious</h2> <div className="sub-text">THE BEST FOOD BLOG ON THE WEB</div></div>

                </div>
                <div></div>
                <div>
                <img src={fb} alt="logo"/>
                <img src={tw} alt="logo"/>
                <img src={gp} alt="logo"/>
                <img src={inst} alt="logo"/>
                <img src={pnt} alt="logo"/>
                <img src={flk} alt="logo"/>
                <img src={rss} alt="logo"/>
                <img src={mail} alt="logo"/>
                </div>
            </div>
        )
    }
}
