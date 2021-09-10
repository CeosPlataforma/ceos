import React from "react";

export default function SimpleBox({ boxcounter, boxtitle }) {

    return (
        <div className="simpleBox">
            <h2>{boxcounter}</h2>
            <h5>{boxtitle}</h5>
        </div>
    );
}