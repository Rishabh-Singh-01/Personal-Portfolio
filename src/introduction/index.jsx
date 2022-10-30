// ASIDE FIGURE
import "./index.css";
import React, { useState } from "react";
import myPicture from "./../my-pic.jpg";
import IntroCart from "./IntroCart";
import IconBox from "./IconBox";

const Introduction = () => {
    const [showIntro, setIntro] = useState("notExpanded");
    const [clicked, setClicked] = useState("notClickedIcon");
    const [btnIconDrxn, toggleBtnIconDrxn] = useState("down");
    const [btnContent, toggleBtnContent] = useState("Open");
    const showContactBtnClicked = () => {
        setIntro(showIntro === "notExpanded" ? "expanded" : "notExpanded");
        setClicked(clicked === "notClickedIcon" ? "clickedIcon" : "notClickedIcon");
        toggleBtnIconDrxn(btnIconDrxn === "down" ? "up" : "down");
        toggleBtnContent(btnContent === "Open" ? "Close" : "Open");
    }

    return (
        <aside className="introduction intro-pos">
            <div className="introduction--top-box">
                {/* <figure> */}
                <img className="introduction--top-box--img" src={myPicture} alt="Rishabh Singh" />
                {/* </figure> */}
                <div className="introduction--top-box-cont">
                    <div>Rishabh Singh</div>
                    <span>Student</span>
                </div>
            </div>
            <div className={`introduction--top-box--details ${showIntro}`}>
                <div className={`seperator`}></div>
                <div className="introduction--cart-box">
                    <IntroCart icon="mail-outline" heading="Gmail" body="rishabhsinghom1515" />
                    <IntroCart icon="phone-portrait-outline" heading="Phone" body="+91-8527721714" />
                    <IntroCart icon="body-outline" heading="Gender/Age" body="Male - 21" />
                    <IntroCart icon="location-outline" heading="Location" body="Noida,Uttar Pradesh" />
                    <IntroCart icon="medal-outline" heading="Specialty" body="Web Dev " />
                </div>
            </div>
            <div className={`show-contact-btn ${clicked}`}
                onClick={showContactBtnClicked}>
                <ion-icon name={`chevron-${btnIconDrxn}-outline`}></ion-icon>
                <div className="show-contact">Show Details</div>
            </div>
            <IconBox />
        </aside>
    )
}

export default Introduction;