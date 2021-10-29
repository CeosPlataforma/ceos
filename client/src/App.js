import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./css/main.css";

// COMPONENTS
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SidebarMob from './components/SidebarMob';
import Footer from "./components/Footer";
import MiniFooter from "./components/MiniFooter";

import { useDarkMode } from "./components/useDarkMode";
import { Toggle } from './components/Toggle';


import Logout from "./components/Logout";

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

function App() {

    const [theme, toggleTheme] = useDarkMode();

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <div className={theme === 'dark' ? "dark-mode" : "light-mode"}>
                        <Header />
                        <Home />
                    </div>
                    <Footer theme={theme} toggleTheme={toggleTheme} />
                </Route>
                <Route path="/cadastrar">
                    <div className={theme === 'dark' ? "dark-mode" : "light-mode"}>
                        <Header />
                        <Cadastrar />
                    </div>
                    <Footer theme={theme} toggleTheme={toggleTheme} />
                </Route>
                <Route path="/acessar">
                    <div className={theme === 'dark' ? "dark-mode" : "light-mode"}>
                        <Header />
                        <Acessar />
                    </div>
                    <Footer theme={theme} toggleTheme={toggleTheme} />
                </Route>
                <Route path="/contato">
                    <div className={theme === 'dark' ? "dark-mode" : "light-mode"}>
                        <Header />
                        <Contato />
                    </div>
                    <Footer theme={theme} toggleTheme={toggleTheme} />
                </Route>

                <Route path="/painel">
                    <div className={theme === 'dark' ? "d-flex index-div dark-mode" : "d-flex index-div light-mode"}>
                        <Sidebar />
                        <SidebarMob />
                        <Painel />
                    </div>
                    <MiniFooter theme={theme} toggleTheme={toggleTheme} />
                </Route>
                <Route path="/cronograma">
                    <div className={theme === 'dark' ? "d-flex index-div dark-mode" : "d-flex index-div light-mode"}>
                        <Sidebar />
                        <SidebarMob />
                        <Cronograma />
                    </div>
                    <MiniFooter theme={theme} toggleTheme={toggleTheme} />
                </Route>
                <Route path="/materias">
                    <div className={theme === 'dark' ? "d-flex index-div dark-mode" : "d-flex index-div light-mode"}>
                        <Sidebar />
                        <SidebarMob />
                        <Materias />
                    </div>
                    <MiniFooter theme={theme} toggleTheme={toggleTheme} />
                </Route>
                <Route path="/materia/idmateria">
                    <div className={theme === 'dark' ? "d-flex index-div dark-mode" : "d-flex index-div light-mode"}>
                        <Sidebar />
                        <SidebarMob />
                        <VerAtvs />
                    </div>
                    <MiniFooter theme={theme} toggleTheme={toggleTheme} />
                </Route>
                <Route path="/atividades">
                    <div className={theme === 'dark' ? "d-flex index-div dark-mode" : "d-flex index-div light-mode"}>
                        <Sidebar />
                        <SidebarMob />
                        <Atividades />
                    </div>
                    <MiniFooter theme={theme} toggleTheme={toggleTheme} />
                </Route>
                <Route path="/desempenho">
                    <div className={theme === 'dark' ? "d-flex index-div dark-mode" : "d-flex index-div light-mode"}>
                        <Sidebar />
                        <SidebarMob />
                        <Desempenho />
                    </div>
                    <MiniFooter theme={theme} toggleTheme={toggleTheme} />
                </Route>
                <Route path="/dados-pessoais">
                    <div className={theme === 'dark' ? "d-flex index-div dark-mode" : "d-flex index-div light-mode"}>
                        <Sidebar />
                        <SidebarMob />
                        <DadosPessoais />
                    </div>
                    <MiniFooter theme={theme} toggleTheme={toggleTheme} />
                </Route>
                <Route path="/redefinir-senha/:userID">
                    <ResetSenha />
                </Route>
                <Route path="/logout">
                    <Logout />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;