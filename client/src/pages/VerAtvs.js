import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Row from 'react-bootstrap/Row';

import AtvBox from "../components/AtvBox";
import ModalAddAtv from "../components/ModalAddAtv";
import ModalDeleteMateria from "../components/ModalDeleteMateria";
import PlataformaHeader from "../components/PlataformaHeader";
import VerAtvsInfo from "./VerAtvs-Info";

export default function VerAtvs() {

    const { materiaID } = useParams()

    const [atividades, setAtividades] = useState([]);
    const [materia, setMateria] = useState({})
    const [showAdd, setShowAdd] = useState(false);
    const [showExcluir, setShowExcluir] = useState(false);
    const [atvTipo, setAtvTipo] = useState("")

    const reload = () => {
        window.location.reload();
    }

    axios.defaults.withCredentials = true

    const onSubmitExcluir = async (values, actions) => {
        axios.post("http://localhost:3333/materia-deletar", { id: materia._id })
            .then((response) => {
                console.log(response)
                const { success, error } = response.data;
                if (success) {
                    actions.setFieldError("name", `Materia deletada com sucesso.`);
                    setTimeout(() => { window.location = "http://localhost:3000/materias" }, 2000)
                } else {
                    actions.setFieldError("name", `erro!!!.`);
                }
            })
            .catch(error => {
                console.log(error)
            });
        // setShowExcluir(false);
        // console.log("excluir")
    }

    const onSubmit = async (values, actions) => {
        //console.log(values)
        await axios.post("http://localhost:3333/atividades", {
            name: values.name,
            description: values.description,
            type: values.type,
            dueByDate: values.dueByDate,
            materia_id: materia._id
        }).then((response) => {
            //console.log(response);
            if (response.data.success) {
                setShowAdd(false)
            } else if (response.data.error) {
                //console.log(response.data.error)
                actions.setFieldError("name", "erro!!!");
            } else if (response.data.exists) {
                actions.setFieldError("name", "Esta atividade já existe!!!");
            } else {
                console.log(response.data);
            }
        }).catch((error) => {
            console.log(error)
        });
    }

    const fetchAtividades = async () => {
        //console.log(materia)
        axios.post('http://localhost:3333/get-atividades', { materia_id: materia._id })
            .then((response) => {

                if (!response.data.message) {
                    setAtividades(response.data)
                    //console.log(response.data);
                } else {
                    console.log("sem atividade", response.data);
                }

            }).catch((error) => { console.log(error); })
    }

    const [index, setIndex] = useState(0)

    const [atvButton, setAtvButton] = useState("ver-atividades--btn ver-atividades--btn--active")
    const [infoButton, setInfoButton] = useState("ver-atividades--btn ver-atividades--btn--inactive")
    const [lixeiraButton, setLixeiraButton] = useState("ver-atividades--btn ver-atividades--btn--inactive")
    const [concluidasButton, setConcluidasButton] = useState("ver-atividades--btn ver-atividades--btn--inactive")

    useEffect(() => {

        axios.post("http://localhost:3333/materia-details", { materia_uuid: materiaID })
            .then((response) => {
                setMateria(response.data)
            }).catch((error) => { console.log(error) })

    }, [])

    useEffect(() => {

        fetchAtividades()

    }, [materia])


    return (
        <>
            <div className="container-xxl ver-atividades content">

                <PlataformaHeader
                    title={materia.name}
                    materia={materia}
                    editmateria
                    retornarmsg={"Voltar às matérias"}
                    link={"/materias"} />

                <div className="d-flex justify-content-between p-0 flex-wrap">
                    <button
                        className={atvButton}
                        onClick={() => {
                            setIndex(0)
                            setAtvButton("ver-atividades--btn ver-atividades--btn--active")
                            setInfoButton("ver-atividades--btn ver-atividades--btn--inactive")
                            setLixeiraButton("ver-atividades--btn ver-atividades--btn--inactive")
                            setConcluidasButton("ver-atividades--btn ver-atividades--btn--inactive")
                        }}>
                        Ver atividades
                    </button>
                    <button className="ver-atividades--btn ver-atividades--btn--inactive" onClick={() => { setShowAdd(true) }}>Adicionar atividade</button>
                    <button
                        className={infoButton}
                        onClick={() => {
                            setIndex(1)
                            setAtvButton("ver-atividades--btn ver-atividades--btn--inactive")
                            setInfoButton("ver-atividades--btn ver-atividades--btn--active")
                            setLixeiraButton("ver-atividades--btn ver-atividades--btn--inactive")
                            setConcluidasButton("ver-atividades--btn ver-atividades--btn--inactive")
                        }}>
                        Informações
                    </button>
                    <button
                        className={concluidasButton}
                        onClick={() => {
                            setIndex(2)
                            setAtvButton("ver-atividades--btn ver-atividades--btn--inactive")
                            setInfoButton("ver-atividades--btn ver-atividades--btn--inactive")
                            setLixeiraButton("ver-atividades--btn ver-atividades--btn--inactive")
                            setConcluidasButton("ver-atividades--btn ver-atividades--btn--active")
                        }}>
                        Concluidas
                    </button>
                    <button
                        className={lixeiraButton}
                        onClick={() => {
                            setIndex(3)
                            setAtvButton("ver-atividades--btn ver-atividades--btn--inactive")
                            setInfoButton("ver-atividades--btn ver-atividades--btn--inactive")
                            setLixeiraButton("ver-atividades--btn ver-atividades--btn--active")
                            setConcluidasButton("ver-atividades--btn ver-atividades--btn--inactive")
                        }}>
                        Lixeira
                    </button>
                </div>

                {index === 0 &&
                    <>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle materias--classificar-por" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Classificar por:
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item">Ordem Alfabética (crescente)</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item">Ordem Alfabética (decrescente)</a></li>
                            </ul>
                        </div>

                        <Row sm={1} md={2} xxl={3} className="mb-2">
                            {/* ver-atividades--holder */}
                            {atividades.filter((atividade) => atividade.trashed || atividade.concluida ? false : true)
                            .map((atividade) => {
                                switch (atividade.atv_type) {
                                    case "trabalho":
                                        atividade.tipo = "Trabalho"
                                        break;
                                    case "atividade":
                                        atividade.tipo = "Atividade"
                                        break;
                                    case "licao-de-casa":
                                        atividade.tipo = "Lição de casa"
                                        break;
                                    case "prova":
                                        atividade.tipo = "Prova"
                                        break;
                                    default: 
                                        atividade.tipo = "??? erro ???"
                                        break;
                                }
                                let day = atividade.dueBy.substring(8, 10)
                                let month = atividade.dueBy.substring(5, 7)
                                let year = atividade.dueBy.substring(0, 4)
                                let date = `${day}/${month}/${year}`
                                atividade.fixedDate = date
                                //console.log("map", atividade.tipo)
                                return <AtvBox /*materia={atividade.materia.name}*/ mat_obj={atividade.materia} atv_obj={atividade} title={atividade.name} tipo={atividade.tipo} data={atividade.fixedDate} excluir className="mb-5" />
                            })}
                            {/*<AtvBox tile="aaaa" tipo="aaa" data="aaa" excluir className="mb-4" />*/}
                        </Row>
                        <a className="ver-atividades--excluir" onClick={() => { setShowExcluir(true) }}>&gt; Excluir matéria</a>
                    </>
                }

                {index === 1 &&
                    <>
                        <VerAtvsInfo />
                    </>
                }

                {index === 2 &&
                    <>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle materias--classificar-por" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Classificar por:
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item">Ordem Alfabética (crescente)</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item">Ordem Alfabética (decrescente)</a></li>
                            </ul>
                        </div>

                        <Row sm={1} md={2} xxl={3} className="mb-2">
                            {/* ver-atividades--holder */}
                            {atividades.filter((atividade) => atividade.concluida && !atividade.trashed ? true : false)
                            .map((atividade) => {
                                switch (atividade.atv_type) {
                                    case "trabalho":
                                        atividade.tipo = "Trabalho"
                                        break;
                                    case "atividade":
                                        atividade.tipo = "Atividade"
                                        break;
                                    case "licao-de-casa":
                                        atividade.tipo = "Lição de casa"
                                        break;
                                    case "prova":
                                        atividade.tipo = "Prova"
                                        break;
                                    default: 
                                        atividade.tipo = "??? erro ???"
                                        break;
                                }
                                let day = atividade.dueBy.substring(8, 10)
                                let month = atividade.dueBy.substring(5, 7)
                                let year = atividade.dueBy.substring(0, 4)
                                let date = `${day}/${month}/${year}`
                                atividade.fixedDate = date
                                //console.log("map", atividade.tipo)
                                return <AtvBox /*materia={atividade.materia.name}*/ mat_obj={atividade.materia} atv_obj={atividade} title={atividade.name} tipo={atividade.tipo} data={atividade.fixedDate} excluir className="mb-5" />
                            })}
                            {/*<AtvBox tile="aaaa" tipo="aaa" data="aaa" excluir className="mb-4" />*/}
                        </Row>
                        <a className="ver-atividades--excluir" onClick={() => { setShowExcluir(true) }}>&gt; Excluir matéria</a>
                    </>
                }

                {index === 3 &&
                    <>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle materias--classificar-por" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Classificar por:
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item">Ordem Alfabética (crescente)</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item">Ordem Alfabética (decrescente)</a></li>
                            </ul>
                        </div>

                        <Row sm={1} md={2} xxl={3} className="mb-2">
                            {/* ver-atividades--holder */}
                            {atividades.filter((atividade) => atividade.trashed ? true : false)
                            .map((atividade) => {
                                switch (atividade.atv_type) {
                                    case "trabalho":
                                        atividade.tipo = "Trabalho"
                                        break;
                                    case "atividade":
                                        atividade.tipo = "Atividade"
                                        break;
                                    case "licao-de-casa":
                                        atividade.tipo = "Lição de casa"
                                        break;
                                    case "prova":
                                        atividade.tipo = "Prova"
                                        break;
                                    default: 
                                        atividade.tipo = "??? erro ???"
                                        break;
                                }
                                let day = atividade.dueBy.substring(8, 10)
                                let month = atividade.dueBy.substring(5, 7)
                                let year = atividade.dueBy.substring(0, 4)
                                let date = `${day}/${month}/${year}`
                                atividade.fixedDate = date
                                //console.log("map", atividade.tipo)
                                return <AtvBox /*materia={atividade.materia.name}*/ mat_obj={atividade.materia} atv_obj={atividade} title={atividade.name} tipo={atividade.tipo} data={atividade.fixedDate} restaurar permexcluir className="mb-5" />
                            })}
                            {/*<AtvBox tile="aaaa" tipo="aaa" data="aaa" excluir className="mb-4" />*/}
                        </Row>
                        <a className="ver-atividades--excluir" onClick={() => { setShowExcluir(true) }}>&gt; Excluir matéria</a>
                    </>
                }

                <ModalAddAtv onSubmit={onSubmit} show={showAdd} onHide={() => { setShowAdd(false) }} onExited={() => { reload() }} />
                <ModalDeleteMateria materia_name={materia.name} onSubmit={onSubmitExcluir} show={showExcluir} onHide={() => { setShowExcluir(false) }} />

            </div>
        </>
    );
}