import React, { Component } from "react";

class ModalSenha extends Component {
    render() {
        return (
            <div className="modal fade" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
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
                                        aria-label="Close">X</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalSenha;