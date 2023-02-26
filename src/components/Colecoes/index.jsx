import { Link } from 'react-router-dom';
import styles from './Colecoes.module.scss';
import outubro from '../../public/assets/img/outubro.png';
import outono from '../../public/assets/img/outono.png';
import video from '../../public/assets/img/video.png';

export default function Colecoes() {
    return (
        <section className={styles.colecoes}>
            <h1>COLLECTIONS</h1>
            <div className={styles.colecoes__conteudo}>
                <Link to='./'>
                    <img src={outubro} alt="imagem da colecao de outubro" />
                </Link>
                <Link to='./'>
                    <img src={outono} alt="imagem da colecao de outono" />
                </Link>
                <Link to='./'>
                    <img src={video} alt="imagem da colecao de video" />
                </Link>
            </div>

        </section>
    )
}