import styles from './Banner.module.css';
import CardBanner  from './CardBanner.png';
import ImgBanner from './ImgBanner.png';


export const Banner = () => {

    const textoDescripcion="Este challenge es una forma de aprendizaje. Es un mecanismo donde\n" +
        "                    podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos\n" +
        "                    adquiridos en la formación React."
    return (
        <div className={styles.capa} style={{backgroundImage: `url(${ImgBanner})`}}>
            <div className={styles.gradient} style={{backgroundColor: `rgba(0, 18, 51, 0.5)`}}>

                <div className={styles.container}>
                    <h1 className={styles.titulo}>Front End</h1>
                    <h2 className={styles.subtitulo}>Challenge React</h2>
                    <p className={styles.descripcion}>{textoDescripcion}</p>
                </div>

                <div className={styles.container}>
                    <img src={CardBanner} alt=""/>
                </div>

            </div>

        </div>
    )
}