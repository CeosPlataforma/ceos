import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from "react";
import Modal from 'react-bootstrap/Modal';
import * as Yup from 'yup';

function ModalAddMateria(props) {
        
    const initialValues = {
        name: ''
    }

    const validationSchema = Yup.object({
        name: Yup.string().min(2, "Nome muito pequeno").max(25, "Nome muito grande").required("Campo necessário")
    });

    console.log(props);
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title">Verificação de e-mail</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={props.onSubmit}>
                    <Form>
                        <div className="modal-body">
                            <p className="text-lg">Informe o nome da nova matéria</p>
                            <Field name="name" type="text" className="form-control modal--input mb-4" placeholder="ex. Ciências"
                                aria-describedby="emailRecover" required />
                            <ErrorMessage name="name"/>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" className="btn btn-primary text-md w-100 modal--btn">Confirmar</button>
                        </div>
                    </Form>
                </Formik>
            </Modal.Body>
        </Modal>
    );
}

export default ModalAddMateria