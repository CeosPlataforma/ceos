import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import FormCheck from 'react-bootstrap/FormCheck'

import ModalCadastro from "../components/ModalCadastro";

export default function Cadastrar() {

    const [show, setShow] = useState(false);

    const [textoMostrar, setTextoMostrar] = useState("Mostrar")
    const [passwordShown, setPasswordShown] = useState(false)

    const [textoConfirmMostrar, setTextoConfirmMostrar] = useState("Mostrar")
    const [passwordConfirmShown, setPasswordConfirmShown] = useState(false)


    const toggleSenha = () => {
        if (passwordShown) {
            setPasswordShown(false);
            setTextoMostrar("Mostrar")
        } else {
            setPasswordShown(true);
            setTextoMostrar("Ocultar")
        }
    }

    const toggleSenhaConfirmar = () => {
        if (passwordConfirmShown) {
            setPasswordConfirmShown(false);
            setTextoConfirmMostrar("Mostrar")
        } else {
            setPasswordConfirmShown(true);
            setTextoConfirmMostrar("Ocultar")
        }
    }

    const initialValues = {
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
        checkbox: false
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Email inválido").required('Obrigatório'),
        name: Yup.string().required('Obrigatório'),
        password: Yup.string().required('Obrigatório'),
        checkbox: Yup.bool().oneOf([true], 'Você precisa aceitar os termos de uso.'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'As senhas devem ser iguais').required('Obrigatório')
    });

    axios.defaults.withCredentials = true
    const onSubmit = async (values, actions) => {
        console.log(values);
        await axios.post("http://localhost:3333/register", { name: values.name, email: values.email, password: values.password })
            .then(function (response) {
                if (response.data.emailInUse) {
                    actions.setFieldError("email", response.data.message);
                }
                if (response.data.message === "sucesso") {
                    setShow(true);
                }
                //console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="container cadastrar" id="acessar">
            <h1 className="cadastrar--title text-center mb-4">
                Crie sua conta
            </h1>

            <p className="cadastrar--text">
                Já possui uma conta? <span> <Link to="/acessar"> Entre agora mesmo. </Link> </span>
            </p>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>

                <Form className="cadastrar--form col-lg-6 mx-auto">

                    <div className="mb-4">
                        <label htmlFor="cadastrar--nome" className="form-label"> Nome completo </label>
                        <Field name="name" autoComplete="name" type="text" className="form-control cadastrar--input" id="cadastrar--nome" required />
                        <ErrorMessage component="span" className="error-msg" name="name" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="cadastrar--email" className="form-label"> E-mail </label>
                        <Field name="email" autoComplete="email" type="email" className="form-control acessar--input" id="cadastrar--email" required />
                        <ErrorMessage component="span" className="error-msg" name="email" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="cadastrar--senha" className="form-label"> Senha </label>
                        <div className="cadastrar--senha--container senha--container">
                            <Field name="password" autoComplete="new-password" type={passwordShown ? "text" : "password"} className="form-control cadastrar--input" id="cadastrar--senha" required />
                            <span onClick={toggleSenha} className="show-password">{textoMostrar} senha</span>
                        </div>
                        <ErrorMessage component="span" className="error-msg" name="password" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="cadastrar--confirme-sua-senha" className="form-label"> Confirme sua senha </label>
                        <div className="cadastrar--senha--container senha--container">
                            <Field name="confirmPassword" autoComplete="new-password" type={passwordConfirmShown ? "text" : "password"} className="form-control cadastrar--input" id="cadastrar--confirme-sua-senha" required />
                            <span onClick={toggleSenhaConfirmar} className="show-password">{textoConfirmMostrar} senha</span>
                        </div>
                        <ErrorMessage component="span" className="error-msg" name="confirmPassword" />
                    </div>

                    <div className="d-flex align-items-center termos">
                        <Field type="checkbox" name="checkbox" className="termos--checkbox" />
                        <span>
                            Eu li e concordo com os<a href="/termos" target="_blank"> termos e condições de uso da CEOS</a>
                        </span>
                    </div>
                    <ErrorMessage component="span" className="error-msg" name="checkbox" />

                    <button type="submit" className="cadastrar--btn mt-4 w-100"> Cadastrar </button>
                </Form>

            </Formik>

            <ModalCadastro show={show} />
        </div>
    );
}