import styles from './Vantagens.module.scss';
import logo from '../../public/assets/img/logo.png';
import Divisoria from 'components/Divisoria';
import envio from '../../public/assets/img/envio.png';
import sustentavel from '../../public/assets/img/sustentavel.png';
import qualidade from '../../public/assets/img/qualidade.png';
import fast from '../../public/assets/img/envio-2.png';
import laco from '../../public/assets/img/laco.png';

export default function Vantanges() {
    return (
        <section className={styles.vantagens}>
            <img src={logo} alt="logo da open fashion" />
            <h2>Making a luxurious lifestyle accessible for a generous group of women is our daily drive.</h2>
            <Divisoria />
            <div className={styles.cards}>
                <div className={styles.cards__card}>
                    <img src={envio} alt="sticker para envio" />
                    <p>Fast shipping. Free on orders over $25.</p>
                </div>
                <div className={styles.cards__card}>
                    <img src={sustentavel} alt="sticker para sustentavel" />
                    <p>Sustainable process from start to finish.</p>
                </div>
                <div className={styles.cards__card}>
                    <img src={qualidade} alt="sticker para qualidade" />
                    <p>Unique designs and high-quality materials.</p>
                </div>
                <div className={styles.cards__card}>
                    <img src={fast} alt="sticker para fast" />
                    <p>Fast shipping. Free on orders over $25.</p>
                </div>
            </div>
            <img src={laco} alt="laco da moda" />
        </section>
    )
}