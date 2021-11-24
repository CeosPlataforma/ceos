import React, { useState } from "react";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

export default function AdminLogin() {

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

    return (
        <>
            <Container className="container-padding hero">
                {/* <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}> */}
                <Form className="acessar--form col-lg-6 mx-auto">
                    <div className="mb-4">
                        <label htmlFor="acessar--email" className="form-label"> E-mail </label>
                        <input name="email" autocomplete="email" type="email" className="form-control acessar--input" id="acessar--email" required />
                        {/* <ErrorMessage component="span" className="error-msg" name="email" /> */}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="acessar--senha" className="form-label"> Senha </label>
                        <div className="acessar--senha--container senha--container">
                            <input name="password" autocomplete="current-password" type={passwordShown ? "text" : "password"} className="form-control acessar--input" id="acessar--senha" required />
                            <span onClick={toggleSenha} className="show-password">{textoMostrar} senha</span>
                        </div>
                        {/* <ErrorMessage component="span" className="error-msg" name="password" /> */}
                    </div>

                    <button type="submit" className="acessar--btn w-100"> Entrar </button>
                </Form>
                {/* </Formik> */}
            </Container>
        </>
    );
}