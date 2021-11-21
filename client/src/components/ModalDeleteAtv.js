import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Formik, Form, ErrorMessage, Field } from 'formik';
// import Form from 'react-bootstrap/Form';

function ModalDeleteAtv(props) {

    const initialValues = {
        name: ""
    }

    return (
        <Modal {...props} size="lg" className="modal-atividade" contentClassName="modal-content--plataforma" centered>
            <Modal.Header closeButton className="modal-atividade--header">
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title modal--title--plataforma">Confirmar a exclusão da atividade</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-atividade--body">
                <Container>
                    <h4 className="modal-atividade--materia mb-3">
                        &gt; {props.mat_obj.name}
                    </h4>
                    <Row className="justify-content-between">
                        <Col xs={12} lg={6}>
                            <div className="input-holder">
                                <p>Título</p>
                                <input className="form-control modal--input" placeholder={props.atv_obj.name} readOnly={true} disabled={true} />
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className="input-holder">
                                <p>Data de entrega</p>
                                <input className="form-control modal--input" placeholder={props.atv_obj.fixedDate} readOnly={true} />
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Col xs={12} lg={6}>
                            <div className="input-holder">
                                <p>Tipo</p>
                                <input className="form-control modal--input" placeholder={props.atv_obj.tipo} readOnly={true} />
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <div className="input-holder">
                                <p>Descrição</p>
                                <input className="form-control modal--input" placeholder={props.atv_obj.description} readOnly={true} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Formik onSubmit={props.onSubmit} initialValues={initialValues}>
                    <Form className="d-flex justify-content-center w-100">
                        <div className="d-flex justify-content-center w-100">
                            <Button name="pele" type="submit" className="modal--btn modal-atividade--btn btn-padding btn-red">Confirmar exclusão</Button>
                            <ErrorMessage component="span" className="error-msg mt-4" name="pele" />
                        </div>
                    </Form>
                </Formik>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalDeleteAtv;