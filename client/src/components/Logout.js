import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import axios from 'axios';

function Logout() {

    const history = useHistory();
    const [done, setDone] = useState(false);

    useEffect(() => {
        axios.defaults.withCredentials = true
        axios.post("http://localhost:3333/logout").then((response) => {
            console.log(response);
            setDone(true);
        }).catch((err) => {
            console.log(err)
            setDone(true);
        });
    })
  
    useEffect(() => {
        history.replace('/')
    }, [done])

    return (<div></div>)

}

export default Logout