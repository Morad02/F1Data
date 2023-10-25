import { Lote } from "./lote";

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
        let pesoTotal: number = 0;
        this._lotes.forEach(lote => {
            pesoTotal += lote.peso;
        });
        return pesoTotal;
    }

    private calcularVolumenTotal(): number{
        let volumenTotal: number = 0;
        this._lotes.forEach(lote => {
            volumenTotal += lote.volumen;
        });
        return volumenTotal;
    }
}