import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

function ModalAlterarSenha(props) {

    // const history = useHistory();

    // const redirect = () => {
    //     history.push(`/logout`)
    // }

    return (
        // <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter alterar-senha" centered>
        //     <Modal.Header>
        //         <Modal.Title id="contained-modal-title-vcenter">
        //             <h1 className="modal--title--mini">Altere sua senha</h1>
        //         </Modal.Title>
        //     </Modal.Header>
        //     <Modal.Body>
        // <Formik onSubmit={props.onSubmit}>
        //     {/*initialValues={initialValues} validationSchema={validationSchema}*/}
        //     <Form>
        //         <p className="text-lg">Senha atual</p>
        //         <Field name="name" type="password" className="form-control modal--input mb-4" aria-describedby="email" required />
        //         <ErrorMessage name="name" />
        //         <p className="text-lg">Nova senha</p>
        //         <Field name="name" type="password" className="form-control modal--input mb-4" aria-describedby="email" required />
        //         <ErrorMessage name="name" />
        //         <p className="text-lg">Confirmar nova senha</p>
        //         <Field name="name" type="password" className="form-control modal--input mb-4" aria-describedby="email" required />
        //         <ErrorMessage name="name" />
        //     </Form>
        // </Formik>
        //     </Modal.Body>
        //     <Modal.Footer style={{ flexDirection: "column" }}>
        //         <Button className="text-md w-100 modal--btn">Confirmar alterações</Button>
        //     </Modal.Footer>
        // </Modal>
        <div></div>
    );
}


export default ModalAlterarSenha;