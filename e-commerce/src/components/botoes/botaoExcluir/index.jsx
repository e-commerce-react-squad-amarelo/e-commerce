import React from "react";
import { Button} from "react-bootstrap";
import { useProdutos } from "../../../Contexto/Produto";

export function BotaoExcluir(onClick){

    return(
        <Button onClick={onClick} className="my-3">Excluir Produto</Button>
    );
}