import Form from "react-bootstrap/Form";
import noFoto from "../../../assets/img/noDisponible.png";
import { useState } from "react";
import { ARREGLO_CAMISA_TALLA } from "../../utilidades/dominios/DomTalla";
import { camisaTalla } from "../../modelos/CamisaTalla";


export const CamiActualizar = () => {
  const[arrTallas] = useState<camisaTalla[]>(ARREGLO_CAMISA_TALLA);
    return (
        <>
            <h1>Actualizar Camisas</h1>
            <div className="d-flex justify-content-center">
            <div className="col-md-5 mt-5 pb-4">
                <Form noValidate>
                <div className="card">
                    <div className="card-header">
                    <h5 className="rojito">Actualizar camisas</h5>
                    </div>

                    <div className="card-body">
                    <div className="mb-3">
                        <Form.Group controlId="marcaCamisa">
                        <Form.Label>
                            <span className="rojito">*</span> Marca
                        </Form.Label>
                        <Form.Control size="sm" required type="text" name="marcaCamisa" />
                        </Form.Group>
                    </div>

                    <div className="mb-3">
                        <Form.Group controlId="colorCamisa">
                        <Form.Label>
                            <span className="rojito">*</span> Color
                        </Form.Label>
                        <Form.Control size="sm" required type="text" name="colorCamisa" />
                        </Form.Group>
                    </div>

                    <div className="mb-3">
                        <Form.Group controlId="precioCamisa">
                        <Form.Label>
                            <span className="rojito">*</span> Precio
                        </Form.Label>
                        <Form.Control size="sm" required type="text" name="precioCamisa" />
                        </Form.Group>
                    </div>

                    <div className="mb-3">
                        <Form.Group controlId="tallaCamsia">
                            <Form.Label>
                                <span className="rojito">*</span> Talla
                            </Form.Label>

                            <Form.Select size="sm" required name="tallaCamsia">
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
                        <Form.Group controlId="fot">
                        <Form.Label>
                            <span className="rojito">*</span> Imágen:
                        </Form.Label>
                        <Form.Control
                            size="sm"
                            accept="image/png, image/jpeg"
                            // ref={fileInputRef}
                            type="file"
                            name="imagenCamisa"
                        />
                        </Form.Group>
                    </div>

                    <div className="mb-3">
                        <div className="d-flex justify-content-center">
                        <img src={noFoto} alt="no foto" className="maximoTamanoCreacion" />
                        </div>
                    </div>
                    </div>

                    <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                        Actualizar camisa
                    </button>
                    </div>
                </div>
                </Form>
            </div>
            </div>
        </>
    );
};