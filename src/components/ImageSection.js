import React from 'react';
import about from '../assets/img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <p className="about-text">
                    I see every new experience as an opportunity to learn. My favorite
                    projects are those that require me to push beyond my boundaries and
                    acquire new skills and knowledge in order to succeed.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: Dima Semenov</p>
                        <p>: Ukrainian</p>
                        <p>: Ukraine, Russian, Polish, English</p>
                        <p>: Gdansk, Poland</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageSection;
