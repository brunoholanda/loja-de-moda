import React, { useState } from 'react';
import styles from './Categorias.module.scss'
import produtos from '../json/produtos.json';
// import { Container } from './styles';

export default function Categorias({categorias, filtrarProdutos, setItens}) {

  const [categoriaSelecionada, setCategoariaSeleciona] = useState(null);

  const categoriaClicada = (categoria) => {
    setCategoariaSeleciona(categoria);
    };

  function handleButtonClick(categoria) {
    filtrarProdutos(categoria);
    categoriaClicada(categoria);
  }

  return (
    <div className={styles.categorias}>
        <ul className={styles.categorias__lista}>
        <li 
          onClick={()=> 
          setItens(produtos)}
          className={categoriaSelecionada === null ? styles.selecionado : ""}
        >
          All
        </li>
           {categorias.map((categoria) => {
              return (
              <li 
                key={categoria} 
                onClick={() =>
                handleButtonClick(categoria)
              }
                className={categoriaSelecionada === categoria ? styles.selecionado : ""}
              >
                {categoria}
              </li>
              ); 
            })}
        </ul>
    </div>
  );
}
