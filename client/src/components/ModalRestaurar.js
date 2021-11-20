import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ModalRestaurar(props) {
    return (
        <Modal {...props}
            size="lg"
            className="modal-atividade"
            contentClassName="modal-content--plataforma"
            centered>
            <Modal.Header closeButton className="modal-atividade--header">
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title modal--title--plataforma">Confirmar restauração da atividade</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-atividade--body">
                <Container>
                    <h4 className="modal-atividade--materia mb-3">
                        {/* &gt; {props.mat_obj.name} */}
                    </h4>
                    <Row className="justify-content-between">
                        <Col xs={12} lg={6}>
                            <div>
                                <p>Título</p>
                                <input className="form-control modal--input"
                                    // placeholder={props.atv_obj.name} 
                                    readOnly={true}
                                    disabled={true} />
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div>
                                <p>Data de entrega</p>
                                <input className="form-control modal--input"
                                    // placeholder={props.atv_obj.fixedDate} 
                                    readOnly={true} />
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Col xs={12} lg={6}>
                            <div>
                                <p>Tipo</p>
                                <input className="form-control modal--input"
                                    // placeholder={props.atv_obj.tipo} 
                                    readOnly={true} />
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div>
                                <p>Descrição</p>
                                <input className="form-control modal--input"
                                    // placeholder={props.atv_obj.description} 
                                    readOnly={true} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" className="btn-primary btn-padding modal-atividade--btn" onClick={props.onHide}>Confirmar restauração</Button>
            </Modal.Footer>
        </Modal >
    );
}

export default ModalRestaurar;