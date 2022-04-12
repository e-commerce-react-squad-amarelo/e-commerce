import React from "react";
import { Button, ButtonToolbar, ButtonGroup } from "react-bootstrap";

export function BotaoTamanhos() {
  return (
    <ButtonToolbar className="mx-3" aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        <Button variant="outline-secondary">P</Button>
        <Button variant="outline-secondary">M</Button>
        <Button variant="outline-secondary">G</Button>{" "}
        <Button variant="outline-secondary">GG</Button>
        <Button variant="outline-secondary">XG</Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}
