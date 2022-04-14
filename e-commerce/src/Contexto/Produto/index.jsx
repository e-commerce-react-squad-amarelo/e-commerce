import {createContext, useContext, useState} from 'react'

const ProdutoContexto = createContext();

export default function ProdutoProvedor({children}){
    const [produtos, setProdutos] = useState([]);

    return (
        <ProdutoContexto.Provider value={{produtos, setProdutos}}>
            {children}
        </ProdutoContexto.Provider>
    )
}


export const useProdutos = () =>{
    const context = useContext(ProdutoContexto)
    const {produtos, setProdutos} = context
    return (
        [produtos, setProdutos]
    )
}