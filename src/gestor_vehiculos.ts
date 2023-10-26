import { Vehiculo } from "./vehiculo";
import { VehiculoAsignado } from "./vehiculo_asignado";


class GestorVehiculos{
    
    private _vehiculosDisponibles: Vehiculo[];
    private _vehiculosAsignados: VehiculoAsignado[];

    constructor(vehiculos: Vehiculo[]){
        this._vehiculosDisponibles = vehiculos;
        this._vehiculosAsignados = [];
    }

}