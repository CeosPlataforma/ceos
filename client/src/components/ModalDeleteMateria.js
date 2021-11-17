import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

function ModalDeleteMateria(props) {

    const history = useNavigate();

    const initialValues = {
        name: '',
        confirm: props.materia_name
    }

    const validationSchema = Yup.object({
        name: Yup.string().oneOf([props.materia_name], '').required('Obrigatório')
    });

    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" contentClassName="modal-content--plataforma" centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1 className="modal--title modal--title--plataforma">Para confirmar a exclusão, confirme o nome da matéria</h1>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formik onSubmit={props.onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
                    <Form>
                        <div className="modal-body mb-4">
                            <p className="text-lg mb-0">Nome</p>
                            <Field name="confirm" autoComplete="off" type="text" className="form-control modal--input" aria-describedby="materiaDelete" required readOnly={true}/>
                            <p className="text-lg mb-0 mt-4">Confirmação</p>
                            <Field name="name" autoComplete="off" type="text" className="form-control modal--input" aria-describedby="materiaDelete" required />
                            <ErrorMessage component="span" className="error-msg" name="name" />
                        </div>
                        <div className="modal-footer">
                            <Button type="submit" className="text-md w-100 modal--btn excluir-materia--btn">Confirmar exclusão</Button>
                        </div>
                    </Form>
                </Formik>
            </Modal.Body>
        </Modal>
    );
}

export default ModalDeleteMateria;