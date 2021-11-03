import axios from 'axios';
import React, { useEffect, useState } from "react";
import ModalAddMateria from "../components/ModalAddMateria";
import PlataformaHeader from "../components/PlataformaHeader";
//import MateriaContainer from "../components/MateriaContainer";

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

    return (
        <>
            <div className="container-xxl materias content">

                <PlataformaHeader title="Gerencie suas matérias" user={false} />

                <button className="materias--btn materias--ver-materias btn btn--common">Ver matérias</button>

                <button className="materias--btn materias--adicionar-materias  btn btn--common" onClick={() => { setShow(true) }}>Adicionar matérias</button>

                <div class="dropdown">
                    <button class="btn dropdown-toggle materias--classificar-por" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Classificar por:
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Ordem Alfabética (crescente)</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Ordem Alfabética (decrescente)</a></li>
                    </ul>
                </div>

                <div class="materias--holder">

                    {materias.map((materia) => (
                        <div class="materias--container">
                            <h5>{materia.name}</h5>
                            <div className="arrow-container" style={{ 'height': '30px' }} onClick={() => onClick(materia.uuid)}>
                                <div class="materias--arrow"></div>
                            </div>
                        </div>
                    ))}

                </div>

                <ModalAddMateria onSubmit={onSubmit} show={show} onHide={() => setShow(false)} onExited={reload} />

            </div>
        </>
    );
}