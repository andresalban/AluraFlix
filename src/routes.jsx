import {BrowserRouter, Route, Routes} from "react-router-dom";
import Inicio from "./Pages/Inicio/Inicio";
import {Cabecera} from "./Components/Cabecera/Cabecera";

function AppRoutes(){
    return(
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;