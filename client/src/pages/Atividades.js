import React, { useState } from "react";
import PlataformaHeader from "../components/PlataformaHeader";
import { Link } from "react-router-dom";

export default function Atividades() {

    const [atvButton, setAtvButton] = useState("atividades--btn atividades--btn--active")
    const [casaButton, setCasaButton] = useState("atividades--btn atividades--btn--inactive")
    const [trabButton, setTrabButton] = useState("atividades--btn atividades--btn--inactive")
    const [provButton, setProvButton] = useState("atividades--btn atividades--btn--inactive")
    const [lixoButton, setLixoButton] = useState("atividades--btn atividades--btn--inactive")

    return (
        <>
            <div className="container-xxl atividades content">

                <PlataformaHeader title="Atividades" user={false} />

                <div className="row d-flex justify-content-between row-atividades">

                    <Link
                        to={"/atividades"}
                        className={atvButton}
                        onClick={() => {
                            setAtvButton("atividades--btn atividades--btn--active")
                            setCasaButton("atividades--btn atividades--btn--inactive")
                            setTrabButton("atividades--btn atividades--btn--inactive")
                            setProvButton("atividades--btn atividades--btn--inactive")
                            setLixoButton("atividades--btn atividades--btn--inactive")
                        }}>
                        Todas atividades
                    </Link>

                    <Link
                        className={casaButton}
                        onClick={() => {
                            setAtvButton("atividades--btn atividades--btn--inactive")
                            setCasaButton("atividades--btn atividades--btn--active")
                            setTrabButton("atividades--btn atividades--btn--inactive")
                            setProvButton("atividades--btn atividades--btn--inactive")
                            setLixoButton("atividades--btn atividades--btn--inactive")
                        }}>
                        Lição de casa
                    </Link>

                    <Link
                        className={trabButton}
                        onClick={() => {
                            setAtvButton("atividades--btn atividades--btn--inactive")
                            setCasaButton("atividades--btn atividades--btn--inactive")
                            setTrabButton("atividades--btn atividades--btn--active")
                            setProvButton("atividades--btn atividades--btn--inactive")
                            setLixoButton("atividades--btn atividades--btn--inactive")
                        }}>
                        Trabalho
                    </Link>

                    <Link
                        className={provButton}
                        onClick={() => {
                            setAtvButton("atividades--btn atividades--btn--inactive")
                            setCasaButton("atividades--btn atividades--btn--inactive")
                            setTrabButton("atividades--btn atividades--btn--inactive")
                            setProvButton("atividades--btn atividades--btn--active")
                            setLixoButton("atividades--btn atividades--btn--inactive")
                        }}>
                        Prova
                    </Link>

                    <Link
                        className={lixoButton}
                        onClick={() => {
                            setAtvButton("atividades--btn atividades--btn--inactive")
                            setCasaButton("atividades--btn atividades--btn--inactive")
                            setTrabButton("atividades--btn atividades--btn--inactive")
                            setProvButton("atividades--btn atividades--btn--inactive")
                            setLixoButton("atividades--btn atividades--btn--active")
                        }}>
                        Lixeira
                    </Link>

                </div>

                <div className="dropdown">
                    <button className="btn dropdown-toggle materias--classificar-por" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Classificar por:
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Data (mais próxima)</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Data (mais distante)</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Matéria (crescente)</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Matéria (decrescente)</a></li>
                    </ul>
                </div>


            </div>
        </>
    )
}