import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap"
import './main.css';
import { Cards } from "../card/card"


export function Main () {
    return (
    <>
    <Container className="Main">
        <Row className="linha-cards">
            <Col>
                <Cards />
            </Col>

            <Col>
                <Cards />
            </Col>

            <Col>
                <Cards />
            </Col>

            <Col>
                <Cards />
            </Col>
        </Row>

        <Row className="linha-cards">
            <Col>
                <Cards />
            </Col>

            <Col>
                <Cards />
            </Col>

            <Col>
                <Cards />
            </Col>

            <Col>
                <Cards />
            </Col>
        </Row>
    </Container>
    
    </>)
}