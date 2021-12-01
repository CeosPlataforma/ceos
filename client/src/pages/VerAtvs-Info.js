import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import ModalEditProf from "../components/ModalEditProf";

export default function VerAtvsInfo({ atividades, materia }) {

    const [show, setShow] = useState(false);
    const [touched, setTouched] = useState(false);

    axios.defaults.withCredentials = true

    const onSubmit = async (values, actions) => {
        axios.post("http://localhost:3333/materia-edit", {
            materia_id: materia._id,
            professor: values.professor 
        }).then((response) => {
            if (response.data.success) {
                console.log("sucesO! eba")
                materia.professor = values.professor
                setShow(false)
            } else {
                actions.setFieldError("professor", "deu não ⛔")
            }
        })
    }

    const getAtvCount = (tipo, conc, all) => {
        if (conc) {
            if (all) {
                return atividades.filter((atividade) => !atividade.trashed && atividade.concluida ? true : false).length.toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false})
            } else {
                return atividades.filter((atividade) => (atividade.atv_type === tipo && !atividade.trashed) && atividade.concluida ? true : false).length.toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false})
            }
        } else {
            if (all) {
                return atividades.filter((atividade) => !atividade.trashed && !atividade.concluida ? true : false).length.toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false})
            } else {
                return atividades.filter((atividade) => (atividade.atv_type === tipo && !atividade.trashed) && !atividade.concluida ? true : false).length.toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false})
            }
        }
    }

    return (
        <div className="d-flex justify-content-between mt-4 flex-wrap">
            <div className="mr-4 mb-4">
                <div className="d-flex align-items-center">
                    <h1 className="title-bold">{materia.professor}</h1>
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

            {/* <div className="mr-5 mb-5">
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
            </div> */}

            <div>
                <h1 className="title-bold">Desempenho</h1>
                <h2 className="subtitle mt-2">Lição de casa</h2>
                <p className="subtitle subtitle--gray">Concluídas - {getAtvCount("licao-de-casa", true)}</p>
                <p className="subtitle subtitle--gray">Pendentes - {getAtvCount("licao-de-casa", false)}</p>
                <br />
                <h2 className="subtitle mt-2">Trabalhos</h2>
                <p className="subtitle subtitle--gray">Concluídas - {getAtvCount("trabalho", true)}</p>
                <p className="subtitle subtitle--gray">Pendentes - {getAtvCount("trabalho", false)}</p>
                <br />
                <h2 className="subtitle mt-2">Provas</h2>
                <p className="subtitle subtitle--gray">Concluídas - {getAtvCount("prova", true)}</p>
                <p className="subtitle subtitle--gray">Pendentes - {getAtvCount("prova", false)}</p>
                <br />
            </div>

            <ModalEditProf onSubmit={onSubmit} show={show} onHide={() => setShow(false)} />

        </div>
    );
}