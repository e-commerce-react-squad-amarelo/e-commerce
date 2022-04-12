import React from "react";
import { Button, ButtonToolbar, ButtonGroup } from "react-bootstrap";

export function BotaoCores() {
  return (
    <ButtonToolbar className="mx-3" aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        <Button variant="primary"></Button>
        <Button variant="secondary"></Button>
        <Button variant="success"></Button>
        <Button variant="warning"></Button>
        <Button variant="danger"></Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}
