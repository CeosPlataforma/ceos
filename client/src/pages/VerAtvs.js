//caso confuso é isso:
//https://xd.adobe.com/view/0372ae08-46dc-42f7-65e2-072a093ce5cc-7543/screen/f2fca1d1-70f9-4bf5-b466-c23f841c303c

import React, { useState } from "react";
import AtvBox from "../components/AtvBox";
import PlataformaHeader from "../components/PlataformaHeader";
import { Link } from "react-router-dom";

export default function VerAtvs() {

    const [index, setIndex] = useState(0)

    const [atvButton, setAtvButton] = useState("atividades--btn atividades--btn--active")
    const [infoButton, setInfoButton] = useState("atividades--btn atividades--btn--inactive")

    return (
        <>
            <div className="container-xxl ver-atividades content">

                <PlataformaHeader title="Nome da matéria??" />

                <div className="container d-flex justify-content-between p-0 flex-wrap">
                    <button
                        className={atvButton}
                        onClick={() => {
                            setIndex(0)
                            setAtvButton("atividades--btn atividades--btn--active")
                            setInfoButton("atividades--btn atividades--btn--inactive")
                        }}>
                        Ver atividades
                    </button>
                    <button className="atividades--btn atividades--btn--inactive" /*onClick={() => { setShow(true) }}*/>Adicionar atividade</button>
                    <button
                        className={infoButton}
                        onClick={() => {
                            setIndex(1)
                            setAtvButton("atividades--btn atividades--btn--inactive")
                            setInfoButton("atividades--btn atividades--btn--active")
                        }}>
                        Informações
                    </button>
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

                {/* <div class="atividades--holder">
                        <AtvBox
                            title="Título"
                            tipo="Trabalho"
                            data="xx/xx/xxxx"
                            excluir
                            className="mb-4"
                        />
                        <AtvBox
                            title="Título"
                            tipo="Trabalho"
                            data="xx/xx/xxxx"
                            excluir
                            className="mb-4"
                        />
                        <AtvBox
                            title="Título"
                            tipo="Trabalho"
                            data="xx/xx/xxxx"
                            excluir
                            className="mb-4"
                        />
                        <AtvBox
                            title="Título"
                            tipo="Trabalho"
                            data="xx/xx/xxxx"
                            excluir
                            className="mb-4"
                        />
                    </div> */}
                <div className="d-flex justify-content-between mt-4">
                    <div>
                        <div className="d-flex align-items-center">
                            <h1 className="title-bold">Professor(a)</h1><a className="btn btn-edit--atv"><svg xmlns="http://www.w3.org/2000/svg" width="41.154" height="42.687" viewBox="0 0 41.154 42.687"><g transform="translate(-1044.681 -617.99)"><path d="M1048.433,650.072l-3.752,14.1,13.984-4.32,19.555-19.555-10.574-10.574Z" transform="translate(0 -3.493)" fill="#fff" /><path d="M1081.756,623.5l9.836,9.836,5.282-5.282-10.063-10.063Z" transform="translate(-11.039)" fill="#fff" /></g></svg></a>
                        </div>
                        <p className="subtitle subtitle--gray">Nome do(a) professor(a)</p>
                    </div>

                    <div>
                        <h1 className="title-bold">Período</h1>
                        <h2 className="subtitle mt-2">Dia</h2>
                        <p className="subtitle subtitle--gray">Horário</p>
                        <br />
                        <h2 className="subtitle mt-2">Dia</h2>
                        <p className="subtitle subtitle--gray">Horário</p>
                        <br />
                        <h2 className="subtitle mt-2">Dia</h2>
                        <p className="subtitle subtitle--gray">Horário</p>
                        <br />
                        <h2 className="subtitle mt-2">Dia</h2>
                        <p className="subtitle subtitle--gray">Horário</p>
                        <br />
                        <Link to="/cronograma" className="materia-visualizar-cronograma">&gt; Visualizar no cronograma</Link>
                    </div>

                    <div>
                        <h1 className="title-bold">Desempenho</h1>
                        <h2 className="subtitle mt-2">Lição de casa</h2>
                        <p className="subtitle subtitle--gray">Concluídas - XX</p>
                        <p className="subtitle subtitle--gray">Pendentes - XX</p>
                        <br />
                        <h2 className="subtitle mt-2">Trabalhos</h2>
                        <p className="subtitle subtitle--gray">Concluídas - XX</p>
                        <p className="subtitle subtitle--gray">Pendentes - XX</p>
                        <br />
                        <h2 className="subtitle mt-2">Provas</h2>
                        <p className="subtitle subtitle--gray">Concluídas - XX</p>
                        <p className="subtitle subtitle--gray">Pendentes - XX</p>
                        <br />
                        <h2 className="subtitle mt-2">Atividades</h2>
                        <p className="subtitle subtitle--gray">Concluídas - XX</p>
                        <p className="subtitle subtitle--gray">Pendentes - XX</p>
                        <br />
                    </div>
                </div>
            </div>
        </>
    );
}