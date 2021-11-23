import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import MsgBox from "../components/MsgBox";

export default function Mensagens() {
    return (
        <>
            <Container fluid={"xxl"} className="dashboard content">
                <h1 className="title mb-5"><span className="underline">Mensagens</span></h1>

                <MsgBox />
            </Container>
        </>
    );
}