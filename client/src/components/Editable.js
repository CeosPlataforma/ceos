import React from 'react'

const Editable = ({ editFormData, handleEditUpdate, handleCancel }) => {
    return (
        <tr>
            <td><input type="text" name="hora" placeholder="hora" value={editFormData.hora} onChange={handleEditUpdate}/></td>
            <td><input type="text" name="seg"  placeholder="SEG"  value={editFormData.seg} onChange={handleEditUpdate}/></td>
            <td><input type="text" name="ter"  placeholder="TER"  value={editFormData.ter} onChange={handleEditUpdate}/></td>
            <td><input type="text" name="qua"  placeholder="QUA"  value={editFormData.qua} onChange={handleEditUpdate}/></td>
            <td><input type="text" name="qui"  placeholder="QUI"  value={editFormData.qui} onChange={handleEditUpdate}/></td>
            <td><input type="text" name="sex"  placeholder="SEX"  value={editFormData.sex} onChange={handleEditUpdate}/></td>
            <td><input type="text" name="sab"  placeholder="SAB"  value={editFormData.sab} onChange={handleEditUpdate}/></td>
            <td><input type="text" name="dom"  placeholder="DOM"  value={editFormData.dom} onChange={handleEditUpdate}/></td>
            <td><button type="submit">SALVAR</button><button type="button" onClick={handleCancel} >CANCELAR</button></td>
        </tr>
    )
}

export default Editable