import React, { useEffect, useState } from "react";
import axios from "axios";

import Container from 'react-bootstrap/Container';

import UserBox from '../components/UserBox';

function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
}



export default function Usuarios() {

    const [usuarios, setUsuarios] = useState([])
    const [done, setDone] = useState(false)
    const [filter, setFilter] = useState("")
    const fetch = async () => {

        axios.get('http://localhost:3333/dashboard/usuarios').then((response) => {
            //console.log(response.data)
            setUsuarios(response.data)
            setDone(true)
        })

    }

    useEffect(() => {
        fetch()
    }, [])

    const base64Flag = `data:image/jpeg;base64,`;
    //var imageString = arrayBufferToBase64(response.data.foto.data.data);

    return (
        <>
            <Container fluid={"xxl"} className="dashboard content">
                <h1 className="title mb-5"><span className="underline">Usuários</span></h1>
                {usuarios.length > 0
                    ? usuarios.map((user) => {
                        const avatar = user.avatar ? user.avatar.data.data : null
                        const avatarbs64 = avatar ? base64Flag + arrayBufferToBase64(avatar) : null
                        //console.log("user:",user.name,"verified?", user.verifiedMail)
                        return <UserBox user={user} userImage={avatarbs64} />
                    })
                    : done ? <div className="painel--materia text-center"><p>Não há nenhum usuario.</p></div> : null
                }

            </Container>
        </>
    );
}