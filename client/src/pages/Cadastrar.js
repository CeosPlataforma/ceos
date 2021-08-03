import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';

class Cadastrar extends Component {

    componentDidMount = () => {
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
                <div className="container cadastrar" id="acessar">

                    <h2 className="cadastrar--title text-center mb-4">
                        Crie sua conta
                    </h2>

                    <p className="cadastrar--text">
                        Já possui uma conta? <span> <Link to="/acessar"> Entre agora mesmo. </Link> </span>
                    </p>

                    <form className="cadastrar--form col-lg-6 mx-auto">

                        <div className="mb-4">
                            <label htmlFor="cadastrar--nome" className="form-label"> Nome completo </label>
                            <input type="text" className="form-control cadastrar--input" id="cadastrar--nome" required />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="cadastrar--email" className="form-label"> E-mail </label>
                            <input type="email" className="form-control acessar--input" id="cadastrar--email" required />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="cadastrar--senha" className="form-label"> Senha </label>
                            <div className="cadastrar--senha--container senha--container">
                                <input type="password" className="form-control cadastrar--input" id="cadastrar--senha" required />
                                <span className="show-password text-md">Mostrar senha</span>
                                <span className="hide-password text-md">Ocultar senha</span>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="cadastrar--confirme-sua-senha" className="form-label"> Confirme sua senha </label>
                            <div className="cadastrar--senha--container senha--container">
                                <input type="password" className="form-control cadastrar--input" id="cadastrar--confirme-sua-senha"
                                    required />
                                <span className="show-password text-md">Mostrar senha</span>
                                <span className="hide-password text-md">Ocultar senha</span>
                            </div>
                        </div>

                        <button type="submit" className="cadastrar--btn w-100"> Cadastrar </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Cadastrar;