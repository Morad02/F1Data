import {expect} from "chai";
import  {describe, it} from "bdd";
import { Vehiculo } from "../src/vehiculo.ts";
import { Lote } from "../src/lote.ts";
import { Pedido } from "../src/pedido.ts";
import { GestorVehiculos} from "../src/gestor_vehiculos.ts"
import { VehiculoAsignado } from "../src/vehiculo_asignado.ts";

describe("GestorVehiculos - Asignación de Pedidos", () => {

    function esUnaAsignacionMinima(vehiculosDisponibles: Vehiculo[], lotesPedido: Lote[], vehiculosAsignados: VehiculoAsignado[]): boolean {
        
        if(vehiculosAsignados.length > 0)
        {
            for (let i = 0; i < vehiculosAsignados.length; i++) {
                let numLotesAsignados = vehiculosAsignados[i].lotes.length;
    
                for(let j = 0; j < vehiculosAsignados[i].lotes.length; j++) {
                    
                    for(let k = 0; k  < vehiculosAsignados.length && k != i; k++) {
                        if(vehiculosAsignados[k].puedeCargarLote(vehiculosAsignados[i].lotes[j])) {
                            numLotesAsignados--;
                        }
    
                        if(numLotesAsignados == 0) {
                            return false;
                        }
    
                    }
                }   
            }
        }
        else
        {
            if(vehiculosDisponibles.length == 0)
                return true;
            else
            {
                if(!puedeCargarLotes(vehiculosDisponibles, lotesPedido))
                    return true;
                else
                    return false;
            }
            
            
        }
        
        return true;
    }

    function puedeCargarLotes(vehiculosDisponibles: Vehiculo[], lotesPedido: Lote[])
    {
        
        return pesoTotalLotes(lotesPedido) <= pesoTotalVehiculos(vehiculosDisponibles) && volumenTotalLotes(lotesPedido) <= volumenTotalVehiculos(vehiculosDisponibles);
    }

    function pesoTotalLotes(lotes: Lote[]): number {
        return lotes.reduce((acumulador, lote) => acumulador + lote.peso, 0);
    }

    function volumenTotalLotes(lotes: Lote[]): number {
        return lotes.reduce((acumulador, lote) => acumulador + lote.volume, 0);
    }

    function pesoTotalVehiculos(vehiculos: Vehiculo[]): number {
        return vehiculos.reduce((acumulador, vehiculo) => acumulador + vehiculo.pesoMax, 0);
    }

    function volumenTotalVehiculos(vehiculos: Vehiculo[]): number {
        return vehiculos.reduce((acumulador, vehiculo) => acumulador + vehiculo.volumeMax, 0);
    }
    
    it("Lotes pequeños y muchos vehículos disponibles", () => {
        const gestor1 = new GestorVehiculos([new Vehiculo(10, 2000, 10), new Vehiculo(15, 3000, 15)]);
        gestor1.asignarPedido(new Pedido([new Lote(500, 5), new Lote(700, 7)]));

        expect(esUnaAsignacionMinima([new Vehiculo(10, 2000, 10), new Vehiculo(15, 3000, 15)], [new Lote(500, 5), new Lote(700, 7)], gestor1.vehiculosAsignados)).to.be.true;
    });

    it("Vehículos pequeños y un lote grande", () => {
        const gestor2 = new GestorVehiculos([new Vehiculo(10, 500, 5)]);
        gestor2.asignarPedido(new Pedido([new Lote(1000, 8)]));

        expect(esUnaAsignacionMinima([new Vehiculo(10, 500, 5)], [new Lote(1000, 8)], gestor2.vehiculosAsignados)).to.be.true;
    });

    it("Sin vehículos disponibles", () => {
        const gestor3 = new GestorVehiculos([]);
        gestor3.asignarPedido(new Pedido([new Lote(500, 5)]));

        expect(esUnaAsignacionMinima([], [new Lote(500,5)], gestor3.vehiculosAsignados)).to.be.true;
    });

    it("Pedido con muchos lotes y vehículos con capacidades suficientes", () => {
        const gestor4 = new GestorVehiculos([new Vehiculo(10, 2000, 10), new Vehiculo(15, 3000, 15)]);
        gestor4.asignarPedido(new Pedido([new Lote(500, 5), new Lote(700, 7), new Lote(800, 8)]));

        expect(esUnaAsignacionMinima([new Vehiculo(10, 2000, 10), new Vehiculo(15, 3000, 15)], [new Lote(500, 5), new Lote(700, 7), new Lote(800, 8)], gestor4.vehiculosAsignados)).to.be.true;
    });

    it("Pedido con un solo lote y varios vehículos disponibles", () => {
        const gestor5 = new GestorVehiculos([new Vehiculo(10, 2000, 10), new Vehiculo(15, 3000, 15)]);
        gestor5.asignarPedido(new Pedido([new Lote(800, 8)]));

        expect(esUnaAsignacionMinima([new Vehiculo(10, 2000, 10), new Vehiculo(15, 3000, 15)], [new Lote(800, 8)], gestor5.vehiculosAsignados)).to.be.true;
    });

    it("Pedido con múltiples lotes y solo un vehículo disponible", () => {
        const gestor6 = new GestorVehiculos([new Vehiculo(10, 2000, 10)]);
        gestor6.asignarPedido(new Pedido([new Lote(800, 8), new Lote(900, 9)]));

        expect(esUnaAsignacionMinima([new Vehiculo(10, 2000, 10)], [new Lote(800, 8), new Lote(900, 9)], gestor6.vehiculosAsignados)).to.be.true;
    });

    it("Vehículos con capacidades extremadamente altas", () => {
        const gestor7 = new GestorVehiculos([new Vehiculo(10, 20000, 100)]);
        gestor7.asignarPedido(new Pedido([new Lote(500, 5), new Lote(700, 7)]));

        expect(esUnaAsignacionMinima([new Vehiculo(10, 20000, 100)], [new Lote(500, 5), new Lote(700, 7)], gestor7.vehiculosAsignados)).to.be.true;
        
    });
});