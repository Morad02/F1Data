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

    //Comprobamos si el vehículo puede cargar un peso determinado
    private puedeCargarPeso(peso: number): boolean {
        return peso <= this._pesoMax;
    }

    //Comprobamos si el vehículo puede cargar un volumen determinado
    private puedeCargarVolumen(volume: number): boolean {
        return volume <= this._volumeMax;
    }

    //Comprobamos si el vehículo puede cargar un lote determinado
    puedeCargarLote(lote: Lote): boolean {
        return this.puedeCargarPeso(lote.peso) && this.puedeCargarVolumen(lote.volume);
    }

}