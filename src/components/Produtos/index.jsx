import React from "react";
import styles from './Produtos.module.scss';
import produtos from '../json/produtos.json';
import Cards from './Cards';
import { useState } from "react";
import Categorias from "../Categorias";
import seta from "../../public/assets/icons/seta.png";
import Divisoria from "components/Divisoria";


// import { Container } from './styles';

export default function Produtos() {
  const [itens, setItens] = useState(produtos);
  const categorias = [...new Set(produtos.map((valor) => valor.categoria))]

  const filtrarProdutos = (categoria) => {
    const novosProdutos = produtos.filter((produto) => {
      return produto.categoria === categoria;
    })

    setItens(novosProdutos);

  }

  return (
    <section className={styles.produtos}>
      <h2>New Arrival</h2>
      <Divisoria /> 
      <Categorias categorias={categorias} filtrarProdutos={filtrarProdutos} setItens={setItens} />
      <Cards itens={itens} styles={styles} />
      <div className={styles.produtos__seta}>
        <h3>Explore More</h3>
        <img src={seta} alt="icone de seta" />
      </div>
    </section>
  )

}