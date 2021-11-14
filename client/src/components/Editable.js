import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Editable = ({ editFormData, handleEditUpdate, handleCancel }) => {
    return (
        <tr>
            <td><input type="time" pattern="[0-9]{2}:[0-9]{2}" autoComplete="off" name="hora" className="form-control mx-auto" placeholder="Horário" value={editFormData.hora} onChange={handleEditUpdate} /></td>
            <td><input type="text" name="seg" autoComplete="off" className="form-control mx-auto" placeholder="Segunda" value={editFormData.seg} onChange={handleEditUpdate} /></td>
            <td><input type="text" name="ter" autoComplete="off" className="form-control mx-auto" placeholder="Terça" value={editFormData.ter} onChange={handleEditUpdate} /></td>
            <td><input type="text" name="qua" autoComplete="off" className="form-control mx-auto" placeholder="Quarta" value={editFormData.qua} onChange={handleEditUpdate} /></td>
            <td><input type="text" name="qui" autoComplete="off" className="form-control mx-auto" placeholder="Quinta" value={editFormData.qui} onChange={handleEditUpdate} /></td>
            <td><input type="text" name="sex" autoComplete="off" className="form-control mx-auto" placeholder="Sexta" value={editFormData.sex} onChange={handleEditUpdate} /></td>
            <td><input type="text" name="sab" autoComplete="off" className="form-control mx-auto" placeholder="Sábado" value={editFormData.sab} onChange={handleEditUpdate} /></td>
            <td><input type="text" name="dom" autoComplete="off" className="form-control mx-auto" placeholder="Domingo" value={editFormData.dom} onChange={handleEditUpdate} /></td>
            <td>
                <Container>
                    <Row className="justify-content-between gutter">
                        <Col>
                            <button className="cronograma--table-btn green-btn" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="5 7 53 53"><polygon points="27,55 6,33 9,29 26,41 55,12 59,16" /></svg>
                            </button>
                        </Col>
                        <Col>
                            <button className="cronograma--table-btn red-btn" type="button" onClick={handleCancel}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20.121" height="20.121" viewBox="0 0 20.121 20.121">
                                    <g id="x" transform="translate(1.061 1.061)">
                                        <line id="Linha_6" data-name="Linha 6" x2="18" y2="18" fill="none" stroke="#fff" stroke-width="3" />
                                        <line id="Linha_7" data-name="Linha 7" x1="18" y2="18" fill="none" stroke="#fff" stroke-width="3" />
                                    </g>
                                </svg>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </td>
        </tr>
    )
}

export default Editable