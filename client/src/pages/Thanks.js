import React from "react";
import "aos/dist/aos.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'

import BlueFooter from "../components/BlueFooter";

export default function Thanks() {

    axios.defaults.withCredentials = true
    const onSubmit = async (values, actions) => {
        console.log("values", values)
        console.log("actions", actions)

        axios.post("http://localhost:3333/feedback", {
            message: values.message,
            email: values.email,
            reason: values.reason
        }).then(response => {
            if (response.data.success) {
                actions.setFieldError("reason", "Enviado com sucesso")
                setTimeout(() => {
                    window.location = 'http://localhost:3000'
                }, 2000)
            } else {
                actions.setFieldError("reason", "erro perigo medo terror")
            }
        }).catch(error => console.log(error))


    }

    const initialValues = {
        reason: 'padrao',
        email: '',
        message: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Este não é um email válido.").required("Campo necessário"),
        reason: Yup.string().notOneOf(["padrao"], "Escolha uma opção").required("Campo necessário"),
        message: Yup.string()
    });


    return (
        <>
            <Container className="container-padding thanks">
                <Row className="align-items-start mb-5">
                    <div className="col-sm-12 col-xl-7">
                        <h1 className="hero--title mb-3"> Obrigado por utilizar a plataforma CEOS </h1>

                        <p className="thanks--text">
                            Nossa equipe está trabalhando constantemente para melhorar a plataforma CEOS e tornar sua vida escolar melhor. No entanto, nunca avançaríamos sem o feedback de nossos usuários.
                        </p>
                    </div>

                    <div className="col-sm-12 col-xl-5">
                        <svg className="d-none d-xl-block mx-auto img-fluid illustration styles_illustrationTablet__1DWOa" id="Layer_2" dataName="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="20 30 358 251">
                            <defs>
                                <linearGradient id="linear-gradient" x1="180.89" y1="237.42" x2="199.09" y2="226.72" gradientUnits="userSpaceOnUse"><stop offset="0" stop-opacity="0">
                                </stop>
                                    <stop offset="0.99" stop-color="#006837">
                                    </stop>
                                </linearGradient>
                                <linearGradient id="linear-gradient-2" x1="285.3" y1="220.36" x2="325.33" y2="186.88" xlinkHref="#linear-gradient">
                                </linearGradient>
                            </defs>
                            <title>PP</title>
                            <path d="M194.73,278.19,29,180.22c-5.28-3-9.8-7.83-4.66-11L190.67,73.33c2.5-1.55,6.29-2.56,8.82-1.09l174,101c5.28,3.06,6.22,11.63.94,14.69L216.58,278A22,22,0,0,1,194.73,278.19Z" fill="#9dcb00">
                            </path>
                            <path d="M197.88,213.11l-36.42,20.28L187.8,248l36.5-20.7C215.68,222.28,206.81,217.63,197.88,213.11Z" opacity="0.32" fill="url(#linear-gradient)"></path>
                            <path d="M197.22,213s-.19,9.6,1,10.19,8.38,10,8.89,11.51c1.68,4.92-7.42,7.09-10.68,5.41s-8.73-10.9-9.11-13.24-3.06-16.69-3.06-16.69" fill="#5b5ea5">
                            </path><path d="M210.86,204.65s-.19,9.6,1,10.19,13,7.6,13.58,9c1.89,4.57-7.33,6.31-10.59,4.64s-13.52-7.66-13.9-10-3.06-16.69-3.06-16.69" fill="#5b5ea5">
                            </path>
                            <path d="M174,112.22s-6.88,10.78-6,20.45,10.6,86.59,16.81,85.81,9.93.1,13.19-8c0,0,10.44,2.37,13.76-5.92,0,0-2.52-72.16-8.45-83.48S174,112.22,174,112.22Z" fill="#FF5544">
                            </path>
                            <path d="M263,83.95a32.9,32.9,0,0,0-5.28-.88,29.43,29.43,0,0,1,5.39.55c1.85.3,2.07-2.62.22-2.92l-.92-.14a1.52,1.52,0,0,0-1-2.46,28.66,28.66,0,0,0-12.09,1.1,24.35,24.35,0,0,0-.08-4.43,1.29,1.29,0,0,0-.29-.69c-.35-1.26-2.62-1.22-2.9.4-.4,2.35-.28,4.74-.68,7.06a9.21,9.21,0,0,1-.32,1.24q-2.7,2.81-5.32,5.69c-1.23,1.36,1,3,2.3,1.77a1.73,1.73,0,0,0,.79.64l-.22.29a1.31,1.31,0,0,0-.15,1.31l-.21.21c-1.34,1.31.53,3.56,1.88,2.24l.47-.47a1.17,1.17,0,0,0,1.71-.48,13.77,13.77,0,0,1,4.53-4.51l.57-.4a18.51,18.51,0,0,1,4.92-1c1.25.32,2.48.69,3.7,1.08,1.73.55,2.69-2,1.13-2.67l.8.17C263.83,87.16,264.84,84.41,263,83.95Z" fill="#ffc388">
                            </path>
                            <path d="M262.66,80.18a32.34,32.34,0,0,0-5.82-.26c-.47,0-.54.77-.06.74a32.34,32.34,0,0,1,5.82.26C263.08,81,263.13,80.24,262.66,80.18Z" fill="#663a12">
                            </path>
                            <path d="M262.93,83.14a40.07,40.07,0,0,0-6.19-.44c-.48,0-.54.75-.06.74a40.06,40.06,0,0,1,6.19.44C263.35,84,263.41,83.21,262.93,83.14Z" fill="#663a12">
                            </path>
                            <path d="M254.69,84.12c-2.38-.81-4.69-.05-6.72,1.27-.4.26.08.83.48.57a6.8,6.8,0,0,1,6-1.14A.37.37,0,0,0,254.69,84.12Z" fill="#663a12">
                            </path>
                            <path d="M255.88,83.94c-.38-1.69-1.11-3.33-2.8-4-.44-.18-.69.52-.25.7,1.44.6,2,2.06,2.32,3.47C255.25,84.55,256,84.41,255.88,83.94Z" fill="#663a12"></path>
                            <path d="M261.88,85.86a15.81,15.81,0,0,0-4.78-1.29c-.48-.05-.53.69-.06.74a15.16,15.16,0,0,1,4.59,1.25C262.06,86.75,262.31,86.05,261.88,85.86Z" fill="#663a12">
                            </path>
                            <path d="M230,80.1l3.43,21s-2.61,7.83-8.23,8.83-9.83-25.09-9.83-25.09" fill="#5b5ea5">
                            </path>
                            <path d="M213.34,68.86c-.78-.19-7.19.89-12.76,2.7S170.84,108.69,174,112.22s18.1,10.58,27.06,8.63S230.94,84.06,230,80.1C227.7,71,220.7,71,220.7,71" fill="#686ebc">
                            </path>
                            <path d="M229.27,59.53s1.63,13.31-3.2,15.7-10-2.59-11.59-5.48-3.2-17.53,5.84-16.54S229.27,59.53,229.27,59.53Z" fill="#ffc388">
                            </path>
                            <path d="M229.54,50.76c-3.68-1.28-7.94-4-14.48.27s-8.58,16.34-.76,19.23l1.48-4.32a4.37,4.37,0,0,1-.91-3.07,2.53,2.53,0,0,1,3-2.36,6.63,6.63,0,0,0,1.94-2.3c1.32-2.62,2.82-1.33,4.76,1s6.07,3,8.12,1.55S234.21,52.38,229.54,50.76Z" fill="#663a12">
                            </path>
                            <path d="M243.42,83.15c-4.56,2.84-13.84,11.08-13.84,11.08l-6.77,14.55s4,5.6,11.36,1.66c5.25-2.8,13.53-13,17.5-19.05A15,15,0,0,0,243.42,83.15Z" fill="#5b5ea5">
                            </path>
                            <polygon points="210.55 68.84 207.21 59.48 214.26 55.54 220.74 73.98 213.26 77.56 210.55 68.84" fill="#da4131"></polygon>
                            <path d="M193.6,134.56c-.09-1-1.66-1-1.56,0l7.11,75.79c.09,1,1.66,1,1.56,0Z" fill="#663a12"></path>
                            <polyline points="353.26 185.31 284.89 224.08 266.82 214.03 334 176.61" opacity="0.32" fill="url(#linear-gradient-2)"></polyline>
                            <polyline points="326.65 166.06 326.65 182.52 353.26 182.52 353.26 166.06" fill="#FF5544"></polyline>
                            <ellipse cx="339.95" cy="166.07" rx="13.31" ry="6.55" fill="#FF5544"></ellipse>
                            <ellipse cx="339.95" cy="166.07" rx="13.31" ry="6.55" opacity="0.19"></ellipse>
                            <ellipse cx="339.95" cy="183.16" rx="13.31" ry="6.55" fill="#FF5544"></ellipse>
                            <path d="M354.86,127.82c-2.81-1.15-6.7-5-10.1-4.85-1.29,3.17-1.67,6.88-2.06,10.1a91.63,91.63,0,0,0-.39,16.85q.12,1.88.31,3.74a3,3,0,0,0,.3,1.06q0,6.51,0,13a.41.41,0,0,0,.83,0q0-6.26,0-12.53a18.47,18.47,0,0,0,3.81-1.76,13,13,0,0,0,5.36-6.73c2.15-6,.79-12.66,2.83-18.58C355.45,128,355.15,127.94,354.86,127.82Z" fill="#297600"></path>
                            <path d="M349.1,118a10.43,10.43,0,0,0-3.8,3.89,6.52,6.52,0,0,0-.6,1.15l-.12.25h0a17.4,17.4,0,0,0-.64,2.06,2.57,2.57,0,0,1,1.41-1.12,3.52,3.52,0,0,1,2.22-.2,9.31,9.31,0,0,1,2,1.09c1,.58,1.86,1.22,2.8,1.81,4.41,2.8,10.28,3.09,13.68-1,0-.16.09-.32.11-.49C366.72,122.68,358.85,112.35,349.1,118Z" fill="#5fad00"></path>
                            <path d="M364.15,127.7l.55-.37a.38.38,0,0,0-.11-.32c-2.67-2.74-5.53-5.42-9.17-6.77a15.71,15.71,0,0,0-8.19-.8c-.3.34-.57.7-.83,1.07,3-1,6.72-.37,9.42.78,3.22,1.37,5.78,3.83,8.19,6.31A.4.4,0,0,0,364.15,127.7Z" fill="#297600"></path>
                            <path d="M319.48,133.66a11.11,11.11,0,0,0-5.95,10.66c.31,7.85,13.25.19,16.69-6.44s4,2.83,4,2.83" fill="#297600"></path>
                            <path d="M331.12,130.92a23.43,23.43,0,0,0-7.18,1,17.42,17.42,0,0,0-4.47,1.74,14.41,14.41,0,0,0,2.59,1.38c1.62.66,3.32,1.47,4.18,3a6,6,0,0,1,.5,1.18c.79,2.58.11,5.72,1.17,8.31s3.23,4.89,6.29,5.08c3.65.22,5.32-3.28,6-6.31s1.71-7.17.55-10.28C339.45,132.39,334.57,131.08,331.12,130.92Z" fill="#5fad00"></path>
                            <path d="M335.92,143.17c-1.53-5-4.78-9.64-9.52-11.83h-.18l-.22.07-.86.22c5.53,2.05,9,7.51,10.42,13.08,1.81,7.13,1.2,14.84,1.22,22.13a.38.38,0,0,0,.76,0C337.53,159.06,338.25,150.71,335.92,143.17Z" fill="#297600"></path><g style={{ isolation: "isolate" }}><path d="M232.56,64.53a.92.92,0,0,0,.7,0L243,69.26a.92.92,0,0,1-.7,0Z" fill="#ffd900"></path>
                                <path d="M234.39,62.84a11.52,11.52,0,0,0-.65-4l9.75,4.71a11.52,11.52,0,0,1,.65,4,1.78,1.78,0,0,1-1.14,1.7l-9.75-4.71A1.78,1.78,0,0,0,234.39,62.84Z" fill="#ffd900"></path><path d="M233.74,58.88A7.2,7.2,0,0,0,232,56.15l9.75,4.71a7.2,7.2,0,0,1,1.73,2.74L242.35,63l-.6-.29-1.23-.6-.63-.3-4.41-2.13-1.18-.57A1.85,1.85,0,0,1,233.74,58.88Z" fill="#ffd900"></path>
                                <path d="M232,56.15a5.7,5.7,0,0,0-1.47-1l9.75,4.71a5.7,5.7,0,0,1,1.47,1l-1.14-.55-1.21-.58-1.25-.61-1.28-.62-.64-.31L235,57.58l-.62-.3-1.21-.58-.58-.28A4.41,4.41,0,0,1,232,56.15Z" fill="#ffd900"></path>
                                <path d="M242.3,69.24l-9.75-4.71a.93.93,0,0,1-.44-.92c0-2.84-1.1-5-2.89-5.83L239,62.5c1.79.86,2.88,3,2.89,5.83A.93.93,0,0,0,242.3,69.24Z"></path><path d="M232,48.53a1.74,1.74,0,0,0,1.34,0L242,52.73l1.14.55a1.74,1.74,0,0,1-1.34,0Z" fill="#ffd900"></path><path d="M235.8,44.89a2.1,2.1,0,0,0-1-2l9.75,4.71a2.1,2.1,0,0,1,1,2l-9.74-4.71,9.74,4.71a4.09,4.09,0,0,1-2.42,3.68l-9.75-4.71A4.09,4.09,0,0,0,235.8,44.89Z" fill="#ffd900"></path><path d="M234.77,42.87l9.75,4.71a1.74,1.74,0,0,0-1.34,0l-9.75-4.71A1.74,1.74,0,0,1,234.77,42.87Z"></path><path d="M241.78,53.24,232,48.53a2.09,2.09,0,0,1-1-2,4.09,4.09,0,0,1,2.41-3.69l9.75,4.71a4.09,4.09,0,0,0-2.41,3.69A2.09,2.09,0,0,0,241.78,53.24Z"></path><path d="M243.18,47.54c1.32-.45,2.38.48,2.37,2.06a4.09,4.09,0,0,1-2.42,3.68c-1.32.45-2.38-.47-2.36-2.06A4.09,4.09,0,0,1,243.18,47.54Z"></path><path d="M230.54,55.12l9.75,4.71a6.57,6.57,0,0,0-4.58-.32l-.68.2L225.29,55l.68-.2A6.57,6.57,0,0,1,230.54,55.12Z"></path><path d="M225.94,57.54a4.78,4.78,0,0,1,3.29.25L239,62.5a4.78,4.78,0,0,0-3.29-.25l-.59.17c-3.85,1.31-6.43,5.86-6.78,10.52a2,2,0,0,1-1.24,1.73.87.87,0,0,1-.65,0L216.68,70a.87.87,0,0,0,.65,0,2,2,0,0,0,1.24-1.73c.35-4.66,2.93-9.21,6.78-10.52Z" fill="#ffd900"></path>
                                <path d="M226.43,74.66,216.68,70c-.26-.12-.42-.43-.38-.95.46-6.13,3.89-12.26,9-14L235,59.72c-5.1,1.74-8.53,7.87-9,14C226,74.24,226.17,74.54,226.43,74.66Z"></path><path d="M235,59.72l.68-.2c4.89-1.27,8.42,2.17,8.43,8a1.78,1.78,0,0,1-1.14,1.7c-.57.19-1.14,0-1.14-.93,0-4.32-2.53-7-6.17-6.08l-.59.17c-3.85,1.31-6.43,5.86-6.78,10.52a2,2,0,0,1-1.24,1.73c-.57.19-1.1-.06-1-1C226.5,67.59,229.93,61.45,235,59.72Z"></path><path d="M218.7,50.71a2.1,2.1,0,0,0-1-2l9.75,4.71a2.1,2.1,0,0,1,1,2l-9.74-4.71,9.74,4.71A4.08,4.08,0,0,1,226,59.1l-9.74-4.71L226,59.1a1.74,1.74,0,0,1-1.34,0l-9.75-4.71a1.74,1.74,0,0,0,1.34,0A4.08,4.08,0,0,0,218.7,50.71Z" fill="#ffd900"></path><path d="M236.27,32.18,246,36.89a14.21,14.21,0,0,0-10.95-.33l-9.75-4.71A14.21,14.21,0,0,1,236.27,32.18Z" fill="#ffc022"></path><path d="M217.68,48.69l9.75,4.71a1.74,1.74,0,0,0-1.34,0l-9.75-4.71A1.74,1.74,0,0,1,217.68,48.69Z"></path><path d="M224.69,59.06l-9.75-4.71a2.09,2.09,0,0,1-1-2,4.09,4.09,0,0,1,2.41-3.69l9.75,4.71A4.09,4.09,0,0,0,223.67,57,2.09,2.09,0,0,0,224.69,59.06Z"></path><path d="M226.09,53.36c1.32-.45,2.38.48,2.36,2.06A4.08,4.08,0,0,1,226,59.1c-1.32.45-2.38-.47-2.36-2.06A4.09,4.09,0,0,1,226.09,53.36Z"></path><path d="M223.71,83.1,214,78.39c-5.11-2.47-8.42-8.42-8.35-16.47.11-12.94,8.94-26.4,19.71-30.07l9.75,4.71c-10.77,3.67-19.6,17.13-19.71,30.07C215.29,74.68,218.6,80.63,223.71,83.1Z" fill="#ffc022"></path><path d="M235.07,36.56c10.77-3.67,19.41,3.85,19.29,16.79s-8.93,26.41-19.7,30.08-19.41-3.85-19.3-16.8S224.3,40.23,235.07,36.56ZM243,69.26a1.78,1.78,0,0,0,1.14-1.7c0-5.87-3.53-9.3-8.43-8l-.68.2c-5.1,1.74-8.53,7.87-9,14-.07.9.47,1.15,1,1a2,2,0,0,0,1.24-1.73c.35-4.66,2.93-9.21,6.78-10.52l.59-.17c3.64-.9,6.16,1.76,6.17,6.08,0,.88.57,1.12,1.14.93m.12-16a4.09,4.09,0,0,0,2.42-3.68c0-1.59-1-2.51-2.37-2.06a4.09,4.09,0,0,0-2.41,3.69c0,1.59,1,2.51,2.36,2.06M223.67,57c0,1.59,1,2.51,2.36,2.06a4.08,4.08,0,0,0,2.41-3.68c0-1.59-1-2.51-2.36-2.06A4.09,4.09,0,0,0,223.67,57" fill="#ffd900"></path></g><path d="M203.76,73a95.48,95.48,0,0,0-15.86,9.09c-6.36,5.45-12.73,12.93-6.42,19.29,7,7.07,25.88-12.74,31.13-18.54C211,78.64,207.67,75.42,203.76,73Z" fill="#5b5ea5"></path><path d="M206.72,75.09l1.64-5.55s-.53-5.64,0-5.82,2.19,5.12,2.19,5.12,3-6.62,4.32-6,3.14,5.73,3.23,6.65-8.36,8.53-8.36,8.53" fill="#ffc388">
                            </path>
                        </svg>
                    </div>
                </Row>

                <div className="mt-5">
                    <h1 className="motivo-title mb-4 text-center"> Por que você desativou sua conta? </h1>
                    <p className="motivo-sub text-center">Agradecemos por nos dizer por que você acha que a plataforma CEOS merece parar de ser utilizada e prometemos levar sua nota em consideração.</p>
                </div>

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form className="thanks--form">
                        <Row xs={1} md={2}>
                            <Col className="mb-4">
                                <label htmlFor="acessar--senha" className="form-label"> Qual o motivo da desativação da conta? </label>
                                <Field as="select" name="reason" className="modal--input thanks-dropdown mb-4 shadow-none" required>
                                    <option className="thanks-dropdown--select" value="padrao">Selecione um motivo</option>
                                    <option value="nao-entendi-como-funciona">Não entendi o funcionamento</option>
                                    <option value="nao-gostei-inferface">Não gostei da interface</option>
                                    <option value="nao-achei-intuitivo">Não achei a plataforma intuitiva</option>
                                    <option value="outro">Outro (especifique no campo de mensagem)</option>
                                </Field>
                                <ErrorMessage component="span" className="error-msg" style={{ marginLeft: '10px'}} name="reason" />

                                <label htmlFor="acessar--senha" className="form-label"> E-mail (caso precisemos contatá-lo) </label>
                                <Field name="email" autoComplete="email" className="form-control" required />
                                <ErrorMessage component="span" className="error-msg" name="email" />
                            </Col>
                            <Col className="mb-4">
                                <label htmlFor="contato--mensagem" className="form-label"> Mensagem </label>
                                <Field name="message" as="textarea" className="form-control" id="thanks--mensagem" />
                                <ErrorMessage component="span" className="error-msg" name="message" />
                            </Col>
                            <Col className="mt-2">
                                <button type="submit" className="acessar--btn w-100"> Enviar </button>
                            </Col>
                        </Row>
                    </Form>
                </Formik>
            </Container>

            <BlueFooter />
        </>
    );
}