import {expect} from "chai";
import  {beforeAll, describe, it} from "bdd";
import * as db from '../model/db.ts';


describe("DB", () => {
    let lote:any, vehiculo:any, pedido:any, asignacion:any ;

    beforeAll(async () => {
        lote = await db.default.createLote({peso:100,volume:100});
        vehiculo = await db.default.createVehiculo({pesoMax:100,volumeMax:100});
        pedido = await db.default.createPedido({lotes:[ lote?.item.id ]});
        asignacion = await db.default.createAsignacion({vehiculo:vehiculo?.item.id,lotes:[pedido?.item.lotes[0]]});
    });

    it("Inserciones", () => {  
        expect(lote?.item.peso).to.equal(100);
        expect(lote?.item.volume).to.equal(100);
        expect(vehiculo?.item.pesoMax).to.equal(100);
        expect(vehiculo?.item.volumeMax).to.equal(100);
        expect(pedido?.item.lotes[0]).to.equal(lote?.item.id);
        expect(asignacion?.item.vehiculo).to.equal(vehiculo?.item.id);
        expect(asignacion?.item.lotes[0]).to.equal(pedido?.item.lotes[0]);
    }); 

    it("Actualizaciones", async () => {
        lote = await db.default.updateLote(lote?.item.id,{peso:200,volume:200});
        vehiculo = await db.default.updateVehiculo(vehiculo?.item.id,{pesoMax:200,volumeMax:200});
        

        expect(lote?.item.peso).to.equal(200);
        expect(lote?.item.volume).to.equal(200);
        expect(vehiculo?.item.pesoMax).to.equal(200);
        expect(vehiculo?.item.volumeMax).to.equal(200);

        
    });

    it("Accesos", async () => {
        expect(await db.default.getLote(lote?.item.id)).to.deep.equal(lote?.item);
        expect(await db.default.getVehiculo(vehiculo?.item.id)).to.deep.equal(vehiculo?.item);
        expect(await db.default.getPedido(pedido?.item.id)).to.deep.equal(pedido?.item);
        expect(await db.default.getAsignacion(asignacion?.item.id)).to.deep.equal(asignacion?.item);
        
    });
});










    