import React, { useEffect, useState } from "react";
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
//import api from '../utils/api'
import jwtDecode from 'jwt-decode'

import ModalSenha from "../components/ModalSenha";

export default function Acessar(props) {

    axios.defaults.withCredentials = true
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
    const history = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            axios.post("http://localhost:3333/token-login", { token: jwtDecode(token) })
                .then((response) => {
                    if (response.data.message === "adm-login") history('/dashboard')
                    if (response.data.success) history('/painel')
                })
        }
    }, [])

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Email inválido").required('Obrigatório'),
        password: Yup.string().required('Obrigatório'),
    });

    const onSubmit = async (values, actions) => {
        await axios.post("http://localhost:3333/login", { email: values.email, password: values.password })
            .then(function (response) {

                if (response.data.message === "adm-login") {
                    localStorage.setItem('token', response.data.token)
                    props.onLogin(jwtDecode(response.data.token))
                    history(`/dashboard`)
                } else if (response.data.error === "inexistent") {
                    actions.setFieldError("email", `Este usuário não existe`);
                } else if (response.data.error === "verify") {
                    actions.setFieldError("email", `Por favor, verifique seu e-mail antes de se logar`);
                } else if (response.data.error === "password") {
                    actions.setFieldError("password", `Senha incorreta`);
                } else if (response.status === 201) {
                    const { token } = response.data
                    localStorage.setItem('token', token)
                    props.onLogin(jwtDecode(token))
                    history(`/painel`)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    
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
                            <Field name="email" autocomplete="email" type="email" className="form-control acessar--input" id="acessar--email" required />
                            <ErrorMessage component="span" className="error-msg" name="email" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="acessar--senha" className="form-label"> Senha </label>
                            <div className="acessar--senha--container senha--container">
                                <Field name="password" autocomplete="current-password" type={passwordShown ? "text" : "password"} className="form-control acessar--input" id="acessar--senha" required />
                                <span onClick={toggleSenha} className="show-password">{textoMostrar} senha</span>
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

