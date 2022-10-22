import React from "react";
import Information from "./information";
import Introduction from "./introduction";

import "./App.css"
import "./queries.css"
const App = function () {
    return (
        <React.Fragment>
            <div className="container grid grid--2-col">
                <Introduction />
                <div className="empty"></div>
                <Information />
            </div>
        </React.Fragment>

    )
}

export default App;