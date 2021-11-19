import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from "react";
import Modal from 'react-bootstrap/Modal';
import * as Yup from 'yup';

function ModalAddMateria(props) {

    const initialValues = {
        name: ''
    }

    const validationSchema = Yup.object({
        name: Yup.string().min(2, "Nome muito pequeno").max(18, "Nome muito grande").required("Campo necessário")
    });


    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" contentClassName="modal-content--plataforma" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title modal--title--plataforma">Adicione uma matéria</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={props.onSubmit}>
                    <Form>
                        <div className="modal-body mb-4">
                            <p className="text-lg">Informe o nome da nova matéria</p>
                            <Field name="name" type="text" className="form-control modal--input" placeholder="ex. Ciências"
                                aria-describedby="emailRecover" required />
                            <ErrorMessage component="span" className="error-msg" name="name" />
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary w-100 mx-auto ">Confirmar</button>
                        </div>
                    </Form>
                </Formik>
            </Modal.Body>
        </Modal>
    );
}

export default ModalAddMateria