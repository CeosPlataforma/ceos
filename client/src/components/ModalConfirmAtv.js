import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ModalConfirmAtv(props) {
    return (
        <Modal {...props} size="lg" className="modal-atividade" centered>
            <Modal.Header className="modal-atividade--header">
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title modal-atividade--title">Confira a atividade</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-atividade--body">
                <Container>
                    <h4 className="modal-atividade--materia">&gt; Matéria</h4>
                    <Row className="justify-content-between">
                        <Col xs={12} lg={6}>
                            <div>
                                <p>Título</p>
                                <input className="form-control modal--input" placeholder="Título da atividade" />
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div>
                                <p>Data de entrega</p>
                                <input className="form-control modal--input" placeholder="XX/XX/XX" />
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Col xs={12} lg={6}>
                            <div>
                                <p>Tipo</p>
                                <input className="form-control modal--input" placeholder="Tipo da atividade" />
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div>
                                <p>Descrição</p>
                                <input className="form-control modal--input" placeholder="Descrição da atividade" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" className="text-md modal--btn modal-atividade--btn" onClick={props.onHide}>Voltar às atividades</Button>
                <a className="btn btn-edit">X</a>
            </Modal.Footer>
        </Modal >
    );
}

export default ModalConfirmAtv;