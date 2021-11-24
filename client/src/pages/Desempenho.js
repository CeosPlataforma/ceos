import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import axios from "axios";

import SimpleBox from "../components/SimpleBox";
import PlataformaHeader from "../components/PlataformaHeader";

export default function Desempenho() {


    axios.defaults.withCredentials = true

    const [materias, setMaterias] = useState([]);
    const [atividades, setAtividades] = useState([])

    function onClick(materiaID) {
        window.location = `http://localhost:3000/materia/${materiaID}`
    }

    const fetchMaterias = async () => {
        axios.get('http://localhost:3333/materia')
            .then((response) => {

                if (response.data.message !== "sem-materias") {
                    setMaterias(response.data)
                    console.log(response.data)
                } else {
                    console.log("sem materia");
                }

            }).catch((error) => { console.log(error); })
    }

    const fetchAtividades = async () => {
        axios.get('http://localhost:3333/get-atividades')
            .then((response) => {
                console.log(response.data)
                setAtividades(response.data)
            }).catch((error) => {
                console.log("erro no fetch das atividades", error)
            })
    }

    /**
     * @param {string} tipo O tipo da atividade
     * @param {boolean} conc Se é para atividades concluidas
     * @param {boolean} all Se é pra filtrar por tipo
     * @returns {string} quantidade de atividades que servem pro filtro
     */
    const getAtvCount = (tipo, conc, all) => {

        if (!atividades.length) {
            return "000"
        }

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

    useEffect(() => {
        fetchMaterias()
        fetchAtividades()
    }, [])

    return (
        <>
            <Container fluid={"xxl"} className="desempenho content">
                <PlataformaHeader title="Desempenho" user={false} />

                <Row sm={1} md={2} xxl={4} className="desempenho--section">
                    <Col>
                        <SimpleBox
                            counter={getAtvCount("licao-de-casa", true)}
                            title="Lições de casa concluídas"
                        />
                    </Col>
                    <Col>
                        <SimpleBox
                            counter={getAtvCount("trabalho", true)}
                            title="Trabalhos concluídos"
                        />
                    </Col>
                    <Col>
                        <SimpleBox
                            counter={getAtvCount("prova", true)}
                            title="Provas concluídas"
                        />
                    </Col>
                    <Col>
                        <SimpleBox
                            counter={getAtvCount("prova", true, true)}
                            title="Atividades concluídas"
                        />
                    </Col>
                    <Col>
                        <SimpleBox
                            counter={getAtvCount("licao-de-casa", false)}
                            title="Lições de casa pendentes"
                        />
                    </Col>
                    <Col>
                        <SimpleBox
                            counter={getAtvCount("trabalho", false)}
                            title="Trabalhos pendentes"
                        />
                    </Col>
                    <Col>
                        <SimpleBox
                            counter={getAtvCount("prova", false)}
                            title="Provas pendentes"
                        />
                    </Col>
                    <Col>
                        <SimpleBox
                            counter={getAtvCount("prova", false, true)}
                            title="Atividades pendentes"
                        />
                    </Col>
                </Row>

                <Row sm={2}>
                    {materias.map((materia) => (
                        <Col>
                            <div className="materias--container" onClick={() => onClick(materia.uuid)}>
                                <h5 className="materias--name">{materia.name}</h5>
                                <div className="materias--arrow" />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}