import styles from './Divisoria.module.scss';
import divisoria from '../../public/assets/icons/div.png';

export default function Divisoria() {
    return (
        <div className={styles.divisoria}>
            <img src={divisoria} alt="divisoria da pagina" />  
        </div>
    )

}