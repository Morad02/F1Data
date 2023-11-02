import { Vehiculo } from "./vehiculo.ts";
import { Lote } from "./lote.ts";

export class VehiculoAsignado{
    private _vehiculo: Vehiculo;
    private _lotes: Lote[];

    constructor(vehiculo: Vehiculo, lotes: Lote[]){
        this._vehiculo = vehiculo;
        this._lotes = lotes;
    }

    get lotes():Lote[]
    {
        return this._lotes
    }

    get vehiculo():Vehiculo
    {
        return this._vehiculo
    }

    

    puedeCargarLote(lote: Lote): boolean {
        const pesoCargado = this._lotes.reduce((total, l) => total + l.peso, 0);
        const volumenCargado = this._lotes.reduce((total, l) => total + l.volume, 0);

        return (
            pesoCargado + lote.peso <= this._vehiculo.pesoMax &&
            volumenCargado + lote.volume <= this._vehiculo.volumeMax
        );
    }

    

}