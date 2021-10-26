import React, { useState } from "react";
import MateriaContainer from "../components/MateriaContainer";
import SimpleBox from "../components/SimpleBox";
import PlataformaHeader from "../components/PlataformaHeader";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Atividades() {

    const [index, setIndex] = useState(0)

    const [atvButton, setAtvButton] = useState("atividades--btn atividades--btn--active")
    const [casaButton, setCasaButton] = useState("atividades--btn atividades--btn--inactive")
    const [trabButton, setTrabButton] = useState("atividades--btn atividades--btn--inactive")
    const [provButton, setProvButton] = useState("atividades--btn atividades--btn--inactive")
    const [lixoButton, setLixoButton] = useState("atividades--btn atividades--btn--inactive")

    return (
        <div>
            <div className="container-xxl atividades content">

                <PlataformaHeader title="Atividades" />

                <div className="row d-flex justify-content-between row-atividades">

                    <button
                        className={atvButton}
                        onClick={() => {
                            setIndex(0)
                            setAtvButton("atividades--btn atividades--btn--active")
                            setCasaButton("atividades--btn atividades--btn--inactive")
                            setTrabButton("atividades--btn atividades--btn--inactive")
                            setProvButton("atividades--btn atividades--btn--inactive")
                            setLixoButton("atividades--btn atividades--btn--inactive")
                        }}>
                        Todas atividades
                    </button>

                    <button
                        className={casaButton}
                        onClick={() => {
                            setIndex(1)
                            setAtvButton("atividades--btn atividades--btn--inactive")
                            setCasaButton("atividades--btn atividades--btn--active")
                            setTrabButton("atividades--btn atividades--btn--inactive")
                            setProvButton("atividades--btn atividades--btn--inactive")
                            setLixoButton("atividades--btn atividades--btn--inactive")
                        }}>
                        Lição de casa
                    </button>

                    <button
                        className={trabButton}
                        onClick={() => {
                            setIndex(2)
                            setAtvButton("atividades--btn atividades--btn--inactive")
                            setCasaButton("atividades--btn atividades--btn--inactive")
                            setTrabButton("atividades--btn atividades--btn--active")
                            setProvButton("atividades--btn atividades--btn--inactive")
                            setLixoButton("atividades--btn atividades--btn--inactive")
                        }}>
                        Trabalho
                    </button>

                    <button
                        className={provButton}
                        onClick={() => {
                            setIndex(3)
                            setAtvButton("atividades--btn atividades--btn--inactive")
                            setCasaButton("atividades--btn atividades--btn--inactive")
                            setTrabButton("atividades--btn atividades--btn--inactive")
                            setProvButton("atividades--btn atividades--btn--active")
                            setLixoButton("atividades--btn atividades--btn--inactive")
                        }}>
                        Prova
                    </button>

                    <button
                        className={lixoButton}
                        onClick={() => {
                            setIndex(4)
                            setAtvButton("atividades--btn atividades--btn--inactive")
                            setCasaButton("atividades--btn atividades--btn--inactive")
                            setTrabButton("atividades--btn atividades--btn--inactive")
                            setProvButton("atividades--btn atividades--btn--inactive")
                            setLixoButton("atividades--btn atividades--btn--active")
                        }}>
                        Lixeira
                    </button>

                </div>

                <div class="dropdown">
                    <button class="btn dropdown-toggle materias--classificar-por" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Classificar por:
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Data (mais próxima)</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Data (mais distante)</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Matéria (crescente)</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Matéria (decrescente)</a></li>
                    </ul>
                </div>


            </div>
        </div >
    )
}