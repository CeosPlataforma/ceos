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

    useEffect(() => {
        fetchMaterias()
    }, [])


    return (
        <>
            <Container fluid={"xxl"} className="desempenho content">
                <PlataformaHeader title="Desempenho" user={false} />

                <Row sm={1} md={2} xxl={4} className="desempenho--section">
                    <Col>
                        <SimpleBox
                            counter="005"
                            title="Lições de casa concluídas"
                        />
                    </Col>
                    <Col>
                        <SimpleBox
                            counter="005"
                            title="Trabalhos concluídos"
                        />
                    </Col>
                    <Col>
                        <SimpleBox
                            counter="005"
                            title="Provas concluídas"
                        />
                    </Col>
                    <Col>
                        <SimpleBox
                            counter="005"
                            title="Atividades concluídas"
                        />
                    </Col>
                    <Col>
                        <SimpleBox
                            counter="005"
                            title="Lições de casa pendentes"
                        />
                    </Col>
                    <Col>
                        <SimpleBox
                            counter="005"
                            title="Trabalhos pendentes"
                        />
                    </Col>
                    <Col>
                        <SimpleBox
                            counter="005"
                            title="Provas pendentes"
                        />
                    </Col>
                    <Col>
                        <SimpleBox
                            counter="005"
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