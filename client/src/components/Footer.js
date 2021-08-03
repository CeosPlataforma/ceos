import React, { Component } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from "../assets/logo/svg/LogoVB(SemNome).svg";
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <footer className="footer container-fluid px-0">
                <div className="footer-top">
                    <div className="container container-padding">
                        <div className="row">
                            <div className="col-lg-3">
                                <Link className="navbar-brand" to="/">
                                    <img src={logo} height="55px" alt="Logo - Ceos" />
                                    <span> CEOS </span>
                                </Link>

                                <p className="footer--text mt-3">
                                    <span> Ceos: </span> a plataforma que te auxilia a estruturar de forma melhor suas
                                    atividades escolares e melhor abordar seu desempenho em tais aspectos da vida estudantil.
                                </p>

                                <p className="footer--direitos mt-3">
                                    Todos os direitos reservados © 2021 Ceos
                                </p>
                            </div>

                            <div className="col-lg-4 offset-lg-2 col-md-6">
                                <h3 className="footer--item--title">
                                    Links <br /> gerais
                                </h3>

                                <ul className="footer--navbar navbar-nav">
                                    <li className="nav-item">
                                        <AnchorLink className="nav-link" aria-current="page" href="#por-que-usar">
                                            Por que usar </AnchorLink>
                                    </li>

                                    <li className="nav-item">
                                        <AnchorLink className="nav-link" aria-current="page" href="#visao-geral">
                                            Visão geral </AnchorLink>
                                    </li>

                                    <li className="nav-item">
                                        <AnchorLink className="nav-link" aria-current="page" href="#funcionalidades"> Funcionalidades </AnchorLink>
                                    </li>

                                    <li className="nav-item">
                                        <AnchorLink className="nav-link" aria-current="page" href="#depoimentos">
                                            Depoimentos </AnchorLink>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/contato"> Fale
                                            conosco </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <h3 className="footer--item--title">
                                    Redes <br /> sociais
                                </h3>

                                <ul className="footer--navbar navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/"> Instagram </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/"> Twitter </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/"> Facebook </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/"> YouTube </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;