import React, { useState } from "react";
import Table from 'react-bootstrap/Table';

import { nanoid } from 'nanoid'

import ModalCronograma from "../components/ModalCronograma";
import PlataformaHeader from "../components/PlataformaHeader";

import mock_data from "./mock-data.json";
import ReadOnly from "../components/ReadOnly";
import Editable from "../components/Editable";
import AddRow from "../components/AddRow";

export default function Cronograma() {

    const [show, setShow] = useState(false);

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

                <a className="cronograma--hint" onClick={() => { setShow(true) }}>
                    <svg height="384pt" viewBox="0 0 384 384" width="384pt" xmlns="http://www.w3.org/2000/svg">
                        <path d="m320 0h-256c-35.289062 0-64 28.710938-64 64v287.96875c0 12.992188 7.753906 24.589844 19.753906 29.558594 3.980469 1.648437 8.148438 2.457031 12.277344 2.457031 8.3125 0 16.464844-3.257813 22.59375-9.390625.222656-.21875.4375-.449219.648438-.683594l47.910156-53.910156h216.816406c35.289062 0 64-28.710938 64-64v-192c0-35.289062-28.710938-64-64-64zm32 256c0 17.648438-14.351562 32-32 32h-224c-.152344 0-.289062.039062-.441406.046875-.582032.015625-1.160156.097656-1.742188.175781-.472656.066406-.945312.113282-1.410156.21875-.519531.117188-1.023438.300782-1.527344.46875-.480468.160156-.957031.304688-1.414062.515625-.472656.207031-.914063.476563-1.359375.734375-.457031.253906-.914063.503906-1.335938.808594-.402343.277344-.761719.617188-1.136719.933594-.433593.371094-.863281.738281-1.25 1.152344-.101562.113281-.238281.203124-.34375.3125l-52.039062 58.5625v-287.929688c0-17.648438 14.351562-32 32-32h256c17.648438 0 32 14.351562 32 32zm0 0" /><path d="m192 224c-8.832031 0-16 7.167969-16 16v8c0 8.832031 7.167969 16 16 16s16-7.167969 16-16v-8c0-8.832031-7.167969-16-16-16zm0 0" /><path d="m192 56c-26.472656 0-48 21.527344-48 48 0 8.832031 7.167969 16 16 16s16-7.167969 16-16c0-8.824219 7.175781-16 16-16s16 7.175781 16 16c0 6.039062-2.351562 11.726562-6.625 16-16.367188 16.359375-25.375 38.121094-25.375 61.257812v2.742188c0 8.832031 7.167969 16 16 16s16-7.167969 16-16v-2.742188c0-14.59375 5.679688-28.3125 16-38.632812s16-24.03125 16-38.625c0-26.472656-21.527344-48-48-48zm0 0" />
                    </svg>
                </a>

                <div className="row align-items-center" style={{ marginTop: '43px' }}>
                    <div className="col-12">

                        <form onSubmit={onSubmitEdit}>
                            <Table striped bordered hover responsive /*tirar responsive se quiser tirar scroll da tabela*/>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>SEG</th>
                                        <th>TER</th>
                                        <th>QUA</th>
                                        <th>QUI</th>
                                        <th>SEX</th>
                                        <th>SAB</th>
                                        <th>DOM</th>
                                        <th>AÇÕES</th>
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

            <ModalCronograma show={show} onHide={() => setShow(false)} />
        </>
    );
}
