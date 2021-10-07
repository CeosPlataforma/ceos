import React from "react";

export default function AtvBox({ title, materia, tipo, data }) {

    return (
        <div className="atvBox">
            <h2>{title}</h2>
            <hr />
            <h5>{materia}</h5>
            <h5>{tipo}</h5>
            <h5>{data}</h5>
            <div className="d-flex justify-content-between">
                <button type="button" class="btn btn-light">Visualizar</button>
                <button type="button" class="btn btn-danger">X</button>
            </div>
        </div>
    );
}