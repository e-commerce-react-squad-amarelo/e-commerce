import { Container, Row } from 'react-bootstrap';
import { MainCadastro } from '../../components/main-cadastro';

import './style.css';

export function Cadastrar() {
    return (
    <>
        <Row className='main'>
          <MainCadastro />
        </Row>
    </>
    );
  }
  
  export default Cadastrar;