import axios from "axios";
import React, { useRef, useState } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import Title from "../components/PainelTitle";
import User from "../components/User";


export default function PlataformaHeader({ materia, title, user, editmateria, retornarmsg, link }) {

    const [edit, setEdit] = useState(false);
    const formRef = useRef();
    const [value, setValue] = useState(title);
    const [loggedHeader, setLoggedHeader] = useState("logged--header");

    const handleValue = (event) => {
        event.preventDefault();
        const input_value = event.target.value.normalize('NFD');
        console.log("valor", input_value)
        setValue(input_value)
    }

    const onSubmit = (event) => {
        console.log("submit event")
        console.log("title !== value", title !== value, value)
        console.log("value !== ''", value !== '', value)
        console.log("value === undefined", value === undefined, value)
        event.preventDefault();
        if (title !== value && value) {
            console.log(value)
            axios.post('http://localhost:3333/materia-rename', { materia_id: materia._id, new_name: value })
                .then((response) => {
                    console.log(response.data)
                    if (response.data.success) {
                        window.location.reload();
                    } else {
                        console.log("erro")
                    }
                }).catch((error) => {
                    console.log(error)
                })
        } else {
            setEdit(false);
            setLoggedHeader("logged--header");
        }
    }

    return (
        <Row className="align-items-center">
            <Col>
                <div className={loggedHeader}>
                    <div className="d-flex align-items-center">
                        <form ref={formRef} onSubmit={(event) => { onSubmit(event) }} className="d-flex align-items-center">
                            <Title title={title} user={user} editable={edit} handleValue={handleValue} />
                            {editmateria &&
                                <React.Fragment>
                                    {edit ? (
                                        <button type="submit" className="btn btn-edit--materia btn-green" style={{ "marginBottom": "0px" }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="5 7 53 53"><polygon points="27,55 6,33 9,29 26,41 55,12 59,16" /></svg></button>
                                    ) : (
                                        <a className="btn btn-edit--materia" onClick={() => {
                                            setEdit(true);
                                            setLoggedHeader("logged--header logged--header--margin");
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.154 42.687"><g transform="translate(-1044.681 -617.99)"><path d="M1048.433,650.072l-3.752,14.1,13.984-4.32,19.555-19.555-10.574-10.574Z" transform="translate(0 -3.493)" fill="#fff" /><path d="M1081.756,623.5l9.836,9.836,5.282-5.282-10.063-10.063Z" transform="translate(-11.039)" fill="#fff" /></g></svg></a>
                                    )}
                                </React.Fragment>
                            }
                        </form>
                    </div>
                    {retornarmsg &&
                        <>
                            <Link to={link} className="d-flex align-items-center">
                                <div className="return--arrow" /><p className="mb-0 return--text">{retornarmsg}</p>
                            </Link>
                        </>
                    }
                    <User />
                </div>
            </Col>
        </Row>
    );
}