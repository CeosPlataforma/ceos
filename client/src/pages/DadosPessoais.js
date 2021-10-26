import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from "react";
import Title from "../components/PainelTitle";
import * as Yup from 'yup';
import ModalExcluirConta from '../components/ModalExcluirConta';
import ModalDados from '../components/ModalDados';
import ModalAltSenha from '../components/ModalAltSenha';

import Avatar from '../components/Avatar'

import Cropper from 'react-easy-crop';
import Slider from "@material-ui/core/Slider";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import getCroppedImg from '../components/cropImage';
import { dataURLtoFile } from '../components/dataURLtoFile';

export default function DadosPessoais() {

    axios.defaults.withCredentials = true

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [show1, setShow1] = useState(false);

    const reload = () => {
        window.location.reload();
    }

    axios.get("http://localhost:3333/userinfo")
        .then((response) => {
            console.log(response)
            setNome(response.data.session.user.name)
            setEmail(response.data.session.user.email)
        })
        .catch((error) => {
            console.log(error);
        });

    const [textoMostrar, setTextoMostrar] = useState("Mostrar")
    const [passwordShown, setPasswordShown] = useState(false)

    const initialValues = {
        name: nome,
        email
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Email inválido").required('Obrigatório'),
        nome: Yup.string().required('Obrigatório'),
        senha: Yup.string().required('Obrigatório'),
    });

    const toggleSenha = () => {
        if (passwordShown) {
            setPasswordShown(false);
            setTextoMostrar("Mostrar")
        } else {
            setPasswordShown(true);
            setTextoMostrar("Ocultar")
        }
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const cancelar = () => {
    //     handleClose();
    //     setImage(null);
    // }

    const inputRef = React.useRef();
    const triggerFile = () => inputRef.current.click();

    const [image, setImage] = useState(null)
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedArea, setCroppedArea] = useState(null)

    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
        setCroppedArea(croppedAreaPixels);
    }

    const onSelectFile = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            setShow(true);
            const reader = new FileReader()
            reader.readAsDataURL(event.target.files[0])
            reader.addEventListener('load', () => {
                setImage(reader.result)
            })
        }
    }

    axios.defaults.withCredentials = true
    const onSubmit = async (values, actions) => {
        
    }

    const onUpload = async () => {
        const canvas = await getCroppedImg(image, croppedArea);
        const canvasDataUrl = canvas.toDataURL("image/jpeg");
        const convertedUrlToFile = dataURLtoFile(
            canvasDataUrl,
            "cropped-image.jpeg"
        );

        const data = new FormData();
        data.append("image", convertedUrlToFile);

        console.log(convertedUrlToFile);

        await axios({
            method: "post",
            url: "http://localhost:3333/upload-foto/",
            data: data,
            headers: {"Content-Type": "multipart/form-data"}
        })
        .then(function (response) {
            if (response.data.message === "success") {
                setShow(false)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }

    // const [show2, setShow2] = useState(false);

    // const handleClose2 = () => setShow2(false);
    // const handleShow2 = () => setShow2(true);

    // const [show3, setShow3] = useState(false);

    // const handleClose3 = () => setShow3(false);
    // const handleShow3 = () => setShow3(true);


    return (
        <>
            {/* siga os tutorial do indiano
            https://www.youtube.com/channel/UCyq81Ac-Ir4WIhFUgb_kyRw

            aq pra parte dps do upload https://youtu.be/BibIRfqtw1A?t=365
            se conseguir, dps tente colocar a url da imagem em $photo_url na scss/abstracts/_variables.scss
            se quiser rodar o scss é só no terminal estar na pasta client e ter o sass instalado e dar 'sass --watch --no-source-map src/scss/main.scss src/css/main.css' sem aspas
            */}

            <ModalDados />
            <ModalAltSenha />

            {image ? (
                <Modal size="lg" show={show} onHide={handleClose} className="dados-pessoais--modal-cropper" centered>
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <h1 className="modal--title">Edite a imagem</h1>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container-cropper">
                            <div className="cropper">
                                <Cropper
                                    image={image}
                                    zoom={zoom}
                                    crop={crop}
                                    aspect={1}
                                    cropShape="round"
                                    showGrid={false}
                                    onCropChange={setCrop}
                                    onZoomChange={setZoom}
                                    onCropComplete={onCropComplete}
                                />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="cropper--slider mx-auto">
                            <Slider
                                min={1}
                                max={3}
                                step={0.1}
                                value={zoom}
                                onChange={(e, zoom) => setZoom(zoom)}
                            />
                        </div>

                        <div className="d-flex justify-content-around w-100">
                            <Button className="text-md modal--btn cropper--cancelar mx-auto" onClick={() => {
                                handleClose();
                                setImage(null);
                            }}>Cancelar</Button>
                            <Button className="text-md modal--btn cropper--aplicar mx-auto" onClick={onUpload}>Aplicar</Button>
                        </div>
                    </Modal.Footer>
                </Modal>
            ) : null}

            <div className="container-xxl dados-pessoais content">
                <div className="row">

                    <div className="col-sm-12 col-xl-5">
                        <Title title="Dados pessoais" />
                        <h4 className="dados-pessoais--sub-title">Foto de perfil</h4>
                        <Avatar/>
                        {/* <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 45.532 45.532" xmlSpace="preserve" class="dados-pessoais--user-img">
                            <path d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765
                                S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53
                                c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012
                                c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592
                                c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"/>
                        </svg> */}
                        <input type="file" accept="image/*" ref={inputRef} style={{ display: 'none' }} onChange={onSelectFile} />
                        <button className="dados-pessoais--alterar" onClick={triggerFile}>Alterar foto</button>
                        <a className="dados-pessoais--desativar" onClick={() => { setShow1(true) }}>&gt; Desativar conta</a>
                    </div>

                    <div className="col-sm-12 col-xl-7 mx-auto conteudo-direita">
                        <Formik enableReinitialize={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                            <Form className="dados-pessoais--form">
                                <label for="dados-pessoais--nome" className="form-label">Nome</label>
                                <Field name="name" type="text" className="form-control dados-pessoais--input mb-4" id="dados-pessoais--nome"
                                    defaultValue={nome} readonly="true"/>

                                <label for="dados-pessoais--email" className="form-label">E-mail</label>
                                <Field name="email" type="text" className="form-control dados-pessoais--input mb-4" id="dados-pessoais--email"
                                    defaultValue={email} readonly="true" />

                                {/* <label for="dados-pessoais--senha" className="form-label">Senha</label>
                                <div className="dados-pessoais--senha--container senha--container">
                                    <Field name="senha" type={passwordShown ? "text" : "password"} className="form-control acessar--input" id="acessar--senha" required />
                                    <span onClick={toggleSenha} className="show-password text-md">{textoMostrar} senha</span>
                                    <ErrorMessage name="senha" />
                                </div> */}
                                <br />
                                <button
                                    type="submit"
                                    className="dados-pessoais--btn w-100 mb-4" data-bs-toggle="modal" href="#exampleModalToggle">Alterar dados</button>
                                <Button className="text-md w-100 modal--btn--secondary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="#exampleModalToggle">Alterar senha</Button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>

            <ModalExcluirConta onSubmit={onSubmit} show={show1} onHide={() => setShow1(false)} onExited={reload} />
        </>
    );
}