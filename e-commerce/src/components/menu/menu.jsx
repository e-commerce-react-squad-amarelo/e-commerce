import React from "react"
import {Nav} from "react-bootstrap"
import './menu.css';


export function CabecalhoMenu () {
    return ( 
    <>
    
        <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            className="nav-menu"
            >
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link href="link-1">Cadastro</Nav.Link>
            </Nav.Item>
        </Nav>
    </>);
}