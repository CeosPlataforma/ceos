import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';

import MsgBox from "../components/MsgBox";

export default function Mensagens() {

    const [mensagens, setMensagens] = useState([])
    const [done, setDone] = useState(false)
    const [filter, setFilter] = useState("padrao")
    const fetch = async () => {

        axios.get('http://localhost:3333/dashboard/mensagens').then((response) => {
            //console.log(response.data)
            setMensagens(response.data)
            setDone(true)
        })

    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <>
            <Container fluid={"xxl"} className="dashboard content">
                <h1 className="title mb-5"><span className="underline">Mensagens</span></h1>

                <select onChange={e => setFilter(e.target.value)} value={filter} name="reason" className="form-select modal--input thanks-dropdown w-100 shadow-none mb-5" required>
                    <option className="thanks-dropdown--select" value="padrao">Sem filtro</option>
                    <option value="nao-entendi-como-funciona">Não entendi o funcionamento</option>
                    <option value="nao-gostei-inferface">Não gostei da interface</option>
                    <option value="nao-achei-intuitivo">Não achei a plataforma intuitiva</option>
                    <option value="outro">Outro (especifique no campo de mensagem)</option>
                </select>

                {mensagens.length > 0
                    ? mensagens.filter((mensagem) => {
                        if (filter === "padrao") {
                            return true
                        } else if (filter === mensagem.reason) {
                            return true
                        } else {
                            return false
                        }
                    }).map((mensagem, index, array) => {
                        console.log("array", array)
                        console.log("array length", array.length)
                        return <MsgBox key={mensagem._id} id={mensagem._id} email={mensagem.email} reason={mensagem.reason} msg={mensagem.message} />
                    })
                    : done ? <div className="painel--materia text-center"><p>Não há nenhuma mensagem.</p></div> : null
                }
            </Container>
        </>
    );
}