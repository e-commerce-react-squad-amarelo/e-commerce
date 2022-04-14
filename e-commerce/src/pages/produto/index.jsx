import React from "react";
import { Col, Container, Row, Button, ButtonToolbar, ButtonGroup } from "react-bootstrap";
import { Cabecalho } from "../../components/cabecalho/cabecalho";
import { Footer } from "../../components/footer/footer";
import camisetaPretaBasica01 from "../../Assets/camisetaPretaBasica-01.jpg";
import "./index.css";
import {BotaoCores} from "../../components/botoes/botoesCores/index.jsx"
import { BotaoTamanhos } from "../../components/botoes/botoesTamanhos";
import { BotaoComprar } from "../../components/botoes/botaoComprar";

export function Produto() {
  return (
    <>
        <Row className="informacoesProduto">
          <h1>Camiseta Preta Básica - maculino</h1>
          <Col>
            <img src={camisetaPretaBasica01} />
          </Col>
          <Col className="descricaoProduto">
            <h3>R$ 50,00</h3>
            <p>Camiseta de viscose, esportiva, preta</p>
            <p>Peso sem caixa: 200g</p>
            <Row className="listaCores">
                <p>Cores: </p>
                <BotaoCores />
            </Row>
            <Row className="listaCores">
                <p>Tamanhos: </p>
                <BotaoTamanhos />
            </Row>
            <BotaoComprar />
          </Col>
        </Row>

    </>
  );
}
