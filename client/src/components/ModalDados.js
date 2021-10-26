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

function ModalDados(props) {

    const [showToastDados, setShowToastDados] = useState(false);
    const [showToastPass, setShowToastPass] = useState(false);

    return (
        <div>
            <ToastContainer position="top-end">
                <Toast className="toast--sucess m-2" onClose={() => setShowToastDados(false)} show={showToastDados} delay={3000} autohide>
                    <Toast.Body>Dados alterados com sucesso</Toast.Body>
                </Toast>
                <Toast className="toast--sucess m-2" onClose={() => setShowToastPass(false)} show={showToastPass} delay={3000} autohide>
                    <Toast.Body>Senha alterada com sucesso</Toast.Body>
                </Toast>
            </ToastContainer>


            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered alterar-dados">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 className="modal--title--mini">Altere seus dados</h1>
                        </div>
                        <div class="modal-body">
                            <Formik onSubmit={props.onSubmit}>
                                {/*initialValues={initialValues} validationSchema={validationSchema}*/}
                                <Form>
                                    <p className="text-lg">Nome</p>
                                    <Field name="name" type="text" className="form-control modal--input mb-4" aria-describedby="email" required />
                                    <p className="text-lg">E-mail</p>
                                    <Field name="name" type="text" className="form-control modal--input mb-4" aria-describedby="email" required />
                                    <ErrorMessage name="name" />
                                    <p className="text-lg">Senha atual</p>
                                    <Field name="name" type="password" className="form-control modal--input mb-4" aria-describedby="email" required />
                                    <ErrorMessage name="name" />
                                </Form>
                            </Formik>
                        </div>
                        <div class="modal-footer">
                            <Button className="text-md w-100 modal--btn" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" onClick={() => setShowToastDados(true)}>Confirmar alterações</Button>
                            <Button className="text-md w-100 modal--btn--secondary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="#exampleModalToggle">Alterar senha</Button>
                        </div>
                    </div>
                </div>
            </div>
            
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
        </div>
    );
}


export default ModalDados;