import { useState } from "react";
import { camisa } from "../../modelos/Camisa";
import { ARREGLO_CAMISA } from "../../mocks/Camisas-mocks";
import { ARREGLO_CAMISA_TALLA } from "../../utilidades/dominios/DomTalla";
import { NavLink } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

export const CamiAdmin = () => {
    const [arrCamisas] = useState<camisa[]>(ARREGLO_CAMISA);
    const [objCami, setObjCami] = useState<camisa>(new camisa(0,"","","","","",""));
    const [show, setShow] = useState<boolean>(false);
    const handleClose = ()=>(setShow(false));

    const obtenerTalla = (valor: string)=>{
        for(const obtTall of ARREGLO_CAMISA_TALLA){
            if(obtTall.codTalla == valor){
                return obtTall.talla;
            }
        }
    }

    const eliminarCamisa = (codigo: number)=>{
        const cantidad = arrCamisas.length;

        for (let i = 0; i<cantidad; i++){
            if (arrCamisas[i] != undefined){
                const comparar = arrCamisas[i].codCamisas;

                if(comparar == codigo){
                    arrCamisas.splice(i,1);
                    setShow(false);
                }
            }
        }
    }

    return(
        <>
            <h1>Camisas Admin</h1>
            <div className="pt-3 d-flex justify-content-center">
                <div className="col-md-8">
                    <table className="table table-bordered border-primary">
                        <thead>
                            <tr className="text-center" >
                                <th style={{width: "10%"}} >Codigo</th>
                                <th style={{width: "30%"}} >Marca</th>
                                <th style={{width: "20%"}} >Color</th>
                                <th style={{width: "10%"}} >Precio</th>
                                <th style={{width: "10%"}} >Talla</th>
                                <th style={{width: "10%"}} ><i className="fas fa-tshirt" style={{ fontSize: '1.5rem' }}></i></th>
                                <th style={{width: "10%"}} >Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                           { arrCamisas.map((miCamisa: camisa)=>(
                                <tr key={miCamisa.codCamisas} className="text-center" >
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
                                    <td>
                                        <NavLink to="/#">
                                            <i className="btn btn-outline-danger fa-solid fa-trash-can" onClick={(e)=>{e.preventDefault(); setShow(true); setObjCami(miCamisa)}}></i>
                                        </NavLink>{" "}
                                        <NavLink to={"/camiactual/"+ miCamisa.codCamisas} state={{camisa: miCamisa}}>
                                            <i className="ml-2 btn btn-outline-warning  fa-regular fa-pen-to-square"></i>
                                        </NavLink>
                                    </td>
                                </tr>
                           )) 
                            }
                        </tbody>
                    </table>
                    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Eliminar Camisas</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            ¿Estas seguro de eliminar la camisa {objCami.marca} con ID: {objCami.codCamisas}? 
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={(e)=>{setShow(false);}}>Cancelar</Button>
                            <Button variant="danger" onClick={(e)=>{eliminarCamisa(objCami.codCamisas);}}>Eliminar</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </>
    );
};