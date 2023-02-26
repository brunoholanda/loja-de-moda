import styles from './Instagram.module.scss';
import mia from '../../public/assets/img/insta/mia.png';
import jihyn from '../../public/assets/img/insta/jihyn.png';
import mio from '../../public/assets/img/insta/mia-2.png';
import jon from '../../public/assets/img/insta/jihyn-2.png';
import instagram from '../../public/assets/icons/instagram-2.png';
import { Link } from 'react-router-dom';

const imagens = [mia, jihyn, mio, jon];

export default function Instagram() {
    return (
        <section className={styles.instagram}>
            <h2>FOLLOW US</h2>
            <Link to='./'>
                <img src={instagram} alt="icone branco do instagram" />
            </Link>
            <div className={styles.instagram__perfis}>
                {imagens.map((imagem, index) => (
                    <img key={index} src={imagem} alt={`logomarca ${index}`} />
                ))}
            </div>
        </section>
    );
}