import styles from './Banner.module.scss';
import banner from '../../public/assets/img/banner.png';

export default function Banner() {
    return (
        <section className={styles.banner}>
            <img src={banner} alt="banner da pagina" />
            <button>Explore Collection</button>
        </section>
    )
}