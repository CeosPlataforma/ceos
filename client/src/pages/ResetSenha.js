import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import * as Yup from 'yup';
import ModalEsqueceuSenha from "../components/ModalEsqueceuSenha";

export default function Acessar() {

    const { userID } = useParams()
    const [modalShow, setModalShow] = useState(false);

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

    const history = useHistory();

    const redirect = () => {
        history.push(`/dados-pessoais`)
    }

    const initialValues = {
        password: ''
    };

    const validationSchema = Yup.object({
        password: Yup.string().required('Obrigatório'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'As senhas devem ser iguais').required('Obrigatório')
    });

    axios.defaults.withCredentials = true
    const onSubmit = async (values, actions) => {
        await axios.post("http://localhost:3333/redefinir-senha", { password: values.password, user_uuid: userID })
            .then(function (response) {
                if (response.data.error === "inexistent") {
                    actions.setFieldError("password", `erro: usuario inexistente`);
                } else if (response.data.success) {
                    actions.setFieldError("password", `Sucesso!`)
                    setModalShow(true)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <div className="container acessar" id="acessar">
                <h2 className="acessar--title text-center mb-4">
                    Esqueceu sua senha?
                </h2>
                <p className="acessar--text">
                    Escolha uma nova senha aqui
                </p>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form className="acessar--form col-lg-6 mx-auto">
                        <div className="mb-4">
                            <label htmlFor="acessar--senha" className="form-label"> Senha </label>
                            <div className="acessar--senha--container senha--container">
                                <Field name="password" type={passwordShown ? "text" : "password"} className="form-control acessar--input" id="acessar--senha" required />
                                <span onClick={toggleSenha} className="show-password text-md">{textoMostrar} senha</span>
                                <ErrorMessage name="password" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="cadastrar--confirme-sua-senha" className="form-label"> Confirme sua senha </label>
                            <div className="cadastrar--senha--container senha--container">
                                <Field name="confirmPassword" type={passwordConfirmShown ? "text" : "password"} className="form-control acessar--input" id="acessar--senha" required />
                                <span onClick={toggleSenhaConfirmar} className="show-password text-md">{textoConfirmMostrar} senha</span>
                                <ErrorMessage name="confirmPassword" />
                            </div>
                        </div>
                        <button type="submit" className="acessar--btn w-100"> Confirmar </button>
                    </Form>
                </Formik>
            </div>
            <ModalEsqueceuSenha show={modalShow} onHide={() => setModalShow(false)}/>
        </div >
    );
}

