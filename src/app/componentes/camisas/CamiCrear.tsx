import { Form } from "react-bootstrap";
import noFoto from "../../../assets/img/noDisponible.png";
import React, { useState } from "react";
import { camisaTalla } from "../../modelos/CamisaTalla"; 
import { ARREGLO_CAMISA_TALLA } from "../../utilidades/dominios/DomTalla";
import { useFormulario } from "../../utilidades/misHooks/useFormulario";
import { camisa } from "../../modelos/Camisa";
import { useNavigate } from "react-router-dom";
import { ARREGLO_CAMISA } from "../../mocks/Camisas-mocks";
import { ConvertirBase64 } from "../../utilidades/funciones/ConvertirBase64";


export const CamiCrear = () => {

  const irsePara = useNavigate();

  type formHtml = React.FormEvent<HTMLFormElement>;
  const [enProceso, setEnProceso] = useState<boolean>(false);
  const [imgBase64, setImgBase64] = useState<any>();
  const [imgMiniatura, setImgMiniatura] = useState<any>(noFoto);

  const[arrCamisas] = useState<camisa[]>(ARREGLO_CAMISA);
  const[arrTallas] = useState<camisaTalla[]>(ARREGLO_CAMISA_TALLA);

  let{
    marca,
    color,
    precio,
    codTalla,
    imagenCamisa,
    dobleEnlace,
    objeto
  }=useFormulario<camisa>(new camisa(0,"","","","","",""));

  const enviarForm = (objForm: formHtml)=>{
    objForm.preventDefault();
    const formulario = objForm.currentTarget;
    if (formulario.checkValidity()===false){
      objForm.preventDefault();
      objForm.stopPropagation();
      setEnProceso(true);
    } else{
      const ultimaCami = arrCamisas[arrCamisas.length-1];
      const nuevoCod = ultimaCami.codCamisas + 1;

      objeto.codCamisas = nuevoCod;
      objeto.imagenCamisa = imagenCamisa.substring(imagenCamisa.lastIndexOf("\\")+1);
      objeto.imagenCamisaBase64 = imgBase64;
      arrCamisas.push(objeto);
      setEnProceso(false);
      irsePara("/camilistar")
    }
  }

  const cargarImagen = async (e: any) => {
    const archivos = e.target.files;
    const imagen = archivos[0];
    setImgMiniatura(URL.createObjectURL(imagen));
    dobleEnlace(e);
    const base64 = await ConvertirBase64(imagen);
    setImgBase64(base64);
  }

    return (
      <>
        <h1>Crear Camisas</h1>

          <div className="d-flex justify-content-center">
            <div className="col-md-5 mt-5 pb-4">
                <Form noValidate validated={enProceso} onSubmit={enviarForm}>
                  <div className="card">
                    <div className="card-header">
                      <h5 className="rojito">Información</h5>
                      </div>

                      <div className="card-body">
                        <div className="mb-3">
                            <Form.Group controlId="marc">
                              <Form.Label  htmlFor="marc">
                                  <span className="rojito">*</span> Marca
                              </Form.Label>
                              <Form.Control size="sm" required type="text" id="marc" name="marca" value={marca} onChange={dobleEnlace} />
                            </Form.Group>
                        </div>

                        <div className="mb-3">
                            <Form.Group controlId="colo">
                              <Form.Label htmlFor="colo">
                                  <span className="rojito">*</span> Color
                              </Form.Label>
                              <Form.Control size="sm" required type="text" id="colo" name="color" value={color} onChange={dobleEnlace} />
                            </Form.Group>
                        </div>

                        <div className="mb-3">
                            <Form.Group controlId="preci">
                              <Form.Label htmlFor="preci">
                                  <span className="rojito">*</span> Precio
                              </Form.Label>
                              <Form.Control size="sm" required type="text"  id="preci" name="precio" value={precio} onChange={dobleEnlace} />
                            </Form.Group>
                        </div>

                        <div className="mb-3">
                            <Form.Group controlId="tall">
                                <Form.Label  htmlFor="tall">
                                    <span className="rojito">*</span> Talla
                                </Form.Label>

                                <Form.Select size="sm" required id="tall" name="codTalla" value={codTalla} onChange={dobleEnlace}>
                                    <option  selected disabled  value="">Seleccione</option>
                                    {
                                        arrTallas.map((miTalla: camisaTalla)=>(
                                        <option  key={miTalla.codTalla} value={miTalla.codTalla}>
                                            {miTalla.talla}
                                        </option>
                                        ))
                                    }
                                </Form.Select> 
                            </Form.Group>
                        </div>

                        <div className="mb-3">
                            <Form.Group controlId="imag">
                            <Form.Label htmlFor="imag">
                                <span className="rojito">*</span> Imágen:
                            </Form.Label>
                            <Form.Control size="sm" required type="file" name="imagenCamisa" value={imagenCamisa} onChange={cargarImagen} />
                            </Form.Group>
                        </div>

                        <div className="mb-3">
                            <div className="d-flex justify-content-center">
                            <img src={imgMiniatura} alt="no foto" className="maximoTamanoCreacion" />
                            </div>
                        </div>
                      </div>

                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">
                          Crear camisa
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
      </>
    );
};