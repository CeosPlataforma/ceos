import React, { Component } from "react";
import $ from 'jquery';

class DadosPessoais extends Component {

componentDidMount = () => {
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

    // Dados pessoais
    let dados_btn = $(".dados-pessoais--btn");
    let dados_inputs = $(".dados-pessoais--input");

    dados_btn.on("click", function () {
        if (dados_btn.text() === "Alterar dados") {
            dados_btn.text("Salvar alterações");
            dados_inputs.css("cursor", "text");
            dados_inputs.attr("readonly", false);
            dados_btn.attr("type", "submit"); // arrudas, tem q dar um jeito do submit funcionar como gente
        } else {
            dados_btn.text("Alterar dados");
            dados_inputs.css("cursor", "default");
            dados_inputs.attr("readonly", true);
            dados_btn.attr("type", "button");
        }
    });
}

    render() {
        return (
            <div>
                <div className="container-xxl container-padding dados-pessoais">
                    <div className="row align-items-center">

                        <div className="col-sm-12 col-xl-5">
                            <h1 className="dados-pessoais--title">Dados pessoais</h1>
                            <h4 className="dados-pessoais--sub-title">Foto de perfil</h4>
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 45.532 45.532" xmlSpace="preserve" class="dados-pessoais--user-img">
                                <path d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765
                                    S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53
                                    c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012
                                    c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592
                                    c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"/>
                            </svg>
                            <button className="dados-pessoais--alterar">Alterar foto</button>
                            <a className="dados-pessoais--desativar"> Desativar conta</a>
                        </div>

                        <div className="col-sm-12 col-xl-7 mx-auto">
                            <form className="dados-pessoais--form" name="form" action="#" method="">
                                <label for="dados-pessoais--nome" className="form-label">Nome</label>
                                <input type="text" className="form-control dados-pessoais--input mb-4" id="dados-pessoais--nome"
                                    defaultValue="Nome de usuário" readonly="true" />
                                <label for="dados-pessoais--email" className="form-label">E-mail</label>
                                <input type="text" className="form-control dados-pessoais--input mb-4" id="dados-pessoais--email"
                                    defaultValue="emaildousuario@gmail.com" readonly="true" />
                                <label for="dados-pessoais--senha" className="form-label">Senha</label>
                                <div className="dados-pessoais--senha--container senha--container">
                                    <input type="password" className="form-control dados-pessoais--input mb-5"
                                        id="dados-pessoais--senha" defaultValue="senhadousuario" readonly="true" />
                                    <span className="show-password text-md">Mostrar senha</span>
                                    <span className="hide-password text-md">Ocultar senha</span>
                                </div>
                                <button type="button" className="dados-pessoais--btn w-100" href="#">Alterar dados</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DadosPessoais;