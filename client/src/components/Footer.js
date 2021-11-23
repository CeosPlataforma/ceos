import React from "react";
import { HashLink } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import logo from "../assets/logo/svg/LogoVB(SemNome).svg";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer container-fluid px-0">
            <div className="footer-top">
                <Container className="container-padding">
                    <Row>
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
                                    <HashLink className="nav-link" aria-current="page" smooth to="/#por-que-usar"> Por que usar </HashLink>
                                </li>

                                <li className="nav-item">
                                    <HashLink className="nav-link" aria-current="page" smooth to="/#visao-geral"> Visão geral </HashLink>
                                </li>

                                <li className="nav-item">
                                    <HashLink className="nav-link" aria-current="page" smooth to="/#funcionalidades"> Funcionalidades </HashLink>
                                </li>

                                <li className="nav-item">
                                    <HashLink className="nav-link" aria-current="page" smooth to="/#depoimentos"> Depoimentos </HashLink>
                                </li>

                                <li className="nav-item">
                                    <HashLink className="nav-link" aria-current="page" smooth to="/contato"> Fale conosco</HashLink>
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
                                    <a className="nav-link" target="_blank" href="https://twitter.com/CEOS_Plataforma"> Twitter </a>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/"> Facebook </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/"> YouTube </Link>
                                </li>
                            </ul>
                        </div>
                    </Row>
                </Container>
            </div>
        </footer>
    );
}

export default Footer;