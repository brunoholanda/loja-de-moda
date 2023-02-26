import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import { Outlet } from "react-router-dom";

export default function CorpoDaPagina() {
    return (
        <>
            <Cabecalho />
            <Outlet/>
            <Rodape/>
        </>
    )
}