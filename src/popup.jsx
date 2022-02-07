import React from "react";
import { render } from "react-dom";

function Popup() {
    return (
        <div>
            <h1> Hello! </h1>
            <p>world</p>
        </div>
    )
}


render(<Popup />, document.getElementById("react-target"));
