import styles from './Tendencias.module.scss';

export default function Tendencias() {
    return (
        <section className={styles.tendencias}>
            <h2>@TRENDING</h2>
            <div className={styles.tendencias__linha1}>
                <p># 2021</p>
                <p>#spring</p>
                <p>#collection</p>
                <p>#fall</p>
            </div>
            <div className={styles.tendencias__linha2}>
                <p>#dress</p>
                <p>#autumncollection</p>
                <p>#openfashion</p>
            </div>
        </section>
    )
}