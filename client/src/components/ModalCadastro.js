import React from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalCadastro(props) {

    const history = useNavigate();

    const redirect = () => {
        history(`/acessar`)
    }

    return (
        <Modal {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            contentClassName="modal-content--website modal-content--website"
            centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title modal--title--website">Verificação de e-mail</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='text-center'>
                    Para finalizar a criação de sua conta e começar a usar a plataforma, você precisa verificar seu endereço de e-mail e seguir as instruções enviadas
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn--primary btn-padding mx-auto" onClick={redirect}>Ir para o login</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalCadastro
