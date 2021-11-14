import React, { useState } from "react";
import Table from 'react-bootstrap/Table';

import { nanoid } from 'nanoid'

import PlataformaHeader from "../components/PlataformaHeader";

import mock_data from "./mock-data.json";
import ReadOnly from "../components/ReadOnly";
import Editable from "../components/Editable";
import AddRow from "../components/AddRow";

export default function Cronograma() {

    const [data, setData] = useState(mock_data);

    const [addForm, setAddForm] = useState({
        hora: '0:00',
        seg: '',
        ter: '',
        qua: '',
        qui: '',
        sex: '',
        sab: '',
        dom: ''
    })

    const [edited, setEdited] = useState({
        hora: '0:00',
        seg: '',
        ter: '',
        qua: '',
        qui: '',
        sex: '',
        sab: '',
        dom: ''
    })

    const [lineId, setLineId] = useState(null)

    const handleUpdate = (e) => {

        e.preventDefault();

        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newForm = { ...addForm };
        newForm[fieldName] = fieldValue;

        setAddForm(newForm);

    }

    const handleEditUpdate = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newForm = { ...edited };
        newForm[fieldName] = fieldValue;

        setEdited(newForm);
    }

    const onSubmitEdit = (e) => {

        e.preventDefault();

        if (e.nativeEvent.submitter.id === "addRow") {

            const newLine = {
                id: nanoid(),
                hora: addForm.hora,
                seg: addForm.seg,
                ter: addForm.ter,
                qua: addForm.qua,
                qui: addForm.qui,
                sex: addForm.sex,
                sab: addForm.sab,
                dom: addForm.dom
            }

            const newLines = [...data, newLine]
            setData(newLines)
            setLineId(newLine.id)

        } else {
            const editedLine = {
                id: lineId,
                hora: edited.hora,
                seg: edited.seg,
                ter: edited.ter,
                qua: edited.qua,
                qui: edited.qui,
                sex: edited.sex,
                sab: edited.sab,
                dom: edited.dom
            }

            const newLines = [...data]

            const index = data.findIndex((linha) => linha.id === lineId)

            newLines[index] = editedLine;

            setData(newLines)
            setLineId(null)
        }
    }

    const handleCancel = () => {
        setLineId(null)
    }

    const handleDeleteClick = (linhaId) => {
        const newLines = [...data]

        const index = data.findIndex((linha) => linha.id == linhaId)

        newLines.splice(index, 1)

        setData(newLines);
    }

    const handleEditClick = (e, linha) => {

        e.preventDefault();
        setLineId(linha.id);

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

        setEdited(values);

    }

    return (
        <>
            <div className="container-xxl content cronograma">

                <PlataformaHeader title="Confira seu cronograma" user={false} />

                <div className="row align-items-center" style={{ marginTop: '10px' }}>
                    <div className="col-12">

                        <form onSubmit={onSubmitEdit}>
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
                                    {data.map((linha) => (
                                        <>
                                            {lineId === linha.id ? (
                                                <Editable editFormData={edited} handleEditUpdate={handleEditUpdate} handleCancel={handleCancel} />
                                            ) : (
                                                <ReadOnly linha={linha} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
                                            )}
                                        </>
                                    ))}
                                    <AddRow handleUpdate={handleUpdate} />
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
