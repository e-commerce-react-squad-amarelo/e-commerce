import React from "react"
import {Button, Card} from "react-bootstrap";
import imgbase from "../../Assets/imagemtelacadastro.png" //teste da imagem no card

const cardInfos = [{
    caminhoImagem: "",
    tituloCard: "",
    descricaoCard: ""
}]

export function Cards () {
    return (
    <>
    
    { <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imgbase} />
        <Card.Body>
            <Card.Title>{cardInfos.tituloCard}</Card.Title>
                <Card.Text>{cardInfos.descricaoCard}
                </Card.Text>
            <Button variant="primary">Visualizar</Button>
        </Card.Body>
    </Card>     }
    </>);
}