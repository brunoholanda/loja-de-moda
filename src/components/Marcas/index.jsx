import styles from './Marcas.module.scss';
import prada from '../../public/assets/icons/marcas/prada.png';
import burberry from '../../public/assets/icons/marcas/burberry.png';
import boss from '../../public/assets/icons/marcas/boss.png';
import catier from '../../public/assets/icons/marcas/catier.png';
import gucci from '../../public/assets/icons/marcas/gucci.png';
import tec from '../../public/assets/icons/marcas/tec.png';
import Divisoria from 'components/Divisoria';


const imagens = [prada, burberry, boss, catier, gucci, tec];

export default function Marcas() {
  return (
    <section className={styles.marcas}>
      <Divisoria />
      <div className={styles.marcas__logos}>
        {imagens.map((imagem, index) => (
          <img key={index} src={imagem} alt={`logomarca ${index}`} />
        ))}
      </div>
      <Divisoria />
    </section>
  );
}