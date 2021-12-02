import { ErrorMessage, Field, Formik, Form } from 'formik';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import * as Yup from 'yup';

function ModalEditAtv(props) {

    const atv_date = new Date(props.atv_obj.dueBy).toISOString().substr(0, 10)
    const atv_date_min = new Date(props.atv_obj.dueBy)

    const initialValues = {
        nome: props.atv_obj.name,
        descricao: props.atv_obj.description,
        data: atv_date,
        tipo: props.atv_obj.atv_type,
        checkbox: props.atv_obj.concluida
    }
    //const today = new Date()

    const id = props.atv_obj._id

    const validationSchema = Yup.object({
        nome: Yup.string().min(2, "Nome muito pequeno").max(25, "Nome muito grande").required("Campo necessário"),
        data: Yup.date().min(atv_date_min, "Data inválida").max("2021-12-31", "Data inválida").required("Campo necessário"),
        descricao: Yup.string().required("Campo necessário"),
        tipo: Yup.string().notOneOf(["selecione"], "Escolha uma opção").required("Campo necessário")
    });

    return (
        <Modal {...props} size="lg" className="modal-atividade" contentClassName="modal-content--plataforma" centered>
            <Modal.Header closeButton className="modal-atividade--header">
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title modal--title--plataforma">Edite a atividade</h1>
                </Modal.Title>
            </Modal.Header>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={props.onSubmit}>
                <Form>
                    <Modal.Body className="modal-atividade--body">
                        <Container>
                            <h4 className="modal-atividade--materia mb-3">&gt; {props.mat_obj.name}</h4>
                            <Row className="justify-content-between">
                                <Col xs={12} lg={6}>
                                    <div className="input-holder">
                                        <p>Título</p>
                                        <Field type="text" name="nome" autoComplete="off" className="form-control modal--input" />
                                        <ErrorMessage component="span" className="error-msg" name="nome" />
                                    </div>
                                </Col>
                                <Col xs={12} lg={6}>
                                    <div className="input-holder">
                                        <p>Data de entrega</p>
                                        <Field type="date" name="data" autoComplete="off" className="form-control modal--input" />
                                        <ErrorMessage component="span" className="error-msg" name="data" />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col xs={12} lg={6}>
                                    <div className="input-holder">
                                        <p>Tipo</p>
                                        <Field name="tipo" as="select" className="form-select modal--input atividade-dropdown shadow-none">
                                            <option className="atividade-dropdown--select" value="selecione">Selecione um tipo</option>
                                            <option value="licao-de-casa">Lição de casa</option>
                                            <option value="trabalho">Trabalho</option>
                                            <option value="prova">Prova</option>
                                        </Field>
                                        <ErrorMessage component="span" className="error-msg" name="tipo" />
                                    </div>
                                </Col>
                                <Col xs={12} lg={6}>
                                    <div className="input-holder">
                                        <p>Descrição</p>
                                        <Field name="descricao" as="textarea" className="form-control modal--input modal--textarea" placeholder="Descrição da atividade" required />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="d-flex align-items-center" style={{ 'marginBottom': '8px' }}>
                                        <Field type="checkbox" className="modal--checkbox" name="checkbox" />
                                        <span>
                                            Atividade Concluida
                                        </span>
                                        <ErrorMessage component="span" className="error-msg" name="checkbox" />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="d-flex justify-content-center w-100">
                            <Button name="submit" type="submit" className="btn--primary modal--btn modal-atividade--btn w-50">Salvar</Button>
                        </div>
                    </Modal.Footer>
                </Form>
            </Formik>
        </Modal >
    );
}

export default ModalEditAtv;