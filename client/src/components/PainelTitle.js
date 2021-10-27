import React from "react";
import NomeUsuario from "./NomeUsuario";

export default function Title({ title, user }) {

    return (
        <h1 className="title"><span className="underline">{title}{ user ? NomeUsuario() : '' }</span></h1>
    );
}