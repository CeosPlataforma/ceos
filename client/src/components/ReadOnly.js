import React from 'react'

const ReadOnly = ({ linha, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{linha.hora}</td>
            <td>{linha.seg}</td>
            <td>{linha.ter}</td>
            <td>{linha.qua}</td>
            <td>{linha.qui}</td>
            <td>{linha.sex}</td>
            <td>{linha.sab}</td>
            <td>{linha.dom}</td>
            <td>
                <button type="button" onClick={(event) => handleEditClick(event, linha)}>EDITAR</button>
                <button type="button" onClick={(event) => handleDeleteClick(event, linha)}>DELETAR</button>
            </td>
        </tr>
    )
}

export default ReadOnly
