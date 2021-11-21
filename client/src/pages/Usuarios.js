import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import UserBox from '../components/UserBox';

export default function Usuarios() {
    return (
        <>
            <Container fluid={"xxl"} className="dashboard content">
                <h1 className="title mb-5"><span className="underline">Usuários</span></h1>

                <UserBox />
            </Container>
        </>
    );
}