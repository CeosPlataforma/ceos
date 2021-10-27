import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from "react-router-dom";
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

    const history = useHistory();

    const redirect = () => {
        history.push(`/logout`)
    }

    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Email inválido").required('Obrigatório')
    });

    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter desativar-conta" centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title--mini">Confirmar desativação da conta</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik onSubmit={props.onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
                    <Form>
                        <p className="text-lg">E-mail</p>
                        <Field name="email" type="email" className="form-control modal--input mb-4" aria-describedby="email" required />
                        <ErrorMessage name="email"/> 

                        <div className="mb-4">
                            <label htmlFor="cadastrar--senha" className="text-lg">Senha atual</label>
                            <div className="cadastrar--senha--container senha--container">
                                <Field name="password" type={passwordShown ? "text" : "password"} className="form-control modal--input mb-4" aria-describedby="password" required />
                                <ErrorMessage name="password"/>
                                <span onClick={toggleSenha} className="show-password text-md">{textoMostrar} senha</span>
                            </div>
                        </div>

                        <Button type="submit" className="text-md w-100 modal--btn desativar-conta--btn">Confirmar desativação</Button>
                    </Form>
                </Formik>
            </Modal.Body>
        </Modal>
    );
}


export default ModalExcluirConta;