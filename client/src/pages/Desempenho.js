import React from "react";
import MateriaContainer from "../components/MateriaContainer";
import SimpleBox from "../components/SimpleBox";
import PlataformaHeader from "../components/PlataformaHeader";
import { useEffect, useState } from "react";
import axios from "axios";

import Container from 'react-bootstrap/Container';

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

                <div className="desempenho--section">
                    <SimpleBox
                        counter="005"
                        title="Lições de casa concluídas"
                    />


                    <SimpleBox
                        counter="005"
                        title="Trabalhos concluídos"
                    />

                    <SimpleBox
                        counter="005"
                        title="Provas concluídas"
                    />

                    <SimpleBox
                        counter="005"
                        title="Atividades concluídas"
                    />
                </div>

                <div className="desempenho--section">
                    <SimpleBox
                        counter="005"
                        title="Lições de casa pendentes"
                    />

                    <SimpleBox
                        counter="005"
                        title="Trabalhos pendentes"
                    />

                    <SimpleBox
                        counter="005"
                        title="Provas pendentes"
                    />

                    <SimpleBox
                        counter="005"
                        title="Atividades pendentes"
                    />
                </div>

                <div className="materias--holder">
                {materias.map((materia) => (
                    <div className="materias--container" onClick={() => onClick(materia.uuid)}>
                        <h5 className="materias--name">{materia.name}</h5>
                        <div className="materias--arrow" />
                    </div>
                ))}
                </div>
            </Container>
        </>
    )
}