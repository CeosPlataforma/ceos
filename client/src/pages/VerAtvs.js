import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

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

    const reload = () => {
        window.location.reload();
    }

    axios.defaults.withCredentials = true

    const onSubmit = async (values, actions) => {
        //console.log(values)
        await axios.post("http://localhost:3333/atividades", {
            name: values.name,
            description: values.description,
            type: values.type,
            dueByDate: values.dueByDate,
            materia_uuid: materiaID
        })
            .then((response) => {
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
        axios.post('http://localhost:3333/get-atividades', { materia_uuid: materiaID })
            .then((response) => {

                if (response.data.message !== "sem-atividades") {
                    setAtividades(response.data)
                    //console.log(response.data);
                } else {
                    console.log("sem atividade");
                }

            }).catch((error) => { console.log(error); })
    }

    const [index, setIndex] = useState(0)

    const [atvButton, setAtvButton] = useState("ver-atividades--btn ver-atividades--btn--active")
    const [infoButton, setInfoButton] = useState("ver-atividades--btn ver-atividades--btn--inactive")

    useEffect(() => {

        fetchAtividades()

        axios.post("http://localhost:3333/materia-details", { materia_uuid: materiaID })
            .then((response) => {

                setMateria(response.data)
                //console.log(response.data);
            }).catch((error) => { console.log(error) })

    }, [])


    return (
        <>
            <div className="container-xxl ver-atividades content">

                <PlataformaHeader title={materia.name} user={false} retornarmsg={"Voltar às matérias"} link={"/materias"} />

                <div className="d-flex justify-content-between p-0 flex-wrap">
                    <button
                        className={atvButton}
                        onClick={() => {
                            setIndex(0)
                            setAtvButton("ver-atividades--btn ver-atividades--btn--active")
                            setInfoButton("ver-atividades--btn ver-atividades--btn--inactive")
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
                                <li><a className="dropdown-item">Ordem Alfabética (crescente)</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item">Ordem Alfabética (decrescente)</a></li>
                            </ul>
                        </div>

                        <div className="row d-flex justify-content-between ver-atividades--holder mb-5">
                            {atividades.map((atividade) => {

                                let tipo;

                                switch (atividade.atv_type) {
                                    case "trabalho":
                                        tipo = "Trabalho"
                                        break;
                                    case "atividade":
                                        tipo = "Atividade"
                                        break;
                                    case "licao-de-casa":
                                        tipo = "Lição de casa"
                                        break;
                                    case "prova":
                                        tipo = "Prova"
                                        break;
                                }
                                

                                const day = atividade.dueBy.substring(8, 10)
                                //console.log(day)
                                //day = day.length>1 ? day : `0${day}`

                                const month = atividade.dueBy.substring(5, 7)
                                //month = month.length>1 ? month : `0${month}`

                                const year = atividade.dueBy.substring(0, 4)

                                const date = `${day}/${month}/${year}`

                                //console.log(`date: ${date}`)

                                atividade.fixedDate = date
                                atividade.type = tipo

                                return <AtvBox /*materia={atividade.name}*/ mat_obj={materia} atv_obj={atividade} title={atividade.name} tipo={tipo} data={date} excluir className="mb-4" />
                            })}
                            {/*<AtvBox tile="aaaa" tipo="aaa" data="aaa" excluir className="mb-4" />*/}
                        </div>

                        <a className="ver-atividades--excluir mt-1" onClick={() => { setShowExcluir(true) }}>&gt; Excluir matéria</a>
                    </>
                }
                {index === 1 &&
                    <>
                        <VerAtvsInfo />
                    </>
                }

                <ModalAddAtv onSubmit={onSubmit} show={showAdd} onHide={() => { setShowAdd(false) }} onExited={() => { reload() }} />
                <ModalDeleteMateria show={showExcluir} onHide={() => { setShowExcluir(false) }} />

            </div>
        </>
    );
}