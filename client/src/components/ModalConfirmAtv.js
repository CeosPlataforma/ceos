import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ModalConfirmAtv(props) {
    return (
        <Modal {...props}
            size="lg"
            className="modal-atividade"
            contentClassName="modal-content--plataforma"
            centered>
            <Modal.Header className="modal-atividade--header">
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title modal--title--plataforma">Confira a atividade</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-atividade--body">
                <Container>
                    <h4 className="modal-atividade--materia mb-3">&gt; Nome da matéria</h4>
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
                                <input className="form-control modal--input" placeholder="Descrição da atividade" readOnly={true} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" className="text-md modal--btn modal-atividade--btn" onClick={props.onHide}>Voltar às atividades</Button>
                <a className="btn btn-edit"><svg xmlns="http://www.w3.org/2000/svg" width="41.154" height="42.687" viewBox="0 0 41.154 42.687"><g transform="translate(-1044.681 -617.99)"><path d="M1048.433,650.072l-3.752,14.1,13.984-4.32,19.555-19.555-10.574-10.574Z" transform="translate(0 -3.493)" fill="#fff" /><path d="M1081.756,623.5l9.836,9.836,5.282-5.282-10.063-10.063Z" transform="translate(-11.039)" fill="#fff" /></g></svg></a>
            </Modal.Footer>
        </Modal >
    );
}

export default ModalConfirmAtv;