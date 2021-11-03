import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from "react";
import Modal from 'react-bootstrap/Modal';
import * as Yup from 'yup';

function ModalAddMateria(props) {

    // const initialValues = {
    //     name: ''
    // }

    // const validationSchema = Yup.object({
    //     name: Yup.string().min(2, "Nome muito pequeno").max(25, "Nome muito grande").required("Campo necessário")
    // });

    // console.log(props);
    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" contentClassName="modal-content--plataforma" centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title modal--title--plataforma">Edite professor(a)</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={props.onSubmit}>
                    <Form> */}
                <div className="modal-body">
                    <p className="text-lg">Nome do(a) professor(a)</p>
                    {/* <Field name="name" type="text" className="form-control modal--input mb-4" aria-describedby="emailRecover" required />
                    <ErrorMessage component="p" className="error-msg" name="name" /> */}
                    <input name="name" type="text" className="form-control modal--input mb-4" aria-describedby="emailRecover" required />
                </div>
                <div class="modal-footer">
                    <button type="submit" className="btn btn-primary text-md w-100 mx-auto modal--btn">Salvar</button>
                </div>
                {/* </Form>
                </Formik> */}
            </Modal.Body>
        </Modal>
    );
}

export default ModalAddMateria