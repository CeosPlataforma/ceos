import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function ModalDeleteAtv(props) {
    return (
        <Modal {...props} size="lg" className="modal-atividade" contentClassName="modal-content--plataforma" centered>
            <Modal.Header className="modal-atividade--header">
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title modal--title--plataforma">Confirmar a exclusão da atividade</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-atividade--body">
                <Container>
                    <Row className="justify-content-between">
                        <Col xs={12} lg={6}>
                            <div>
                                <p>Título</p>
                                <input className="form-control modal--input" placeholder="Título da atividade" readOnly={true} />
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div>
                                <p>Data de entrega</p>
                                <input className="form-control modal--input" placeholder="XX/XX/XX" readOnly={true} />
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Col xs={12} lg={6}>
                            <div>
                                <p>Tipo</p>
                                <input className="form-control modal--input" placeholder="Tipo da atividade" readOnly={true} />
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div>
                                <p>Descrição</p>
                                <textarea className="form-control modal--input modal--textarea" placeholder="Descrição da atividade" readOnly={true} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" className="text-md modal--btn modal-atividade--btn mt-4 confirmar-exclusao" onClick={props.onHide}>Confirmar exclusão</Button>
            </Modal.Footer>
        </Modal >
    );
}

export default ModalDeleteAtv;