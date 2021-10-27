import React from "react";

import User from "../components/User";
import Title from "../components/PainelTitle";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PlataformaHeader({ title, user }) {

    return (
        <Row className="align-items-center">
            <Col>
                <div className="logged--header">
                    <Title title={title} user={user}/>
                    <User />
                </div>
            </Col>
        </Row>
    );
}