import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import AtvBox from "../components/AtvBox";
import PlataformaHeader from "../components/PlataformaHeader";
import SimpleBox from "../components/SimpleBox";
import { useDrag } from "../components/useDrag";

export default function Painel() {

    const [drag, toggleDrag] = useDrag();
    //const [materiasFetched, setMateriasFetched] = useState(false)
    //const [atividadesFetched, setAtividadesFetched] = useState(false)
    //const [emptyAtv, setEmptyAtv] = useState(false)

    var settings = {
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        infinite: false
    };

    const geral = [
        {
            counter: "000",
            title: "Lições de casa concluídas"
        },
        {
            counter: "000",
            title: "Trabalhos concluídos"
        },
        {
            counter: "000",
            title: "Provas concluídas"
        },
        {
            counter: "000",
            title: "Atividades concluídas"
        },
        {
            counter: "000",
            title: "Lições de casa pendentes"
        },
        {
            counter: "000",
            title: "Trabalhos pendentes"
        },
        {
            counter: "000",
            title: "Provas pendentes"
        },
        {
            counter: "000",
            title: "Atividades pendentes"
        },
    ]

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

    useEffect(() => {
        fetchMaterias()
        fetchAtividades()
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
                            <tr>
                                <td>XX: XX</td>
                                <td>Matéria</td>
                                <td>Matéria</td>
                                <td>Matéria</td>
                                <td>Matéria</td>
                                <td>Matéria</td>
                                <td>Matéria</td>
                                <td>Matéria</td>
                            </tr>
                        </tbody>
                    </Table>

                    <Link className="painel--demais-horarios w-100" to="/cronograma">Visualizar demais horários</Link>
                </div>
            </div>

            <div className="section-title d-flex"><span className="bar">|</span><h4>Matérias</h4></div>

            {materias.length === 0
                ?
                <Slider {...settings} className="painel--materias" slidesToShow={3} responsive={[{ breakpoint: 1570, settings: { slidesToShow: 2, } }]}>
                    <Row>
                        <Col>
                            <div className="painel--materia text-center" onClick={() => redirect('http://localhost:3000/materias')}><p>Você não criou nenhuma matéria.</p></div>
                        </Col>
                    </Row>
                </Slider>
                :
                <Slider {...settings} className="painel--materias" slidesToShow={3} responsive={[{ breakpoint: 1570, settings: { slidesToShow: 2, } }]}>
                    {materias.map((materia) => (
                        <Row>
                            <Col>
                                <div className="painel--materia text-center" onClick={() => onClick(materia.uuid)}><p>{materia.name}</p></div>
                            </Col>
                        </Row>
                    ))}
                </Slider>
            }



            <div className="section-title d-flex"><span className="bar">|</span><h4>Atividades recentes</h4></div>

            {atividades.length === 0
                ?
                <Slider {...settings} className="painel--materias" slidesToShow={3} responsive={[{ breakpoint: 1570, settings: { slidesToShow: 2, } }]}>
                    <Row>
                        <Col>
                            <div className="painel--materia text-center" onClick={() => redirect('http://localhost:3000/materias')}><p>Você não criou nenhuma atividade.</p></div>
                        </Col>
                    </Row>
                </Slider>
                :
                <Slider {...settings} className="painel--atvs-recentes" slidesToShow={3} draggable={drag} responsive={[{ breakpoint: 1450, settings: { slidesToShow: 2 } }, { breakpoint: 888, settings: { slidesToShow: 1 } }]}>
                    {atividades.sort((a, b) => {
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
                        return <Row><AtvBox materia={atividade.materia.name} mat_obj={atividade.materia} atv_obj={atividade} title={atividade.name} tipo={atividade.tipo} data={atividade.fixedDate} toggleDrag={toggleDrag} excluir /></Row>
                    })}
                </Slider>
            }

            <div className="section-title d-flex"><span className="bar">|</span><h4>Desempenho geral</h4></div>

            <Slider {...settings} slidesToShow={4}
                responsive={[{ breakpoint: 1350, settings: { slidesToShow: 3 } }, { breakpoint: 820, settings: { slidesToShow: 2 } }, { breakpoint: 600, settings: { slidesToShow: 1 } }]}>
                {geral.map((card) => {
                    return (
                        <Row>
                            <SimpleBox
                                counter={card.counter}
                                title={card.title}
                            />
                        </Row>
                    );
                })}
            </Slider>
        </div>
    )
}