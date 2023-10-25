export class Vehiculo{
    private _consumo: number;
    private _pesoMax: number;
    private _volumeMax: number;

    constructor(consumo: number, pesoMax: number, volumeMax: number){
        this._consumo = consumo;
        this._pesoMax = pesoMax;
        this._volumeMax = volumeMax;
    }
}