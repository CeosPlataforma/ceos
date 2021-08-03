import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import axios from 'axios';

export default function Acessar() {

    const [textoMostrar, setTextoMostrar] = useState("Mostrar")
    const [passwordShown, setPasswordShown] = useState(false)

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
        history.push(`/dados-pessoais`)
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
        await axios.post("http://localhost:3333/login", {email: values.email, password: values.password})
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

    //  TODO <-  
    //     // Permanecer conectado
    //     $('.permanecer-conectado').on('click', function () {
    //         let checkbox_value = $('.permanecer-conectado--hidden-checkbox').prop('checked');

    //         if (checkbox_value === false) {
    //             $('.permanecer-conectado--hidden-checkbox').prop('checked', true);
    //             $('.permanecer-conectado--checkbox').toggleClass('filled');
    //         }

    //         if (checkbox_value) {
    //             $('.permanecer-conectado--hidden-checkbox').prop('checked', false);
    //             $('.permanecer-conectado--checkbox').toggleClass('filled');
    //         }
    //     });

   
    return (
        <div>
            <div className="container acessar" id="acessar">
                <h2 className="acessar--title text-center mb-4">
                    Entre com a sua conta
                </h2>

                <p className="acessar--text">
                    Novo por aqui? <span> <Link to="/cadastrar"> Crie sua conta. </Link > </span>
                </p>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form className="acessar--form col-lg-6 mx-auto">
                        <div className="mb-4">
                            <label htmlFor="acessar--email" className="form-label"> E-mail </label>
                            <Field name="email" type="email" className="form-control acessar--input" id="acessar--email" required />
                            <ErrorMessage name="email" />
                        </div>

                        <div className="mb-4">
                                <label htmlFor="acessar--senha" className="form-label"> Senha </label>
                                <div className="acessar--senha--container senha--container">
                                    <Field name="password" type={passwordShown ? "text" : "password"} className="form-control acessar--input" id="acessar--senha" required />
                                    <span onClick={toggleSenha} className="show-password text-md">{textoMostrar} senha</span>
                                    <ErrorMessage name="password" />
                                </div>
                            </div>

                        {/* <div className="extras">
                            <div className="permanecer-conectado">
                                <label className="form-label permanecer-conectado" htmlFor="checkbox">
                                    Permanecer conectado </label>

                                <label className='permanecer-conectado--checkbox' htmlFor="permanecer-conectado--hidden-checkbox"><input
                                    type="checkbox" className="permanecer-conectado--hidden-checkbox" id="checkbox" /></label>
                            </div>

                            <div className="esqueci-minha-senha mb-4">
                                <span className="esqueci-minha-senha--text" data-bs-toggle="modal" data-bs-target="#modalCenter"> Esqueci minha senha </span>
                            </div>
                        </div> */}

                        <button type="submit" className="acessar--btn w-100"> Entrar </button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

