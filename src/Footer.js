import React, { Component } from 'react';
import tiny from './small-logo.png';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="line">
                <span className="tiny-logo"><img src={tiny} alt="tiny logo"/></span>
                </div>
                <p className="foot">Delicious © - All Rights Reserved.</p>
                <p>Proudly published with Ghost.</p>
            </div>
        )
    }
}
