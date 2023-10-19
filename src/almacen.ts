import { pedido } from "./pedido";
import { vehiculo } from "./vehiculo";

type almacen = {
    nombre : string;
    pedidos : pedido[];     
    vehiculos : vehiculo[]; 
};