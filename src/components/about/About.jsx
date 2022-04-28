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
                    I am Airon. Equipped  with a diverse and promising skill-set. A Hard-working web developer with a flair for creating elegant solutions in the least amount of time.
                </p>
                <p className="about-desc">
                    Proficient in an assortment of technologies, including, (HTML, CSS, JavaScript, ReactJS, etc...)Able to effectively self-manage during independent projects, as well as collaborate in a team setting.
                </p>
                {/* <div className="about-award">
                    <img src={Award} alt="award" className="about-award-img" />
                    <div className="about-award-texts">
                        <h4 className="about-award-title">International Design Awards 2021</h4>
                        <p className="about-award-desc">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                            and fugit.
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default About;