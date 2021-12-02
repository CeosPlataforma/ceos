import React from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import BlueFooter from "../components/BlueFooter";

export default function Error404() {
    return (
        <>
            <Container className="container-padding error404">
                <Row className="align-items-center justify-content-center text-center">
                    <h1 className="error404--title">4<span className="text-blue">0</span>4</h1>
                    <h2 className="error404--subtitle">Lamentamos o transtorno, a página que você está procurando não foi encontrada ou se encontra indisponível</h2>
                    <h3>Se você acha que há algum problema, contate-nos</h3>
                    <div className="d-flex flex-column align-items-center mt-5">
                        <Link to={"/"} className="btn--primary error404--btn mb-3">Voltar ao website</Link>
                        <Link to={"/contato"} className="btn--secondary error404--btn">Reportar problema</Link>
                    </div>
                </Row>
            </Container>

            <BlueFooter />
        </>
    );
}