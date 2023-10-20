import { pedido } from "./pedido";

export class vehiculo{
    private _matricula: string;
    private _pedidos: pedido[];
    private _consumo: number;
    private _pesoMax: number;
    private _volumeMax: number;
    private _disponibilidad: boolean;

    constructor(matricula: string, pedidos: pedido[], consumo: number, pesoMax: number, volumeMax: number, disponibilidad: boolean){
        this._matricula = matricula;
        this._pedidos = pedidos;
        this._consumo = consumo;
        this._pesoMax = pesoMax;
        this._volumeMax = volumeMax;
        this._disponibilidad = disponibilidad;
    }
}
