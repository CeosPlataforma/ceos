import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

/*<div className="modal fade" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-10">
                        <div className="modal-header">
                            <h2 className="modal--title" id="exampleModalLongTitle">Esqueceu sua senha?
                            </h2>
                            <p className="text-lg">Sem problemas! É fácil recuperá-la!</p>
                        </div>
                        <form method="post" action="">
                            <div className="modal-body">
                                <p className="text-lg">Informe o e-mail vinculado a sua conta para
                                    enviarmos
                                    as
                                    instruções de como recuperar sua senha</p>
                                <input type="email" className="form-control modal--input mb-4" placeholder="E-mail"
                                    aria-describedby="emailRecover" required />
                            </div>
                            <div class="modal-footer">
                                <button type="submit" className="btn btn-primary text-md w-100 modal--btn">Recuperar
                                    senha</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-1">
                        <button type="button" className="btn-close close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>*/
function ModalSenha(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title">Esqueceu sua senha?</h1>
                    <p>Sem problemas! É fácil recuperá-la!</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Informe o e-mail vinculado a sua conta para
                    enviarmos
                    as
                    instruções de como recuperar sua senha
                </p>
                <input type="email" className="form-control modal--input mb-4" placeholder="E-mail"
                    aria-describedby="emailRecover" required />
            </Modal.Body>
            <Modal.Footer>
                <button type="submit" className="btn btn-primary text-md w-100 modal--btn">Recuperar
                    senha</button>
            </Modal.Footer>
        </Modal>
    );
}

function App() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <ModalSenha
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default ModalSenha;