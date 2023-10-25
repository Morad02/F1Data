import { Vehiculo } from "./vehiculo";
import { Pedido } from "./pedido";
import { Lote } from "./lote";

class GestorVehiculos{
    private __vehiculoPedido = new Map<Vehiculo, Pedido[]>();
    private __vehiculoDisponible = new Map<Vehiculo, boolean>();
    private __vehiculoLote = new Map<Vehiculo, Lote[]>();

    constructor(vehiculos: Vehiculo[]){
        vehiculos.forEach(vehiculo => {
            this.__vehiculoPedido.set(vehiculo, []);
            this.__vehiculoDisponible.set(vehiculo, true);
        });
    }
}