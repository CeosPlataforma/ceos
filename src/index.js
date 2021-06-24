import React from 'react'
import ReactDOM from "react-dom";

// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Sidebar from "./components/Sidebar";

// PAGES
import Home from "./pages/LandingPage";
import Acessar from "./pages/Acessar";
import Cadastrar from "./pages/Cadastrar";
import Contato from "./pages/Contato";
// import DadosPessoais from "./pages/DadosPessoais";
import "./css/main.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
            {/*<Route path="/dados-pessoais">
                <Sidebar />
                <DadosPessoais />
            </Route>*/}
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);