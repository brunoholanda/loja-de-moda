import React from 'react';

export default function Cards({itens, styles}) {
  return (
    <ul className={styles.produtos__cards}>
        {itens.map((item)=>{
          return (
            <li key={item.id} className={styles.produtos__card}>
              <img className={styles.produtos__imagem} src={item.imagem} alt={item.titulo} />
              <p className={styles.produtos__texto}>{item.titulo}</p>
              <p className={styles.produtos__texto}>{item.descricao}</p>
              <p className={styles.produtos__preco}>${item.preco}</p>
              <div>
                <p>{item.creditos}</p>
              </div>
            </li>
          )
        })}
        </ul>
  )
}
