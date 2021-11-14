import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                <Container>
                    <Row className="justify-content-between gutter">
                        <Col>
                            <button className="cronograma--table-btn" onClick={(event) => handleEditClick(event, linha)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="41.154" height="42.687" viewBox="0 0 41.154 42.687"><g transform="translate(-1044.681 -617.99)"><path d="M1048.433,650.072l-3.752,14.1,13.984-4.32,19.555-19.555-10.574-10.574Z" transform="translate(0 -3.493)" fill="#fff" /><path d="M1081.756,623.5l9.836,9.836,5.282-5.282-10.063-10.063Z" transform="translate(-11.039)" /></g></svg>
                            </button>
                        </Col>
                        <Col>
                            <button className="cronograma--table-btn red-btn" type="button" onClick={(event) => handleDeleteClick(event, linha)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,3h14c0.6,0,1,0.4,1,1v0c0,0.6-0.4,1-1,1H5C4.4,5,4,4.6,4,4v0C4,3.4,4.4,3,5,3z" /><path d="M17,5l-3-3h-4L7,5H17z M5,7v13c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2V7H5z M9,20L9,20c-0.6,0-1-0.4-1-1v-9c0-0.6,0.4-1,1-1h0	c0.6,0,1,0.4,1,1v9C10,19.6,9.6,20,9,20z M15,20L15,20c-0.6,0-1-0.4-1-1v-9c0-0.6,0.4-1,1-1h0c0.6,0,1,0.4,1,1v9	C16,19.6,15.6,20,15,20z" /></svg>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </td>
        </tr>
    )
}

export default ReadOnly
