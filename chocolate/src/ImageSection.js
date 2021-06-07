import React, { Component } from 'react';
import pizza from './choco-pizza.png';
import print_icon from './print-icon.png';
import './styles.css';

export default class ImgSec extends Component {
    render() {
        return (
            <div>
                <hr></hr>
                <div className="post-title">
                    <div><h1>Chocolate Pizza</h1>
                    <span className="sub-text">POSTED ON 15 DEC 2013 / DESSERTS</span></div>
                    <div><img src={print_icon} alt="printer icon"/>PRINT</div>
                </div>

                <img src={pizza}  alt="chocolate-pizza" width="960" height="600"/>
            </div>



        )
    }
}