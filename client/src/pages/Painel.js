import React from "react";
import MateriaContainer from "../components/MateriaContainer";
import SimpleBox from "../components/SimpleBox";
import Table from 'react-bootstrap/Table';
import User from "../components/User";
import { Link } from "react-router-dom";
import AtvBox from "../components/AtvBox";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Painel() {

    const renderSlides = () =>
        [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
            <div>
                <SimpleBox
                    boxcounter={num}
                    boxtitle="Lições de casa concluídas"
                />
            </div>
        ));

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
                            <h1 className="title">Olá, Nome do usuário!</h1>
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

                <div className="painel--materias-holder w-100">
                    <button className="painel--materia">Matéria</button>
                    <button className="painel--materia">Matéria</button>
                    <button className="painel--materia">Matéria</button>
                </div>

                <h4>Atividades recentes</h4>

                <div class="atividades--holder">
                    <AtvBox
                        title="Título da atividade"
                        materia="Matéria"
                        tipo="Trabalho"
                        data="xx/xx/xxxx"
                        excluir={false}
                    />
                    <AtvBox
                        title="Título da atividade"
                        materia="Matéria"
                        tipo="Trabalho"
                        data="xx/xx/xxxx"
                        excluir={false}
                    />
                    <AtvBox
                        title="Título da atividade"
                        materia="Matéria"
                        tipo="Trabalho"
                        data="xx/xx/xxxx"
                        excluir={false}
                    />
                </div>

                <h4>Desempenho Geral</h4>

                {/*<div class="container-fluid">
                    <div className="row justify-content-between last-element">
                        <div className="col-2">
                            <SimpleBox
                                boxcounter="005"
                                boxtitle="Lições de casa concluídas"
                            />
                        </div>
                        <div className="col-2">
                            <SimpleBox
                                boxcounter="005"
                                boxtitle="Trabalhos concluídos"
                            />
                        </div>
                        <div className="col-2">
                            <SimpleBox
                                boxcounter="005"
                                boxtitle="Provas concluídas"
                            />
                        </div>
                        <div className="col-2">
                            <SimpleBox
                                boxcounter="005"
                                boxtitle="Atividades concluídas"
                            />
                        </div>
                    </div>
                </div>
                <br />
                <div className="row justify-content-between">
                    <div className="col-2">
                        <SimpleBox
                            boxcounter="005"
                            boxtitle="Lições de casa pendentes"
                        />
                    </div>
                    <div className="col-2">
                        <SimpleBox
                            boxcounter="005"
                            boxtitle="Trabalhos pendentes"
                        />
                    </div>
                    <div className="col-2">
                        <SimpleBox
                            boxcounter="005"
                            boxtitle="Provas pendentes"
                        />
                    </div>
                    <div className="col-2">
                        <SimpleBox
                            boxcounter="005"
                            boxtitle="Atividades pendentes"
                        />
                    </div>
                </div>*/}

                <Slider
                    className="last-element"
                    nextArrow={<NextArrow />}
                    prevArrow={<PrevArrow />}
                    slidesToShow={4}
                    slidesToScroll={4}
                    infinite={false}>
                    {renderSlides()}
                </Slider>

            </div>
        </div>
    )
}