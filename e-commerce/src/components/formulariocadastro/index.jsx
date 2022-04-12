import { Form, Figure, Col, InputGroup, FormControl } from "react-bootstrap"
import './style.css'

export function FormularioCadastro () {
    return (<>
    <Col>
        <Form className="formulario">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" placeholder="Informe o título do produto" />
            </Form.Group>

            <Form.Label>Preço</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text>R$</InputGroup.Text>
                <FormControl aria-label="Valor em Reais (com duas casas decimais)" />
            </InputGroup>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Informações / Descrição</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Escreva todas as informações do produto" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Peso</Form.Label>
                <Form.Control type="text" placeholder="Informe o peso do produto" />
            </Form.Group>
        </Form>
    </Col>
    
    <Col>
        
    </Col>
    </>)

}