import { Pedido } from "./pedido.ts";
import { Vehiculo } from "./vehiculo.ts";
import { VehiculoAsignado } from "./vehiculo_asignado.ts";
import { Lote } from "./lote.ts";


export class GestorVehiculos{
    
    private _vehiculosDisponibles: Vehiculo[];
    private _vehiculosAsignados: VehiculoAsignado[];

    constructor(vehiculos: Vehiculo[]){
        //mantener los vehículos ordenados de mayor a menor peso + volumen
        vehiculos.sort((a, b) => (b.pesoMax + b.volumeMax) - (a.pesoMax + a.volumeMax));
        this._vehiculosDisponibles = vehiculos;
        this._vehiculosAsignados = [];
    }

    
    asignarPedido(pedido: Pedido): boolean 
    {
        const asignaciones = this.asignarLotesAVehiculos(pedido);
        if(asignaciones.length > 0)
        {
            this.actualizarVehiculosDisponiblesYAsignados(asignaciones);
            return true;
        }
        else
            return false;
    }

    private asignarLotesAVehiculos(pedido: Pedido): VehiculoAsignado[] {
        const asignaciones: VehiculoAsignado[] = [];
        const numLotes: number = pedido.lotes.length;
        const usados: number[] = [];
        let primerDisponibles = true;
        let asignado = false;
    
        const asignarLoteAVehiculoDisponible = (lote: Lote) => {
            for (let j = 0; j < this._vehiculosDisponibles.length; j++) {
                if (!usados.includes(j) && this._vehiculosDisponibles[j].puedeCargarLote(lote)) {
                    asignado = true;
                    asignaciones.push(new VehiculoAsignado(this._vehiculosDisponibles[j], [lote]));
                    usados.push(j);
                    break;
                }
            }
        };
    
        const asignarLoteAVehiculoAsignado = (lote: Lote) => {
            for (let k = 0; k < asignaciones.length; k++) {
                if (asignaciones[k].puedeCargarLote(lote)) {
                    asignado = true;
                    asignaciones[k].lotes.push(lote);
                    break;
                }
            }
        };
    
        for (let i = 0; i < numLotes; i++) {
            asignado = false;
    
            if (i !== 0 && asignaciones.length !== 0) {
                primerDisponibles = false;
            }
    
            if (primerDisponibles) {
                asignarLoteAVehiculoDisponible(pedido.lotes[i]);
            } else {
                asignarLoteAVehiculoAsignado(pedido.lotes[i]);
    
                if (!asignado) {
                    asignarLoteAVehiculoDisponible(pedido.lotes[i]);
                }
            }
    
            if (!asignado) {
                return [];
            }
        }
    
        return asignaciones;
    }
    

    private actualizarVehiculosDisponiblesYAsignados(asignaciones: VehiculoAsignado[])
    {
        this._vehiculosAsignados = this._vehiculosAsignados.concat(asignaciones);
        const usados = asignaciones.map(asignacion => this._vehiculosDisponibles.indexOf(asignacion.vehiculo));
        this._vehiculosDisponibles = this._vehiculosDisponibles.filter((elemento, indice) => !usados.includes(indice));
    }
    
    get vehiculosAsignados(): VehiculoAsignado[] {
        return [...this._vehiculosAsignados];
    }


}