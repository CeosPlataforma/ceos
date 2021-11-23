import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import TicketBox from "../components/TicketBox";

export default function Tickets() {


    const [tickets, setTickets] = useState([])
    const [done, setDone] = useState(false)
    const [filter, setFilter] = useState("")
    const fetch = async () => {
        axios.get('http://localhost:3333/dashboard/tickets').then((response) => {
            //console.log(response.data)
            setTickets(response.data)
            setDone(true)
        })
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <>
            <Container fluid={"xxl"} className="dashboard content">
                <h1 className="title mb-5"><span className="underline">Tickets</span></h1>
                {tickets.length > 0
                    ? tickets.map((ticket) => {
                        return <TicketBox ticket={ticket} />
                    })
                    : done ? <div className="painel--materia text-center"><p>Não há nenhum ticket.</p></div> : null
                }
            </Container>
        </>
    );
}