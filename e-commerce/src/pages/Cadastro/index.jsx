import { Container, Row } from 'react-bootstrap';
import { FormularioCadastro} from '../../components/formulariocadastro';

import './style.css';

export function Cadastrar() {
    return (
    <>
        <Row className='main'>
          <FormularioCadastro />
        </Row>
    </>
    );
  }
  
  export default Cadastrar;