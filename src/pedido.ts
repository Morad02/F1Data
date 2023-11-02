import { Lote } from "./lote.ts";

export class Pedido{
    private _lotes: Lote[];
    private _pesoTotal: number;
    private _volumenTotal: number;

    constructor(lotes: Lote[]){
        this._lotes = lotes;
        this._pesoTotal = this.calcularPesoTotal();
        this._volumenTotal = this.calcularVolumenTotal();
    }

    private calcularPesoTotal(): number{
        return 0;
    }

    private calcularVolumenTotal(): number{
        return 0;
    }

    get lotes():Lote[]
    {
        return [...this._lotes]
    }
}