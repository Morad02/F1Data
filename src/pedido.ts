import { Lote } from "./lote";

export class Pedido{
    private _lote: Lote[];
    private _asignado: boolean;

    constructor(id: string, lote: Lote[], asignado: boolean){
        this._lote = lote;
        this._asignado = asignado;
    }
}
