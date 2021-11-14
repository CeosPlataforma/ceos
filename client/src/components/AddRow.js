import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddRow = ({ handleUpdate }) => {
    return (
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <Container>
                    <Row className="justify-content-between">
                        <Col>
                            <button className="cronograma--table-btn" id="addRow" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-9.121 4.121 20.121 20.121">
                                    <g id="x" transform="translate(1.061 1.061), rotate(45)">
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


export default AddRow
