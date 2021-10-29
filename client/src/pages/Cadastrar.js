import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
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
        confirmPassword: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Email inválido").required('Obrigatório'),
        name: Yup.string().required('Obrigatório'),
        password: Yup.string().required('Obrigatório'),
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
            <h2 className="cadastrar--title text-center mb-4">
                Crie sua conta
            </h2>

            <p className="cadastrar--text">
                Já possui uma conta? <span> <Link to="/acessar"> Entre agora mesmo. </Link> </span>
            </p>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>

                <Form className="cadastrar--form col-lg-6 mx-auto">

                    <div className="mb-4">
                        <label htmlFor="cadastrar--nome" className="form-label"> Nome completo </label>
                        <Field name="name" type="text" className="form-control cadastrar--input" id="cadastrar--nome" required />
                        <ErrorMessage name="name" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="cadastrar--email" className="form-label"> E-mail </label>
                        <Field name="email" type="email" className="form-control acessar--input" id="cadastrar--email" required />
                        <ErrorMessage name="email" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="cadastrar--senha" className="form-label"> Senha </label>
                        <div className="cadastrar--senha--container senha--container">
                            <Field name="password" type={passwordShown ? "text" : "password"} className="form-control cadastrar--input" id="cadastrar--senha" required />
                            <span onClick={toggleSenha} className="show-password text-md">{textoMostrar} senha</span>
                            <ErrorMessage name="password" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="cadastrar--confirme-sua-senha" className="form-label"> Confirme sua senha </label>
                        <div className="cadastrar--senha--container senha--container">
                            <Field name="confirmPassword" type={passwordConfirmShown ? "text" : "password"} className="form-control cadastrar--input" id="cadastrar--confirme-sua-senha" required />
                            <span onClick={toggleSenhaConfirmar} className="show-password text-md">{textoConfirmMostrar} senha</span>
                            <ErrorMessage name="confirmPassword" />
                        </div>
                    </div>

                    <button type="submit" className="cadastrar--btn w-100"> Cadastrar </button>
                </Form>

            </Formik>

            <ModalCadastro show={show} />
        </div>
    );
}