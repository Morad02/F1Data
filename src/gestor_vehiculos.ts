import { Vehiculo } from "./vehiculo";
import { VehiculoAsignado } from "./vehiculo_asignado";


class GestorVehiculos{
    
    private _vehiculosDisponibles: Vehiculo[];
    private _vehiculosAsignados: VehiculoAsignado[];

    constructor(vehiculosDisponibles: Vehiculo[]){
        this._vehiculosDisponibles = vehiculosDisponibles;
        this._vehiculosAsignados = [];
    }

}