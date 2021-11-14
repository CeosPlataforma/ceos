import React, { useState } from "react";
import Table from 'react-bootstrap/Table';

import { nanoid } from 'nanoid'

import PlataformaHeader from "../components/PlataformaHeader";

import mock_data from "./mock-data.json";
import ReadOnly from "../components/ReadOnly";
import Editable from "../components/Editable";
import AddRow from "../components/AddRow";

export default function Cronograma() {

    const [cronograma, setCronograma] = useState(mock_data);
    //const [cronograma_temporario, setCronogamaTemporario] = useState(mock_data);

    const [cancel_linha_buffer, setCancelLinhaBuffer] = useState({
        hora: '0:00',
        seg: '',
        ter: '',
        qua: '',
        qui: '',
        sex: '',
        sab: '',
        dom: ''
    })

    const [linha_buffer, setLinhaBuffer] = useState({
        hora: '0:00',
        seg: '',
        ter: '',
        qua: '',
        qui: '',
        sex: '',
        sab: '',
        dom: ''
    })

    //const [iddois, setIddois] = useState(null)

    const [linha_id, setLinhaId] = useState(null)

    const handleAdd = (event) => {

        console.log("add event", event)

        const nova_linha = {
            id: nanoid(),
            hora: '',
            seg: '',
            ter: '',
            qua: '',
            qui: '',
            sex: '',
            sab: '',
            dom: ''
        }
        console.log("nova linha", nova_linha)

        const novo_cronograma = [...cronograma]
        const index = cronograma.length
        novo_cronograma[index] = nova_linha;
        setCronograma(novo_cronograma)
        setLinhaId(nova_linha.id)
        let { hora, seg, ter, qua, qui, sex, sab, dom } = nova_linha
        const buffer = { hora, seg, ter, qua, qui, sex, sab, dom }
        setCancelLinhaBuffer(buffer)
        setLinhaBuffer(buffer)
    }

    // on editable input change
    const handleEditUpdate = (e) => {
        e.preventDefault();

        const celula_nome = e.target.getAttribute('name');
        const celula_valor = e.target.value;

        const temp_crono_linha = { ...linha_buffer };
        temp_crono_linha[celula_nome] = celula_valor;

        setLinhaBuffer(temp_crono_linha);
    }

    // botão de cancelar
    const handleCancel = () => {
        
        if (cancel_linha_buffer === linha_buffer) {
            const cronograma_buffer = [...cronograma]
            const index = cronograma.findIndex((table_linha) => linha_id == table_linha.id)
            cronograma_buffer.splice(index, 1)
            setCronograma(cronograma_buffer)
            setCancelLinhaBuffer(null)
        }
        setLinhaId(null)
        setLinhaBuffer([])
    }

    // deletar linha
    const handleDeleteClick = (e, evento_linha) => {
        const novo_cronograma = [...cronograma]
        const index = cronograma.findIndex((table_linha) => evento_linha.id == table_linha.id)
        novo_cronograma.splice(index, 1)
        setCronograma(novo_cronograma);
    }

    // quando aperta o botão de editar
    const handleEditClick = (e, linha) => {
        e.preventDefault();

        if (cancel_linha_buffer === linha_buffer) {
            const cronograma_buffer = [...cronograma]
            const index = cronograma.findIndex((table_linha) => linha_id == table_linha.id)
            cronograma_buffer.splice(index, 1)
            setCronograma(cronograma_buffer)
            setCancelLinhaBuffer(null)
        }

        setLinhaId(linha.id);
        const values = {
            hora: linha.hora,
            seg: linha.seg,
            ter: linha.ter,
            qua: linha.qua,
            qui: linha.qui,
            sex: linha.sex,
            sab: linha.sab,
            dom: linha.dom
        }
        setLinhaBuffer(values);
    }

    // salvando a edição
    const onSubmitEdit = (e) => {

        e.preventDefault();
        const novos_valores = {
            id: linha_id,
            hora: linha_buffer.hora,
            seg: linha_buffer.seg,
            ter: linha_buffer.ter,
            qua: linha_buffer.qua,
            qui: linha_buffer.qui,
            sex: linha_buffer.sex,
            sab: linha_buffer.sab,
            dom: linha_buffer.dom
        }
        const novo_cronograma = [...cronograma]
        const index = cronograma.findIndex((linha) => linha.id === linha_id)
        novo_cronograma[index] = novos_valores;
        setCronograma(novo_cronograma)
        setLinhaId(null)
    }

    const onKeyPress = (event) => {
        if (event.which === 13 /* Enter */) {
            event.preventDefault();
        }
    }

    return (
        <>
            <div className="container-xxl content cronograma">

                <PlataformaHeader title="Confira seu cronograma" user={false} />

                <div className="row align-items-center" style={{ marginTop: '10px' }}>
                    <div className="col-12">

                        <form onSubmit={onSubmitEdit} onKeyPress={(e) => onKeyPress(e)}>
                            <Table bordered hover responsive /*tirar responsive se quiser tirar scroll da tabela*/>
                                <thead>
                                    <tr>
                                        <th>Horário</th>
                                        <th>Segunda</th>
                                        <th>Terça</th>
                                        <th>Quarta</th>
                                        <th>Quinta</th>
                                        <th>Sexta</th>
                                        <th>Sábado</th>
                                        <th>Domingo</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cronograma.map((linha) => (
                                        <>
                                            {linha_id === linha.id ? (
                                                <Editable editFormData={linha_buffer} handleEditUpdate={handleEditUpdate} handleCancel={handleCancel} />
                                            ) : (
                                                <ReadOnly linha={linha} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
                                            )}
                                        </>
                                    ))}
                                    <AddRow handleAdd={handleAdd} />
                                </tbody>
                            </Table>
                        </form>


                        {/* <h2>add pelé</h2> <form onSubmit={onSubmit}> </form> */}

                    </div>
                </div>
            </div>
        </>
    );
}
