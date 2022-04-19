import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import camisetaPretaBasica01 from "../../Assets/camisetaPretaBasica-01.jpg";
import "./index.css";
import { BotaoCores } from "../../components/botoes/botoesCores/index.jsx";
import { BotaoTamanhos } from "../../components/botoes/botoesTamanhos";
import { BotaoExcluir } from "../../components/botoes/botaoExcluir";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useProdutos } from "../../Contexto/Produto";


export function Produto() {
  let navigate = useNavigate();
  let { id } = useParams();
  console.log(id);
  const [produtos] = useProdutos();
  const produto = produtos.find((o) => o.id == id);
  console.log(produto);

  function excluirProduto() {
    const confirmarExclusao = prompt("Deseja mesmo excluir? SIM ou NAO");
    if (confirmarExclusao.toUpperCase() == `SIM`) {
      const encontraIndex = produtos.findIndex((p) => p.id == id);
      produtos.splice(encontraIndex, 1);
      navigate(`/`)
    }
  }

  return (
    <>
      <Row className="informacoesProduto">
        <h1>{produto.titulo}</h1>
        <Col>
          <img src={camisetaPretaBasica01} />
        </Col>
        <Col className="descricaoProduto">
          <h3>R$ {Number(produto.preco).toFixed(2)}</h3>
          <p>{produto.descricao}</p>
          <p>Peso sem caixa: {Number(produto.peso).toFixed(3)} gramas</p>
          <Row className="listaCores">
            <p>Cores: </p>
            <BotaoCores />
          </Row>
          <Row className="listaCores">
            <p>Tamanhos: </p>
            <BotaoTamanhos />
          </Row>
          <Button onClick={excluirProduto}>Excluir</Button>
          <Link to={`/editar/${id}`}><Button>Editar</Button></Link>
          {/* <BotaoExcluir onClick={excluirProduto} /> */}
        </Col>
      </Row>
    </>
  );
}
