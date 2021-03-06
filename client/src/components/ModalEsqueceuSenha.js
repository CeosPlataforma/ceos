import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";

function ModalEsqueceuSenha(props) {

    const history = useNavigate();

    const redirect = () => {
        history(`/logout/false`)
    }

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" contentClassName="modal-content--website modal-esqueceu-senha-amaral" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title modal--title--website">Recuperação de senha</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="text-center">
                    Sua senha foi atualizada, faça o login novamente!
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn--primary w-100" onClick={redirect}>Ir para a página inicial</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default ModalEsqueceuSenha;