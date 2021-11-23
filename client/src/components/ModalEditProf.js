import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from "react";
import Modal from 'react-bootstrap/Modal';
import * as Yup from 'yup';

function ModalAddMateria(props) {

    const initialValues = {
        professor: ''
    }

    const validationSchema = Yup.object({
        professor: Yup.string().min(2, "Nome muito pequeno").max(25, "Nome muito grande").required("Campo necessário")
    });

    // console.log(props);
    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" contentClassName="modal-content--plataforma" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title modal--title--plataforma">Edite professor(a)</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={props.onSubmit}>
                    <Form>
                        <div className="modal-body">
                            <p className="text-lg">Nome do(a) professor(a)</p>
                            <Field name="professor" type="text" className="form-control modal--input" aria-describedby="nome" required />
                            <ErrorMessage component="span" className="error-msg mb-4" name="professor" />
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn--primary text-md w-100 mx-auto">Salvar</button>
                        </div>
                    </Form>
                </Formik>
            </Modal.Body>
        </Modal>
    );
}

export default ModalAddMateria