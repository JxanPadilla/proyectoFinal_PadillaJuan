import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { CamiCrear } from "../../componentes/camisas/CamiCrear";
import { CamiListar } from "../../componentes/camisas/CamiListar";
import { CamiAdmin } from "../../componentes/camisas/CamiAdmin";
import { CamiActualizar } from "../../componentes/camisas/CamiActualizar";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
    return(
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/camicrear" element={<CamiCrear/>} />
            <Route path="/camilistar" element={<CamiListar/>} />
            <Route path="/camiadmin" element={<CamiAdmin/>} />

            <Route path="/camiactual/:codigo" element={<CamiActualizar/>} />
            
            <Route path="/acerca" element={<Acerca/>} />

            <Route path="/*" element={<NoEncontrado/>} />


        </Routes>
    );
};