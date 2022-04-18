import {
  Form,
  Col,
  InputGroup,
  FormControl,
  Row,
  Stack,
} from "react-bootstrap";
import "./style.css";
import imgbase from "../../Assets/imagemtelacadastro.png";
import { useState } from "react";
import { useProdutos } from "../../Contexto/Produto";
import { Botao } from "../botoes/botaopadrao";

export function FormularioCadastro() {
  const [titulo, setTitulo] = useState("");
  const [preco, setPreco] = useState(0);
  const [peso, setPeso] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [produtos, setProdutos] = useProdutos();
  //const [imagem, setImagem] = useState('');

  function salvar() {
    produtos.push({ titulo, preco, peso, descricao });
    setProdutos([...produtos]);
  }

  return (
    <>
      <Row>
        <Col className="col-md-8">
          <Form className="formulario">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Título:</Form.Label>
              <Form.Control
                onChange={(event) => setTitulo(event.target.value)}
                type="text"
                placeholder="Informe o título do produto"
              />
            </Form.Group>

            <Form.Label>Preço:</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>R$</InputGroup.Text>
              <FormControl
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
                onChange={(event) => setDescricao(event.target.value)}
                as="textarea"
                rows={6}
                placeholder="Escreva todas as informações do produto"
              />
            </Form.Group>

            <Form.Label>Peso:</Form.Label>
            <InputGroup className="mb-3">
              <FormControl
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
