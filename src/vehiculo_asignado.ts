import { Vehiculo } from "./vehiculo.ts";
import { Lote } from "./lote.ts";

export class VehiculoAsignado{
    private _vehiculo: Vehiculo;
    private _lotes: Lote[];

    constructor(vehiculo: Vehiculo, lotes: Lote[]){
        this._vehiculo = vehiculo;
        this._lotes = lotes;
    }
}