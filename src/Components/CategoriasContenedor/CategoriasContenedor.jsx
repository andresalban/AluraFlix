import styles from './CategoriasContenedor.module.css';
import {Tajeta} from "../Tarjeta/Tajeta";
import {Titulo} from "../Titulo/Titulo";

export const CategoriasContenedor = () => {
    return (
        <div className={styles.contenedor}>
            <div className={styles.titulos}>
                <Titulo>
                    s
                </Titulo>
            </div>
            <div className={styles.tarjetas}>
                <Tajeta/>
                <Tajeta/>
            </div>


        </div>
    )
}