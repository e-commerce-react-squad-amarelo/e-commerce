// import logo from './logo.svg';
import './App.css';
import {Container, Row, Col} from "react-bootstrap"
import { Cabecalho } from "../../components/cabecalho/cabecalho"
import { Footer } from "../../components/footer/footer"
import { Main } from "../../components/main/main"


function App() {
  return (<>
    <Container className="container-pai">
      <Row>
        <Cabecalho />
      </Row>
      
      <Row>
        <Main />
      </Row>

      <Row>
        <Footer />
      </Row>
    </Container>
  </>
  );
}

export default App;
