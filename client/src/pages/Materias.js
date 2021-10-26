import axios from 'axios';
import React, { useEffect, useState } from "react";
import ModalAddMateria from "../components/ModalAddMateria";
import PlataformaHeader from "../components/PlataformaHeader";
//import MateriaContainer from "../components/MateriaContainer";

export default function Materias() {

    const [show, setShow] = useState(false);

    const reload = () => {
        window.location.reload();
    }
    const [materias, setMaterias] = useState([]);

    axios.defaults.withCredentials = true
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

    axios.defaults.withCredentials = true
    useEffect(() => {
        async function fetchMaterias() {
            await axios.get('http://localhost:3333/materia')
                .then((response) => {

                    if (response.data.message !== "sem-materias") {
                        setMaterias(response.data)
                        //setShowMaterias(false)
                    } else {
                        console.log("sem materia");
                    }
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                })
        }

        fetchMaterias()
    }, [])

    return (
        <div>
            <div className="container-xxl materias content">

                <PlataformaHeader title="Gerencie suas matérias" />

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
                            <div class="materias--arrow"></div>
                        </div>
                    ))}

                </div>

                <ModalAddMateria onSubmit={onSubmit} show={show} onHide={() => setShow(false)} onExited={reload} />

            </div>

        </div>
    );
}