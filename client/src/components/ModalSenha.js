import React, { Component, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from 'yup'
import axios from 'axios';

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
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={props.onSubmit}>
                    <Form>
                        <Field name="email" type="email" className="form-control modal--input mb-4" id="acessar--email" required />
                        <ErrorMessage name="email" />
                        <button type="submit" className="btn btn-primary text-md w-100 modal--btn">Recuperar senha</button>
                    </Form>
                </Formik>
            </Modal.Body>
        </Modal>
    );
}

export default ModalSenha;