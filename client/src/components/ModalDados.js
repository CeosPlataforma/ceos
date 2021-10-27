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


    const [textoMostrar, setTextoMostrar] = useState("Mostrar")
    const [passwordShown, setPasswordShown] = useState(false)

    const toggleSenha = () => {
        if (passwordShown) {
            setPasswordShown(false);
            setTextoMostrar("Mostrar")
        } else {
            setPasswordShown(true);
            setTextoMostrar("Ocultar")
        }
    }

    const [showToastDados, setShowToastDados] = useState(false);

    const initialValues = {
        name: props.startName,
        email: props.startEmail
    }

    const validationSchema = Yup.object({
        name: Yup.string().min(2, "Nome muito pequeno").max(25, "Nome muito grande").required("Campo necessário"),
        email: Yup.string().email("Email inválido").required('Obrigatório')
    });

    return (
        <div>
            <ToastContainer position="top-end">
                <Toast className="toast--sucess m-2" onClose={() => setShowToastDados(false)} show={showToastDados} delay={3000} autohide>
                    <Toast.Body>Dados alterados com sucesso</Toast.Body>
                </Toast>
                {/* <Toast className="toast--sucess m-2" onClose={() => setShowToastPass(false)} show={showToastPass} delay={3000} autohide>
                    <Toast.Body>Senha alterada com sucesso</Toast.Body>
                </Toast> */}
            </ToastContainer>


            <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h1 className="modal--title--mini">Altere seus dados</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik onSubmit={props.onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
                        <Form>
                            <label className="text-lg">Nome</label>
                            <Field name="name" type="text" className="form-control modal--input mb-4" aria-describedby="email" required />

                            <label className="text-lg">E-mail</label>
                            <Field name="email" type="email" className="form-control modal--input mb-4" aria-describedby="email" required />

                            <div className="mb-4">
                                <label htmlFor="cadastrar--senha" className="text-lg">Senha atual</label>
                                <div className="cadastrar--senha--container senha--container">
                                    <Field name="password" type={passwordShown ? "text" : "password"} className="form-control modal--input mb-4" aria-describedby="password" required />
                                    <span onClick={toggleSenha} className="show-password text-md">{textoMostrar} senha</span>
                                    <ErrorMessage component="span" name="password" />
                                </div>

                            </div>

                            <Button type="submit" className="text-md w-100 modal--btn">Confirmar alteração</Button>
                        </Form>
                    </Formik>
                </Modal.Body>
            </Modal>

            {/*<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered alterar-dados">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 className="modal--title--mini">Altere seus dados</h1>
                        </div>
                        <div class="modal-body">
                            <Formik onSubmit={props.onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
                                <Form>
                                    <p className="text-lg">Nome</p>
                                    <Field name="name" type="text" className="form-control modal--input mb-4" aria-describedby="email" required />
                                    <p className="text-lg">E-mail</p>
                                    <Field name="email" type="email" className="form-control modal--input mb-4" aria-describedby="email" required />
                                    <ErrorMessage name="email" />
                                    <p className="text-lg">Senha atual</p>
                                    <Field name="senha" type="password" className="form-control modal--input mb-4" aria-describedby="email" required />
                                    <ErrorMessage name="senha" />
                                    <div class="modal-footer">
                                        <Button type="submit" className="text-md w-100 modal--btn" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" onClick={() => setShowToastDados(true)}>Confirmar alterações</Button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>*/}
        </div>
    );
}


export default ModalDados;