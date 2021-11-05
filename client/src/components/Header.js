import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import logo from "../assets/logo/svg/LogoVP(SemNome).svg";
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-xl navbar--main">
                <div className="container container-padding">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} height="55px" alt="Logo - Ceos" />
                        <span> CEOS </span>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-main"
                        aria-controls="nav-main" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="nav-main"
                    // style={{ paddingBottom: '30px' }}
                    >
                        <ul className="navbar-nav mx-auto">
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
                                <Link className="nav-link" aria-current="page" to="/contato"> Fale conosco </Link>
                            </li>
                        </ul>

                        <Link className="navbar--btn" to="/acessar"> Acessar </Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;