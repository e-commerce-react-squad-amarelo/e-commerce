import '../App/App.css'; //CSS do APP, acredito que não vai precisar de outro CSS aqui
import { Container, Row } from 'react-bootstrap';
import { Cabecalho } from '../../components/cabecalho/cabecalho';
import { Footer } from '../../components/footer/footer';
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