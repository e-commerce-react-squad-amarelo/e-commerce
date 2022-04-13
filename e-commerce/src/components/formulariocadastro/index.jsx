import { Form, Col, InputGroup, FormControl, Row } from "react-bootstrap"
import './style.css'
import imgbase from "../../Assets/imagemtelacadastro.png";
import { BotaoComprar } from "../botoes/botaoComprar";

export function FormularioCadastro () {
    return (<>
    <Col className="col-md-8">
        <Form className="formulario">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Título:</Form.Label>
                <Form.Control type="text" placeholder="Informe o título do produto" />
            </Form.Group>

            <Form.Label>Preço:</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text>R$</InputGroup.Text>
                <FormControl aria-label="Valor em Reais (com duas casas decimais)" />
            </InputGroup>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Informações / Descrição:</Form.Label>
                <Form.Control as="textarea" rows={6} placeholder="Escreva todas as informações do produto" />
            </Form.Group>

            <Form.Label>Peso:</Form.Label>
            <InputGroup className="mb-3">
                <FormControl aria-label="Peso em gramas (com até duas casas decimais)" />
                <InputGroup.Text>gramas</InputGroup.Text>
            </InputGroup>

        </Form>
    </Col>
    
    <Col className="col-md-4 centralizada">
            <img className="imgcadastro" src={imgbase}/>

        <Row>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label className="d-flex justify-content-center">Selecione o arquivo de imagem:</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
        </Row>
        
    </Col>
    </>)

}