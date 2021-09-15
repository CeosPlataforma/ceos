import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import hero from "../assets/illustrations/hero.svg";
import org from "../assets/illustrations/organizacao.svg";
import desempenho from "../assets/illustrations/desempenho.svg";
import gerenciamento from "../assets/illustrations/gerenciamento.svg";

const stuff = [
    {
        title: 'Organização',
        img: org,
        text1: 'É de conhecimento geral que a organização nos estudos é de suma importância para o sucesso de um estudante em diversos aspectos.',
        text2: 'Nesse sentido, a plataforma permite a categorização de atividades e matérias, de modo a te ajudar efetivamente na organização escolar.',
    },
    {
        title: 'Desempenho',
        img: desempenho,
        text1: 'Ter uma boa visão do desempenho em variados aspectos escolares é relevante para verificar falhas e melhor gerir a performance nos estudos.',
        text2: 'Assim, de modo intuitivo e prático, a plataforma possibilita um melhor gerenciamento das atividades escolares.',
    },
    {
        title: 'Gerenciamento',
        img: gerenciamento,
        text1: 'Administrar as atividades disciplinares de forma produtiva é essencial para garantir o êxito no contexto estudantil.',
        text2: 'Diante disso, na plataforma, o controle do desempenho nas atividades estudantis é caracterizado pela agilidade e eficiência.',
    }
];



function StuffComponent(props) {

    const [index, setIndex] = useState(0)
    
    const [orgButton, setOrgButton] = useState("visao-geral--btn--active")
    const [gerButton, setGerButton] = useState("visao-geral--btn--inactive")
    const [desButton, setDesButton] = useState("visao-geral--btn--inactive")

    return (
        <div className="container container-padding--light visao-geral" id="visao-geral">
            <h2 className="visao-geral--title text-center mb-4">
                Visão geral sobre a plataforma
            </h2>

            <div className="row mb-4 mb-xl-0">
                <div className="col-sm-4 mb-4 mb-md-0">
                    <button className={orgButton} onClick={() => {
                        setIndex(0)
                        setOrgButton("visao-geral--btn--active")
                        setGerButton("visao-geral--btn--inactive")
                        setDesButton("visao-geral--btn--inactive")
                    }}>
                        Organização
                    </button>
                </div>

                <div className="col-sm-4 mb-4 mb-md-0">
                    <button className={gerButton} onClick={() => {
                        setIndex(1)
                        setOrgButton("visao-geral--btn--inactive")
                        setGerButton("visao-geral--btn--active")
                        setDesButton("visao-geral--btn--inactive")
                    }}>
                        Gerenciamento
                    </button>
                </div>

                <div className="col-sm-4">
                    <button className={desButton} onClick={() => {
                        setIndex(2)
                        setOrgButton("visao-geral--btn--inactive")
                        setGerButton("visao-geral--btn--inactive")
                        setDesButton("visao-geral--btn--active")
                    }}>
                        Desempenho
                    </button>
                </div>
            </div>

            <div className="row align-items-center visao-geral--content">
                <div className="col-sm-12 col-xl-7">
                    <h1 className="visao-geral--content--title mb-4" id="visao-geral--title"> {stuff[index].title} </h1>

                    <p className="visao-geral--content--text--1" id="visao-geral--text--1">
                        {stuff[index].text1}
                    </p>
                    <p className="visao-geral--content--text--2" id="visao-geral--text--2">
                        {stuff[index].text2}
                    </p>
                </div>

                <div className="col-sm-12 col-xl-5">
                    <img src={stuff[index].img} className="d-none d-xl-block mx-auto img-fluid visao-geral--content--img" id="visao-geral--img" alt="Imagem de Organização - Ceos" width="700px" height="100%" />
                </div>
            </div>
        </div>
    )
}

export default StuffComponent;