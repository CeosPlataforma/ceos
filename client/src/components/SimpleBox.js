import React from "react";
import Col from 'react-bootstrap/Col';

export default function SimpleBox({ counter, title }) {

    return (
        <Col>
            <div className="simpleBox">
                <h2>{counter}</h2>
                <h5>{title}</h5>
            </div>
        </Col>
    );
}