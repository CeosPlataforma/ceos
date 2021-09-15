import React, { Component, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from 'yup'
import axios from 'axios';

function ModalEsqueceuSenha(props) {

    const history = useHistory();

    const redirect = () => {
        history.push(`/logout`)
    }

    return (
        <Modal {...props} backdrop="static" keyboard={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title">Verificação de e-mail</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Sua senha foi atualizada,
                    Agora só basta fazer login!
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" className="text-md w-100 modal--btn" onClick={redirect}>Ir para a pagina inicial</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default ModalEsqueceuSenha;