import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap"
import './footer.css';

export function Footer () {
    return (
    <>
    
    <Container>
        <Row className="texto-footer">
            <h5>Desenvolvido pelo Squad-Amarelo - CopyRight 2022</h5>
        </Row>
    </Container>
    
    </>)
}