import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalCadastro(props) {

    const history = useHistory();

    const redirect = () => {
        history.push(`/acessar`)
    }

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title">Verificação de e-mail</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Para Finalizar a criação de sua conta e começar a usar a plataforma,
                    você precisa verificar seu endereço de e-mail e seguir as instruções enviadas
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" className="text-md w-100 modal--btn" onClick={redirect}>Ir para o login</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalCadastro
