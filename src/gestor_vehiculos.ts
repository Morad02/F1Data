import { Pedido } from "./pedido.ts";
import { Vehiculo } from "./vehiculo.ts";
import { VehiculoAsignado } from "./vehiculo_asignado.ts";


export class GestorVehiculos{
    
    private _vehiculosDisponibles: Vehiculo[];
    private _vehiculosAsignados: VehiculoAsignado[];

    constructor(vehiculos: Vehiculo[]){
        this._vehiculosDisponibles = vehiculos;
        this._vehiculosAsignados = [];
    }


    asignarPedido(pedido:Pedido): void {
        
    }

    get vehiculosAsignados(): VehiculoAsignado[] {
        return [...this._vehiculosAsignados];
    }



}