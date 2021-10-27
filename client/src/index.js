import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";

import "./css/main.css";

// COMPONENTS
import Header from "./components/Header";
import Logout from "./components/Logout";
import MiniFooter from "./components/MiniFooter";
import Sidebar from "./components/Sidebar";
import SidebarMob from './components/SidebarMob';

// PAGES
import Home from "./pages/LandingPage";
import Contato from "./pages/Contato";

import ResetSenha from "./pages/ResetSenha";
import Acessar from "./pages/Acessar";
import Cadastrar from "./pages/Cadastrar";

import Painel from "./pages/Painel";
import Cronograma from "./pages/Cronograma";
import Materias from "./pages/Materias";
import Atividades from "./pages/Atividades";
import Desempenho from "./pages/Desempenho";
import DadosPessoais from "./pages/DadosPessoais";

import VerAtvs from "./pages/VerAtvs";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Header />
                <Home />
                <Footer />
            </Route>
            <Route path="/cadastrar">
                <Header />
                <Cadastrar />
                <Footer />
            </Route>
            <Route path="/acessar">
                <Header />
                <Acessar />
                <Footer />
            </Route>
            <Route path="/contato">
                <Header />
                <Contato />
                <Footer />
            </Route>

            <Route path="/painel">
                <div className="d-flex index-div">
                    <Sidebar />
                    <SidebarMob />
                    <Painel />
                </div>
                <MiniFooter />
            </Route>
            <Route path="/cronograma">
                <div className="d-flex index-div">
                    <Sidebar />
                    <SidebarMob />
                    <Cronograma />
                </div>
                <MiniFooter />
            </Route>
            <Route path="/materias">
                <div className="d-flex index-div">
                    <Sidebar />
                    <SidebarMob />
                    <Materias />
                </div>
                <MiniFooter />
            </Route>
            <Route path="/materia/idmateria">
                <div className="d-flex index-div">
                    <Sidebar />
                    <SidebarMob />
                    <VerAtvs />
                </div>
                <MiniFooter />
            </Route>
            <Route path="/atividades">
                <div className="d-flex index-div">
                    <Sidebar />
                    <SidebarMob />
                    <Atividades />
                </div>
                <MiniFooter />
            </Route>
            <Route path="/desempenho">
                <div className="d-flex index-div">
                    <Sidebar />
                    <SidebarMob />
                    <Desempenho />
                </div>
                <MiniFooter />
            </Route>
            <Route path="/dados-pessoais">
                <div className="d-flex index-div">
                    <Sidebar />
                    <SidebarMob />
                    <DadosPessoais />
                </div>
                <MiniFooter />
            </Route>
            <Route path="/redefinir-senha/:userID">
                <ResetSenha />
            </Route>
            <Route path="/logout">
                <Logout />
            </Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);