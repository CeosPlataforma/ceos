import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contato extends Component {
    render() {
        return (
            <div>
                <div className="container contato" id="contato">
                    <h2 className="contato--title text-center mb-4">
                        Fale conosco
                    </h2>

                    <p className="contato--text">
                        Está com alguma dúvida referente à plataforma? Mande já uma mensagem.
                    </p>

                    <form className="contato--form col-lg-6 mx-auto">
                        <div className="mb-4">
                            <label htmlFor="contato--nome" className="form-label"> Nome </label>
                            <input type="text" className="form-control contato--input" id="contato--nome" required />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="contato--email" className="form-label"> E-mail </label>
                            <input type="email" className="form-control contato--input" id="contato--email" required />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="contato--assunto" className="form-label"> Assunto </label>
                            <input type="text" className="form-control contato--input" id="contato--assunto" required />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="contato--mensagem" className="form-label"> Mensagem </label>
                            <textarea className="form-control" id="contato--mensagem" required />
                        </div>

                        <button type="submit" className="contato--btn w-100"> Enviar mensagem </button>
                    </form>
                </div>

                <div className="container-fluid cta px-0">
                    <div className="container container-padding">
                        <h2 className="cta--title text-center pb-4">
                            Comece agora mesmo a usar a plataforma Ceos!
                        </h2>
                        <div className="cta--arrow"></div>

                        <div className="d-grid d-md-flex justify-content-center">
                            <Link to="/acessar" type="button" className="cta--btn"> Acessar </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contato;