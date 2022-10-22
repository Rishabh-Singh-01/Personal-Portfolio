// ASIDE FIGURE
import "./index.css";
import React, { useState } from "react";
import myPicture from "./../My-Picture.png";
import IntroCart from "./IntroCart";
import IconBox from "./IconBox";

const Introduction = () => {
    const [showIntro, setIntro] = useState("notExpanded");
    const showContactBtnClicked = () => {
        setIntro(showIntro === "notExpanded" ? "expanded" : "notExpanded");
    }
    return (
        <aside className="introduction intro-pos">
            <div className="introduction--top-box">
                {/* <figure> */}
                <img className="introduction--top-box--img" src={myPicture} alt="Picture" />
                {/* </figure> */}
                <div className="introduction--top-box-cont">
                    <div>Rishabh Singh</div>
                    <span>Student</span>
                </div>
            </div>
            <div className={`${showIntro}`}>
                <div className="seperator"></div>
                <div className="introduction--cart-box">
                    <IntroCart icon="mail-outline" heading="Gmail" body="rishabhsinghom1515" />
                    <IntroCart icon="phone-portrait-outline" heading="Phone" body="+91-8527721714" />
                    <IntroCart icon="calendar-outline" heading="Birthday" body="01-Sept-2000" />
                    <IntroCart icon="location-outline" heading="Location" body="Noida,Uttar Pradesh" />
                    <IntroCart icon="medal-outline" heading="Specialty" body="Web Dev " />
                </div>
            </div>
            <div className="show-contact-btn"
                onClick={showContactBtnClicked}>
                <ion-icon name="chevron-down-outline"></ion-icon>
                <div className="show-contact">Show Contacts</div>
            </div>
            <IconBox />
        </aside>
    )
}

export default Introduction;