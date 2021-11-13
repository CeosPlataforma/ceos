import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import hero from "../assets/illustrations/hero.svg";
import StuffComponent from "../components/StuffComponent";

export default function Home() {

    useEffect(() => {

        axios.get("http://localhost:3333/userinfo")
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error);
            });

        Aos.init({ duration: 1000 });

    }, [])

    return (
        <>
            <Container className="container-padding hero">
                <Row className="align-items-center">
                    <div className="col-sm-12 col-xl-7">
                        <h1 className="hero--title mb-3"> A melhor plataforma de <span> organização escolar </span> </h1>

                        <p className="hero--text mb-4">
                            A organização no âmbito escolar é de extrema importância não apenas para o aprendizado, mas também para um bom desenvolvimento pessoal. A plataforma te auxilia a estruturar de forma melhor suas atividades escolares e melhor abordar seu desempenho em tais aspectos da vida estudantil.
                        </p>

                        <div className="d-grid d-md-flex">
                            <Link to={"/acessar"} className="hero--btn"> Acessar </Link >
                        </div>
                    </div>

                    <div className="col-sm-12 col-xl-5">
                        <img src={hero} className="d-none d-xl-block mx-auto img-fluid" alt="Imagem do Hero - Ceos" width="700px" height="100%" />
                    </div>
                </Row>
            </Container>

            <Container fluid className="por-que-usar px-0" id="por-que-usar">
                <Container className="container-padding">
                    <Row className="align-items-center">
                        <div className="col-xl-3 col-sm-12 mb-4 mb-xl-0">
                            <h2 className="por-que-usar--title">
                                Por que usar Ceos
                            </h2>
                        </div>

                        <div className="por-que-usar--item col-xl-3 col-sm-12 col-md-4 align-self-baseline mb-4 mb-md-0">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 486.4 486.4"
                                style={{ enableBackground: 'new 0 0 486.4 486.4' }} xmlSpace="preserve" className="svg-55 por-que-usar--item--icon">
                                <path d="M268.8,409.6v-53.76c87.04-12.8,153.6-87.04,153.6-176.64C422.4,79.36,343.04,0,243.2,0S64,79.36,64,179.2
                    c0,89.6,66.56,163.84,153.6,176.64v53.76h-76.8l-51.2,76.8h307.2l-51.2-76.8H268.8z M166.4,281.6l25.6-76.8L120.32,128h84.48
                    l38.4-79.36L281.6,128h84.48l-71.68,76.8l25.6,76.8l-76.8-51.2L166.4,281.6z" />
                            </svg>

                            <p className="por-que-usar--item--text mt-3">
                                Uma plataforma inovadora que conta com diversas funcionalidades.
                            </p>
                        </div>

                        <div className="por-que-usar--item col-xl-3 col-sm-12 col-md-4 align-self-baseline mb-4 mb-md-0">
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="svg-55 por-que-usar--item--icon">
                                <path d="M386.56,286.72l2.56-23.04C463.36,230.4,512,158.72,512,76.8c0-15.36-12.8-25.6-25.6-25.6h-58.88l2.56-20.48
                    C432.64,15.36,419.84,0,404.48,0H107.52c-15.36,0-28.16,12.8-25.6,30.72l2.56,20.48H25.6C12.8,51.2,0,61.44,0,76.8
                    c0,81.92,48.64,153.6,120.32,186.88l2.56,23.04c2.56,12.8,12.8,20.48,25.6,20.48h56.32L153.6,384h-38.4
                    c-7.68,0-12.8,5.12-12.8,12.8v102.4c0,7.68,5.12,12.8,12.8,12.8h281.6c7.68,0,12.8-5.12,12.8-12.8V396.8
                    c0-7.68-5.12-12.8-12.8-12.8h-38.4l-51.2-76.8h56.32C373.76,307.2,386.56,296.96,386.56,286.72z M417.28,102.4h40.96
                    c-7.68,38.4-28.16,71.68-56.32,94.72L417.28,102.4z M53.76,102.4h40.96l15.36,94.72C81.92,174.08,58.88,140.8,53.76,102.4z
                    M307.2,230.4L256,194.56l-51.2,35.84l25.6-64L179.2,128h53.76L256,74.24L279.04,128h53.76l-51.2,33.28L307.2,230.4z" />
                            </svg>

                            <p className="por-que-usar--item--text mt-3">
                                O desempenho escolar é um aspecto essencial que se verifica de forma ágil.
                            </p>
                        </div>

                        <div className="por-que-usar--item col-xl-3 col-sm-12 col-md-4 align-self-baseline">
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                                style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="svg-55 por-que-usar--item--icon">
                                <path d="M384,0H25.6C10.24,0,0,12.8,0,25.6V384c0,15.36,10.24,25.6,25.6,25.6h25.6V76.8c0-15.36,10.24-25.6,25.6-25.6h332.8V25.6
                    C409.6,10.24,399.36,0,384,0z" />
                                <path d="M486.4,102.4H128c-15.36,0-25.6,10.24-25.6,25.6v358.4c0,15.36,10.24,25.6,25.6,25.6h358.4c15.36,0,25.6-10.24,25.6-25.6
                    V128C512,112.64,501.76,102.4,486.4,102.4z M332.8,435.2H179.2c-15.36,0-25.6-10.24-25.6-25.6c0-15.36,10.24-25.6,25.6-25.6h153.6
                    c15.36,0,25.6,10.24,25.6,25.6C358.4,424.96,348.16,435.2,332.8,435.2z M435.2,332.8h-256c-15.36,0-25.6-10.24-25.6-25.6
                    c0-15.36,10.24-25.6,25.6-25.6h256c15.36,0,25.6,10.24,25.6,25.6C460.8,322.56,450.56,332.8,435.2,332.8z M435.2,230.4h-256
                    c-15.36,0-25.6-10.24-25.6-25.6c0-15.36,10.24-25.6,25.6-25.6h256c15.36,0,25.6,10.24,25.6,25.6
                    C460.8,220.16,450.56,230.4,435.2,230.4z" />
                            </svg>

                            <p className="por-que-usar--item--text mt-3">
                                A divisão de atividades e matérias permite maior auxílio no controle escolar.
                            </p>
                        </div>
                    </Row>
                </Container>
            </Container>

            <StuffComponent />

            <Container fluid className="funcionalidades px-0" id="funcionalidades">
                <Container data-aos="fade-up" className="container-padding">
                    <h2 className="funcionalidades--title text-center pb-4">
                        Conheça as funcionalidades
                    </h2>

                    <Row data-aos="fade-up">
                        <div className="col-xl-4 col-lg-6 d-flex align-items-stretch">
                            <div className="card pt-5 pb-3 mb-5">
                                <span className="px-4">
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                                        style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="svg-55 funcionalidades--item--icon">
                                        <path
                                            d="M256,151c-33.091,0-60,26.909-60,60s26.909,60,60,60s60-26.909,60-60S289.091,151,256,151z" />
                                        <path
                                            d="M497,211h-20.79c-5.742-28.037-16.89-54.902-32.725-78.838l14.033-14.048c5.859-5.859,5.859-15.352,0-21.211
                            l-42.422-42.422c-5.859-5.859-15.352-5.859-21.211,0l-14.048,14.033C355.902,52.68,329.037,41.532,301,35.79V15
                            c0-8.291-6.709-15-15-15h-60c-8.291,0-15,6.709-15,15v20.79c-28.037,5.742-54.902,16.89-78.838,32.725l-14.048-14.033
                            c-5.859-5.859-15.352-5.859-21.211,0L54.481,96.903c-5.859,5.859-5.859,15.352,0,21.211l14.033,14.048
                            C52.68,156.098,41.532,182.963,35.79,211H15c-8.291,0-15,6.709-15,15v60c0,8.291,6.709,15,15,15h20.79
                            c5.742,28.037,16.89,54.902,32.725,78.838l-14.033,14.048c-5.859,5.859-5.859,15.352,0,21.211l42.422,42.422
                            c5.859,5.859,15.352,5.859,21.211,0l14.048-14.033c23.936,15.835,50.801,26.982,78.838,32.725V497c0,8.291,6.709,15,15,15h60
                            c8.291,0,15-6.709,15-15v-20.79c28.037-5.742,54.902-16.89,78.838-32.725l14.048,14.033c5.859,5.859,15.352,5.859,21.211,0
                            l42.422-42.422c5.859-5.859,5.859-15.352,0-21.211l-14.033-14.048c15.835-23.936,26.982-50.801,32.725-78.838H497
                            c8.291,0,15-6.709,15-15v-60C512,217.709,505.291,211,497,211z M256,391c-75.846,0-135-62.547-135-135
                            c0-74.559,60.441-135,135-135s135,60.441,135,135C391,328.568,331.747,391,256,391z" />
                                        <path d="M256,271c-35.623,0-66.877,17.972-85.739,45.242C189.284,343.228,220.553,361,256,361s66.716-17.772,85.739-44.758
                            C322.877,288.972,291.623,271,256,271z" />
                                    </svg>
                                </span>

                                <div className="card-body px-4">
                                    <h3 className="funcionalidades--item--title"> Gerenciamento </h3>

                                    <p className="funcionalidades--item--text">
                                        O maior controle das atividades e disciplinas representa algo essencial para um estudante.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6">
                            <div className="card pt-5 pb-3 mb-5">
                                <span className="px-4">
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                                        style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="svg-55 funcionalidades--item--icon">
                                        <path d="M486.4,128h-256L128,51.2H25.6C10.24,51.2,0,61.44,0,76.8v358.4c0,15.36,10.24,25.6,25.6,25.6h460.8
                            c15.36,0,25.6-10.24,25.6-25.6V153.6C512,138.24,501.76,128,486.4,128z M307.2,409.6H76.8c-15.36,0-25.6-10.24-25.6-25.6
                            s10.24-25.6,25.6-25.6h230.4c15.36,0,25.6,10.24,25.6,25.6S320,409.6,307.2,409.6z M435.2,307.2H76.8
                            c-15.36,0-25.6-10.24-25.6-25.6c0-15.36,10.24-25.6,25.6-25.6h358.4c15.36,0,25.6,10.24,25.6,25.6
                            C460.8,296.96,448,307.2,435.2,307.2z" />
                                    </svg>
                                </span>

                                <div className="card-body px-4">
                                    <h3 className="funcionalidades--item--title"> Categorização </h3>

                                    <p className="funcionalidades--item--text">
                                        Com as matérias separadas, a visualização do desempenho e do escopo de atividades se torna muito mais prático.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6">
                            <div className="card pt-5 pb-3 mb-5">
                                <span className="px-4">
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330 330"
                                        style={{ enableBackground: 'new 0 0 330 330' }} xmlSpace="preserve" className="svg-55 funcionalidades--item--icon">
                                        <path id="XMLID_31_" d="M326.602,174.506c0.139-0.17,0.26-0.349,0.392-0.524c0.162-0.216,0.33-0.428,0.48-0.654
                            c0.144-0.213,0.267-0.435,0.397-0.654c0.12-0.2,0.246-0.396,0.356-0.603c0.12-0.225,0.223-0.457,0.331-0.687
                            c0.101-0.214,0.207-0.424,0.299-0.643c0.093-0.225,0.168-0.455,0.25-0.683c0.083-0.233,0.173-0.463,0.245-0.702
                            c0.069-0.231,0.121-0.465,0.18-0.699c0.061-0.241,0.128-0.479,0.177-0.725c0.054-0.272,0.086-0.547,0.125-0.822
                            c0.03-0.21,0.07-0.416,0.091-0.629c0.098-0.986,0.098-1.979,0-2.965c-0.021-0.213-0.061-0.419-0.091-0.629
                            c-0.039-0.274-0.071-0.55-0.125-0.822c-0.049-0.246-0.116-0.483-0.177-0.725c-0.059-0.233-0.11-0.468-0.18-0.699
                            c-0.072-0.238-0.162-0.468-0.245-0.702c-0.082-0.228-0.157-0.458-0.25-0.683c-0.092-0.219-0.198-0.429-0.299-0.643
                            c-0.108-0.23-0.211-0.461-0.331-0.687c-0.11-0.206-0.236-0.403-0.356-0.603c-0.131-0.219-0.254-0.441-0.397-0.654
                            c-0.15-0.226-0.318-0.438-0.48-0.654c-0.132-0.175-0.253-0.354-0.392-0.524c-0.315-0.384-0.646-0.753-0.998-1.103l-54.995-54.997
                            c-5.856-5.857-15.354-5.858-21.213-0.001c-5.858,5.858-5.858,15.355,0,21.213L278.788,150H207.42
                            c-4.527-12.764-14.656-22.893-27.42-27.42V51.213l29.394,29.393c2.929,2.929,6.768,4.393,10.606,4.393s7.678-1.464,10.606-4.393
                            c5.858-5.858,5.858-15.355,0-21.213L175.609,4.396c-0.347-0.346-0.711-0.675-1.09-0.987c-0.099-0.082-0.206-0.151-0.307-0.23
                            c-0.285-0.223-0.571-0.444-0.872-0.646c-0.094-0.063-0.194-0.115-0.289-0.175c-0.318-0.203-0.639-0.403-0.973-0.582
                            c-0.07-0.038-0.145-0.067-0.216-0.104c-0.363-0.188-0.732-0.368-1.112-0.526c-0.05-0.02-0.103-0.036-0.153-0.056
                            c-0.401-0.162-0.809-0.311-1.226-0.439c-0.056-0.017-0.112-0.026-0.167-0.043c-0.411-0.12-0.827-0.23-1.252-0.315
                            c-0.128-0.025-0.259-0.037-0.388-0.059c-0.354-0.061-0.706-0.124-1.067-0.159C166.002,0.026,165.502,0,165,0
                            s-1.002,0.026-1.497,0.076c-0.368,0.037-0.727,0.1-1.087,0.162c-0.122,0.021-0.247,0.032-0.369,0.056
                            c-0.432,0.086-0.854,0.197-1.271,0.32c-0.049,0.014-0.098,0.023-0.146,0.038c-0.426,0.129-0.84,0.282-1.249,0.447
                            c-0.042,0.018-0.087,0.03-0.129,0.047c-0.388,0.161-0.765,0.344-1.135,0.536c-0.063,0.033-0.13,0.06-0.194,0.093
                            c-0.341,0.184-0.669,0.387-0.994,0.595c-0.088,0.056-0.18,0.105-0.268,0.163c-0.31,0.207-0.605,0.435-0.898,0.665
                            c-0.093,0.072-0.19,0.136-0.282,0.211c-0.379,0.312-0.743,0.641-1.09,0.987L99.396,59.393c-5.858,5.858-5.858,15.355,0,21.213
                            c5.857,5.857,15.355,5.858,21.213,0L150,51.214v71.366c-12.764,4.527-22.893,14.656-27.42,27.42H51.213l29.394-29.394
                            c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0L4.397,154.391c-0.352,0.35-0.683,0.719-0.998,1.103
                            c-0.139,0.17-0.26,0.349-0.392,0.524c-0.162,0.216-0.33,0.428-0.48,0.654c-0.144,0.213-0.267,0.435-0.398,0.654
                            c-0.12,0.2-0.246,0.396-0.356,0.603c-0.12,0.225-0.223,0.457-0.331,0.687c-0.101,0.214-0.207,0.424-0.299,0.643
                            c-0.093,0.225-0.168,0.455-0.25,0.683c-0.083,0.233-0.173,0.463-0.245,0.702c-0.069,0.231-0.121,0.465-0.18,0.699
                            c-0.061,0.241-0.128,0.479-0.177,0.725c-0.054,0.272-0.086,0.547-0.125,0.822c-0.03,0.21-0.07,0.416-0.091,0.629
                            c-0.098,0.986-0.098,1.979,0,2.965c0.021,0.213,0.061,0.419,0.091,0.629c0.039,0.274,0.071,0.55,0.125,0.822
                            c0.049,0.246,0.116,0.483,0.177,0.725c0.059,0.233,0.11,0.468,0.18,0.699c0.072,0.238,0.162,0.468,0.245,0.702
                            c0.082,0.228,0.157,0.458,0.25,0.683c0.092,0.219,0.198,0.429,0.299,0.643c0.108,0.23,0.211,0.461,0.331,0.687
                            c0.11,0.206,0.236,0.403,0.356,0.603c0.131,0.219,0.254,0.441,0.398,0.654c0.15,0.226,0.318,0.438,0.48,0.654
                            c0.132,0.175,0.253,0.354,0.392,0.524c0.316,0.384,0.646,0.753,0.998,1.103l54.997,54.997C62.322,233.536,66.161,235,70,235
                            s7.678-1.464,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L51.213,180h71.367c4.527,12.764,14.656,22.893,27.42,27.42v71.366
                            l-29.392-29.392c-5.857-5.858-15.355-5.857-21.213,0c-5.858,5.858-5.858,15.355,0,21.213l54.995,54.997
                            c0.347,0.347,0.711,0.676,1.09,0.987c0.092,0.075,0.189,0.138,0.282,0.21c0.293,0.23,0.588,0.458,0.898,0.665
                            c0.088,0.058,0.18,0.106,0.268,0.163c0.325,0.208,0.653,0.412,0.994,0.595c0.064,0.034,0.131,0.06,0.194,0.093
                            c0.37,0.192,0.747,0.375,1.135,0.536c0.042,0.018,0.087,0.03,0.129,0.047c0.409,0.165,0.823,0.318,1.249,0.447
                            c0.049,0.015,0.098,0.023,0.146,0.038c0.418,0.123,0.84,0.233,1.271,0.32c0.122,0.024,0.247,0.035,0.369,0.056
                            c0.359,0.063,0.719,0.125,1.087,0.162c0.495,0.05,0.995,0.076,1.497,0.076s1.002-0.026,1.497-0.076
                            c0.368-0.037,0.727-0.1,1.087-0.162c0.122-0.022,0.247-0.032,0.369-0.056c0.432-0.086,0.854-0.197,1.271-0.32
                            c0.049-0.014,0.098-0.023,0.146-0.038c0.426-0.129,0.84-0.282,1.249-0.447c0.042-0.018,0.087-0.03,0.129-0.047
                            c0.388-0.161,0.765-0.344,1.135-0.536c0.063-0.033,0.13-0.06,0.194-0.093c0.341-0.184,0.669-0.387,0.994-0.595
                            c0.088-0.056,0.18-0.104,0.268-0.163c0.31-0.207,0.605-0.435,0.898-0.665c0.093-0.072,0.19-0.136,0.282-0.21
                            c0.379-0.312,0.743-0.641,1.09-0.987l54.997-54.997c5.858-5.857,5.858-15.355,0-21.213c-5.856-5.857-15.354-5.858-21.213,0
                            L180,278.787V207.42c12.764-4.527,22.893-14.656,27.42-27.42h71.368l-29.393,29.394c-5.858,5.858-5.858,15.355,0,21.213
                            c2.929,2.929,6.768,4.393,10.607,4.393c3.839,0,7.678-1.465,10.606-4.394l54.995-54.997
                            C325.955,175.259,326.286,174.89,326.602,174.506z" />
                                    </svg>
                                </span>

                                <div className="card-body px-4">
                                    <h3 className="funcionalidades--item--title"> Navegação</h3>

                                    <p className="funcionalidades--item--text">
                                        Uma boa navegação é possibilitada, de modo que as áreas de gerenciamento são encontradas facilmente.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6">
                            <div className="card pt-5 pb-3 mb-5 mb-xl-0">
                                <span className="px-4">
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                                        style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="svg-55 funcionalidades--item--icon">
                                        <path d="M460.8,51.2h-25.6V25.6c0-15.36-10.24-25.6-25.6-25.6C394.24,0,384,10.24,384,25.6v25.6H128V25.6
                            C128,10.24,117.76,0,102.4,0C87.04,0,76.8,10.24,76.8,25.6v25.6H25.6C12.8,51.2,0,61.44,0,76.8v358.4c0,15.36,12.8,25.6,25.6,25.6
                            h156.16c-17.92-30.72-28.16-66.56-28.16-102.4c0-112.64,92.16-204.8,204.8-204.8c48.64,0,92.16,17.92,128,46.08V76.8
                            C486.4,64,473.6,51.2,460.8,51.2z" />
                                        <path d="M358.4,204.8c-84.48,0-153.6,69.12-153.6,153.6S273.92,512,358.4,512S512,442.88,512,358.4S442.88,204.8,358.4,204.8z
                            M409.6,384h-51.2c-15.36,0-25.6-10.24-25.6-25.6v-76.8c0-15.36,10.24-25.6,25.6-25.6c15.36,0,25.6,10.24,25.6,25.6v51.2h25.6
                            c15.36,0,25.6,10.24,25.6,25.6C435.2,373.76,424.96,384,409.6,384z" />
                                    </svg>
                                </span>

                                <div className="card-body px-4">
                                    <h3 className="funcionalidades--item--title"> Cronograma </h3>

                                    <p className="funcionalidades--item--text">
                                        A montagem de um cronograma te auxilia a ter uma sequência efetiva de atividades e objetivos escolares.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6">
                            <div className="card pt-5 pb-3 mb-5 mb-lg-0">
                                <span className="px-4">
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                                        style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="svg-55 funcionalidades--item--icon">
                                        <path d="M504.536,468.48l-33.28-33.28c10.24-15.36,15.36-33.28,15.36-51.2c0-56.32-46.08-102.4-102.4-102.4
                            s-102.4,46.08-102.4,102.4s46.08,102.4,102.4,102.4c17.92,0,35.84-5.12,51.2-15.36l33.28,33.28c5.12,5.12,20.48,15.36,35.84,0
                            C514.776,494.08,514.776,478.72,504.536,468.48z M384.216,435.2c-28.16,0-51.2-23.04-51.2-51.2s23.04-51.2,51.2-51.2
                            s51.2,23.04,51.2,51.2S412.376,435.2,384.216,435.2z" />
                                        <path d="M384.216,0h-358.4c-15.36,0-25.6,10.24-25.6,25.6v460.8c0,15.36,10.24,25.6,25.6,25.6h273.92
                            c-40.96-28.16-69.12-74.24-69.12-128c0-84.48,69.12-153.6,153.6-153.6c7.68,0,17.92,0,25.6,2.56V25.6
                            C409.816,10.24,399.576,0,384.216,0z M205.016,204.8h-128c-15.36,0-25.6-12.8-25.6-25.6c0-15.36,10.24-25.6,25.6-25.6h128
                            c15.36,0,25.6,10.24,25.6,25.6C230.616,192,220.376,204.8,205.016,204.8z M333.016,102.4h-256c-15.36,0-25.6-12.8-25.6-25.6
                            c0-15.36,10.24-25.6,25.6-25.6h256c15.36,0,25.6,10.24,25.6,25.6C358.616,89.6,348.376,102.4,333.016,102.4z" />
                                    </svg>
                                </span>

                                <div className="card-body px-4">
                                    <h3 className="funcionalidades--item--title"> Visualização </h3>

                                    <p className="funcionalidades--item--text">
                                        Uma observação geral dos dados e tarefas ajuda - e muito - a entender seus pontos fracos e fortes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 funcionalidades--item--last">
                            <div className="card pt-5 pb-3">
                                <span className="px-4">
                                    <svg id="Capa_1" enableBackground="new 0 0 512.006 512.006" x="0px" y="0px"
                                        viewBox="0 0 512.006 512.006" xmlns="http://www.w3.org/2000/svg" className="svg-55 funcionalidades--item--icon">
                                        <path
                                            d="m491.612 34.396c-2.813-2.813-6.629-4.395-10.607-4.395h-60.002v-15.001c0-8.284-6.717-15-15-15h-300c-8.284 0-15 6.716-15 15v15.002h-60.002c-3.979 0-7.795 1.582-10.607 4.395-2.814 2.813-4.394 6.629-4.393 10.608l.004 44.997c0 33.084 26.916 60 60 60h52.813c23.787 28.764 57.127 49.349 95.109 56.863l-23.53 23.529c-3.22 3.219-4.803 7.726-4.303 12.251l9.855 89.355h100.107l9.855-89.355c.5-4.525-1.083-9.032-4.303-12.251l-23.53-23.529c37.982-7.515 71.322-28.1 95.109-56.863h52.813c33.084 0 60-26.916 60-60l.004-44.997c.001-3.979-1.578-7.795-4.392-10.609zm-415.607 85.606c-16.542 0-30-13.458-30-30l-.003-30h45.69c1.94 21.436 7.986 41.704 17.362 60zm389.996-30c0 16.542-13.458 30-30 30h-33.051c9.377-18.296 15.423-38.564 17.363-60h45.691z" />
                                        <path
                                            d="m376.011 482.006h-18.291l-27.163-108.645c-1.669-6.677-7.669-11.361-14.552-11.361h-120.006c-6.883 0-12.883 4.685-14.552 11.362l-27.161 108.643h-18.293c-8.284 0-15 6.716-15 15 0 8.285 6.716 15 15 15h240.018c8.284 0 15-6.715 15-15 0-8.283-6.716-14.999-15-14.999zm-105.01-30.003h-29.996c-8.285 0-15-6.716-15-15s6.715-15 15-15h29.996c8.284 0 15 6.716 15 15s-6.716 15-15 15z" />
                                    </svg>
                                </span>

                                <div className="card-body px-4">
                                    <h3 className="funcionalidades--item--title"> Desempenho </h3>

                                    <p className="funcionalidades--item--text">
                                        Ter mais controle do desempenho em matérias, lições, trabalhos e provas é algo fundamental para a vida escolar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </Container>

            <Container data-aos="fade-up" className="container-padding--light depoimentos" id="depoimentos">
                <h2 className="depoimentos--title text-center mb-5">
                    Depoimentos de quem usa Ceos
                </h2>

                <Row>
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <blockquote className="blockquote blockquote-custom p-5">
                            <div className="blockquote-custom-icon">
                                <span> ❝ </span>
                            </div>

                            <p className="mb-0 mt-2 font-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                            </p>

                            <footer className="blockquote-footer pt-4 mt-4 border-top">
                                Nome da Pessoa, Estado
                            </footer>
                        </blockquote>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-4">
                        <blockquote className="blockquote blockquote-custom p-5">
                            <div className="blockquote-custom-icon">
                                <span> ❝ </span>
                            </div>

                            <p className="mb-0 mt-2 font-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                            </p>

                            <footer className="blockquote-footer pt-4 mt-4 border-top">
                                Nome da Pessoa, Estado
                            </footer>
                        </blockquote>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <blockquote className="blockquote blockquote-custom p-5">
                            <div className="blockquote-custom-icon">
                                <span> ❝ </span>
                            </div>

                            <p className="mb-0 mt-2 font-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                            </p>

                            <footer className="blockquote-footer pt-4 mt-4 border-top">
                                Nome da Pessoa, Estado
                            </footer>
                        </blockquote>
                    </div>

                    <div className="col-lg-6">
                        <blockquote className="blockquote blockquote-custom p-5">
                            <div className="blockquote-custom-icon">
                                <span> ❝ </span>
                            </div>

                            <p className="mb-0 mt-2 font-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                            </p>

                            <footer className="blockquote-footer pt-4 mt-4 border-top">
                                Nome da Pessoa, Estado
                            </footer>
                        </blockquote>
                    </div>
                </Row>
            </Container>

            <Container fluid className="cta px-0">
                <Container fluid className="container-padding">
                    <h2 className="cta--title text-center pb-4">
                        Comece agora mesmo a usar a plataforma Ceos!
                    </h2>

                    <div className="cta--arrow"></div>

                    <div className="d-grid d-md-flex justify-content-center">
                        <Link to={"/acessar"} type="button" className="cta--btn"> Acessar </Link>
                    </div>
                </Container>
            </Container>
        </>
    );
}