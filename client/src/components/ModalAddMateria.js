import React, { Component, useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import $ from 'jquery'

export default function ModalAddMateria(props) {
        
        const initialValues = {
            name: ''
        }

        const validationSchema = Yup.object({
            name: Yup.string().min(2, "Nome muito pequeno").max(25, "Nome muito grande").required("Campo necessário")
        });

        const botaoFechar = useRef(null);

        function handleClick() {
            botaoFechar.current.click();
        };

        axios.defaults.withCredentials = true
        const onSubmit = async (values, actions) => {
            await axios.post("http://localhost:3333/materia", { name: values.name })
            .then((response) => {
                if (response.data.materiaAlreadyExists) {
                    actions.setFieldError("name", response.data.message);
                } else {
                    console.log()
                    handleClick()
                }
            }).catch((error) => {
                console.log(error)
            });
        }

       

        console.log(props);
        return (
            <div className="modal fade" id="modalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="container">
                            <div className="row justify-content-end">
                                <div className="col-10">
                                    <div className="modal-header">
                                        <h2 className="modal--title" id="exampleModalLongTitle">Criar nova matéria
                                        </h2>
                                        <p className="text-lg"></p>
                                    </div>
                                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
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
                                </div>
                                <div className="col-1">
                                    <button ref={botaoFechar} type="button" className="btn-close close" data-bs-dismiss="modal"
                                        aria-label="Close">X</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}
