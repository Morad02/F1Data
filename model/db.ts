import {nanoid} from "nanoid"
import { Kv } from "../test/db_test.ts";

export interface Lote 
{
    id: string;
    peso: number;
    volume: number;
}

export interface Vehiculo 
{
    id: string;
    pesoMax: number;
    volumeMax: number;
}

export interface Pedido 
{
    id: string;
    lotes: string[];
}

export interface Asignacion 
{
    id: string;
    vehiculo: string;
    lotes: string[];
}


async function createItem<T>(type: string, params: any): Promise<{ item: T } | null> 
{
    const id = nanoid();
    const item: T = {
        ...params,
        id
    } as T;

    const res = await Kv.set([type, id], JSON.stringify(item));

    if (res.ok) {
        return { item};
    } else {
        return null;
    }
}


async function getItem<T>(type: string, id: string): Promise<T | null> 
{
    const res = await Kv.get([type, id]);

    if (res !== null && typeof res.value === 'string') {
        return JSON.parse(res.value) as T;
    } else {
        return null;
    }
}

async function updateItem<T>(type: string, id: string, params: any): Promise<{ item: T } | null> 
{
    const existingItem: T | null = await getItem<T>(type, id);

    if  (await existingItem !== null) {
        const updatedItem: T = {
            ...existingItem,
            ...params,
            id //  ID se mantenga sin cambios
        };
        
        const res = await Kv.set([type, id], JSON.stringify(updatedItem));

        if (res.ok) {
            return { item: updatedItem };
        }
    }

    return null;
}


async function createLote(params: any) 
{
    return await createItem<Lote>('lote', params);
}

async function createVehiculo(params: any) 
{
    return await createItem<Vehiculo>('vehiculo', params);
}

async function createPedido(params: any) 
{
    return await createItem<Pedido>('pedido', params);
}

async function createAsignacion(params: any) 
{
    return await createItem<Asignacion>('asignacion', params);
}

 async function getLote(id:string)
{
    return await getItem<Lote>('lote', id);
}

 async function getVehiculo(id:string)
{
    return await getItem<Vehiculo>('vehiculo', id);
}

 async function getPedido(id:string)
{
    return await getItem<Pedido>('pedido', id);
}

 async function getAsignacion(id:string)
{
    return await getItem<Asignacion>('asignacion', id);
}

async function updateLote(id: string, params: any) 
{
    return await updateItem<Lote>('lote', id, params);
}

async function updateVehiculo(id:string,params: any)
{
    return await updateItem<Vehiculo>('vehiculo', id, params);
}

async function updatePedido(id:string,params: any)
{
    return await updateItem<Pedido>('pedido', id, params);
}

async function updateAsignacion(id:string,params: any)
{
    return await updateItem<Asignacion>('asignacion', id, params);
}

export default{
    createLote,
    createVehiculo,
    createPedido,
    createAsignacion,
    getLote,
    getVehiculo,
    getPedido,
    getAsignacion,
    updateLote,
    updateVehiculo,
    updatePedido,
    updateAsignacion
};


