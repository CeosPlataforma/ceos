import axios from 'axios';
import { useState } from 'react';
import React from "react";

export default function NomeUsuario (props) {
    
    const [name, setName] = useState('Nome de Usuário')

    axios.get("http://localhost:3333/userinfo")
    .then((response) => {
        console.log(response.data.session.user.name);
        setName(response.data.session.user.name)
    })
    .catch((error) => {
        console.log(error);
    });
 

    return (name) 
}