import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from './Avatar'
import NomeUsuario from "./NomeUsuario";

export default function User() {

    return (
        <Link to={"/dados-pessoais"} className="user">
            <p className="user--name">{NomeUsuario()}</p>
            <Avatar className="user--photo" />
        </Link>
    )
    
}
