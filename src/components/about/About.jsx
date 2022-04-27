import React from 'react';
import "./about.css";
import DrinkCoffee from "../../img/coffeeLover.jpg";
import Award from "../../img/award.png";

const About = () => {
    return (
        <div className='about'>
            {/* Left Container */}
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src={DrinkCoffee} alt="drinking coffee" className="about-img" />
                </div>
            </div>

            {/* Right Container */}
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub">
                    It is a long established fact that a reader will be distracted by the
                    readable content.
                </p>
                <p className="about-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
                </p>
                <div className="about-award">
                    <img src={Award} alt="award" className="about-award-img" />
                    <div className="about-award-texts">
                        <h4 className="about-award-title">International Design Awards 2021</h4>
                        <p className="about-award-desc">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                            and fugit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;