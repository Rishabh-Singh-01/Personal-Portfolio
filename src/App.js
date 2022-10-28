import React from "react";
import Information from "./information";
import { useState } from "react";
import Introduction from "./introduction";
import "./App.css"
import "./queries.css"

const App = function () {
    const [toggle, setToggle] = useState("light");
    const switchToggle = () => {
        toggle === "dark" ? setToggle("light") : setToggle("dark");
        document.body.setAttribute("data-theme", toggle);
    }
    return (
        <>
            <div className="container grid grid--2-col">
                <Introduction />
                <div className="empty"></div>
                <Information />
            </div>
            <div className="toggle-container" onClick={switchToggle}>
                <ion-icon name="sunny"></ion-icon>
            </div>
        </>

    )
}

export default App;