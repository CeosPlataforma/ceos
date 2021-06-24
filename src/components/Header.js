import React, { Component } from "react";
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from "../assets/logo/svg/LogoVP(SemNome).svg";
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
                                <AnchorLink class="nav-link" aria-current="page" href="#por-que-usar"> Por que
                                    usar </AnchorLink>
                            </li>

                            <li class="nav-item">
                                <AnchorLink class="nav-link" aria-current="page" href="#visao-geral"> Visão
                                    geral </AnchorLink>
                            </li>

                            <li class="nav-item">
                                <AnchorLink class="nav-link" aria-current="page" href="#funcionalidades">
                                    Funcionalidades </AnchorLink>
                            </li>

                            <li class="nav-item">
                                <AnchorLink class="nav-link" aria-current="page" href="#depoimentos">
                                    Depoimentos </AnchorLink>
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