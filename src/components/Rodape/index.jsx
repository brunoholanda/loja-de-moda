import styles from './Rodape.module.scss';
import twitter from '../../public/assets/icons/twitter.png';
import instagram from '../../public/assets/icons/instagram.png';
import youtube from '../../public/assets/icons/youtube.png';
import { Link } from 'react-router-dom';
import Divisoria from 'components/Divisoria';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape__social}>
                <Link to="./">
                    <img src={twitter} alt="icone do twitter" />
                </Link>
                <Link to="./">
                    <img src={instagram} alt="icone do instagram" />
                </Link>
                <Link to="./">
                    <img src={youtube} alt="icone do youtube" />
                </Link>
            </div>
            <Divisoria />
            <div className={styles.rodape__contato}>
                <p>support@openui.design</p>
                <p>+60 825 876</p>
                <p>08:00 - 22:00 - Everyday</p>
            </div>
            <Divisoria />
            <div className={styles.rodape__links}>
                <Link to="./">
                    About
                </Link>
                <Link to="./">
                    Contact
                </Link>
                <Link to="./">
                    Blog
                </Link>
            </div>
            <div className={styles.rodape__direitos}>
                <p>Copyright© OpenUI All Rights Reserved.</p>
            </div>
        </footer>
    )

}