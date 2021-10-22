import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useHistory } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

function ModalDados(props) {

    // const history = useHistory();

    // const redirect = () => {
    //     history.push(`/logout`)
    // }

    // const [show3, setShow3] = useState(false);

    // const handleClose3 = () => setShow3(false);
    // const handleShow3 = () => setShow3(true);

    return (
        // <>
        //     <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter alterar-dados" centered>
        //         <Modal.Header>
        //             <Modal.Title id="contained-modal-title-vcenter">
        //                 <h1 className="modal--title--mini">Altere seus dados</h1>
        //             </Modal.Title>
        //         </Modal.Header>
        //         <Modal.Body>
        // <Formik onSubmit={props.onSubmit}>
        //     {/*initialValues={initialValues} validationSchema={validationSchema}*/}
        //     <Form>
        //         <p className="text-lg">Nome</p>
        //         <Field name="name" type="text" className="form-control modal--input mb-4" aria-describedby="email" required />
        //         <p className="text-lg">E-mail</p>
        //         <Field name="name" type="text" className="form-control modal--input mb-4" aria-describedby="email" required />
        //         <ErrorMessage name="name" />
        //         <p className="text-lg">Senha</p>
        //         <Field name="name" type="password" className="form-control modal--input mb-4" aria-describedby="email" required />
        //         <ErrorMessage name="name" />
        //     </Form>
        // </Formik>
        //         </Modal.Body>
        //         <Modal.Footer style={{ flexDirection: "column" }}>
        //             <Button className="text-md w-100 modal--btn" onClick={props.onHide}>Confirmar alterações</Button>
        //             <Button className="text-md w-100 modal--btn--secondary" onClick={props.onHide} onClick={handleShow3}>Alterar senha</Button>
        //         </Modal.Footer>
        //     </Modal>

        //     <div className="modal-alterar-senha">
        //         <ModalAlterarSenha show={show3} onHide={handleClose3} />
        //     </div>
        // </>
        <div>
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered alterar-dados">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 className="modal--title--mini">Altere seus dados</h1>
                        </div>
                        <div class="modal-body">
                            <Formik onSubmit={props.onSubmit}>
                                {/*initialValues={initialValues} validationSchema={validationSchema}*/}
                                <Form>
                                    <p className="text-lg">Nome</p>
                                    <Field name="name" type="text" className="form-control modal--input mb-4" aria-describedby="email" required />
                                    <p className="text-lg">E-mail</p>
                                    <Field name="name" type="text" className="form-control modal--input mb-4" aria-describedby="email" required />
                                    <ErrorMessage name="name" />
                                    <p className="text-lg">Senha atual</p>
                                    <Field name="name" type="password" className="form-control modal--input mb-4" aria-describedby="email" required />
                                    <ErrorMessage name="name" />
                                </Form>
                            </Formik>
                        </div>
                        <div class="modal-footer">
                            <Button className="text-md w-100 modal--btn" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Confirmar alterações</Button>
                            <Button className="text-md w-100 modal--btn--secondary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="#exampleModalToggle">Alterar senha</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 className="modal--title--mini">Altere sua senha</h1>
                        </div>
                        <div class="modal-body">
                            <Formik onSubmit={props.onSubmit}>
                                {/*initialValues={initialValues} validationSchema={validationSchema}*/}
                                <Form>
                                    <p className="text-lg">Senha atual</p>
                                    <Field name="name" type="password" className="form-control modal--input mb-4" aria-describedby="email" required />
                                    <ErrorMessage name="name" />
                                    <p className="text-lg">Nova senha</p>
                                    <Field name="name" type="password" className="form-control modal--input mb-4" aria-describedby="email" required />
                                    <ErrorMessage name="name" />
                                    <p className="text-lg">Confirmar nova senha</p>
                                    <Field name="name" type="password" className="form-control modal--input mb-4" aria-describedby="email" required />
                                    <ErrorMessage name="name" />
                                </Form>
                            </Formik>
                        </div>
                        <div class="modal-footer">
                            <Button className="text-md w-100 modal--btn" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Confirmar alterações</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ModalDados;