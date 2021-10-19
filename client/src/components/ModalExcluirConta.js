import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

function ModalExcluirConta(props) {

    const history = useHistory();

    const redirect = () => {
        history.push(`/logout`)
    }

    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter desativar-conta" centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title--desativar-conta">Confirmar desativação da conta</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik onSubmit={props.onSubmit}>
                    {/*initialValues={initialValues} validationSchema={validationSchema}*/}
                    <Form>
                        <p className="text-lg">E-mail</p>
                        <Field name="name" type="text" className="form-control modal--input mb-4" aria-describedby="email" required />
                        <ErrorMessage name="name" />
                        <p className="text-lg">Senha</p>
                        <Field name="name" type="password" className="form-control modal--input mb-4" aria-describedby="email" required />
                        <ErrorMessage name="name" />
                    </Form>
                </Formik>
            </Modal.Body>
            <Modal.Footer>
                <Button className="text-md w-100 modal--btn desativar-conta--btn">Confirmar desativação</Button>
                {//onClick={redirect}
                }
            </Modal.Footer>
        </Modal>
    );
}


export default ModalExcluirConta;