export class camisa{
    public codCamisas: number;
    public marca: string;
    public color: string;
    public precio: string;
    public codTalla: string;
    public imagenCamisa: string;
    public imagenCamisaBase64: string;

    constructor(codC: number, marc: string, colo: string, prec: string, codT: string, imag: string, base: string){
        this.codCamisas=codC;
        this.marca=marc;
        this.color=colo;
        this.precio=prec;
        this.codTalla=codT;
        this.imagenCamisa=imag;
        this.imagenCamisaBase64=base;
    }
}