import React, { Component } from "react";
import logo from "../assets/logo/svg/LogoVB.svg";
import { Link } from "react-router-dom";

class Interface extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="logo_content">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                </div>
                <ul className="nav_list">
                    <li style={'margin-top: 20px;'}>
                        <a href="#">
                            <i className='bx bx-grid-alt' />
                            <span className="links--name">Painel</span>
                        </a>
                        <span className="tooltip">Painel</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-user' />
                            <span className="links--name">Cronograma</span>
                        </a>
                        <span className="tooltip">Cronograma</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-chat' />
                            <span className="links--name">Matérias</span>
                        </a>
                        <span className="tooltip">Matérias</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-pie-chart-alt-2' />
                            <span className="links--name">Atividades</span>
                        </a>
                        <span className="tooltip">Atividades</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-folder' />
                            <span className="links--name">Desempenho</span>
                        </a>
                        <span className="tooltip">Desempenho</span>
                    </li>
                    <li>
                        <a href="#" className="active">
                            <i className='bx bx-cart-alt' />
                            <span className="links--name">Dados Pessoais</span>
                        </a>
                        <span className="tooltip">Dados Pessoais</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-log-out' id="log_out" />
                            <Link className="links--name" to="/">Sair</Link>
                        </a>
                        <span className="tooltip">Sair</span>
                    </li>
                </ul>
                <i className='bx bx-menu' id="btn" />
            </div>
        );
    }
}

export default Interface;