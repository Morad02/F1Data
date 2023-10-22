import { Vehiculo } from "./vehiculo";
import { Pedido } from "./pedido";

type VehiculoDetalle = [Vehiculo, Pedido[], boolean];

class GestosVehiculos{
    private _vehiculos: VehiculoDetalle[];

    constructor(vehiculos: VehiculoDetalle[]){
        this._vehiculos = vehiculos.map((vehiculo: VehiculoDetalle) => [vehiculo[0], [], true]);
    }
}