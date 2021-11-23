import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import axios from "axios";
import * as Yup from 'yup';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Navigator, useNavigate } from "react-router";
import BlueFooter from "../components/BlueFooter";

export default function Contato() {

    const redirect = useNavigate()

    const onSubmit = async (values, actions) => {
        axios.post('http://localhost:3333/contato', {
            nome: values.nome,
            email: values.email,
            assunto: values.assunto,
            mensagem: values.mensagem,
        }).then((response) => {
            // actions.setFieldError("mensagem", "Em breve uma pessoa do nossa equipe de suporte entrara em contato com você.")
            setShow(true)
        })
    }

    const [show, setShow] = useState(false)

    const initialValues = {
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
    }

    const validationSchema = Yup.object({
        nome: Yup.string().min(2, "Nome muito pequeno").max(25, "Nome muito grande").required("Obrigatório"),
        email: Yup.string().email("Email inválido").required('Obrigatório'),
        assunto: Yup.string().required('Obrigatório'),
        mensagem: Yup.string().required('Obrigatório')
    });

    return (
        <>
            <div className="container contato" id="contato">
                <h2 className="contato--title text-center mb-4">
                    Fale conosco
                </h2>

                <p className="contato--text">
                    Está com alguma dúvida referente à plataforma? Mande já uma mensagem.
                </p>

                <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
                    <Form className="contato--form col-lg-6 mx-auto">
                        <div className="mb-4">
                            <label htmlFor="contato--nome" className="form-label"> Nome </label>
                            <Field name="nome" type="text" className="form-control contato--input" id="contato--nome" required />
                            <ErrorMessage name="nome" component="span" className="error-msg" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="contato--email" className="form-label"> E-mail </label>
                            <Field name="email" type="email" className="form-control contato--input" id="contato--email" required />
                            <ErrorMessage name="email" component="span" className="error-msg" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="contato--assunto" className="form-label"> Assunto </label>
                            <Field name="assunto" type="text" className="form-control contato--input" id="contato--assunto" required />
                            <ErrorMessage name="assunto" component="span" className="error-msg" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="contato--mensagem" className="form-label"> Mensagem </label>
                            <Field control="textarea" as="textarea" name="mensagem" className="form-control" id="contato--mensagem" required />
                            <ErrorMessage name="mensagem" component="span" className="error-msg" />
                        </div>

                        <button type="submit" className="contato--btn w-100"> Enviar mensagem </button>
                    </Form>
                </Formik>

                {/* <form className="contato--form col-lg-6 mx-auto" method="POST" action="http://localhost:3333/contato">
                    <div className="mb-4">
                        <label htmlFor="contato--nome" className="form-label"> Nome </label>
                        <input type="text" name="nome" className="form-control contato--input" id="contato--nome" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="contato--email" className="form-label"> E-mail </label>
                        <input type="email" name="email" className="form-control contato--input" id="contato--email" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="contato--assunto" className="form-label"> Assunto </label>
                        <input type="text" name="assunto" className="form-control contato--input" id="contato--assunto" required />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="contato--mensagem" className="form-label"> Mensagem </label>
                        <textarea className="form-control" id="contato--mensagem" name="mensagem" required />
                    </div>

                    <button type="submit" className="contato--btn w-100"> Enviar mensagem </button>
                </form> */}
            </div>


            <Modal show={show} onHide={() => setShow(false)} onExited={() => { redirect('/') }} size="md" aria-labelledby="contained-modal-title-vcenter" contentClassName="modal-content--plataforma" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h1 className="modal--title modal--title--plataforma">Tudo certo!</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Em breve a nossa equipe de suporte entrara em contato com você.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" onClick={() => { setShow(false) }} className="btn--primary w-100 ">OK!</Button>
                </Modal.Footer>
            </Modal>

            <BlueFooter />
        </>
    );
}