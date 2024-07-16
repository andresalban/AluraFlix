import {Cabecera} from "../../Components/Cabecera/Cabecera";
import {Banner} from "../../Components/Banner/Banner";
import {Pie} from "../../Components/Pie/Pie";
import {CategoriasContenedor} from "../../Components/CategoriasContenedor/CategoriasContenedor";

function Inicio() {
    return (
        <>
            <Cabecera/>
            <Banner/>
            <CategoriasContenedor/>
            <CategoriasContenedor/>
            <CategoriasContenedor/>


            <Pie/>
        </>
    )
}

export default Inicio