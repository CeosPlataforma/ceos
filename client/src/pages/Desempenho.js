import React from "react";
import MateriaContainer from "../components/MateriaContainer";
import SimpleBox from "../components/SimpleBox";
import User from "../components/User";
import Title from "../components/PainelTitle";

export default function Desempenho() {

    return (
        <div>
            <div className="container-xxl desempenho content">
                <div className="row align-items-center">
                    <div className="col">
                        <div className="logged--header">
                            <Title title="Desempenho" />
                            <User />
                        </div>
                    </div>
                </div>

                <div className="row justify-content-between">
                    <div className="col-2">
                        <SimpleBox
                            counter="005"
                            title="Lições de casa concluídas"
                        />
                    </div>
                    <div className="col-2">
                        <SimpleBox
                            counter="005"
                            title="Trabalhos concluídos"
                        />
                    </div>
                    <div className="col-2">
                        <SimpleBox
                            counter="005"
                            title="Provas concluídas"
                        />
                    </div>
                    <div className="col-2">
                        <SimpleBox
                            counter="005"
                            title="Atividades concluídas"
                        />
                    </div>
                </div>
                <br />
                <div className="row justify-content-between">
                    <div className="col-2">
                        <SimpleBox
                            counter="005"
                            title="Lições de casa pendentes"
                        />
                    </div>
                    <div className="col-2">
                        <SimpleBox
                            counter="005"
                            title="Trabalhos pendentes"
                        />
                    </div>
                    <div className="col-2">
                        <SimpleBox
                            counter="005"
                            title="Provas pendentes"
                        />
                    </div>
                    <div className="col-2">
                        <SimpleBox
                            counter="005"
                            title="Atividades pendentes"
                        />

                    </div>
                </div>

                <br />
                <div class="materias--holder last-element">
                    <MateriaContainer />
                    <MateriaContainer />
                    <MateriaContainer />
                    <MateriaContainer />
                </div>
            </div>
        </div>
    )
}