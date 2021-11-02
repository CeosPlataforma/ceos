import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
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
        email: props.startEmail,
        emailConfirm: ''
    }

    const validationSchema = Yup.object({
        name: Yup.string().min(2, "Nome muito pequeno").max(25, "Nome muito grande").required("Campo necessário"),
        email: Yup.string().email("Email inválido").required('Obrigatório'),
        emailConfirm: Yup.string().oneOf([Yup.ref('email'), ''], 'Os emails devem ser iguais')
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


            <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" contentClassName="modal-content--plataforma" centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h1 className="modal--title modal--title--plataforma">Altere seus dados</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik onSubmit={props.onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
                        <Form>
                            <label className="text-lg">Nome</label>
                            <Field name="name" type="text" className="form-control modal--input" aria-describedby="email" required />

                            <label className="text-lg" style={{'marginTop': '25px'}}>E-mail</label>
                            <Field name="email" type="email" className="form-control modal--input" aria-describedby="email" required />

                            <label className="text-lg" style={{'marginTop': '25px'}}>Confirmar e-mail</label>
                            <Field name="emailConfirm" type="email" className="form-control modal--input" aria-describedby="email" required />
                            <ErrorMessage component="span" className="error-msg" name="emailConfirm" />


                            <div className="mb-4">
                                <label htmlFor="cadastrar--senha" className="text-lg" style={{'marginTop': '25px'}}>Senha atual</label>
                                <div className="cadastrar--senha--container senha--container">
                                    <Field name="password" type={passwordShown ? "text" : "password"} className="form-control modal--input mb-4" aria-describedby="password" required />
                                    <span onClick={toggleSenha} className="show-password text-md">{textoMostrar} senha</span>
                                </div>
                                <ErrorMessage component="span" className="error-msg" name="password"/>
                            </div>

                            <Button type="submit" className="text-md w-100 modal--btn">Confirmar alteração</Button>
                        </Form>
                    </Formik>
                </Modal.Body>
            </Modal>
        </div>
    );
}


export default ModalDados;