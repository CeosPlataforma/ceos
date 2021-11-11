import React, { useState } from "react";
import { Link } from "react-router-dom";

import ModalEditProf from "../components/ModalEditProf";

export default function VerAtvsInfo() {

    const [show, setShow] = useState(false);

    return (
        <div className="d-flex justify-content-between mt-4 flex-wrap">
            <div className="mr-4 mb-4">
                <div className="d-flex align-items-center">
                    <h1 className="title-bold">Professor(a)</h1>
                    <a className="btn btn-edit--atv" onClick={() => { setShow(true) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="41.154" height="42.687" viewBox="0 0 41.154 42.687">
                            <g transform="translate(-1044.681 -617.99)">
                                <path d="M1048.433,650.072l-3.752,14.1,13.984-4.32,19.555-19.555-10.574-10.574Z" transform="translate(0 -3.493)" fill="#fff" />
                                <path d="M1081.756,623.5l9.836,9.836,5.282-5.282-10.063-10.063Z" transform="translate(-11.039)" fill="#fff" />
                            </g>
                        </svg>
                    </a>
                </div>
                <p className="subtitle subtitle--gray">Nome do(a) professor(a)</p>
            </div>

            <div className="mr-5 mb-5">
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

            <ModalEditProf show={show} onHide={() => setShow(false)} />

        </div>
    );
}