import React from "react";

export const AddLine = ({ opacity }) => {
    return (
        <div className={opacity == true ? "cronograma--addline cronograma--addline--opacity" : "cronograma--addline"}><span className="cronograma--addline--text">+</span></div>
    );
}

export const RemoveLine = () => {
    return (
        <div className="cronograma--removeline"><span className="cronograma--removeline--text">x</span></div>
    );
}

export const ConfirmChange = () => {
    return (
        <div className="cronograma--confirmchange"><p className="cronograma--confirmchange--text">&#x2713;</p></div>
    );
}

export const CancelChange = () => {
    return (
        <span className="cronograma--cancelchange">X</span>
    );
}