import styles from './Pie.module.css';
import logo from './LogoPie.png';

export const Pie = () => {
    return (
        <footer className={styles.pie}>
            <img src={logo} alt="AluraFlix"/>
            <p>Desarrollado por Andrés Albán</p>
        </footer>
    )

}
