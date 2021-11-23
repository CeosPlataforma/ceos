import React from "react";
import Col from 'react-bootstrap/Col';

export default function TicketBox({ ticket }) {

    return (
        <Col>
            <div className="msg-box mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="pendente"><path fill="none" stroke-miterlimit="10" stroke-width="2" d="M12 6L12 12 16 16" /><path fill="none" stroke-miterlimit="10" stroke-width="2" d="M12 3A9 9 0 1 0 12 21A9 9 0 1 0 12 3Z" /></svg>
                {/* svg quando o ticket estiver concluido <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="concluido"><path d="M19.839,10.403C19.944,10.919,20,11.453,20,12c0,4.411-3.589,8-8,8s-8-3.589-8-8s3.589-8,8-8c1.633,0,3.152,0.494,4.42,1.338l1.431-1.431C16.203,2.713,14.185,2,12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10c0-1.126-0.196-2.206-0.541-3.217L19.839,10.403z" /><path fill="none" stroke-miterlimit="10" stroke-width="2" d="M22 4L11 15 7 11" /></svg> */}
                <p>ID: {ticket._id}</p>
                <p>Nome: {ticket.nome}</p>
                <p>E-mail: {ticket.email}</p>
                <p>Assunto: {ticket.assunto}</p>
                <p>Mensagem: {ticket.mensagem}</p>
                <textarea className="form-control" placeholder="Responder" />
                <div className="d-flex justify-content-between mt-4">
                    <button className="btn--secondary w-50 red-btn">Excluir</button>
                    <button className="btn--secondary w-50 btn-solved">Marcar como resolvido</button>
                </div>
            </div>
        </Col>
    );
}