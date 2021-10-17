import React from "react";
import MateriaContainer from "../components/MateriaContainer";
import SimpleBox from "../components/SimpleBox";
import User from "../components/User";

export default function Desempenho() {

    return (
        <div>
            <div className="container-xxl desempenho content">
                <div className="row align-items-center">
                    <div className="col">
                        <div className="logged--header">
                            <h1 className="title">Desempenho</h1>
                            <User />
                        </div>
                    </div>
                </div>

                <div className="row justify-content-between">
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