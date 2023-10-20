import { Pedido } from "./pedido";

export class Vehiculo{
    private _matricula: string;
    private _consumo: number;
    private _pesoMax: number;
    private _volumeMax: number;

    constructor(matricula: string, pedidos: Pedido[], consumo: number, pesoMax: number, volumeMax: number){
        this._matricula = matricula;
        this._consumo = consumo;
        this._pesoMax = pesoMax;
        this._volumeMax = volumeMax;
    }
}
