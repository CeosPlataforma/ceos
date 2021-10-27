import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from "react-router-dom";

function ModalEsqueceuSenha(props) {

    const history = useHistory();

    const redirect = () => {
        history.push(`/logout`)
    }

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title modal--title--website">Verificação de e-mail</h1>
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