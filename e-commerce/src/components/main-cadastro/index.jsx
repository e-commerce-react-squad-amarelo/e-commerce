import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Stack } from "react-bootstrap";

import { FormularioCadastro } from "../formulariocadastro";

export function MainCadastro () {
    // function salvar(){

    // }

    return (
        <>
            <Container>
                <Row>
                    <FormularioCadastro/>
                </Row>

                {/* <Row >
                    <Stack direction="horizontal" gap={5} className="d-flex justify-content-center">
                        <Botao texto="Salvar" onClick={salvar}/>
                        <Botao texto="Cancelar"/>

                    </Stack>  
                </Row> */}
            </Container>
        </>
    )
}