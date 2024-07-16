import styles from './CabeceraLink.module.css';
import {Link} from "react-router-dom";

export const CabeceraLink = ({url,children}) => {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}