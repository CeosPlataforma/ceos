import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { useParams } from "react-router";

export default function Logout({ onLogOut }) {

    const { desativar } = useParams()
    //console.log(desativar)

    const history = useNavigate();
    axios.defaults.withCredentials = true
    const [done, setDone] = useState(false);

    useEffect(() => {

        console.log("use effect")

        axios.post('http://localhost:3333/logout').then((response) => {
            console.log("sucesso ao deletar session", response.data.success)
            onLogOut()
            if (desativar === true || desativar === "true") {
                history('/desativado')
            } else {
                setDone(true)
            }
        }).catch((error) => console.log(error))

        // axios.post("http://localhost:3333/logout").then((response) => {
        //     console.log("aaaaaa");
        //     onLogOut()
        //     setDone(true);
        // }).catch((err) => {
        //     console.log(err)
        //     setDone(true);
        // });
    })

    useEffect(() => {
        history('/')
    }, [done])

    return (<div></div>)

}