import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./main.css";
import { salvar } from "../formulariocadastro/index";
import { useProdutos } from "../../Contexto/Produto/index";

export function Main() {
  // ================== substituir produto.infos ========================
  const [produtos, setProdutos] = useProdutos();

  // Falta Mostrar os cards Na tela Home, Se a lógica estiver correta
  const montarLista = (produtos) => {
    return (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="../../Assets/imagemtelacadastro.png" />
          <Card.Body>
            <Card.Title>{produtos.titulo}</Card.Title>
            <Card.Text>{produtos.descricao}</Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
    );
  };
  return (
    <>
      <Container className="Main">
        <Row className="linha-cards">
          <Col>
            {produtos.map((produto) =>
              montarLista(produto.titulo, produto.descricao)
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
