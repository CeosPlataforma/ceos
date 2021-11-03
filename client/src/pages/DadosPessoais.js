import Slider from "@material-ui/core/Slider";
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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
                console.log(response)
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

    const [textoMostrar, setTextoMostrar] = useState("Mostrar")
    const [passwordShown, setPasswordShown] = useState(false)

    const initialValues = {
        name: nome,
        email: email
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
                    setTimeout(() => { window.location = "http://localhost:3000" }, 5000)

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
                    setTimeout(function () { window.location = "http://localhost:3000/acessar" }, 4000)

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

                    actions.setFieldError("password", `Nome mudado com sucesso`);
                    setTimeout(function () { reload() }, 4000)

                } else if (message === "email-success") {

                    actions.setFieldError("password", `Email mudado com sucesso, por favor, faça login novamente`);
                    setTimeout(function () { window.location = "http://localhost:3000/acessar" }, 4000)

                } else if (message === "name-email-success") {

                    actions.setFieldError("password", `Dados mudados com sucesso, por favor, faça login novamente`);
                    setTimeout(function () { window.location = "http://localhost:3000/acessar" }, 4000)

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
    const handleShowCrop = () => setShowCrop(true);

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
                    <Modal.Header>
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
                                handleCloseCrop();
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
                        <Title title="Dados pessoais" user={false} />
                        {/* <h4 className="dados-pessoais--sub-title">Foto de perfil</h4> */}
                        <div>
                            <Avatar className="dados-pessoais--user-img" />
                            <a className="btn btn-edit--photo" onClick={triggerFile}><svg xmlns="http://www.w3.org/2000/svg" width="41.154" height="42.687" viewBox="0 0 41.154 42.687"><g transform="translate(-1044.681 -617.99)"><path d="M1048.433,650.072l-3.752,14.1,13.984-4.32,19.555-19.555-10.574-10.574Z" transform="translate(0 -3.493)" fill="#fff" /><path d="M1081.756,623.5l9.836,9.836,5.282-5.282-10.063-10.063Z" transform="translate(-11.039)" fill="#fff" /></g></svg></a>
                        </div>
                        <input type="file" accept="image/*" ref={inputRef} style={{ display: 'none' }} onChange={onSelectFile} />
                        {/* <button className="dados-pessoais--alterar" onClick={triggerFile}>Alterar foto</button> */}
                    </div>

                    <div className="col-sm-12 col-xl-7 mx-auto conteudo-direita">
                        <Formik enableReinitialize={true} initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmitExcluir}>
                            <Form className="dados-pessoais--form">
                                <label htmlFor="dados-pessoais--nome" className="form-label">Nome</label>
                                <Field name="name" type="text" className="form-control dados-pessoais--input input-main mb-4" id="dados-pessoais--nome"
                                    /*defaultValue={nome}*/ readOnly={true} />

                                <label htmlFor="dados-pessoais--email" className="form-label">E-mail</label>
                                <Field name="email" type="text" className="form-control dados-pessoais--input input-main mb-4" id="dados-pessoais--email"
                                    /*defaultValue={email}*/ readOnly={true} />

                                {/* <label for="dados-pessoais--senha" className="form-label">Senha</label>
                                <div className="dados-pessoais--senha--container senha--container">
                                    <Field name="senha" type={passwordShown ? "text" : "password"} className="form-control acessar--input" id="acessar--senha" required />
                                    <span onClick={toggleSenha} className="show-password text-md">{textoMostrar} senha</span>
                                    <ErrorMessage name="senha" />
                                </div> */}
                                <Button className="dados-pessoais--btn w-100 mb-4 mt-2" onClick={() => setShowMudarDados(true)}>Alterar dados</Button>
                                <Button className="text-md w-100 modal--btn--secondary mb-4 mt-2" onClick={() => setShowMudarSenha(true)} >Alterar senha</Button>

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