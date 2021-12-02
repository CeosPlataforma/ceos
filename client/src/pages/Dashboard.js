import React, { useEffect, useState } from "react";
import axios from 'axios'

import Container from 'react-bootstrap/Container';

export default function Dashboard() {

    const [userCount, setUserCount] = useState(0)
    const [ticketCount, setTicketCount] = useState(0)
    const [msgCount, setMsgCount] = useState(0)
    const fetch = async () => {
        axios.get('http://localhost:3333/dashboard').then((response) => {
            setUserCount(response.data.userCount)
            setTicketCount(response.data.ticketCount)
            setMsgCount(response.data.feedbackCount)
        })
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <>
            <Container fluid={"xxl"} className="dashboard content">
                <h1 className="title mb-5"><span className="underline">Visão Geral</span></h1>
                <div className="d-flex justify-content-between flex-wrap">
                    <div className="dashboard--info">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 456.368 456.368" xmlSpace="preserve">
                            <path d="M324.194,220.526c-6.172,7.772-13.106,14.947-21.07,21.423c45.459,26.076,76.149,75.1,76.149,131.158
                                        c0,30.29-66.367,54.018-151.09,54.018s-151.09-23.728-151.09-54.018c0-56.058,30.69-105.082,76.149-131.158
                                        c-7.963-6.476-14.897-13.65-21.07-21.423c-50.624,31.969-84.322,88.41-84.322,152.581c0,19.439,10.644,46.53,61.355,65.201
                                        c31.632,11.647,73.886,18.06,118.979,18.06c45.093,0,87.347-6.413,118.979-18.06c50.71-18.671,61.355-45.762,61.355-65.201
                                        C408.516,308.936,374.818,252.495,324.194,220.526z"/>
                            <path d="M228.182,239.795c56.833,0,100.597-54.936,100.597-119.897C328.779,54.907,284.993,0,228.182,0
                                        c-56.833,0-100.597,54.936-100.597,119.897C127.585,184.888,171.372,239.795,228.182,239.795z M228.182,29.243
                                        c39.344,0,71.354,40.667,71.354,90.654s-32.01,90.654-71.354,90.654s-71.354-40.667-71.354-90.654S188.838,29.243,228.182,29.243
                                        z"/>
                        </svg>
                        <h1>Total de usuários cadastrados</h1>
                        <h2>{userCount.toLocaleString('en-US', { minimumIntegerDigits: 3, useGrouping: false })}</h2>
                    </div>
                    <div className="dashboard--info">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 12H16V14H8zM8 16H16V18H8z" /><path fill="none" stroke-miterlimit="10" stroke-width="1.5" d="M19,20c0,0.551-0.449,1-1,1H6c-0.551,0-1-0.449-1-1V4c0-0.551,0.449-1,1-1h7.586L19,8.414V20z" /><path d="M18.5 9L13 9 13 3.5z" /></svg>
                        <h1>Total de mensagens recebidas</h1>
                        <h2>{msgCount.toLocaleString('en-US', { minimumIntegerDigits: 3, useGrouping: false })}</h2>
                    </div>
                    <div className="dashboard--info">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke-miterlimit="10" stroke-width="2" d="M17 3h2c1.105 0 2 .895 2 2v2h-4M14 21H5c-1.105 0-2-.895-2-2v-2h10" /><path fill="none" stroke-miterlimit="10" stroke-width="1.5" d="M15.027 20.986c-1.104.015-2.012-.868-2.027-1.972l-.028-3M19 3H8C6.895 3 6 3.895 6 5v12" /><path fill="none" stroke-miterlimit="10" stroke-width="2" d="M14,21h1c1.105,0,2-0.895,2-2V5c0-1.105,0.895-2,2-2" /></svg>
                        <h1>Total de tickets recebidos</h1>
                        <h2>{ticketCount.toLocaleString('en-US', { minimumIntegerDigits: 3, useGrouping: false })}</h2>
                    </div>
                </div>
            </Container>
        </>
    );
}