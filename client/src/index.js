import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";

// COMPONENTS
import Header from "./components/Header";
import Logout from "./components/Logout";
import MiniFooter from "./components/MiniFooter";
import Sidebar from "./components/Sidebar";
import SidebarMob from './components/SidebarMob';
import "./css/main.css";

// PAGES
import Home from "./pages/LandingPage";
import Painel from "./pages/Painel";
import Materias from "./pages/Materias";
import ResetSenha from "./pages/ResetSenha";
import Acessar from "./pages/Acessar";
import Cadastrar from "./pages/Cadastrar";
import Contato from "./pages/Contato";
import DadosPessoais from "./pages/DadosPessoais";
import Desempenho from "./pages/Desempenho";
import Cronograma from "./pages/Cronograma";
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
                <Sidebar />
                <SidebarMob />
                <Painel />
                <MiniFooter />
            </Route>
            <Route path="/cronograma">
                <Sidebar />
                <SidebarMob />
                <Cronograma />
                <MiniFooter />
            </Route>
            <Route path="/materias">
                <Sidebar />
                <SidebarMob />
                <Materias />
                <MiniFooter />
            </Route>
            <Route path="/materia/idmateria">
                <Sidebar />
                <SidebarMob />
                <VerAtvs />
                <MiniFooter />
            </Route>
            <Route path="/atividades">
                <Sidebar />
                <SidebarMob />
                {//<Atividades />
                }
                <MiniFooter />
            </Route>
            <Route path="/desempenho">
                <Sidebar />
                <SidebarMob />
                <Desempenho />
                <MiniFooter />
            </Route>
            <Route path="/dados-pessoais">
                <Sidebar />
                <SidebarMob />
                <DadosPessoais />
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