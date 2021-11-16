import React from "react";
import NomeUsuario from "./NomeUsuario";

export default function Title({ title, user, editable }) {

    return (
        <>
            {editable ?
                <input className="form-control"
                    value={title}
                />
                :
                <h1 className="title"><span className="underline">{title}{user ? NomeUsuario() : ''}</span></h1>
            }
        </>
    );
}