import { ErrorMessage, Field, Formik } from 'formik';
import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import * as Yup from 'yup';

function ModalEditAtv(props) {
    
    const initialValues = {
        name: '',
        description: ''
    }

    const formRef = useRef();

    const handleSubmit = () => {
        if (formRef.current) {
            formRef.current.handleSubmit();
        }
    }

    const today = new Date()

    const validationSchema = Yup.object({
        name: Yup.string().min(2, "Nome muito pequeno").max(25, "Nome muito grande").required("Campo necessário"),
        dueByDate: Yup.date().min(today, "Data inválida").max("2021-12-31", "Data inválida").required("Campo necessário"),
        description: Yup.string().required("Campo necessário"),
        type: Yup.string().notOneOf(["selecione"], "Escolha uma opção").required("Campo necessário")
    });


    return (
        <Modal {...props} size="lg" className="modal-atividade" contentClassName="modal-content--plataforma" centered>
            <Modal.Header className="modal-atividade--header">
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title modal--title--plataforma">Edite a atividade</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-atividade--body">
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={props.onSubmit} innerRef={formRef}>
                    <Form>
                        <Container>
                            <h4 className="modal-atividade--materia mb-3">&gt; Nome da matéria</h4>
                            <Row className="justify-content-between">
                                <Col xs={12} lg={6}>
                                    <div>
                                        <p>Título</p>
                                        <Field type="text" className="form-control modal--input" value="Título da atividade" />
                                    </div>
                                </Col>
                                <Col xs={12} lg={6}>
                                    <div>
                                        <p>Data de entrega</p>
                                        <Field type="date" className="form-control modal--input" type="date" placeholder="XX/XX/XX" />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col xs={12} lg={6}>
                                    <div>
                                        <p>Tipo</p>
                                        <Field name="type" as="select" className="form-select modal--input atividade-dropdown shadow-none">
                                            <option className="atividade-dropdown--select" value="selecione">Selecione um tipo</option>
                                            <option value="licao-de-casa">Lição de casa</option>
                                            <option value="trabalho">Trabalho</option>
                                            <option value="prova">Prova</option>
                                        </Field>
                                    </div>
                                </Col>
                                <Col xs={12} lg={6}>
                                    <div>
                                        <p>Descrição</p>
                                        <Field name="description" as="textarea" className="form-control modal--input modal--textarea" placeholder="Descrição da atividade" required />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Field type="checkbox" className="modal--checkbox mt-4" name="checkbox"/>
                                    <span>
                                        Atividade Concluida
                                    </span>
                                    <ErrorMessage component="span" className="error-msg" name="checkbox" />
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </Formik>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" className="text-md modal--btn modal-atividade--btn mt-4" onClick={props.onHide}>Salvar</Button>
            </Modal.Footer>
        </Modal >
    );
}

export default ModalEditAtv;