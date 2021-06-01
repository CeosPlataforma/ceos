import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Acessar from "./pages/Acessar";
import Cadastrar from "./pages/Cadastrar";
import Contato from "./pages/Contato";
import "./css/main.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/cadastrar" component={Cadastrar} />,
            <Route exact path="/acessar" component={Acessar} />,
            <Route exact path="/contato" component={Contato} />,
        </Switch>
        <Footer />
    </BrowserRouter>,
    document.getElementById("root")
);