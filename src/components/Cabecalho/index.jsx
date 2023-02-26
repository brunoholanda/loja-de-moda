import styles from './Cabecalho.module.scss';
import logo from '../../public/assets/img/logo.png';
import lupa from '../../public/assets/icons/lupa.png';
import sacola from '../../public/assets/icons/sacola.png';
import { Link } from 'react-router-dom';

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.cabecalho__logo}>
                <img src={logo} alt="logo da open fashion" />
            </div>
            <div className={styles.cabecalho__clicaveis}>
                <img src={lupa} alt="lupa para de pesquisa" />
                <Link to="/">
                    <img src={sacola} alt="sacola de pedidos da loja" />
                </Link>
            </div>
        </header>
    )
}