import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import Modal from 'react-bootstrap/Modal';
import * as Yup from 'yup';

function ModalSenha(props) {

    const initialValues = {
        email: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Email inválido").required('Obrigatório'),
    });

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            contentClassName="modal-content--website"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title modal--title--website">Esqueceu sua senha?</h1>
                    <p className="modal--subtitle modal--subtitle--website">Sem problemas! É fácil recuperá-la!</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="modal--text--website">
                    Informe o e-mail vinculado a sua conta para
                    enviarmos
                    as
                    instruções de como recuperar sua senha
                </p>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={props.onSubmit}>
                    <Form>
                        <Field name="email" type="email" className="form-control modal--input" id="acessar--email" placeholder="E-mail" required />
                        <ErrorMessage component="span" className="error-msg" name="email" />
                        <button type="submit" className="btn btn-primary w-100 mt-4">Recuperar senha</button>
                    </Form>
                </Formik>
            </Modal.Body>
        </Modal>
    );
}

export default ModalSenha;