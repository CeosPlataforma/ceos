//caso confuso é isso:
//https://xd.adobe.com/view/0372ae08-46dc-42f7-65e2-072a093ce5cc-7543/screen/f2fca1d1-70f9-4bf5-b466-c23f841c303c

import React, { useState } from "react";
import User from "../components/User";
import AtvBox from "../components/AtvBox";

export default function VerAtvs() {
    return (
        <div>
            <div>
                <div className="container-xxl container-padding ver-atividades content">
                    <div className="row align-items-center">

                        <div className="col-12">
                            <div className="logged--header">
                                <h1 className="title">Nome da matéria??</h1>
                                <User />
                            </div>

                            <div className="container d-flex justify-content-between p-0">
                                <button className="materias--btn materias--ver-atividades btn btn-secondary btn--common">Ver atividades</button>
                                <button className="materias--btn materias--adicionar-atividade btn btn-outline-secondary btn--common" /*onClick={() => { setShow(true) }}*/>Adicionar atividade</button>
                                <button className="materias--btn materias--infos btn btn-outline-secondary btn--common" /*onClick={() => { setShow(true) }}*/>Informações</button>
                            </div>

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

                            <AtvBox
                                title="Título"
                                materia="Matéria"
                                tipo="Trabalho"
                                data="xx/xx/xxxx"
                            />
                            <AtvBox
                                title="Título"
                                materia="Matéria"
                                tipo="Trabalho"
                                data="xx/xx/xxxx"
                            />
                            <AtvBox
                                title="Título"
                                materia="Matéria"
                                tipo="Trabalho"
                                data="xx/xx/xxxx"
                            />
                            <AtvBox
                                title="Título"
                                materia="Matéria"
                                tipo="Trabalho"
                                data="xx/xx/xxxx"
                            />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}