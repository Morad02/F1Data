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
        //Ordenamos lotes y vehículos de mayor a menor dimensión
        let lotes: Lote[] = pedido.lotes.sort((a, b) => (b.peso + b.volume) - (a.peso + a.volume));      
        this._vehiculosDisponibles.sort((a, b) => (b.pesoMax + b.volumeMax) - (a.pesoMax + a.volumeMax));
        let asignaciones: VehiculoAsignado[] = [];
        let numlotes:number = pedido.lotes.length; 
        let usados:number[] = []; //Contiene indice de los vehículos disponibles que se le han asignado lotes
        let primerDisponibles:boolean = true;
        let asignado:boolean = false;
        

        for(let i = 0; i< numlotes; i++)
        {
            asignado = false;

            if(i != 0 && asignaciones.length != 0)
                primerDisponibles = false;

            //Si no se han asignado vehículos se comprobarán los disponibles.
            if (primerDisponibles)
            {
                for(let j = 0; j < this._vehiculosDisponibles.length && !asignado; j++)
                {
                    if (!usados.includes(j) &&this._vehiculosDisponibles[j].puedeCargarLote(lotes[i])) {
                        asignado = true;
                        asignaciones.push(new VehiculoAsignado(this._vehiculosDisponibles[j], [lotes[i]]));
                        primerDisponibles = false;
                        usados.push(j);
                    }
                }

            }
            //Si se han asignado vehículos, se comprobará que alguno de ellos pueda transportar el lote.
            //En caso contrario, se buscará entre los disponibles.
            else 
            {
                for(let k = 0; k < asignaciones.length && !asignado; k++)
                {
                    if (asignaciones[k].puedeCargarLote(lotes[i]))
                    {
                        asignado = true;
                        asignaciones[k].lotes.push(lotes[i]);
                    }
                }

                if (!asignado)
                {
                    for(let j = 0; j < this._vehiculosDisponibles.length && !asignado ; j++)
                    {
                        if (!usados.includes(j) && this._vehiculosDisponibles[j].puedeCargarLote(lotes[i])) {
                            asignado = true;
                            asignaciones.push(new VehiculoAsignado(this._vehiculosDisponibles[j], [lotes[i]]));
                            usados.push(j);
                        }
                    }

                }
            }

            //Si un lote no se puede asignar a ningún vehículo,
            //El pedido no se podrá asignar
            if(!asignado)
                return false
        }

        if(asignado)
        {
            this._vehiculosAsignados = this._vehiculosAsignados.concat(asignaciones);
            this._vehiculosDisponibles = this._vehiculosDisponibles.filter((elemento, indice) => !usados.includes(indice));
            return true;
        }
        else
            return false;

    }

    get vehiculosAsignados(): VehiculoAsignado[] {
        return [...this._vehiculosAsignados];
    }


}