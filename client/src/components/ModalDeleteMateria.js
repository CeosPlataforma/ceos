import React from "react";
import Modal from 'react-bootstrap/Modal';

function ModalDeleteMateria(props) {

    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" contentClassName="modal-content--plataforma" centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title modal--title--plataforma">Confirmar exclusão da matéria</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-body mb-4">
                    <p className="text-lg">Nome da matéria</p>
                    <input name="name" type="text" className="form-control modal--input" placeholder="materia"
                        aria-describedby="emailRecover" required readOnly={true} />
                </div>
                <div className="modal-footer">
                    <button type="submit" className="text-md w-100 modal--btn excluir-materia--btn">Confirmar exclusão</button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default ModalDeleteMateria;