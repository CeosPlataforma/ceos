import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

function ModalExcluirConta(props) {

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

    const history = useNavigate();

    // const redirect = () => {
    //     history(`/logout`)
    // }

    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Email inválido").required('Obrigatório')
    });

    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter desativar-conta" contentClassName="modal-content--plataforma" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title modal--title--plataforma">Confirmar desativação da conta</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik onSubmit={props.onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
                    <Form>
                        <p className="text-lg">E-mail</p>
                        <Field name="email" type="email" className="form-control modal--input" aria-describedby="email" required />
                        <ErrorMessage component="span" className="error-msg" name="email" />

                        <div className="mb-4">
                            <label htmlFor="cadastrar--senha" style={{ 'marginTop': '25px' }} className="text-lg">Senha atual</label>
                            <div className="cadastrar--senha--container senha--container">
                                <Field name="password" type={passwordShown ? "text" : "password"} className="form-control modal--input" aria-describedby="password" required />
                                <span onClick={toggleSenha} className="show-password">{textoMostrar} senha</span>
                            </div>
                            <ErrorMessage component="span" className="error-msg" name="password" />
                        </div>

                        <Button type="submit" className="btn--primary w-100 btn-red">Confirmar desativação</Button>
                    </Form>
                </Formik>
            </Modal.Body>
        </Modal>
    );
}


export default ModalExcluirConta;