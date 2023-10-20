import { Lote } from "./materia_prima";

export class Pedido{
    private _materiasPrima: Lote[];
    private _asignado: boolean;

    constructor(id: string, materiasPrima: Lote[], asignado: boolean){
        this._materiasPrima = materiasPrima;
        this._asignado = asignado;
    }
}
