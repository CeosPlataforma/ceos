import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom'
import axios from 'axios';

function Logout() {

    const [done, setDone] = useState(false)

    axios.defaults.withCredentials = true
    axios.post("http://localhost:3333/logout")
    .then((response) => {
        console.log(response);
        setDone(true);
    }).catch((error) => {
        console.log(error);
    });

    useEffect(() => {
        console.log("use effect")
        return <Redirect to="/"></Redirect>
    }, [done])

    return (
        <div>redirect...</div>
    )
}

export default Logout