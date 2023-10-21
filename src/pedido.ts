import { Lote } from "./lote";

export class Pedido{
    private _lotes: Lote[];

    constructor(lotes: Lote[]){
        this._lotes = lotes;
    }
}
