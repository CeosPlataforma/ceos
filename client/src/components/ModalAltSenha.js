import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'

function ModalAltSenha(props) {

    const [showToastPass, setShowToastPass] = useState(false);

    return (

        <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 className="modal--title--mini">Altere sua senha</h1>
                    </div>
                    <div class="modal-body">
                        <Formik onSubmit={props.onSubmit}>
                            {/*initialValues={initialValues} validationSchema={validationSchema}*/}
                            <Form>
                                <p className="text-lg">Senha atual</p>
                                <Field name="name" type="password" className="form-control modal--input mb-4" aria-describedby="email" required />
                                <ErrorMessage name="name" />
                                <p className="text-lg">Nova senha</p>
                                <Field name="name" type="password" className="form-control modal--input mb-4" aria-describedby="email" required />
                                <ErrorMessage name="name" />
                                <p className="text-lg">Confirmar nova senha</p>
                                <Field name="name" type="password" className="form-control modal--input mb-4" aria-describedby="email" required />
                                <ErrorMessage name="name" />
                            </Form>
                        </Formik>
                    </div>
                    <div class="modal-footer">
                        <Button className="text-md w-100 modal--btn" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" onClick={() => setShowToastPass(true)}>Confirmar alterações</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalAltSenha;