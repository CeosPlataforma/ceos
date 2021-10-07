import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ModalCronograma(props) {
    return (
        <Modal {...props} size="lg" className="modal-cronograma" centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title">Como editar?</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row className="justify-content-between">
                        <Col xs="5">
                            <h3>Dado</h3>
                            <p>1. Clique no dado que quer alterar no cronograma</p>
                            <p>2. Faça a alteração</p>
                            <p>3. Clique em para confirmar</p>

                            <p>- Se quiser deletar o dado, clique em</p>
                        </Col>

                        <Col xs="5">
                            <h3>Linha</h3>
                            <p>- Para deletar uma linha, clique em</p>
                            <p>- Para adicionar uma linha, clique em</p>
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