import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Avatar from "./Avatar"

export default function UserBox({ userImage, user }) {

    const [show, setShow] = useState(false);

    return (
        <>
            <Col>
                <div className="msg-box mb-4">
                    <Avatar className="dashboard--user-img" userImage={userImage} />
                    <p>UUID: {user.uuid}</p>
                    <p>ID: {user._id}</p>
                    <p>Nome: {user.name}</p>
                    <p>E-mail: {user.email}</p>
                    <p>Verificado: <input type="checkbox" className="modal--checkbox" checked={user.verifiedMail} disabled={true} /></p>
                    {/* <p>Hash: {user.hash}</p>
                    <p>Salt: {user.salt}</p> */}
                    <p>Criado em: {new Date(user.createdAt).toISOString().substr(0, 10)}</p>
                    <div className="d-flex justify-content-between mt-4">
                        <button className="btn--secondary w-50 red-btn">Excluir usuário</button>
                        <button className="btn--secondary w-50 btn-solved" onClick={() => setShow(true)}>Editar usuário</button>
                    </div>
                </div>
            </Col>

            <Modal
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                contentClassName="modal-content--plataforma modal-content--plataforma modal-admin-user"
                centered
                show={show}
                onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h1 className="modal--title modal--title--website">Alterar informações do usuário</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="justify-content-between">
                        <Col xs={12} lg={6}>
                            <div className="input-holder">
                                <p>UUID</p>
                                <input className="form-control modal--input"
                                    value="UUID"
                                    readOnly={true} />
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className="input-holder">
                                <p>Nome</p>
                                <input className="form-control modal--input"
                                    value="Nome"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Col xs={12} lg={6}>
                            <div className="input-holder">
                                <p>E-mail</p>
                                <input className="form-control modal--input"
                                    value="E-mail"
                                />
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className="input-holder">
                                <p>Verificação</p>
                                <input type="checkbox" className="modal--checkbox"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Col xs={12} lg={6}>
                            <div className="input-holder">
                                <p>Hash</p>
                                <input className="form-control modal--input"
                                    value="Hash"
                                    readOnly={true} />
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className="input-holder">
                                <p>Salt</p>
                                <input className="form-control modal--input"
                                    value="Salt"
                                    readOnly={true} />
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn--primary btn-padding mx-auto" onClick={() => { setShow(false) }}>Salvar alterações no usuário</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}