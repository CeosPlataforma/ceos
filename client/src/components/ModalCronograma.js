import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AddLine, RemoveLine, ConfirmChange, CancelChange } from "../components/CronogramaIcons";

function ModalCronograma(props) {
    return (
        <Modal {...props} size="lg" className="modal-cronograma" centered>
            <Modal.Header className="modal-cronograma--header">
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title modal-cronograma--title">Como editar?</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-cronograma--body">
                <Container>
                    <Row className="justify-content-between">
                        <Col sm={5} >
                            <h1 className="modal--subtitle modal-cronograma--subtitle">Dado</h1>
                            <p>1. Clique no dado que quer alterar no cronograma</p>
                            <p>2. Faça a alteração</p>
                            <p>3. Clique em <ConfirmChange /> para confirmar</p>

                            <p>- Se quiser deletar o dado, clique em <CancelChange /></p>
                        </Col>

                        <Col sm={5} className="modal-cronograma--linha">
                            <h1 className="modal--subtitle modal-cronograma--subtitle">Linha</h1>
                            <p className="modal--text-left">- Para deletar uma linha, clique em <RemoveLine /></p>
                            <p className="modal--text-left">- Para adicionar uma linha, clique em <AddLine /></p>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" className="text-md w-100 modal--btn" onClick={props.onHide}>Voltar ao cronograma</Button>
            </Modal.Footer>
        </Modal >
    );
}

export default ModalCronograma;