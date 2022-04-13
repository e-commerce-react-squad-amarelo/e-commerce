import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Stack } from "react-bootstrap";

import { FormularioCadastro } from "../formulariocadastro";

import { BotaoComprar } from "../botoes/botaoComprar";

import { Botao } from "../botoes/botaopadrao";

export function MainCadastro () {
    return (
        <>
            <Container>
                <Row>
                    <FormularioCadastro/>
                </Row>

                <Row >
                    <Stack direction="horizontal" gap={5} className="d-flex justify-content-center">
                        <Botao texto="Salvar"/>
                        <Botao texto="Cancelar"/>

                    </Stack>  
                </Row>
            </Container>
        </>
    )
}