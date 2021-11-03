import React from "react";
import { Link } from "react-router-dom";

import User from "../components/User";
import Title from "../components/PainelTitle";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PlataformaHeader({ title, user, retornarmsg, link }) {

    return (
        <Row className="align-items-center">
            <Col>
                <div className="logged--header">
                    <Title title={title} user={user} />
                    {retornarmsg &&
                        <>
                            <Link to={link} className="d-flex align-items-center">
                                <div className="return--arrow" /><p className="mb-0 return--text">{retornarmsg}</p>
                            </Link>
                        </>
                    }
                    <User />
                </div>
            </Col>
        </Row>
    );
}