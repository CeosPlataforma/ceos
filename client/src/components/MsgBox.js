import React from "react";
import Col from 'react-bootstrap/Col';

export default function MsgBox({ id, email, reason, msg }) {

    return (
        <Col>
            <div className="msg-box mb-4">
                <p>ID: {id}</p>
                <p>E-mail: {email}</p>
                <p>Razão: {reason}</p>
                <p>Mensagem: {msg}</p>
            </div>
        </Col>
    );
}