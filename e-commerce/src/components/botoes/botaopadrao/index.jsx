import React from "react";
import { Button } from "react-bootstrap";

/*export const Botao = ({texto}, {corfundo}, {cortexto}) => {
    return <Button className="my-3" style={{backgroundColor: {corfundo}, color: {cortexto}}}> {texto} </Button>
}
*/

import ButtonBootstrap from 'react-bootstrap/Button';

export const Botao = ({ texto }) => {

  return <ButtonBootstrap className="my-3"
//  style={{backgroundColor: 'green', color: '#fff'}}
> {texto} </ButtonBootstrap>
}
