import axios from "axios";
import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import PlataformaHeader from "../components/PlataformaHeader";
import AtvBox from "../components/AtvBox";
import Button from "@restart/ui/esm/Button";
export default function Atividades() {

    const [atvTipo, setAtvTipo] = useState("all")
    const [atividades, setAtividades] = useState([])
    const [atvButton, setAtvButton] = useState("atividades--btn atividades--btn--active")
    const [casaButton, setCasaButton] = useState("atividades--btn atividades--btn--inactive")
    const [trabButton, setTrabButton] = useState("atividades--btn atividades--btn--inactive")
    const [provButton, setProvButton] = useState("atividades--btn atividades--btn--inactive")
    const [lixoButton, setLixoButton] = useState("atividades--btn atividades--btn--inactive")

    const fetchAtividades = async () => {
        axios.get('http://localhost:3333/get-atividades')
            .then((response) => {
                setAtividades(response.data)
            }).catch((error) => {
                console.log("erro no fetch das atividades", error)
            })
    }

    const atvFiltro = (atividade) => {
        if (atvTipo === "all") {
            return true
        } else if (atvTipo === "casa" && atividade.atv_type === "licao-de-casa") {
            return true
        } else if (atvTipo === "trabalho" && atividade.atv_type === "trabalho") {
            return true
        } else if (atvTipo === "prova" && atividade.atv_type === "prova") {
            return true
        } else {
            return false
        }
    }

    useEffect(() => {
        fetchAtividades()
    }, [])

    function redirect(url) {
        window.location = url;
    }


    return (
        <>
            <div className="container-xxl atividades content">

                <PlataformaHeader title="Atividades" user={false} />

                <div className="row d-flex justify-content-between row-atividades">

                    <Button
                        className={atvButton}
                        onClick={() => {
                            setAtvButton("atividades--btn atividades--btn--active")
                            setCasaButton("atividades--btn atividades--btn--inactive")
                            setTrabButton("atividades--btn atividades--btn--inactive")
                            setProvButton("atividades--btn atividades--btn--inactive")
                            setLixoButton("atividades--btn atividades--btn--inactive")
                            setAtvTipo("all")
                        }}>
                        Todas atividades
                    </Button>

                    <Button
                        className={casaButton}
                        onClick={() => {
                            setAtvButton("atividades--btn atividades--btn--inactive")
                            setCasaButton("atividades--btn atividades--btn--active")
                            setTrabButton("atividades--btn atividades--btn--inactive")
                            setProvButton("atividades--btn atividades--btn--inactive")
                            setLixoButton("atividades--btn atividades--btn--inactive")
                            setAtvTipo("casa")
                        }}>
                        Lição de casa
                    </Button>

                    <Button
                        className={trabButton}
                        onClick={() => {
                            setAtvButton("atividades--btn atividades--btn--inactive")
                            setCasaButton("atividades--btn atividades--btn--inactive")
                            setTrabButton("atividades--btn atividades--btn--active")
                            setProvButton("atividades--btn atividades--btn--inactive")
                            setLixoButton("atividades--btn atividades--btn--inactive")
                            setAtvTipo("trabalho")
                        }}>
                        Trabalho
                    </Button>

                    <Button
                        className={provButton}
                        onClick={() => {
                            setAtvButton("atividades--btn atividades--btn--inactive")
                            setCasaButton("atividades--btn atividades--btn--inactive")
                            setTrabButton("atividades--btn atividades--btn--inactive")
                            setProvButton("atividades--btn atividades--btn--active")
                            setLixoButton("atividades--btn atividades--btn--inactive")
                            setAtvTipo("prova")
                        }}>
                        Prova
                    </Button>

                    <Button
                        className={lixoButton}
                        onClick={() => {
                            setAtvButton("atividades--btn atividades--btn--inactive")
                            setCasaButton("atividades--btn atividades--btn--inactive")
                            setTrabButton("atividades--btn atividades--btn--inactive")
                            setProvButton("atividades--btn atividades--btn--inactive")
                            setLixoButton("atividades--btn atividades--btn--active")
                            setAtvTipo("lixeira")
                        }}>
                        Lixeira
                    </Button>

                </div>

                <div className="dropdown">
                    <button className="btn dropdown-toggle atividades--classificar-por" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Classificar por:
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item">Data (mais próxima)</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item">Data (mais distante)</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item">Matéria (crescente)</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item">Matéria (decrescente)</a></li>
                    </ul>
                </div>
                <Row sm={1} md={2} xxl={3} className="mb-2">
                    {atividades.length === 0
                        ?
                        <div className="painel--materia text-center" onClick={() => redirect('http://localhost:3000/materias')}><p>Você não criou nenhuma atividade.</p></div>
                        :
                        <React.Fragment>
                            {atividades.filter((atividade) => atvFiltro(atividade)).map((atividade) => {

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
                                }




                                let day = atividade.dueBy.substring(8, 10)
                                let month = atividade.dueBy.substring(5, 7)
                                let year = atividade.dueBy.substring(0, 4)
                                let date = `${day}/${month}/${year}`
                                atividade.fixedDate = date
                                //console.log("map", atividade.tipo)
                                return <AtvBox materia={atividade.materia.name} mat_obj={atividade.materia} atv_obj={atividade} title={atividade.name} tipo={atividade.tipo} data={atividade.fixedDate} excluir className="mb-5" />
                            })}
                        </React.Fragment>

                    }
                </Row>
            </div>
        </>
    )
}