import React from "react";

export default function AtvBox({ title, materia, tipo, data, excluir }) {

    return (
        <div className="atvBox">
            <h2>{title}</h2>
            <hr />
            <h5>{materia}</h5>
            <h5>{tipo}</h5>
            <h5>{data}</h5>
            <div className="d-flex justify-content-between">
                <button type="button" className={excluir == true ? "btn btn-light" : "btn btn-light w-100"}>Visualizar</button>
                <button type="button" className="btn btn-danger" id={excluir == true ? "" : "none"}>X</button>
            </div>
        </div>
    );
}