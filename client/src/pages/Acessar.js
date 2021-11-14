import React, { useState } from "react";
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link, useHistory } from "react-router-dom";
import * as Yup from 'yup';

import ModalSenha from "../components/ModalSenha";

export default function Acessar() {

    const [textoMostrar, setTextoMostrar] = useState("Mostrar")
    const [passwordShown, setPasswordShown] = useState(false)
    const [modalShow, setModalShow] = useState(false);

    const toggleSenha = () => {
        if (passwordShown) {
            setPasswordShown(false);
            setTextoMostrar("Mostrar")
        } else {
            setPasswordShown(true);
            setTextoMostrar("Ocultar")
        }
    }

    const history = useHistory();

    const redirect = () => {
        history.push(`/painel`)
    }

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Email inválido").required('Obrigatório'),
        password: Yup.string().required('Obrigatório'),
    });

    axios.defaults.withCredentials = true
    const onSubmit = async (values, actions) => {
        await axios.post("http://localhost:3333/login", { email: values.email, password: values.password })
            .then(function (response) {
                if (response.data.error === "inexistent") {
                    actions.setFieldError("email", `Este usuário não existe`);
                } else if (response.data.error === "verify") {
                    actions.setFieldError("email", `Por favor verifique seu email antes de se logar`);
                } else if (response.data.error === "password") {
                    actions.setFieldError("password", `Senha incorreta`);
                } else if (response.status === 201) {
                    redirect();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    axios.defaults.withCredentials = true
    const onSubmitModal = async (values, actions) => {
        await axios.post("http://localhost:3333/redefinir-senha", { email: values.email })
            .then(function (response) {
                if (response.data.error === "inexistent") {
                    actions.setFieldError("email", `Este usuário não existe`);
                } else if (response.data.success) {
                    actions.setFieldError("email", `Sucesso! Verifique seu email.`)
                    setTimeout(function () {
                        setModalShow(false)
                    }, 5000)
                } else {
                    actions.setFieldError("email", response.data.error)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <div className="container acessar" id="acessar">
                <h1 className="acessar--title text-center mb-4">
                    Entre com a sua conta
                </h1>

                <p className="acessar--text">
                    Novo por aqui? <span> <Link to="/cadastrar"> Crie sua conta. </Link > </span>
                </p>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form className="acessar--form col-lg-6 mx-auto">
                        <div className="mb-4">
                            <label htmlFor="acessar--email" className="form-label"> E-mail </label>
                            <Field name="email" type="email" className="form-control acessar--input" id="acessar--email" required />
                            <ErrorMessage component="span" className="error-msg" name="email" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="acessar--senha" className="form-label"> Senha </label>
                            <div className="acessar--senha--container senha--container">
                                <Field name="password" type={passwordShown ? "text" : "password"} className="form-control acessar--input" id="acessar--senha" required />
                                <span onClick={toggleSenha} className="show-password text-md">{textoMostrar} senha</span>
                            </div>
                            <ErrorMessage component="span" className="error-msg" name="password" />
                        </div>

                        <div className="extras">
                            <div className="esqueci-minha-senha mb-4">
                                <span className="esqueci-minha-senha--text" onClick={() => setModalShow(true)}> Esqueci minha senha </span>
                            </div>
                        </div>

                        <button type="submit" className="acessar--btn w-100"> Entrar </button>
                    </Form>
                </Formik>
            </div>
            <ModalSenha onSubmit={onSubmitModal} show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

