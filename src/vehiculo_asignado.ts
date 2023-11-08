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

    //Comprobamos si el vehículo puede cargar un peso determinado
    private puedeCargarPeso(peso: number): boolean {
        const pesoCargado = this._lotes.reduce((total, l) => total + l.peso, 0);
        return pesoCargado + peso <= this._vehiculo.pesoMax;
    }

    //Comprobamos si el vehículo puede cargar un volumen determinado
    private puedeCargarVolumen(volume: number): boolean {
        const volumenCargado = this._lotes.reduce((total, l) => total + l.volume, 0);
        return volumenCargado + volume <= this._vehiculo.volumeMax;
    }

    //Comprobamos si el vehículo puede cargar un lote determinado
    puedeCargarLote(lote: Lote): boolean {
        return this.puedeCargarPeso(lote.peso) && this.puedeCargarVolumen(lote.volume);
    }

    

}