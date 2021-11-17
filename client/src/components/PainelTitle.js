import React from "react";
import NomeUsuario from "./NomeUsuario";

export default function Title({ title, user, editable, handleValue }) {

    return (
        <>
            {editable ?
                <input type="text" autoComplete="off" className="form-control" name="materia" onChange={(event) => {handleValue(event)}}
                    placeholder={title}
                />
            :
            <h1 className="title"><span className="underline">{title}{user ? NomeUsuario() : ''}</span></h1>
            }
        </>
    );
}