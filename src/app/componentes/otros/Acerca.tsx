import fotoPerfil1  from "../../../assets/img/yo.jpg";
export const Acerca = () =>{
    return(
        <>
           <h1>Acerca de...</h1>
           <div className="container-fluid">
            <div className="row">
                    <div className="col-lg-3 mb-3 d-flex align-items-stretch">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Yo</h5>
                                <p className="card-text">Juan Padilla<br/> (Yo)</p>
                                <div className="text-center ">
                                    <img src={fotoPerfil1} alt="Foto developer" width="220px" height="auto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};