import React, { useEffect, useState } from "react";
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ModalAddMateria from "../components/ModalAddMateria";
import PlataformaHeader from "../components/PlataformaHeader";

export default function Materias() {

    axios.defaults.withCredentials = true

    const [show, setShow] = useState(false);

    const reload = () => {
        window.location.reload();
    }
    const [materias, setMaterias] = useState([]);

    const onSubmit = async (values, actions) => {
        await axios.post("http://localhost:3333/materia", { name: values.name })
            .then((response) => {
                console.log(response);
                if (response.data.materiaAlreadyExists) {
                    actions.setFieldError("name", response.data.message);
                } else if (response.data.success) {
                    setShow(false);
                }
            }).catch((error) => {
                console.log(error)
            });
    }

    const fetchMaterias = async () => {
        axios.get('http://localhost:3333/materia')
            .then((response) => {

                if (response.data.message !== "sem-materias") {
                    setMaterias(response.data)
                } else {
                    console.log("sem materia");
                }

            }).catch((error) => { console.log(error); })
    }

    useEffect(() => {
        fetchMaterias()
    }, [])

    function onClick(materiaID) {
        window.location = `http://localhost:3000/materia/${materiaID}`
    }

    const [filter, setFilter] = useState("crescente")

    return (
        <>
            <div className="container-xxl materias content">

                <PlataformaHeader title="Gerencie suas matérias" user={false} />

                <button className="materias--btn materias--ver-materias btn btn--common">Ver matérias</button>

                <button className="materias--btn materias--adicionar-materias  btn btn--common" onClick={() => { setShow(true) }}>Adicionar matérias</button>

                <div className="dropdown">
                    <button className="btn dropdown-toggle materias--classificar-por" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Classificar por:
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" onClick={() => setFilter("crescente")}>Ordem Alfabética (crescente)</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" onClick={() => setFilter("decrescente")}>Ordem Alfabética (decrescente)</a></li>
                    </ul>
                </div>

                <Row xs={1} xl={2}>

                    {materias
                        .sort((a, b) => {
                            if (filter === "crescente") {
                                if (a.name.toLowerCase().normalize('NFD') < b.name.toLowerCase().normalize('NFD')) { return -1; }
                                if (a.name.toLowerCase().normalize('NFD') > b.name.toLowerCase().normalize('NFD')) { return 1; }
                                return 0
                            } else if (filter === "decrescente") {
                                if (a.name.toLowerCase().normalize('NFD') < b.name.toLowerCase().normalize('NFD')) { return 1; }
                                if (a.name.toLowerCase().normalize('NFD') > b.name.toLowerCase().normalize('NFD')) { return -1; }
                                return 0
                            }
                        })
                        .map((materia) => (
                            <Col>
                                <div className="materias--container d-md-flex" style={{ cursor: 'default' }}>
                                    <h5>{materia.name}</h5>
                                    <div className="arrow-container" style={{ 'height': '30px' }} onClick={() => onClick(materia.uuid)}>
                                        <div className="materias--arrow" />
                                    </div>
                                </div>
                            </Col>
                        ))}

                </Row>

                <ModalAddMateria onSubmit={onSubmit} show={show} onHide={() => setShow(false)} onExited={reload} />

            </div>
        </>
    );
}