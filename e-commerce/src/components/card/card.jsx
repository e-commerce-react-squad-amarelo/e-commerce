import React from "react"
import {Button, Card} from "react-bootstrap";

const cardInfos = [{
    caminhoImagem: "",
    tituloCard: "",
    descricaoCard: ""
}]

export function Cards () {
    return (
    <>
    
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cardInfos.caminhoImagem} />
        <Card.Body>
            <Card.Title>{cardInfos.tituloCard}</Card.Title>
                <Card.Text>{cardInfos.descricaoCard}
                </Card.Text>
            <Button variant="primary">Comprar</Button>
        </Card.Body>
    </Card>    
    </>);
}