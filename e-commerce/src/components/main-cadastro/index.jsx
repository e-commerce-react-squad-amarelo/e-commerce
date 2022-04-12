import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";

import { FormularioCadastro } from "../formulariocadastro";

export function MainCadastro () {
    return (
        <>
            <Container>
                <Row>
                    <FormularioCadastro/>
                </Row>

                <Row>
                        aqui vai os botões
                </Row>
            </Container>
        </>
    )
}