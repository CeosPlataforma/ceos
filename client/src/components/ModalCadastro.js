import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalCadastro({ closeModal, props }) {

    useEffect(() => {

    })

    const history = useHistory();

    const redirect = () => {
        history.push(`/acessar`)
    }

    return (
        /*<div>
            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Launch demo modal
            </button>}
            <div className="modalBackground">
                <div className="modalContainer">
                    {/* <button onClick={() => closeModal(false)}>X</button>
                    <div className="modal-header">
                        <h1>verificação de email</h1>
                    </div>
                    <div className="modal-body">
                        <p classname="text-xl-center">você vai receber um email para concluir o seu cadastro</p>
                        <p className="text-xl-center">aperte o botão para ser redirecionado pro login</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary text-md w-100 modal--btn" onClick={redirect}>Prox</button>
                    </div>
                </div>
            </div>
        </div>*/

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
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
                <button type="submit" className="btn btn-primary text-md w-100 modal--btn" onClick={redirect}>Próximo</button>
            </Modal.Footer>
        </Modal>
    );
}

function App() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <ModalCadastro
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default ModalCadastro
