//caso confuso é isso:
//https://xd.adobe.com/view/0372ae08-46dc-42f7-65e2-072a093ce5cc-7543/screen/f2fca1d1-70f9-4bf5-b466-c23f841c303c

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AtvBox from "../components/AtvBox";
import ModalAddAtv from "../components/ModalAddAtv";
import PlataformaHeader from "../components/PlataformaHeader";
import VerAtvsInfo from "./VerAtvs-Info";

export default function VerAtvs() {

    const { materiaID } = useParams()

    const [materia, setMateria] = useState({})
    const [show, setShow] = useState(false);

    axios.defaults.withCredentials = true

    /*const [atividade, setAtividades] = useState([]);
    const fetchMaterias = async () => {
        axios.get('http://localhost:3333/atividades')
            .then((response) => {

                if (response.data.message !== "sem-atividades") {
                    setMaterias(response.data)
                } else {
                    console.log("sem atividade");
                }

            }).catch((error) => { console.log(error); })
    }*/
    
    const [index, setIndex] = useState(0)

    const [atvButton, setAtvButton] = useState("atividades--btn atividades--btn--active")
    const [infoButton, setInfoButton] = useState("atividades--btn atividades--btn--inactive")

    useEffect(() => {
        axios.post("http://localhost:3333/materia-details", { materia_uuid: materiaID })
        .then((response) => {

            setMateria(response.data)

        }).catch((error) => { console.log(error) })
    }, [])


    return (
        <>
            <div className="container-xxl ver-atividades content">

                <PlataformaHeader title={materia.name} user={false} retornarmsg={"Voltar às matérias"} link={"/materias"} />

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
                    <button className="atividades--btn atividades--btn--inactive" onClick={() => { setShow(true) }}>Adicionar atividade</button>
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

                {index === 0 &&
                    <>
                        <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle materias--classificar-por" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Classificar por:
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Ordem Alfabética (crescente)</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Ordem Alfabética (decrescente)</a></li>
                            </ul>
                        </div>


                        {/*{materias.map((materia) => (
                        <div className="materias--container">
                            <h5>{materia.name}</h5>
                            <div className="arrow-container" style={{ 'height': '30px' }} onClick={() => onClick(materia.uuid)}>
                                <div className="materias--arrow"></div>
                            </div>
                        </div>
                        ))}*/}

                        <div className="atividades--holder">
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
                        </div>
                    </>
                }
                {index === 1 &&
                    <VerAtvsInfo />
                }

                <ModalAddAtv show={show} onHide={() => {setShow(false)}} />

            </div>
        </>
    );
}