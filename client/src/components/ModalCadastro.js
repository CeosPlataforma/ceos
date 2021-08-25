import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import "./Modal.css";

function ModalCadastro({ closeModal }) {

    useEffect(() => {

    })

    const history = useHistory();

    const redirect = () => {
        history.push(`/acessar`)
    }

    return (
        <div>
            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Launch demo modal
            </button> */}
            <div className="modalBackground">
                <div className="modalContainer">
                    {/* <button onClick={() => closeModal(false)}>X</button> */}
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
        </div>


    )
}

export default ModalCadastro
