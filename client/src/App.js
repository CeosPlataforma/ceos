import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import "./css/main.css";

// COMPONENTS
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SidebarMob from './components/SidebarMob';
import MenuAdmin from './components/MenuAdmin';
import Footer from "./components/Footer";
import MiniFooter from "./components/MiniFooter";

import { useDarkMode } from "./components/useDarkMode";

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

import Thanks from "./pages/Thanks";
import Termos from "./pages/Termos";
import Error404 from "./pages/Error404";

// import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import Usuarios from "./pages/Usuarios";
import Mensagens from "./pages/Mensagens";
import Tickets from "./pages/Tickets";

function App() {

    const [theme, toggleTheme] = useDarkMode();

    return (
        <BrowserRouter>
            <Routes>

                {/* ------------------------------------------- WEBSITE ------------------------------------------- */}

                <Route exact path="/" element={
                    <Fragment>
                        <Header />
                        <Home />
                        <Footer />
                    </Fragment>
                } />
                <Route path="/cadastrar" element={
                    <Fragment>
                        <Header />
                        <Cadastrar />
                        <Footer />
                    </Fragment>
                } />
                <Route path="/acessar" element={
                    <Fragment>
                        <Header />
                        <Acessar />
                        <Footer />
                    </Fragment>
                } />
                <Route path="/contato" element={
                    <Fragment>
                        <Header />
                        <Contato />
                        <Footer />
                    </Fragment>
                } />
                <Route path="/desativado" element={
                    <Fragment>
                        <Header />
                        <Thanks />
                        <Footer />
                    </Fragment>
                } />
                <Route path="/termos" element={
                    <Fragment>
                        <Header />
                        <Termos />
                        <Footer />
                    </Fragment>
                } />

                {/* ---------------------------------------- PLATAFORMA ------------------------------------------- */}

                <Route path="/painel" element={
                    <Fragment>
                        <div className={theme === 'dark' ? "d-flex index-div dark-mode" : "d-flex index-div light-mode"}>
                            <Sidebar />
                            <SidebarMob />
                            <Painel />
                        </div>
                        <MiniFooter theme={theme} toggleTheme={toggleTheme} />
                    </Fragment>
                } />

                <Route path="/cronograma" element={
                    <Fragment>
                        <div className={theme === 'dark' ? "d-flex index-div dark-mode" : "d-flex index-div light-mode"}>
                            <Sidebar />
                            <SidebarMob />
                            <Cronograma />
                        </div>
                        <MiniFooter theme={theme} toggleTheme={toggleTheme} />
                    </Fragment>
                } />

                <Route path="/materias" element={
                    <Fragment>
                        <div className={theme === 'dark' ? "d-flex index-div dark-mode" : "d-flex index-div light-mode"}>
                            <Sidebar />
                            <SidebarMob />
                            <Materias />
                        </div>
                        <MiniFooter theme={theme} toggleTheme={toggleTheme} />
                    </Fragment>
                } />

                <Route path="/materia/:materiaID" element={
                    <Fragment>
                        <div className={theme === 'dark' ? "d-flex index-div dark-mode" : "d-flex index-div light-mode"}>
                            <Sidebar />
                            <SidebarMob />
                            <VerAtvs />
                        </div>
                        <MiniFooter theme={theme} toggleTheme={toggleTheme} />
                    </Fragment>
                } />

                <Route path="/atividades" element={
                    <Fragment>
                        <div className={theme === 'dark' ? "d-flex index-div dark-mode" : "d-flex index-div light-mode"}>
                            <Sidebar />
                            <SidebarMob />
                            <Atividades />
                        </div>
                        <MiniFooter theme={theme} toggleTheme={toggleTheme} />
                    </Fragment>
                } />

                <Route path="/desempenho" element={
                    <Fragment>
                        <div className={theme === 'dark' ? "d-flex index-div dark-mode" : "d-flex index-div light-mode"}>
                            <Sidebar />
                            <SidebarMob />
                            <Desempenho />
                        </div>
                        <MiniFooter theme={theme} toggleTheme={toggleTheme} />
                    </Fragment>
                } />

                <Route path="/dados-pessoais" element={
                    <Fragment>
                        <div className={theme === 'dark' ? "d-flex index-div dark-mode" : "d-flex index-div light-mode"}>
                            <Sidebar />
                            <SidebarMob />
                            <DadosPessoais />
                        </div>
                        <MiniFooter theme={theme} toggleTheme={toggleTheme} />
                    </Fragment>
                } />

                {/* ------------------------------------------- EXTRAS -------------------------------------------- */}

                <Route path="/redefinir-senha/:userID" element={<ResetSenha />} />

                <Route path="/logout" element={<Logout />} />

                <Route path="*" element={
                    <Fragment>
                        <Header />
                        <Error404 />
                        <Footer />
                    </Fragment>
                } />

                {/* <Route path="/adminlogin" element={<AdminLogin />} /> */}

                <Route exact path="/dashboard" element={
                    <Fragment>
                        <div className="d-flex index-div">
                            <MenuAdmin />
                            <Dashboard />
                        </div>
                    </Fragment>
                } />
                <Route path="/dashboard/usuarios" element={
                    <Fragment>
                        <div className="d-flex index-div">
                            <MenuAdmin />
                            <Usuarios />
                        </div>
                    </Fragment>
                } />
                <Route path="/dashboard/mensagens" element={
                    <Fragment>
                        <div className="d-flex index-div">
                            <MenuAdmin />
                            <Mensagens />
                        </div>
                    </Fragment>
                } />
                <Route path="/dashboard/tickets" element={
                    <Fragment>
                        <div className="d-flex index-div">
                            <MenuAdmin />
                            <Tickets />
                        </div>
                    </Fragment>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default App;