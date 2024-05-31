import { useState } from "react";
import { camisa } from "../../modelos/Camisa";
import { ARREGLO_CAMISA } from "../../mocks/Camisas-mocks";
import { ARREGLO_CAMISA_TALLA } from "../../utilidades/dominios/DomTalla";
export const CamiListar = () => {

    const [arrCamisas] = useState<camisa[]>(ARREGLO_CAMISA);
    const obtenerTalla = (valor:string)=>{
        for(const objTall of ARREGLO_CAMISA_TALLA){
            if(objTall.codTalla == valor){
                return objTall.talla;
            }
        }
    }

    return(
        <>
        <h1>Listar Camisas</h1>
        <div className="pt-3 d-flex justify-content-center">
            <div className="col-md-8">
                <table className="table table-bordered border-primary">
                    <thead>
                        <tr className="text-center" >
                            <th style={{width: "10%"}} >Codigo</th>
                            <th style={{width: "30%"}} >Marca</th>
                            <th style={{width: "20%"}} >Color</th>
                            <th style={{width: "15%"}} >Precio</th>
                            <th style={{width: "15%"}} >Talla</th>
                            <th style={{ width: "10%" }}><i className="fas fa-tshirt" style={{ fontSize: '1.5rem' }}></i></th>
                        </tr>
                    </thead>
                    <tbody>
                            {arrCamisas.map((miCamisa: camisa) => (
                                <tr key={miCamisa.codCamisas} className="text-center">
                                    <td>{miCamisa.codCamisas}</td>
                                    <td>{miCamisa.marca}</td>
                                    <td>{miCamisa.color}</td>
                                    <td>{miCamisa.precio}</td>
                                    <td>{obtenerTalla(miCamisa.codTalla)}</td>
                                    <td>
                                        <img className="imagenListado" src={miCamisa.imagenCamisaBase64} alt="" />
                                        <div className="text-info">
                                            {miCamisa.imagenCamisa}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};