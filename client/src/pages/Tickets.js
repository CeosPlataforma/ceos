import Button from "@restart/ui/esm/Button";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import TicketBox from "../components/TicketBox";

export default function Tickets() {

    const [atvTipo, setAtvTipo] = useState("unsolved")
    const [atvButton, setAtvButton] = useState("atividades--btn atividades--btn--active w-100")
    const [casaButton, setCasaButton] = useState("atividades--btn atividades--btn--inactive w-100")
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

    const resolver = async (uuid, index) => {
        axios.patch('http://localhost:3333/dashboard/tickets', { uuid: uuid })
            .then((response) => {
                //console.log(response.data)
                window.location.reload()
            })
    }

    const deletar = async (uuid, index) => {
        axios.post('http://localhost:3333/dashboard/tickets', { uuid: uuid })
            .then((response) => {
                //console.log(response.data)
                window.location.reload()
            })
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <>
            <Container fluid={"xxl"} className="dashboard content">
                <h1 className="title mb-5"><span className="underline">Tickets</span></h1>

                <div className="row d-flex justify-content-between row-atividades">
                    <Col>
                        <Button
                            className={atvButton}
                            onClick={() => {
                                setAtvButton("atividades--btn atividades--btn--active w-100")
                                setCasaButton("atividades--btn atividades--btn--inactive w-100")
                                setAtvTipo("unsolved")
                            }}>
                            não resolvidos
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            className={casaButton}
                            onClick={() => {
                                setAtvButton("atividades--btn atividades--btn--inactive w-100")
                                setCasaButton("atividades--btn atividades--btn--active w-100")
                                setAtvTipo("solved")
                            }}>
                            resolvidos
                        </Button>
                    </Col>
                </div>

                {tickets && tickets.length > 0
                    ? tickets.filter((ticket) => {
                        if (atvTipo == "solved" && ticket.resolvido) return true
                        if (atvTipo == "unsolved" && !ticket.resolvido) return true
                    })
                    .map((ticket, index) => {
                        return <TicketBox ticket={ticket} resolver={resolver} deletar={deletar} index={index}/>
                    })
                    : done ? <div className="painel--materia text-center"><p>Não há nenhum ticket.</p></div> : null
                }
            </Container>
        </>
    );
}