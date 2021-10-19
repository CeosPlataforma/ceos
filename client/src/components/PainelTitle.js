import React from "react";

export default function Title({ title, user }) {

    return (
        <h1 className="title"><span className="underline">{title}{user}</span></h1>
    );
}