import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import User from "../components/User";
import ModalCronograma from "../components/ModalCronograma";

export default function Cronograma() {

    const [show, setShow] = useState(false);

    return (
        <div>
            <div className="container-xxl container-padding cronograma content">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="logged--header">
                            <h1 className="title">Confira seu cronograma</h1>
                            <User />
                        </div>
                    </div>
                </div>

                <button className="btn btn-outline-primary" onClick={() => { setShow(true) }}>sem ícone por ora</button>
                <br /><br />

                <Table striped bordered hover responsive /*tirar responsive se quiser tirar scroll da tabela*/ className="last-element">
                    <thead>
                        <tr>
                            <th>Horário</th>
                            <th>Segunda</th>
                            <th>Terça</th>
                            <th>Quarta</th>
                            <th>Quinta</th>
                            <th>Sexta</th>
                            <th>Sabádo</th>
                            <th>Domingo</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>XX: XX</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                        </tr>
                        <tr>
                            <td>XX: XX</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                        </tr>
                        <tr>
                            <td>XX: XX</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                        </tr>
                        <tr>
                            <td>XX: XX</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                        </tr>
                        <tr>
                            <td>XX: XX</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                        </tr>
                        <tr>
                            <td>XX: XX</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                        </tr>
                        <tr>
                            <td>XX: XX</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                        </tr>
                        <tr>
                            <td>XX: XX</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                            <td>Matéria</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <ModalCronograma show={show} onHide={() => setShow(false)} />

        </div>
    );
}
