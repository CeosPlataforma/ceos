import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Slider from "react-slick";

import AtvBox from "../components/AtvBox";
import PlataformaHeader from "../components/PlataformaHeader";
import SimpleBox from "../components/SimpleBox";
import { useDrag } from "../components/useDrag";

export default function Painel() {

    const [drag, toggleDrag] = useDrag();
    /*//const [materiasFetched, setMateriasFetched] = useState(false)
    //const [atividadesFetched, setAtividadesFetched] = useState(false)
    //const [emptyAtv, setEmptyAtv] = useState(false)

    // const settingsDefault = {
    //     nextArrow: <NextArrow />,
    //     prevArrow: <PrevArrow />,
    //     slidesToScroll: 1,
    //     infinite: false,
    // };

    // const settingsEmpty = {
    //     slidesToShow: 1,
    // };

    // const settingsMaterias = {
    //     slidesToShow: 3,
    //     responsive: [{
    //         breakpoint: 1570,
    //         settings: {
    //             slidesToShow: 2,
    //         }
    //     }]
    // };

    // const settingsAtvs = {
    //     // draggable: { drag },
    //     slidesToShow: 3,
    //     responsive: [{
    //         breakpoint: 1450,
    //         settings: {
    //             slidesToShow: 2,
    //         }
    //     },
    //     {
    //         breakpoint: 888,
    //         settings: {
    //             slidesToShow: 1,
    //         }
    //     }]
    // };

    // const settingsDesempenho = {
    //     slidesToShow: 4,
    //     responsive: [{
    //         breakpoint: 1350,
    //         settings: {
    //             slidesToShow: 3,
    //         }
    //     },
    //     {
    //         breakpoint: 820,
    //         settings: {
    //             slidesToShow: 2,
    //         }
    //     },
    //     {
    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 1,
    //         }
    //     }]
    // };*/


    const [cronograma, setCronograma] = useState([])

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style }}
                onClick={onClick}
            />
        );
    }

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style }}
                onClick={onClick}
            />
        );
    }

    axios.defaults.withCredentials = true

    const [materias, setMaterias] = useState([]);
    const [atividades, setAtividades] = useState([]);

    function onClick(materiaID) {
        window.location = `http://localhost:3000/materia/${materiaID}`
    }

    function redirect(url) {
        window.location = url;
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

    const fetchCronograma = async () => {
        axios.get("http://localhost:3333/cronograma")
            .then((response) => {
                console.log(response.data)
                if (!response.data.message) {
                    setCronograma(response.data)
                } else if (response.data.message === "erro") {
                    console.error("erro", response.data.error)
                } else if (response.data.message === "inexistent") {
                    console.error("não achou")
                }
            }).catch((error) => { console.log(error) })
    }


    const fetchAtividades = async () => {
        axios.get('http://localhost:3333/get-atividades')
            .then((response) => {
                if (!response.data.message) {
                    console.log(response.data)
                    setAtividades(response.data)
                }
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
        if (conc) {
            if (all) {
                return atividades.filter((atividade) => !atividade.trashed && atividade.concluida ? true : false).length.toLocaleString('en-US', { minimumIntegerDigits: 3, useGrouping: false })
            } else {
                return atividades.filter((atividade) => (atividade.atv_type === tipo && !atividade.trashed) && atividade.concluida ? true : false).length.toLocaleString('en-US', { minimumIntegerDigits: 3, useGrouping: false })
            }
        } else {
            if (all) {
                return atividades.filter((atividade) => !atividade.trashed && !atividade.concluida ? true : false).length.toLocaleString('en-US', { minimumIntegerDigits: 3, useGrouping: false })
            } else {
                return atividades.filter((atividade) => (atividade.atv_type === tipo && !atividade.trashed) && !atividade.concluida ? true : false).length.toLocaleString('en-US', { minimumIntegerDigits: 3, useGrouping: false })
            }
        }
    }

    useEffect(() => {
        fetchMaterias()
        fetchAtividades()
        fetchCronograma()
    }, [])

    return (
        <div className="container-xxl painel content">

            <PlataformaHeader title="Olá, " user={true} />

            <div className="row align-items-center">
                <div className="col">
                    <h4 style={{ marginTop: '10px', marginBottom: '25px' }}>Cronograma</h4>

                    <Table striped bordered hover responsive /*tirar responsive se quiser tirar scroll da tabela*/ >
                        <thead>
                            <tr>
                                <th>Horário</th>
                                <th>Segunda</th>
                                <th>Terça</th>
                                <th>Quarta</th>
                                <th>Quinta</th>
                                <th>Sexta</th>
                                <th>Sabádo</th>
                                <th>Domingo</th>
                            </tr>
                        </thead>

                        <tbody>
                            {cronograma.filter(function (linha) {
                                if (this.count < 3) {
                                    this.count++;
                                    return true
                                }
                            }, { count: 0 }).map((linha) => {
                                console.log(linha)
                                return <tr>
                                    <td>{linha.hora}</td>
                                    <td>{linha.seg}</td>
                                    <td>{linha.ter}</td>
                                    <td>{linha.qua}</td>
                                    <td>{linha.qui}</td>
                                    <td>{linha.sex}</td>
                                    <td>{linha.sab}</td>
                                    <td>{linha.dom}</td>
                                </tr>
                            })}
                        </tbody>
                    </Table>

                    <Link className="painel--demais-horarios w-100" to="/cronograma">Visualizar demais horários</Link>
                </div>
            </div>

            <div className="section-title d-flex"><span className="bar">|</span><h4>Matérias</h4></div>

            {/* {materias.length === 0
                ?
                <Slider
                    nextArrow={<NextArrow />}
                    prevArrow={<PrevArrow />}
                    slidesToScroll={1}
                    infinite={false}
                    slidesToShow={1}
                >

                    <Row>
                        <Col>
                            <div className="painel--materia text-center" onClick={() => redirect('http://localhost:3000/materias')}>
                                <p>Você não criou nenhuma matéria.</p>
                            </div>
                        </Col>
                    </Row>
                </Slider>
                : */}
            <Slider
                nextArrow={<NextArrow />}
                prevArrow={<PrevArrow />}
                slidesToScroll={1}
                infinite={false}
                slidesToShow={materias.length === 0
                    ? 1 : 3}
                responsive={
                    // materias.length === 0
                    //     ? [{}] :
                    [{
                        breakpoint: 1350,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 820,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]}
            >

                {materias.length === 0
                    ?
                    <Row>
                        <Col>
                            <div className="painel--materia text-center w-100" onClick={() => redirect('http://localhost:3000/materias')}>
                                <p>Você não criou nenhuma matéria.</p>
                            </div>
                        </Col>
                    </Row>
                    :
                    materias.map((materia) => (
                        <Row>
                            <Col>
                                <div className="painel--materia text-center" onClick={() => onClick(materia.uuid)}>
                                    <p>{materia.name}</p>
                                </div>
                            </Col>
                        </Row>
                    ))
                }
            </Slider>
            {/* } */}

            <div className="section-title d-flex" style={{ 'marginTop': '60px' }}><span className="bar">|</span><h4>Atividades recentes</h4></div>

            {/* {atividades.filter((atividade) => atividade.trashed || atividade.concluida ? false : true).length === 0
                ?
                <Slider
                    nextArrow={<NextArrow />}
                    prevArrow={<PrevArrow />}
                    slidesToScroll={1}
                    infinite={false}
                    slidesToShow={1}
                >

                    <Row>
                        <Col>
                            <div className="painel--materia text-center" onClick={() => redirect('http://localhost:3000/materias')}>
                                <p>Não há nenhuma atividade pendente.</p>
                            </div>
                        </Col>
                    </Row>
                </Slider>
                : */}
            <Slider
                nextArrow={<NextArrow />}
                prevArrow={<PrevArrow />}
                slidesToScroll={1}
                infinite={false}
                draggable={drag}
                slidesToShow={atividades.filter((atividade) => atividade.trashed || atividade.concluida ? false : true).length === 0
                    ? 1 : 3}
                responsive={
                    // atividades.filter((atividade) => atividade.trashed || atividade.concluida ? false : true).length === 0
                    //     ? [{}] :
                    [{
                        breakpoint: 1350,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 900,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]}
            >
                {atividades.filter((atividade) => atividade.trashed || atividade.concluida ? false : true).length === 0
                    ? <Row>
                        <Col>
                            <div className="painel--materia text-center" onClick={() => redirect('http://localhost:3000/materias')}>
                                <p>Não há nenhuma atividade pendente.</p>
                            </div>
                        </Col>
                    </Row>
                    :
                    atividades.filter((atividade) => atividade.trashed || atividade.concluida ? false : true)
                        .sort((a, b) => {
                            const a_date = new Date(a.dueBy)
                            const b_date = new Date(b.dueBy)
                            return a_date - b_date
                        }).map((atividade) => {
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
                            return (
                                <Row>
                                    <AtvBox
                                        materia={atividade.materia.name}
                                        mat_obj={atividade.materia}
                                        atv_obj={atividade}
                                        title={atividade.name}
                                        tipo={atividade.tipo}
                                        data={atividade.fixedDate}
                                        toggleDrag={toggleDrag}
                                        excluir />
                                </Row>
                            )
                        })
                }
            </Slider>
            {/* } */}

            <div className="section-title d-flex" style={{ 'marginTop': '60px' }}><span className="bar">|</span><h4>Desempenho geral</h4></div>

            <Slider
                nextArrow={<NextArrow />}
                prevArrow={<PrevArrow />}
                slidesToScroll={1}
                infinite={false}
                slidesToShow={4}
                responsive={[{
                    breakpoint: 1350,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 820,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]}
            >

                <Row>
                    <SimpleBox
                        counter={getAtvCount("licao-de-casa", true)}
                        title="Lições de casa concluídas"
                    />
                </Row>
                <Row>
                    <SimpleBox
                        counter={getAtvCount("trabalho", true)}
                        title="Trabalhos concluídos"
                    />
                </Row>
                <Row>
                    <SimpleBox
                        counter={getAtvCount("prova", true)}
                        title="Provas concluídas"
                    />
                </Row>
                <Row>
                    <SimpleBox
                        counter={getAtvCount("prova", true, true)}
                        title="Atividades concluídas"
                    />
                </Row>
                <Row>
                    <SimpleBox
                        counter={getAtvCount("licao-de-casa", false)}
                        title="Lições de casa pendentes"
                    />
                </Row>
                <Row>
                    <SimpleBox
                        counter={getAtvCount("trabalho", false)}
                        title="Trabalhos pendentes"
                    />
                </Row>
                <Row>
                    <SimpleBox
                        counter={getAtvCount("prova", false)}
                        title="Provas pendentes"
                    />
                </Row>
                <Row>
                    <SimpleBox
                        counter={getAtvCount("prova", false, true)}
                        title="Atividades pendentes"
                    />
                </Row>
            </Slider>
        </div >
    )
}