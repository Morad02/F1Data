import {expect} from "chai";
import  {describe, it} from "bdd";
import { Vehiculo } from "../src/vehiculo.ts";
import { Lote } from "../src/lote.ts";
import { Pedido } from "../src/pedido.ts";
import { GestorVehiculos} from "../src/gestor_vehiculos.ts"

describe("GestorVehiculos - Asignación de Pedidos", () => {
    it("Lotes pequeños y muchos vehículos disponibles", () => {
        const vehiculo1 = new Vehiculo(10, 2000, 10);
        const vehiculo2 = new Vehiculo(15, 3000, 15);
        const vehiculosDisponibles1 = [vehiculo1, vehiculo2];

        const lote1 = new Lote(500, 5);
        const lote2 = new Lote(700, 7);
        const lotesPedido1 = [lote1, lote2];
        const pedido1 = new Pedido(lotesPedido1);

        const gestor1 = new GestorVehiculos(vehiculosDisponibles1);
        const asignado1 = gestor1.asignarPedido(pedido1);

        expect(asignado1).to.be.true;
        expect(gestor1.vehiculosAsignados).to.have.lengthOf(1);
    });

    it("Vehículos pequeños y un lote grande", () => {
        const vehiculo3 = new Vehiculo(10, 500, 5);
        const vehiculosDisponibles2 = [vehiculo3];

        const lote3 = new Lote(1000, 8);
        const lotesPedido2 = [lote3];
        const pedido2 = new Pedido(lotesPedido2);

        const gestor2 = new GestorVehiculos(vehiculosDisponibles2);
        const asignado2 = gestor2.asignarPedido(pedido2);

        expect(asignado2).to.be.false;
        expect(gestor2.vehiculosAsignados).to.have.lengthOf(0);
    });

    it("Sin vehículos disponibles", () => {
        const vehiculosDisponibles3: Vehiculo[] = [];

        const lote4 = new Lote(500, 5);
        const lotesPedido3 = [lote4];
        const pedido3 = new Pedido(lotesPedido3);

        const gestor3 = new GestorVehiculos(vehiculosDisponibles3);
        const asignado3 = gestor3.asignarPedido(pedido3);

        expect(asignado3).to.be.false;
        expect(gestor3.vehiculosAsignados).to.have.lengthOf(0);
    });

    it("Pedido con muchos lotes y vehículos con capacidades suficientes", () => {
        const vehiculo4 = new Vehiculo(10, 2000, 10);
        const vehiculo5 = new Vehiculo(15, 3000, 15);
        const vehiculosDisponibles4 = [vehiculo4, vehiculo5];

        const lote5 = new Lote(500, 5);
        const lote6 = new Lote(700, 7);
        const lote7 = new Lote(800, 8);
        const lotesPedido4 = [lote5, lote6, lote7];
        const pedido4 = new Pedido(lotesPedido4);

        const gestor4 = new GestorVehiculos(vehiculosDisponibles4);
        const asignado4 = gestor4.asignarPedido(pedido4);

        expect(asignado4).to.be.true;
        expect(gestor4.vehiculosAsignados).to.have.lengthOf(2);
    });

    it("Pedido con un solo lote y varios vehículos disponibles", () => {
        const vehiculo6 = new Vehiculo(10, 2000, 10);
        const vehiculo7 = new Vehiculo(15, 3000, 15);
        const vehiculosDisponibles5 = [vehiculo6, vehiculo7];

        const lote8 = new Lote(800, 8);
        const lotesPedido5 = [lote8];
        const pedido5 = new Pedido(lotesPedido5);

        const gestor5 = new GestorVehiculos(vehiculosDisponibles5);
        const asignado5 = gestor5.asignarPedido(pedido5);

        expect(asignado5).to.be.true;
        expect(gestor5.vehiculosAsignados).to.have.lengthOf(1);
    });

    it("Pedido con múltiples lotes y solo un vehículo disponible", () => {
        const vehiculo8 = new Vehiculo(10, 2000, 10);
        const vehiculosDisponibles6 = [vehiculo8];

        const lote9 = new Lote(800, 8);
        const lote10 = new Lote(900, 9);
        const lotesPedido6 = [lote9, lote10];
        const pedido6 = new Pedido(lotesPedido6);

        const gestor6 = new GestorVehiculos(vehiculosDisponibles6);
        const asignado6 = gestor6.asignarPedido(pedido6);

        expect(asignado6).to.be.false;
        expect(gestor6.vehiculosAsignados).to.have.lengthOf(0);
    });

    it("Vehículos con capacidades extremadamente altas", () => {
        const vehiculo9 = new Vehiculo(10, 20000, 100);
        const vehiculosDisponibles7 = [vehiculo9];

        const lote11 = new Lote(500, 5);
        const lote12 = new Lote(700, 7);
        const lotesPedido7 = [lote11, lote12];
        const pedido7 = new Pedido(lotesPedido7);

        const gestor7 = new GestorVehiculos(vehiculosDisponibles7);
        const asignado7 = gestor7.asignarPedido(pedido7);

        expect(asignado7).to.be.true;
        expect(gestor7.vehiculosAsignados).to.have.lengthOf(1);
    });
});