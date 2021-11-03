import React from "react";
import MateriaContainer from "../components/MateriaContainer";
import SimpleBox from "../components/SimpleBox";
import PlataformaHeader from "../components/PlataformaHeader";

import Container from 'react-bootstrap/Container';

export default function Desempenho() {

    return (
        <>
            <Container fluid={"xxl"} className="desempenho content">
                <PlataformaHeader title="Desempenho" user={false} />

                <div className="desempenho--section">
                    <SimpleBox
                        counter="005"
                        title="Lições de casa concluídas"
                    />


                    <SimpleBox
                        counter="005"
                        title="Trabalhos concluídos"
                    />

                    <SimpleBox
                        counter="005"
                        title="Provas concluídas"
                    />

                    <SimpleBox
                        counter="005"
                        title="Atividades concluídas"
                    />
                </div>

                <div className="desempenho--section">
                    <SimpleBox
                        counter="005"
                        title="Lições de casa pendentes"
                    />

                    <SimpleBox
                        counter="005"
                        title="Trabalhos pendentes"
                    />

                    <SimpleBox
                        counter="005"
                        title="Provas pendentes"
                    />

                    <SimpleBox
                        counter="005"
                        title="Atividades pendentes"
                    />
                </div>

                <div className="materias--holder">
                    <MateriaContainer />
                    <MateriaContainer />
                    <MateriaContainer />
                    <MateriaContainer />
                </div>
            </Container>
        </>
    )
}