import React, { Fragment, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode'
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

    function getCurrentUser() {
        const token = localStorage.getItem('token')
        if (token) return jwtDecode(token)
        return null
    }

    function onLogin(user) {
        setUser(getCurrentUser())
    }

    function onLogOut() {
        localStorage.removeItem('token')
        console.log("alo")
        setUser(null)
    }

    const [theme, toggleTheme] = useDarkMode();
    const [user, setUser] = useState(getCurrentUser())

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
                        <Acessar onLogin={onLogin} />
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
                    user
                        ? <Fragment>
                        <div className={theme === 'dark' ? "d-flex index-div dark-mode" : "d-flex index-div light-mode"}>
                            <Sidebar />
                            <SidebarMob />
                            <Painel />
                        </div>
                        <MiniFooter theme={theme} toggleTheme={toggleTheme} />
                    </Fragment> : <Navigate to="/acessar" />
                } />

                <Route path="/cronograma" element={
                    user
                        ? <Fragment>
                        <div className={theme === 'dark' ? "d-flex index-div dark-mode" : "d-flex index-div light-mode"}>
                            <Sidebar />
                            <SidebarMob />
                            <Cronograma />
                        </div>
                        <MiniFooter theme={theme} toggleTheme={toggleTheme} />
                    </Fragment> : <Fragment><Navigate to="/acessar" /></Fragment>
                } />

                <Route path="/materias" element={
                    user
                        ? <Fragment>
                        <div className={theme === 'dark' ? "d-flex index-div dark-mode" : "d-flex index-div light-mode"}>
                            <Sidebar />
                            <SidebarMob />
                            <Materias />
                        </div>
                        <MiniFooter theme={theme} toggleTheme={toggleTheme} />
                    </Fragment> : <Fragment><Navigate to="/acessar" /></Fragment>
                } />

                <Route path="/materia/:materiaID" element={
                    user
                        ? <Fragment>
                        <div className={theme === 'dark' ? "d-flex index-div dark-mode" : "d-flex index-div light-mode"}>
                            <Sidebar />
                            <SidebarMob />
                            <VerAtvs />
                        </div>
                        <MiniFooter theme={theme} toggleTheme={toggleTheme} />
                    </Fragment> : <Fragment><Navigate to="/acessar" /></Fragment>
                } />

                <Route path="/atividades" element={
                    user
                        ? <Fragment>
                        <div className={theme === 'dark' ? "d-flex index-div dark-mode" : "d-flex index-div light-mode"}>
                            <Sidebar />
                            <SidebarMob />
                            <Atividades />
                        </div>
                        <MiniFooter theme={theme} toggleTheme={toggleTheme} />
                    </Fragment> : <Fragment><Navigate to="/acessar" /></Fragment>
                } />

                <Route path="/desempenho" element={
                    user
                        ? <Fragment>
                            <div className={theme === 'dark' ? "d-flex index-div dark-mode" : "d-flex index-div light-mode"}>
                                <Sidebar />
                                <SidebarMob />
                                <Desempenho />
                            </div>
                            <MiniFooter theme={theme} toggleTheme={toggleTheme} />
                        </Fragment>

                        : <Fragment><Navigate to="/acessar" /></Fragment>
                } />

                <Route path="/dados-pessoais" element={
                    user
                        ? <Fragment>
                        <div className={theme === 'dark' ? "d-flex index-div dark-mode" : "d-flex index-div light-mode"}>
                            <Sidebar />
                            <SidebarMob />
                            <DadosPessoais />
                        </div>
                        <MiniFooter theme={theme} toggleTheme={toggleTheme} />
                    </Fragment> : <Fragment><Navigate to="/acessar" /></Fragment>
                } /> 

                {/* ------------------------------------------- EXTRAS -------------------------------------------- */}

                <Route path="/redefinir-senha/:userID" element={<ResetSenha />} />

                <Route path="/logout" element={<Logout onLogOut={onLogOut} />} />

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