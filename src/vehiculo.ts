import { Lote } from "./lote.ts";
export class Vehiculo{
    private _consumo: number;
    private _pesoMax: number;
    private _volumeMax: number;

    constructor(consumo: number, pesoMax: number, volumeMax: number){
        this._consumo = consumo;
        this._pesoMax = pesoMax;
        this._volumeMax = volumeMax;
    }

    get pesoMax():number
    {
        return this._pesoMax
    }

    get volumeMax():number
    {
        return this._volumeMax
    }

    puedeCargarLote(lote: Lote): boolean {
        return lote.peso <= this._pesoMax && lote.volume <= this._volumeMax;
    }

}