import { materia_prima } from "./materiaPrima";

export class pedido{
    private _id: string;
    private _materiasPrima: materia_prima[];
    private _asignado: boolean;

    constructor(id: string, materiasPrima: materia_prima[], asignado: boolean){
        this._id = id;
        this._materiasPrima = materiasPrima;
        this._asignado = asignado;
    }
}
