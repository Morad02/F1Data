export interface Lote {
    id: string;
    peso: number;
    volume: number;
}

export interface Vehiculo {
    id: string;
    pesoMax: number;
    volumeMax: number;
    lotes: string[];
}

export interface Pedido {
    id: string;
    lotes: string[];
}

export interface Asignacion {
    id: string;
    vehiculo: string;
    lotes: string[];
}


export async function getLote(id:string)
{
    
}

export async function getVehiculo(id:string)
{
    
}

export async function getPedido(id:string)
{
    
}

export async function getAsignacion(id:string)
{
    
}

export async function updateLote(id:string,params:any)
{
    
}

export async function updateVehiculo(id:string,params = [])
{
    
}

export async function updatePedido(id:string,params = [])
{
    
}

export async function updateAsignacion(id:string,params = [])
{
    
}

export async function deleteLote(id:string)
{
    
}

export async function deleteVehiculo(id:string)
{
    
}

export async function deletePedido(id:string)
{
    
}

export async function deleteAsignacion(id:string)
{
    
}


