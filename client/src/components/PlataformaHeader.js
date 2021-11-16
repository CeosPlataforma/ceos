import React, { useState } from "react";
import { Link } from "react-router-dom";

import User from "../components/User";
import Title from "../components/PainelTitle";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PlataformaHeader({ title, user, editmateria, retornarmsg, link }) {

    const [edit, setEdit] = useState(false);

    return (
        <Row className="align-items-center">
            <Col>
                <div className="logged--header">
                    <div className="d-flex align-items-center">
                        <Title title={title} user={user} editable={edit} />
                        {editmateria &&
                            <a className="btn btn-edit--materia" onClick={() => {
                                if (edit) {
                                    setEdit(false);
                                } else {
                                    setEdit(true);
                                }
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.154 42.687"><g transform="translate(-1044.681 -617.99)"><path d="M1048.433,650.072l-3.752,14.1,13.984-4.32,19.555-19.555-10.574-10.574Z" transform="translate(0 -3.493)" fill="#fff" /><path d="M1081.756,623.5l9.836,9.836,5.282-5.282-10.063-10.063Z" transform="translate(-11.039)" fill="#fff" /></g></svg></a>
                        }
                    </div>
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