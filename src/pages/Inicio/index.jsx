import Banner from "components/Banner";
import Carrossel from "components/Carrossel";
import Colecoes from "components/Colecoes";
import Instagram from "components/Instagram";
import Marcas from "components/Marcas";
import Produtos from "components/Produtos";
import Tendencias from "components/Tendencias";
import Vantanges from "components/Vantagens";

export default function Inicio() {
    return (
        <section>
            <Banner />
            <Produtos />
            <Marcas />
            <Colecoes />
            <Carrossel />
            <Tendencias />
            <Vantanges />
            <Instagram />
        </section>
    )
}