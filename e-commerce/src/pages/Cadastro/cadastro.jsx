import '../App/App.css'; //CSS do APP, acredito que não vai precisar de outro CSS aqui
import { Container, Row } from 'react-bootstrap';
import { Cabecalho } from '../../components/cabecalho/cabecalho';
import { Footer } from '../../components/footer/footer';

function Cadastrar() {
    return (
    <>
      <Container className="container-pai">
        <Row>
          <Cabecalho />
        </Row>
        
        <Row>
          <Main-cadastro />
        </Row>
  
        <Row>
          <Footer />
        </Row>
      </Container>
    </>
    );
  }
  
  export default Cadastrar;