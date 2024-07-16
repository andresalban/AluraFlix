import styles  from './Tarjeta.module.css'
import img from './image 7.png'
import iconDelete   from './iconDelete.png'
import iconEdit   from './iconEdit.png'

export const Tajeta = () => {
    return (

        <div className={styles.contenedor}>
            <img className={styles.imagen} src={img} alt="imagen"/>
            <div className={styles.footer}>

                <p><img src={iconDelete} alt="Icono Borrar"/>Borrar</p>
                <p><img src={iconEdit} alt="Icono Editar"/>Editar</p>

            </div>
        </div>


    )
}