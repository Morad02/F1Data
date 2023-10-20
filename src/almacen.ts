import { pedido } from "./pedido";
import { vehiculo } from "./vehiculo";

class almacen {
    private _nombre : string;
    private _pedidos: pedido[];
    private _vehiculos: vehiculo[];

    constructor(nombre: string, pedidos: pedido[], vehiculos: vehiculo[]){
        this._nombre = nombre;
        this._pedidos = pedidos;
        this._vehiculos = vehiculos;
    }
}
