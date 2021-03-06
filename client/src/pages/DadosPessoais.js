import React, { useEffect, useState } from "react";
import Slider from "@material-ui/core/Slider";
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import Cropper from 'react-easy-crop';
import * as Yup from 'yup';

import Avatar from '../components/Avatar';
import getCroppedImg from '../components/cropImage';
import { dataURLtoFile } from '../components/dataURLtoFile';
import ModalAltSenha from '../components/ModalAltSenha';
import ModalDados from '../components/ModalDados';
import ModalExcluirConta from '../components/ModalExcluirConta';
import Title from "../components/PainelTitle";

export default function DadosPessoais() {

    axios.defaults.withCredentials = true

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {

        axios.get("http://localhost:3333/userinfo")
            .then((response) => {
                //console.log(response)
                setNome(response.data.session.user.name)
                setEmail(response.data.session.user.email)
            })
            .catch((error) => {
                console.log(error);
            });

    }, [])

    const reload = () => {
        window.location.reload();
    }

    const initialValues = {
        name: nome,
        email: email
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Email inválido").required('Obrigatório'),
        nome: Yup.string().required('Obrigatório'),
        senha: Yup.string().required('Obrigatório'),
    });

    // const toggleSenha = () => {
    //     if (passwordShown) {
    //         setPasswordShown(false);
    //         setTextoMostrar("Mostrar")
    //     } else {
    //         setPasswordShown(true);
    //         setTextoMostrar("Ocultar")
    //     }
    // }

    // MODAIS <- MODAIS <- MODAIS <- MODAIS <- MODAIS <- MODAIS <- MODAIS <- MODAIS <- (CONTINUA)

    const [showExcluir, setShowExcluir] = useState(false);
    const onSubmitExcluir = async (values, actions) => {
        axios.post("http://localhost:3333/deletar-usuario", { email: values.email, password: values.password })
            .then((response) => {
                console.log(response)
                const { message, error } = response.data;

                if (error === "password") {

                    actions.setFieldError("password", `Senha incorreta`);

                } else if (error === "inexistent") {

                    actions.setFieldError("email", `Email incorreto`);

                } else if (message === "success") {

                    actions.setFieldError("password", `Conta desativada com sucesso`)
                    setTimeout(() => { window.location = "http://localhost:3000/logout/true" }, 5000)

                } else if (error === "email") {
                    actions.setFieldError("email", `Email incorreto`)
                }
            })
            .catch(error => {
                console.log(error)
            });
        // setShowExcluir(false);
        // console.log("excluir")
    }

    const [showMudarSenha, setShowMudarSenha] = useState(false)
    const onSubmitMudarSenha = async (values, actions) => {
        axios.patch("http://localhost:3333/mudar-senha", { password: values.password, newPassword: values.newPassword })
            .then((response) => {

                if (response.data.error === "password") {

                    actions.setFieldError("password", `Senha incorreta`);

                } else {

                    actions.setFieldError("password", `Senha mudada com sucesso, por favor, faça login novamente`);
                    setTimeout(function () { window.location = "http://localhost:3000/logout/false" }, 4000)

                }

            })
            .catch(error => {
                console.log(error)
            });
    }

    const [showMudarDados, setShowMudarDados] = useState(false)
    const onSubmitMudarDados = async (values, actions) => {

        axios.patch("http://localhost:3333/mudar-dados", { password: values.password, email: values.email, name: values.name })
            .then((response) => {
                const message = response.data.message;
                if (message === "no-change") {

                    actions.setFieldError("password", "Nenhuma mudança")

                } else if (message === "name-success") {

                    actions.setFieldError("password", `Nome alterado com sucesso`);
                    setTimeout(function () { reload() }, 4000)

                } else if (message === "email-success") {

                    actions.setFieldError("password", `Email mudado com sucesso, por favor, faça login novamente`);
                    setTimeout(function () { window.location = "http://localhost:3000/logout/false" }, 4000)

                } else if (message === "name-email-success") {

                    actions.setFieldError("password", `Dados mudados com sucesso, por favor, faça login novamente`);
                    setTimeout(function () { window.location = "http://localhost:3000/logout/false" }, 4000)

                } else if (message === "erro-total") {

                    console.log(response.data.error);
                    actions.setFieldError("password", `ERRO ERRRO MORTE DESESPERO`);

                } else if (message === "password") {

                    actions.setFieldError("password", `Senha incorreta`);

                }
            })
            .catch(error => {
                console.log(error)
            });
    }

    // MODAIS <- MODAIS <- MODAIS <- MODAIS <- MODAIS <- MODAIS <- MODAIS <- MODAIS <- (FIM <-)

    const [showCrop, setShowCrop] = useState(false);

    const handleCloseCrop = () => setShowCrop(false);
    // const handleShowCrop = () => setShowCrop(true);

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
            setShowCrop(true);
            const reader = new FileReader()
            reader.readAsDataURL(event.target.files[0])
            reader.addEventListener('load', () => {
                setImage(reader.result)
            })
        }
    }

    axios.defaults.withCredentials = true

    const removeFoto = async () => {
        axios.post("http://localhost:3333/remover-foto").then((response) => {
            if (response.data.success) {
                window.location.reload()
            }
        })
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
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then(function (response) {
                if (response.data.message === "success") {
                    setShowCrop(false)
                    reload()
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

            {image ? (
                <Modal size="lg" show={showCrop} onHide={handleCloseCrop} className="dados-pessoais--modal-cropper" contentClassName="modal-content--plataforma" centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <h1 className="modal--title modal--title--plataforma">Edite a imagem</h1>
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height='25' width='25'><path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M49,5v40H1V5H49z" /><path d="M17.318,18.269c0.195-0.182,0.458-0.297,0.721-0.268c0.267,0.01,0.518,0.127,0.698,0.323l10.294,11.23l4.261-4.261c0.391-0.391,1.023-0.391,1.414,0L46,36.586V8H4v22.698L17.318,18.269z M35,15c1.657,0,3,1.343,3,3s-1.343,3-3,3s-3-1.343-3-3S33.343,15,35,15z" /><path d="M34 27.414L26.414 35 23.586 35 27.616 30.97 17.945 20.42 4 33.435 4 42 46 42 46 39.414z" /></svg>
                            <Slider
                                min={1}
                                max={3}
                                step={0.01}
                                value={zoom}
                                onChange={(e, zoom) => setZoom(zoom)}
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height='50' width='50'><path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M49,5v40H1V5H49z" /><path d="M17.318,18.269c0.195-0.182,0.458-0.297,0.721-0.268c0.267,0.01,0.518,0.127,0.698,0.323l10.294,11.23l4.261-4.261c0.391-0.391,1.023-0.391,1.414,0L46,36.586V8H4v22.698L17.318,18.269z M35,15c1.657,0,3,1.343,3,3s-1.343,3-3,3s-3-1.343-3-3S33.343,15,35,15z" /><path d="M34 27.414L26.414 35 23.586 35 27.616 30.97 17.945 20.42 4 33.435 4 42 46 42 46 39.414z" /></svg>
                        </div>

                        <div className="d-flex justify-content-between w-100 m-0">
                            <Button className="btn--secondary w-50" style={{ 'marginRight': '10px' }} onClick={() => {
                                handleCloseCrop();
                                setImage(null);
                            }}>Cancelar</Button>
                            <Button className="btn--primary w-50" style={{ 'marginLeft': '10px' }} onClick={onUpload}>Aplicar</Button>
                        </div>
                    </Modal.Footer>
                </Modal>
            ) : null}

            <div className="container-xxl dados-pessoais content">
                <div className="row">

                    <div className="col-sm-12 col-xl-5">
                        <Title title="Dados pessoais" user={false} />
                        <div className="position-relative d-inline-block">
                            <Avatar className="dados-pessoais--user-img" />
                            <Dropdown className="btn btn-edit--photo">
                                <Dropdown.Toggle>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41.154" height="42.687" viewBox="0 0 41.154 42.687"><g transform="translate(-1044.681 -617.99)"><path d="M1048.433,650.072l-3.752,14.1,13.984-4.32,19.555-19.555-10.574-10.574Z" transform="translate(0 -3.493)" /><path d="M1081.756,623.5l9.836,9.836,5.282-5.282-10.063-10.063Z" transform="translate(-11.039)" /></g></svg>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item as="div" onClick={triggerFile}>
                                        <svg x="0px" y="0px" viewBox="0 0 374.116 374.116">
                                            <g>
                                                <path d="M344.058,207.506c-16.568,0-30,13.432-30,30v76.609h-254v-76.609c0-16.568-13.432-30-30-30c-16.568,0-30,13.432-30,30
		v106.609c0,16.568,13.432,30,30,30h314c16.568,0,30-13.432,30-30V237.506C374.058,220.938,360.626,207.506,344.058,207.506z"/>
                                                <path d="M123.57,135.915l33.488-33.488v111.775c0,16.568,13.432,30,30,30c16.568,0,30-13.432,30-30V102.426l33.488,33.488
		c5.857,5.858,13.535,8.787,21.213,8.787c7.678,0,15.355-2.929,21.213-8.787c11.716-11.716,11.716-30.71,0-42.426L208.271,8.788
		c-11.715-11.717-30.711-11.717-42.426,0L81.144,93.489c-11.716,11.716-11.716,30.71,0,42.426
		C92.859,147.631,111.855,147.631,123.57,135.915z"/>
                                            </g>
                                        </svg>
                                        Alterar foto
                                        <input type="file" accept="image/*" ref={inputRef} style={{ display: 'none' }} onChange={onSelectFile} />
                                    </Dropdown.Item>

                                    <Dropdown.Item as="div">
                                        <a onClick={removeFoto} >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,3h14c0.6,0,1,0.4,1,1v0c0,0.6-0.4,1-1,1H5C4.4,5,4,4.6,4,4v0C4,3.4,4.4,3,5,3z" /><path d="M17,5l-3-3h-4L7,5H17z M5,7v13c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V7H5z M9,20L9,20c-0.6,0-1-0.4-1-1v-9c0-0.6,0.4-1,1-1h0	c0.6,0,1,0.4,1,1v9C10,19.6,9.6,20,9,20z M15,20L15,20c-0.6,0-1-0.4-1-1v-9c0-0.6,0.4-1,1-1h0c0.6,0,1,0.4,1,1v9	C16,19.6,15.6,20,15,20z" />
                                            </svg>
                                            Remover foto
                                        </a>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>
                    </div>

                    <div className="col-sm-12 col-xl-7 mx-auto conteudo-direita">
                        <Formik enableReinitialize={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmitExcluir}>
                            <Form className="dados-pessoais--form">
                                <label htmlFor="dados-pessoais--nome" className="form-label">Nome</label>
                                <Field name="name" type="text" className="form-control dados-pessoais--input input-main mb-4" id="dados-pessoais--nome" readOnly={true} />

                                <label htmlFor="dados-pessoais--email" className="form-label">E-mail</label>
                                <Field name="email" type="text" className="form-control dados-pessoais--input input-main mb-4" id="dados-pessoais--email" readOnly={true} />

                                <Button className="dados-pessoais--btn btn--primary w-100 mb-4 mt-2" onClick={() => setShowMudarDados(true)}>Alterar dados</Button>
                                <Button className="btn--secondary w-100 mb-4 mt-2" onClick={() => setShowMudarSenha(true)} >Alterar senha</Button>

                                <a className="dados-pessoais--desativar" onClick={() => { setShowExcluir(true) }}>&gt; Desativar conta</a>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>

            <ModalDados onSubmit={onSubmitMudarDados} show={showMudarDados} onHide={() => setShowMudarDados(false)} startName={nome} startEmail={email} />
            <ModalAltSenha onSubmit={onSubmitMudarSenha} show={showMudarSenha} onHide={() => setShowMudarSenha(false)} />
            <ModalExcluirConta onSubmit={onSubmitExcluir} show={showExcluir} onHide={() => setShowExcluir(false)} />
        </>
    );
}