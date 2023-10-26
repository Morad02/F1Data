import { Vehiculo } from "./vehiculo";
import { Lote } from "./lote";

export class VehiculoAsignado{
    private _vehiculo: Vehiculo;
    private _lotes: Lote[];

    constructor(vehiculo: Vehiculo, lotes: Lote[]){
        this._vehiculo = vehiculo;
        this._lotes = lotes;
    }
}