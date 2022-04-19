import React from "react";
import { Container } from "react-bootstrap";
import { Cabecalho } from "../../components/cabecalho/cabecalho";
import { Footer } from "../../components/footer/footer";
import './style.css';

export const DefaultTemplate = (props) => {
  return (
    <>
      <header>
        <Cabecalho />
      </header>

      <main>
        <Container >{props.children}</Container>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};
