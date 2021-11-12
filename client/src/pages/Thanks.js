import React from "react";
import "aos/dist/aos.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import { ErrorMessage, Field, Form, Formik } from 'formik';

import hero from "../assets/illustrations/hero.svg";

export default function Thanks() {
    return (
        <>
            <Container className="container-padding thanks">
                <Row className="align-items-center mb-5">
                    <div className="col-sm-12 col-xl-7">
                        <h1 className="hero--title mb-3"> Obrigado por utilizar a plataforma CEOS </h1>

                        <p className="thanks--text mb-4">
                            Nossa equipe está trabalhando constantemente para melhorar a plataforma CEOS e tornar sua vida escolar melhor. No entanto, nunca avançaríamos sem o feedback de nossos usuários.
                        </p>
                    </div>

                    <div className="col-sm-12 col-xl-5">
                        <img src={hero} className="d-none d-xl-block mx-auto img-fluid" width="700px" height="100%" />
                    </div>
                </Row>

                <div className="mt-5">
                    <h1 className="mb-2 text-center"> Por que você desativou sua conta? </h1>
                    <h2 className="mb-4 text-center">Agradecemos por nos dizer por que você acha que a plataforma CEOS merece parar de ser utilizada e prometemos levar sua nota em consideração.</h2>
                </div>

                <form className="thanks--form">
                    <Row xs={1} md={2}>
                        <Col className="mb-4">
                            <label htmlFor="acessar--senha" className="form-label"> Qual o motivo da desativação da conta? </label>
                            <Form.Select className="modal--input thanks-dropdown mb-4 shadow-none" required>
                                <option className="thanks-dropdown--select">Selecione um motivo</option>
                                <option value="1">Não funciona</option>
                                <option value="2">Não oferece o que promete</option>
                                <option value="3">Não entendi como usa</option>
                                <option value="3">Encontrei funções mal-feitas</option>
                                <option value="3">Outro</option>
                            </Form.Select>

                            <label htmlFor="acessar--senha" className="form-label"> E-mail (caso precisemos contatá-lo) </label>
                            <input className="form-control" required />
                        </Col>
                        <Col className="mb-5">
                            <label htmlFor="contato--mensagem" className="form-label"> Mensagem </label>
                            <textarea className="form-control" id="thanks--mensagem" name="mensagem" required />
                        </Col>
                        <Col className="mt-2">
                            <button type="submit" className="acessar--btn w-100"> Enviar </button>
                        </Col>
                    </Row>
                </form>
            </Container>
        </>
    );
}