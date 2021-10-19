import React from "react";
import SimpleBox from "../components/SimpleBox";
import Table from 'react-bootstrap/Table';
import User from "../components/User";
import Title from "../components/PainelTitle";
import { Link } from "react-router-dom";
import AtvBox from "../components/AtvBox";
import Slider from "react-slick";
import MiniFooter from "../components/MiniFooter";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Painel() {

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

    const atvs = [
        {
            title: "Título da atividade",
            materia: "Matéria",
            tipo: "Lição de casa",
            data: "xx/xx/xxxx"
        },
        {
            title: "Título da atividade",
            materia: "Matéria",
            tipo: "Lição de casa",
            data: "xx/xx/xxxx"
        },
        {
            title: "Título da atividade",
            materia: "Matéria",
            tipo: "Lição de casa",
            data: "xx/xx/xxxx"
        },
        {
            title: "Título da atividade",
            materia: "Matéria",
            tipo: "Lição de casa",
            data: "xx/xx/xxxx"
        },
        {
            title: "Título da atividade",
            materia: "Matéria",
            tipo: "Lição de casa",
            data: "xx/xx/xxxx"
        },
    ]

    const materias = [
        {
            title: "Matéria 1"
        },
        {
            title: "Matéria 2"
        },
        {
            title: "Matéria 3"
        },
        {
            title: "Matéria 4"
        }
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

    return (
        <div>
            <div className="container-xxl painel content">
                <div className="row align-items-center">
                    <div className="col">
                        <div className="logged--header">
                            <Title title="Olá, " user="Nome de Usuário" />
                            <User />
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col">
                        <h4>Cronograma</h4>

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

                <h4>Matérias</h4>

                <Slider
                    {...settings}
                    className="painel--materias"
                    slidesToShow={3}
                    slidesToScroll={3}
                    responsive={[
                        {
                            breakpoint: 1570,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                            }
                        }]}>
                    {materias.map((card) => {
                        return (<div>
                            <button className="painel--materia">{card.title}</button>
                        </div>)
                    })}
                </Slider>

                <h4>Atividades recentes</h4>

                <Slider
                    {...settings}
                    className="painel--atvs-recentes"
                    slidesToShow={3}
                    slidesToScroll={3}
                    responsive={[
                        {
                            breakpoint: 1450,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                            }
                        }]}>
                    {atvs.map((card) => {
                        return <AtvBox
                            title={card.title}
                            materia={card.materia}
                            tipo={card.tipo}
                            data={card.data}
                            excluir={false}
                        />
                    })}
                </Slider>

                <h4>Desempenho Geral</h4>

                <Slider
                    {...settings}
                    className="last-element"
                    slidesToShow={4}
                    slidesToScroll={4}
                    responsive={[
                        {
                            breakpoint: 1350,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                            }
                        },
                        {
                            breakpoint: 820,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                            }
                        }
                    ]}>
                    {geral.map((card) => {
                        return <SimpleBox
                            counter={card.counter}
                            title={card.title}
                        />
                    })}
                </Slider>

            </div>

        </div>
    )
}