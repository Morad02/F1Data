import * as db from '../model/db.ts';

export async function handler(_req: Request)
{
    const {method} = _req;
    const url = new URL(_req.url);
    let id:string;
    let params:object = [];

    if(method === 'POST')
    {
        const body = await _req.json();
        params = body.params;
        id = body.params.id || '';
    }
    else
    {
         id = url.searchParams.get('id') || '';

    }

    const routes:any = {
        '/lote': {
            GET: async(id:string) => await db.default.getLote(id),
            POST: async(id:string,params:object) =>  id !== '' ? await db.default.updateLote(id, params) : await db.default.createLote(params),
        },
        '/vehiculo': {
            GET: async(id:string) => await db.default.getVehiculo(id),
            POST: async(id:string,params:object) => id !== '' ? await db.default.updateVehiculo(id, params) : await db.default.createVehiculo(params),
        },
        '/pedido': {
            GET: async(id:string) => await db.default.getPedido(id),
            POST: async(id:string,params:object) => id !== '' ? await db.default.updatePedido(id, params) : await db.default.createPedido(params),
        },
        '/asignacion': {
            GET: async(id:string) => await db.default.getAsignacion(id),
            POST: async(id:string,params:object) => id !== '' ? await db.default.updateAsignacion(id, params) : await db.default.createAsignacion(params),
        }

    }

    if( routes[url.pathname] && id ) {
        let responseData;
        
        if (method === 'POST')
        {
            responseData = await routes[url.pathname]?.[method](id,params);
            return respond( responseData, method, params );

        } 
        else
        {
            responseData = await routes[url.pathname]?.[method](id);
            return respond( responseData, method, params );
        }
                 
        
    }
    else if (routes[url.pathname] && params)
    {
        const responseData = await routes[url.pathname]?.[method]('',params);
        return respond( responseData, method, params );
    }

    
    return respond(null,method, params);


}

function respond(data:object|null, method:string, params:object)
{   
    data = data == null ? {success: false} : {success: true, data};

    const status:number = getStatus(data,method,params);

    return new Response(JSON.stringify(data),{
        status,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

function getStatus(data:object|null, method:string, params:object):number
{
    let status:number;

    if (method === 'GET' || (method == 'POST' && 'id' in params))
        status = data == null ? 404 : 200 ;
     else 
        status = data == null ? 400: 201;

    return status;
}




