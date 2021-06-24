import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';

class Acessar extends Component {

    componentDidMount = () => {
        // Acessar
        // Permanecer conectado
        $('.permanecer-conectado').on('click', function () {
            let checkbox_value = $('.permanecer-conectado--hidden-checkbox').prop('checked');

            if (checkbox_value === false) {
                $('.permanecer-conectado--hidden-checkbox').prop('checked', true);
                $('.permanecer-conectado--checkbox').toggleClass('filled');
            }

            if (checkbox_value) {
                $('.permanecer-conectado--hidden-checkbox').prop('checked', false);
                $('.permanecer-conectado--checkbox').toggleClass('filled');
            }
        });
        // Mostrar/Ocultar senha
        $(".show-password, .hide-password").on('click', function () {
            var passwordId = $(this).parent('.senha--container:first').find('input').attr('id');
            if ($(this).hasClass('show-password')) {
                $("#" + passwordId).attr("type", "text");
                $(this).parent().find(".show-password").hide();
                $(this).parent().find(".hide-password").show();
            } else {
                $("#" + passwordId).attr("type", "password");
                $(this).parent().find(".hide-password").hide();
                $(this).parent().find(".show-password").show();
            }
        });
    }

    render() {
        return (
            <div>
                <div className="container acessar" id="acessar">
                    <h2 className="acessar--title text-center mb-4">
                        Entre com a sua conta
                    </h2>

                    <p className="acessar--text">
                        Novo por aqui? <span> <Link to="/cadastrar"> Crie sua conta. </Link > </span>
                    </p>

                    <form className="acessar--form col-lg-6 mx-auto">
                        <div className="mb-4">
                            <label htmlFor="acessar--email" className="form-label"> E-mail </label>
                            <input type="email" className="form-control acessar--input" id="acessar--email" required />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="acessar--senha" className="form-label"> Senha </label>
                            <div className="acessar--senha--container senha--container">
                                <input type="password" className="form-control acessar--input" id="acessar--senha" required />
                                <span className="show-password text-md">Mostrar senha</span>
                                <span className="hide-password text-md">Ocultar senha</span>
                            </div>
                        </div>

                        <div className="extras">
                            <div className="permanecer-conectado">
                                <label className="form-label permanecer-conectado" htmlFor="checkbox">
                                    Permanecer conectado </label>

                                <label className='permanecer-conectado--checkbox' htmlFor="permanecer-conectado--hidden-checkbox"><input
                                    type="checkbox" className="permanecer-conectado--hidden-checkbox" id="checkbox" /></label>
                            </div>

                            <div className="esqueci-minha-senha mb-4">
                                <span className="esqueci-minha-senha--text" data-bs-toggle="modal" data-bs-target="#modalCenter"> Esqueci minha senha </span>
                            </div>
                        </div>

                        <button type="submit" className="acessar--btn w-100"> Entrar </button>
                    </form>


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
                </div>
            </div>
        );
    }
}

export default Acessar;