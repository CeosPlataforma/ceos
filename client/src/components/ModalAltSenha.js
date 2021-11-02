import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as Yup from 'yup';

function ModalAltSenha(props) {

    const [showToastPass, setShowToastPass] = useState(false);

    const initialValues = {
        password: '',
        newPassword: '',
        newPasswordConfirm: '',

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

    return (

        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" contentClassName="modal-content--plataforma" centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title modal--title--plataforma">Altere sua senha</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik onSubmit={props.onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
                    <Form>
                        <div className="mb-4">
                            <label htmlFor="cadastrar--senha" className="text-lg">Senha atual</label>
                            <div className="cadastrar--senha--container senha--container">
                                <Field name="password" type={passwordShown ? "text" : "password"} className="form-control modal--input mb-4" aria-describedby="password" required />
                                <ErrorMessage component="p" className="error-msg" name="password" />
                                <span onClick={toggleSenha} className="show-password text-md">{textoMostrar} senha</span>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="cadastrar--senha" className="text-lg">Nova senha</label>
                            <div className="cadastrar--senha--container senha--container">
                                <Field name="newPassword" type={passwordConfirmShown ? "text" : "password"} className="form-control modal--input mb-4" aria-describedby="newPassword" required />
                                <span onClick={toggleSenhaConfirmar} className="show-password">{textoConfirmMostrar} senha</span>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="cadastrar--senha" className="text-lg">Confirmar nova senha</label>
                            <div className="cadastrar--senha--container senha--container">
                                <Field name="newPasswordConfirm" type={passwordNewConfirmShown ? "text" : "password"} className="form-control modal--input mb-4" aria-describedby="newPasswordConfirm" required />
                                <span onClick={toggleSenhaNewConfirmar} className="show-password text-md">{textoNewConfirmMostrar} senha</span>
                            </div>
                        </div>

                        <ErrorMessage component="p" c name="newPasswordConfirm" />

                        <Button type="submit" className="text-md w-100 modal--btn">Confirmar alteração</Button>

                    </Form>
                </Formik>
            </Modal.Body>
        </Modal>

    );
}

export default ModalAltSenha;