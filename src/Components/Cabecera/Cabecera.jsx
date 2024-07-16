import styles from './Cabecera.module.css';
import {Link} from "react-router-dom";
import logo from './LogoMain.png';

import {CabeceraLink} from "../CabeceraLink/CabeceraLink";

export const Cabecera = () => {
    return (
        <header className={styles.cabecera}>
            <Link to="/" >
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo AluraFlix"/>
                </section>
            </Link>
                <nav>
                    <CabeceraLink ulr="./">
                        Home
                    </CabeceraLink>

                    <CabeceraLink url="./newVideo">
                        New Video
                    </CabeceraLink>


                </nav>


        </header>
    )
}