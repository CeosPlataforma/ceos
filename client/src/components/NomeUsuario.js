import axios from 'axios';
import { useEffect, useState } from 'react';

export default function NomeUsuario(props) {

    const [name, setName] = useState('Nome de Usuário')

    axios.get("http://localhost:3333/userinfo")
    .then((response) => {
        setName(response.data.session.user.name)
    })
    .catch((error) => {
        console.log(error);
    });

    return (name)
}