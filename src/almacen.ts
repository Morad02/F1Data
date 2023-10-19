import { pedido } from "./pedido";
import { vehiculo } from "./vehiculo";

type almacen = {
    nombre : string;
    pedidos : pedido[];     // Lista de pedidos asociados al almacén
    vehiculos : vehiculo[]; // Lista de veehículos asociados al almacén
};