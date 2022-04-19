import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./main.css";
import { salvar } from "../formulariocadastro/index";
import { useProdutos } from "../../Contexto/Produto/index";
import { Link } from "react-router-dom";

import imgbase from "../../Assets/imagemtelacadastro.png"

export function Main() {
  // ================== substituir produto.infos ========================
  const [produtos, setProdutos] = useProdutos();
  console.log('produtos', produtos);  // Falta Mostrar os cards Na tela Home, Se a lógica estiver correta
  const montarLista = (titulo, descricao, id) => {
    return (
        <Card className="card" key={id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={imgbase} />
          <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>{descricao}</Card.Text>
            <Link to={`/produto/${id}`} >Visualizar</Link>
          </Card.Body>
        </Card>
    );
  };
  return (
    <>
      <Container className="Main">
        <Row className="linha-cards align-items-center">
          {produtos.map(produto =>
            montarLista(produto.titulo, produto.descricao, produto.id)
            )}
          
        </Row>
      </Container>
    </>
  );
}
