import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import TicketBox from "../components/TicketBox";

export default function Tickets() {
    return (
        <>
            <Container fluid={"xxl"} className="dashboard content">
                <h1 className="title mb-5"><span className="underline">Tickets</span></h1>

                <TicketBox />
            </Container>
        </>
    );
}