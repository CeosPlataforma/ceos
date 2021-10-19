import React from "react";

export default function SimpleBox({ counter, title }) {

    return (
        <div className="simpleBox">
            <h2>{counter}</h2>
            <h5>{title}</h5>
        </div>
    );
}