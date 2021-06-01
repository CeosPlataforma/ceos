import React, { Component } from "react";
import logo from "../assets/logo/svg/LogoVP(SemNome).svg";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-xl navbar--main">
                <div class="container container-padding">
                    <Link class="navbar-brand" to="/">
                        <img src={logo} height="55px" alt="Logo - Ceos" />
                        <span> CEOS </span>
                    </Link>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-main"
                        aria-controls="nav-main" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="nav-main">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/"> Por que
                                    usar </Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/"> Visão
                                    geral </Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/">
                                    Funcionalidades </Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/">
                                    Depoimentos </Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/contato"> Fale conosco
                                </Link>
                            </li>
                        </ul>

                        <Link class="navbar--btn" to="/acessar"> Acessar </Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;