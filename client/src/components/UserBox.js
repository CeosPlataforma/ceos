import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'
import * as Yup from 'yup'
import Avatar from "./Avatar"
import axios from "axios";
import { Field, Form, Formik } from 'formik';

export default function UserBox({ userImage, user }) {

    const [show, setShow] = useState(false);
    const [click, setClick] = useState(0)
    const [btnText, setTxt] = useState("Excluir usuário")
    const [done, setDone] = useState(false)
    const [check, setCheck] = useState(user.verifiedMail)
    const [touched, setTouched] = useState(false)

    const deleteUser = async () => {
        setTxt(<Spinner animation="border" />)
        axios.post("http://localhost:3333/dashboard/usuarios/delete", {
            uuid: user.uuid,
            _id: user._id
        }).then((response) => {
            console.log(response.data)
            setInterval(() => setDone(true), 2000)
            //setDone(true)
        })
    }

    const onSubmitEdit = async (values, actions) => {
        axios.patch("http://localhost:3333/dashboard/usuarios/edit",
            {
                uuid: user.uuid,
                _id: user._id,
                velho: {
                    nome: user.name,
                    email: user.email,
                    verifiedMail: user.verifiedMail,
                },
                novo: {
                    nome: values.name,
                    email: values.email,
                    verifiedMail: check
                }
            }
        )
            .then((response) => {
                if (response.data.success) {
                    setTouched(true)
                    setShow(false)
                } else if (response.data.message === "no-change") {
                    actions.setFieldError("nome", "Não foi feita nenhuma mudança.")
                }
            }).catch(error => console.log(error))
    }

    useEffect(() => {
        if (done) window.location.reload()
        return () => {
            setClick(0)
            setDone(false)
        }
    }, [done])

    const initialValues = {
        name: user.name,
        email: user.email
    }

    return (
        <>
            <Col>
                <div className="msg-box mb-4">
                    <Avatar className="dashboard--user-img" userImage={userImage} />
                    <p>UUID: {user.uuid}</p>
                    <p>ID: {user._id}</p>
                    <p>Nome: {user.name}</p>
                    <p>E-mail: {user.email}</p>
                    <p>Verificado: <input type="checkbox" className="modal--checkbox" checked={user.verifiedMail} disabled={true} /></p>
                    {/* <p>Hash: {user.hash}</p>
                    <p>Salt: {user.salt}</p> */}
                    <p>Criado em: {new Date(user.createdAt).toISOString().substr(0, 10)}</p>
                    <div className="d-flex justify-content-between mt-4">
                        <button className="btn--secondary w-50 red-btn text-wrap d-flex justify-content-center align-items-center" style={{ 'paddingRight': '10px', 'paddingLeft': '10px' }} onClick={() => {
                            if (click < 1) setClick(click + 1); setTxt("Aperte novamente para confirmar")
                            if (click == 1) deleteUser()
                        }}>{btnText}</button>
                        <button className="btn--secondary w-50 btn-solved" onClick={() => setShow(true)}>Editar usuário</button>
                    </div>
                </div>
            </Col>

            <Modal
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                contentClassName="modal-content--plataforma modal-content--plataforma modal-admin-user"
                centered
                show={show}
                onHide={() => setShow(false)}
                onExited={() => { touched ? window.location.reload() : console.log("no change") }}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h1 className="modal--title modal--title--website">Alterar informações do usuário</h1>
                    </Modal.Title>
                </Modal.Header>
                <Formik initialValues={initialValues} onSubmit={onSubmitEdit}>
                    <Form>
                        <Modal.Body>
                            <Row className="justify-content-between">
                                <Col xs={12} lg={6}>
                                    <div className="input-holder">
                                        <p>UUID</p>
                                        <Field className="form-control modal--input"
                                            value={user.uuid}
                                            readOnly={true} />
                                    </div>
                                </Col>
                                <Col xs={12} lg={6}>
                                    <div className="input-holder">
                                        <p>Nome</p>
                                        <Field name="name" className="form-control modal--input"
                                        //value={user.name}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col xs={12} lg={6}>
                                    <div className="input-holder">
                                        <p>E-mail</p>
                                        <Field name="email" className="form-control modal--input"
                                        //value={user.email}
                                        />
                                    </div>
                                </Col>
                                <Col xs={12} lg={6}>
                                    <div className="input-holder">
                                        <p>Verificação</p>
                                        <Field type="checkbox" className="modal--checkbox"
                                            checked={check} onClick={() => { setCheck(!check) }}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="justify-content-between">
                                <Col xs={12} lg={6}>
                                    <div className="input-holder">
                                        <p>Hash</p>
                                        <input className="form-control modal--input"
                                            value={user.hash}
                                            readOnly={true} />
                                    </div>
                                </Col>
                                <Col xs={12} lg={6}>
                                    <div className="input-holder">
                                        <p>Salt</p>
                                        <input className="form-control modal--input"
                                            value={user.salt}
                                            readOnly={true} />
                                    </div>
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit" className="btn--primary btn-padding mx-auto">Salvar alterações no usuário</Button>
                        </Modal.Footer>
                    </Form>
                </Formik>
            </Modal>
        </>
    );
}