import {expect} from "chai";
import  {afterAll, beforeAll, describe, it} from "bdd";
import { handler } from "../api/api.ts";

describe("API", () => {
    let lote:any, vehiculo:any, pedido:any, asignacion:any ;
    let conn:Deno.Server;
    
    beforeAll(async () => {
        conn = Deno.serve({ port: 8080 , handler: handler});
        
        lote = await fetch('http://localhost:8080/lote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({params:{peso:100,volume:100}})
        }).then( res => res.json() );

        vehiculo = await fetch('http://localhost:8080/vehiculo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({params:{pesoMax:100,volumeMax:100}})
        }).then( res => res.json());

        pedido = await fetch('http://localhost:8080/pedido', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({params:{lotes:[ lote?.data?.item?.id ]}})
        }).then( res => res.json());

        asignacion = await fetch('http://localhost:8080/asignacion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({params:{vehiculo:vehiculo?.data?.item?.id,lotes:[pedido?.data?.item?.lotes[0]]}})
        }).then( res => res.json());
    });

    it("Inserciones", () => {  
        expect(lote?.success).to.equal(true);
        expect(vehiculo?.success).to.equal(true);
        expect(pedido?.success).to.equal(true);
        expect(asignacion?.success).to.equal(true);
    });

    it("Actualizaciones", async () => {
        lote = await fetch(`http://localhost:8080/lote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({params:{id:lote?.data?.item?.id ,peso:200,volume:200}})
        }).then( res => res.json());

        vehiculo = await fetch(`http://localhost:8080/vehiculo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({params:{pesoMax:200,volumeMax:200, id:vehiculo?.data?.item?.id}})
        }).then( res => res.json());

        expect(lote?.success).to.equal(true);
        expect(vehiculo?.success).to.equal(true);
        expect(lote?.data?.item?.peso).to.equal(200);
        expect(lote?.data?.item?.volume).to.equal(200);
        expect(vehiculo?.data?.item?.pesoMax).to.equal(200);
        expect(vehiculo?.data?.item?.volumeMax).to.equal(200);
    });

    it("Accesos", async () => {
        lote = await fetch(`http://localhost:8080/lote?id=${lote?.data?.item?.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( res => res.json());

        vehiculo = await fetch(`http://localhost:8080/vehiculo?id=${vehiculo?.data?.item?.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( res => res.json());

        pedido = await fetch(`http://localhost:8080/pedido?id=${pedido?.data?.item?.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( res => res.json());

        asignacion = await fetch(`http://localhost:8080/asignacion?id=${asignacion?.data?.item?.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( res => res.json());

        expect(lote?.success).to.equal(true);
        expect(vehiculo?.success).to.equal(true);
        expect(pedido?.success).to.equal(true);
        expect(asignacion?.success).to.equal(true);
    });

    afterAll( async () => {
        await conn.shutdown();
    });
});
