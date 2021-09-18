import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalSenha(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title">Esqueceu sua senha?</h1>
                    <p>Sem problemas! É fácil recuperá-la!</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Informe o e-mail vinculado a sua conta para
                    enviarmos
                    as
                    instruções de como recuperar sua senha
                </p>
                <Formik>
                    <Form>
                        <Field name="email" type="email" className="form-control modal--input mb-4" id="acessar--email" required />
                        <ErrorMessage name="email" />
                    </Form>
                </Formik>
            </Modal.Body>
            <Modal.Footer>
                <Button type="submit" className="btn btn-primary text-md w-100 modal--btn">Recuperar senha</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalSenha;