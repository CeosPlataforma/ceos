import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as Yup from 'yup';
import ModalSenha from './ModalSenha';
import axios from 'axios'

function ModalAltSenha(props) {

    // const [showToastPass, setShowToastPass] = useState(false);

    const initialValues = {
        password: '',
        newPassword: '',
        newPasswordConfirm: '',

    }

    axios.defaults.withCredentials = true
    const onSubmitModal = async (values, actions) => {
        await axios.post("http://localhost:3333/redefinir-senha", { email: values.email })
            .then(function (response) {
                if (response.data.error === "inexistent") {
                    actions.setFieldError("email", `Este usuário não existe`);
                } else if (response.data.success) {
                    actions.setFieldError("email", `Sucesso! Verifique seu email.`)
                    setTimeout(function () {
                        setShow(false)
                    }, 2000)
                } else {
                    actions.setFieldError("email", response.data.error)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const validationSchema = Yup.object({
        password: '',
        newPassword: '',
        newPasswordConfirm: Yup.string().oneOf([Yup.ref('newPassword'), ''], 'As senhas devem ser iguais')
    });

    const [textoMostrar, setTextoMostrar] = useState("Mostrar")
    const [passwordShown, setPasswordShown] = useState(false)

    const [textoConfirmMostrar, setTextoConfirmMostrar] = useState("Mostrar")
    const [passwordConfirmShown, setPasswordConfirmShown] = useState(false)

    const [textoNewConfirmMostrar, setTextoNewConfirmMostrar] = useState("Mostrar")
    const [passwordNewConfirmShown, setPasswordNewConfirmShown] = useState(false)

    const toggleSenha = () => {
        if (passwordShown) {
            setPasswordShown(false);
            setTextoMostrar("Mostrar")
        } else {
            setPasswordShown(true);
            setTextoMostrar("Ocultar")
        }
    }

    const toggleSenhaConfirmar = () => {
        if (passwordConfirmShown) {
            setPasswordConfirmShown(false);
            setTextoConfirmMostrar("Mostrar")
        } else {
            setPasswordConfirmShown(true);
            setTextoConfirmMostrar("Ocultar")
        }
    }

    const toggleSenhaNewConfirmar = () => {
        if (passwordNewConfirmShown) {
            setPasswordNewConfirmShown(false);
            setTextoNewConfirmMostrar("Mostrar")
        } else {
            setPasswordNewConfirmShown(true);
            setTextoNewConfirmMostrar("Ocultar")
        }
    }

    const [show, setShow] = useState(false);

    return (
        <>
            <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" contentClassName="modal-content--plataforma" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h1 className="modal--title modal--title--plataforma">Altere sua senha</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik onSubmit={props.onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
                        <Form>
                            <label htmlFor="cadastrar--senha" className="text-lg">Senha atual</label>
                            <div className="cadastrar--senha--container senha--container">
                                <Field name="password" type={passwordShown ? "text" : "password"} className="form-control modal--input" aria-describedby="password" required />
                                <span onClick={toggleSenha} className="show-password text-md">{textoMostrar} senha</span>
                            </div>
                            <ErrorMessage component="span" className="error-msg" name="password" />

                            <div>
                                <label htmlFor="cadastrar--senha" className="text-lg mt-4">Nova senha</label>
                                <div className="cadastrar--senha--container senha--container">
                                    <Field name="newPassword" type={passwordConfirmShown ? "text" : "password"} className="form-control modal--input" aria-describedby="newPassword" required />
                                    <span onClick={toggleSenhaConfirmar} className="show-password">{textoConfirmMostrar} senha</span>
                                </div>
                            </div>

                            <label htmlFor="cadastrar--senha" className="text-lg mt-4">Confirmar nova senha</label>
                            <div className="cadastrar--senha--container senha--container">
                                <Field name="newPasswordConfirm" type={passwordNewConfirmShown ? "text" : "password"} className="form-control modal--input" aria-describedby="newPasswordConfirm" required />
                                <span onClick={toggleSenhaNewConfirmar} className="show-password text-md">{textoNewConfirmMostrar} senha</span>
                            </div>
                            <ErrorMessage component="span" className="error-msg" name="newPasswordConfirm" />

                            <Button type="submit" className="btn-primary w-100 mt-4 mb-2">Confirmar alteração</Button>

                            <a onClick={() => { setShow(true) }}>&gt; Esqueci minha senha</a>

                        </Form>
                    </Formik>
                </Modal.Body>
            </Modal>

            <ModalSenha onSubmit={onSubmitModal} show={show} onHide={() => setShow(false)} />
        </>
    );
}

export default ModalAltSenha;