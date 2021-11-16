import React from "react";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <Container fluid className="cta px-0">
            <Container fluid className="container-padding">
                <h2 className="cta--title text-center pb-4">
                    Comece agora mesmo a usar a plataforma Ceos!
                </h2>

                <div className="cta--arrow"></div>

                <div className="d-grid d-md-flex justify-content-center">
                    <Link to={"/acessar"} type="button" className="cta--btn"> Acessar </Link>
                </div>
            </Container>
        </Container>
    )
}
