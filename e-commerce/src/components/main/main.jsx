import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./main.css";
import { Cards } from "../card/card";

export function Main() {
  // ================== substituir produto.infos ========================
  const montarLista = (produto)=>{
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cardInfos.caminhoImagem} />
        <Card.Body>
            <Card.Title>{cardInfos.tituloCard}</Card.Title>
                <Card.Text>{cardInfos.descricaoCard}
                </Card.Text>
            <Button variant="primary">Comprar</Button>
        </Card.Body>
    </Card>   
    )
  }
  return (
    <>
      <Container className="Main">
        <Row className="linha-cards">
          <Col>
            {produto.map(produto => car)}
          </Col>
        </Row>
      </Container>
    </>
  );
}
