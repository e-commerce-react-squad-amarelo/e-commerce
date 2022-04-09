import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap"
import './cabecalho.css';
import logo from "../../Assets/nossaLogo.jpeg"
import { CabecalhoMenu } from "../menu/menu"



export function Cabecalho () {
    return (<>
    <Container className="container-cabecalho">
        <Row>
            <Col xs lg={8}><img src={logo}></img></Col> 
            <Col className="nav-menu" xs lg={4}><CabecalhoMenu /></Col>
        </Row>
    </Container>
</>)
}