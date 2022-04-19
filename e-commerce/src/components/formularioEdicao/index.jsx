import {
  Form,
  Col,
  InputGroup,
  FormControl,
  Row,
  Stack,
} from "react-bootstrap";
import imgbase from "../../Assets/imagemtelacadastro.png";
import { useState, useEffect } from "react";
import { useProdutos } from "../../Contexto/Produto";
import { Botao } from "../botoes/botaopadrao";
import { useParams, useNavigate } from "react-router-dom";

export function Editar() {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState();
  const [preco, setPreco] = useState();
  const [peso, setPeso] = useState();
  const [descricao, setDescricao] = useState();
  const [produtos, setProdutos] = useProdutos();
  let { id } = useParams();
  useEffect(() => {
    const produto = produtos.find((o) => o.id == id);
    setTitulo(produto.titulo);
    setPreco(produto.preco);
    setPeso(produto.peso);
    setDescricao(produto.descricao);
    console.log("USE EFFECT", produto);
  }, []);

  function salvar() {
    function excluirProduto() {
      const encontraIndex = produtos.findIndex((p) => p.id == id);
      produtos.splice(encontraIndex, 1);
    }
    excluirProduto();

    let produto = produtos.find((o) => o.id == id);
    produtos.push({ titulo, preco, peso, descricao, id: produtos.length + 1 });
    produto = {
      id,
      titulo,
      preco,
      peso,
      descricao,
    };
    setProdutos([...produtos]);

    console.log(produtos);
    console.log(produtos[0].titulo);
    navigate(`/`);
  }

  return (
    <>
      <Row>
        <Col className="col-md-8">
          <Form className="formulario">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Título:</Form.Label>
              <Form.Control
                defaultValue={titulo}
                type="text"
                onChange={(event) => setTitulo(event.target.value)}
              />
            </Form.Group>

            <Form.Label>Preço:</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>R$</InputGroup.Text>
              <Form.Control
                defaultValue={preco}
                aria-label="Valor em Reais (com duas casas decimais)"
                onChange={(event) => setPreco(event.target.value)}
              />
            </InputGroup>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Informações / Descrição:</Form.Label>
              <Form.Control
                defaultValue={descricao}
                onChange={(event) => setDescricao(event.target.value)}
                as="textarea"
                rows={6}
              />
            </Form.Group>

            <Form.Label>Peso:</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                defaultValue={peso}
                aria-label="Peso em gramas (com até duas casas decimais)"
                onChange={(event) => setPeso(event.target.value)}
              />
              <InputGroup.Text>gramas</InputGroup.Text>
            </InputGroup>
          </Form>
        </Col>

        <Col className="col-md-4 centralizada">
          <img className="imgcadastro" src={imgbase} />

          <Row>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className="d-flex justify-content-center">
                Selecione o arquivo de imagem:
              </Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <Row>
        <Stack
          direction="horizontal"
          gap={5}
          className="d-flex justify-content-center"
        >
          <Botao texto="Salvar" onClick={salvar} />
          <Botao texto="Cancelar" />
        </Stack>
      </Row>
    </>
  );
}
