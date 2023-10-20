import { Vehiculo } from "./vehiculo";
import { Pedido } from "./pedido";

export class VehiculoDisponible extends Vehiculo{
    private _pedidos: Pedido[];
    private _disponibilidad: boolean;

    constructor(pedidos: Pedido[], consumo: number, pesoMax: number, volumeMax: number, disponibilidad: boolean){
        super(pedidos, consumo, pesoMax, volumeMax);
        this._pedidos = pedidos;
        this._disponibilidad = disponibilidad;
    }
}