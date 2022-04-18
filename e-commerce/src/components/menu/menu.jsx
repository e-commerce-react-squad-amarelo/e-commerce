import React from "react"
import {Nav} from "react-bootstrap"
import './menu.css';
import { Link } from "react-router-dom";


export function CabecalhoMenu () {
    return ( 
    <>
    
        <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            className="nav-menu"
            >
            <Nav.Item>
                <Link className="link" to="/">Home</Link>
            </Nav.Item>

            <Nav.Item>
                <Link className="link" to="/cadastro">Cadastro</Link>
            </Nav.Item>
        </Nav>
    </>);
}