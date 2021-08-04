import React from "react";
import { Link } from "react-router-dom";

export default function Materias() {
    return (
        <div>
            <div className="container-xxl container-padding materias content">
                <div className="row align-items-center">

                    <div className="col-lg-12">
                        <div className="materias--header">
                            <h1 className="title">Gerencie suas matérias</h1>
                            <div className="materias--user"><Link className="materias--user--name" to={"/dados-pessoais"}>Nome do usuário</Link></div>
                        </div>

                        <button className="materias--btn materias--ver-materias btn btn-secondary btn--common">Ver matérias</button>

                        <button className="materias--btn materias--adicionar-materias  btn btn-outline-secondary btn--common">Adicionar matérias</button>

                        <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle materias--classificar-por" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Classificar por:
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Ordem Alfabética (crescente)</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Ordem Alfabética (decrescente)</a></li>
                            </ul>
                        </div>

                        <div class="materias--holder">
                            <div class="materias--container">
                                <h5>Matéria</h5>
                                <div class="materias--arrow"></div>
                            </div>

                            <div class="materias--container">
                                <h5>Matéria</h5>
                                <div class="materias--arrow"></div>
                            </div>

                            <div class="materias--container">
                                <h5>Matéria</h5>
                                <div class="materias--arrow"></div>
                            </div>

                            <div class="materias--container">
                                <h5>Matéria</h5>
                                <div class="materias--arrow"></div>
                            </div>

                            <div class="materias--container">
                                <h5>Matéria</h5>
                                <div class="materias--arrow"></div>
                            </div>

                            <div class="materias--container">
                                <h5>Matéria</h5>
                                <div class="materias--arrow"></div>
                            </div>

                            <div class="materias--container">
                                <h5>Matéria</h5>
                                <div class="materias--arrow"></div>
                            </div>

                            <div class="materias--container">
                                <h5>Matéria</h5>
                                <div class="materias--arrow"></div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}