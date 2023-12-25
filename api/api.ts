
export async function handler(_req: Request)
{
    const {method} = _req;
    const url = new URL(_req.url);
    const id = url.searchParams.get('id');

    if(method === 'POST')
    {
        const body = await _req.json();
        const {params} = body.params;
    }

    const routes = {
        '/lote': {
            GET: async(id:string) => await getLote(id),
            POST: async(id:string,params:any) => await postLote(id,params),
            DELETE: async(id:string) => await deleteLote(id)
        },
        '/vehiculo': {
            GET: async(id:string) => await getVehiculo(id),
            POST: async(id:string,params:any) => await postVehiculo(id,params),
            DELETE: async(id:string) => await deleteVehiculo(id)
        },
        '/pedido': {
            GET: async(id:string) => await getPedido(id),
            POST: async(id:string,params:any) => await postPedido(id,params),
            DELETE: async(id:string) => await deletePedido(id)
        },
        '/asignacion': {
            GET: async(id:string) => await getAsignacion(id),
            POST: async(id:string,params:any) => await postAsignacion(id,params),
            DELETE: async(id:string) => await deleteAsignacion(id)
        }

    }
        

}

async function getLote(id:string)
{
    
}

async function getVehiculo(id:string)
{
    
}

async function getPedido(id:string)
{
    
}

async function getAsignacion(id:string)
{
    
}

async function postLote(id:string,params:any)
{
    
}

async function postVehiculo(id:string,params:any)
{
    
}

async function postPedido(id:string,params:any)
{
    
}

async function postAsignacion(id:string,params:any)
{
    
}

async function deleteLote(id:string)
{
    
}

async function deleteVehiculo(id:string)
{
    
}

async function deletePedido(id:string)
{
    
}

async function deleteAsignacion(id:string)
{
    
}



