import React from "react";
import "./Doing.css";

const Doing = () => {
    return (
        <div className="Doing-main">
            <span className="doing-main--what">What I am Doing</span>
            <div className="doing grid--2-col-equal">
                <div className="doing--cards">
                    <ion-icon name="desktop-outline"></ion-icon>
                    <div className="doing--cards-info">
                        <span className="title--small">Web Development</span>
                        <p>Includes both front and back end in React and javascript hehehe.</p>
                    </div>
                </div>
                <div className="doing--cards">
                    <ion-icon name="extension-puzzle-outline"></ion-icon>
                    <div className="doing--cards-info">
                        <span className="title--small">DSA</span>
                        <p>Optimizing solution just for not using them in the future :)</p>
                    </div>
                </div>
                <div className="doing--cards">
                    <ion-icon name="stats-chart-outline"></ion-icon>
                    <div className="doing--cards-info">
                        <span className="title--small">Machine Learning</span>
                        <p>Making machine learn something which I don't understand as well XP</p>
                    </div>
                </div>
                <div className="doing--cards">
                    <ion-icon name="hardware-chip-outline"></ion-icon>
                    <div className="doing--cards-info">
                        <span className="title--small">Electronics</span>
                        <p>Learning about CMOS and VLSI made me switch my branch :'(</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doing;