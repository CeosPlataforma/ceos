import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useRef } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import * as Yup from 'yup';

function ModalAddAtv(props) {

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
                    <h1 className="modal--title modal--title--plataforma">Adicione uma atividade</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-atividade--body">
                <Container>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={props.onSubmit} innerRef={formRef}>
                        <Form>
                            <Row className="justify-content-between">
                                <Col xs={12} lg={6}>
                                    <div>
                                        <label className="text-lg">Título</label>
                                        <Field type="text" style={{ 'marginBottom': '0px' }} name="name" className="form-control modal--input" placeholder="Título da atividade" required/>
                                        <ErrorMessage component="span" className="error-msg" name="name" />
                                    </div>
                                </Col>
                                <Col xs={12} lg={6}>
                                    <div>
                                        <label className="text-lg">Data de entrega</label>
                                        <Field type="date" style={{ 'marginBottom': '0px' }} name="dueByDate" className="form-control modal--input" placeholder="XX/XX/XX" />
                                        <ErrorMessage component="span" className="error-msg" name="dueByDate" />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col xs={12} lg={6}>
                                    <div>
                                        <label className="text-lg" style={{ 'marginTop': '25px' }}>Tipo</label>
                                        <Field name="type" as="select" className="modal--input atividade-dropdown">
                                            <option className="atividade-dropdown--select" value="selecione">Selecione um tipo</option>
                                            <option value="licao-de-casa">Lição de casa</option>
                                            <option value="trabalho">Trabalho</option>
                                            <option value="prova">Prova</option>
                                        </Field>
                                        <ErrorMessage component="span" className="error-msg" name="type" />
                                    </div>
                                </Col>
                                <Col xs={12} lg={6}>
                                    <div>
                                        <label className="text-lg" style={{ 'marginTop': '25px' }}>Descrição</label>
                                        <Field name="description" as="textarea" className="form-control modal--input modal--textarea" placeholder="Descrição da atividade" required/>
                                    </div>
                                </Col>
                            </Row>
                            
                        </Form>
                    </Formik>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={handleSubmit} style={{ 'color': 'white' }} className="text-md modal--btn modal-atividade--btn mt-4">Salvar</button>
            </Modal.Footer>
        </Modal >
    );
}

export default ModalAddAtv;