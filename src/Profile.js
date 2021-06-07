import React, { Component } from 'react';
import avatar from './van-pic.png';
import './styles.css';

export default class Profile extends Component {
    render() {
        return (
            <div>
                <hr></hr>
                <div className="profile-section">
                    <div>
                        <img src={avatar} alt="avatar" /></div>
                        <div className="profile-text">
                            <h3>Vanessa Stevenson</h3>
                        <p>
                        Food enthusiast, photography fan. Add a pinch of raw foodism and that’s pretty much who I am.
                        </p>
                        </div>
                        <button>SHARE RECIPE</button>

                </div>
            </div>
        )
    }
}
