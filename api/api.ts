import * as db from '../model/db.ts';

export async function handler(_req: Request)
{
    const {method} = _req;
    const url = new URL(_req.url);
    let id:string;
    let params;

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
            POST: async(id:string,params:any) => await postLote(id,params),
        },
        '/vehiculo': {
            GET: async(id:string) => await db.default.getVehiculo(id),
            POST: async(id:string,params:any) => await postVehiculo(id,params),
        },
        '/pedido': {
            GET: async(id:string) => await db.default.getPedido(id),
            POST: async(id:string,params:any) => await postPedido(id,params),
        },
        '/asignacion': {
            GET: async(id:string) => await db.default.getAsignacion(id),
            POST: async(id:string,params:any) => await postAsignacion(id,params),
        }

    }

    if( routes[url.pathname] && id ) {
        let responseData;
        
        if (method === 'POST')
        {
            responseData = await routes[url.pathname]?.[method](id,params);
            return respond( responseData, "UPDATE" );

        } 
        else
        {
            responseData = await routes[url.pathname]?.[method](id);
            return respond( responseData, method );
        }
                 
        
    }
    else if (routes[url.pathname] && params)
    {
        const responseData = await routes[url.pathname]?.[method]('',params);
        return respond( responseData, "CREATE" );
    }

    
    return respond(null,"ANY");


}

function respond(data:any, method:string)
{   
    let status = 200;

    if (data == null || data == false)
    {
        data = {success: false};

        if (method === 'GET' || method === 'DELETE' || method == 'UPDATE')
            status = 404;
        else if (method === 'CREATE' || method === 'ANY')
            status = 400;

    }
    else
    {
        data = {success: true, data};

        if (method === 'GET' || method === 'UPDATE')
            status = 200;
        else if (method === 'DELETE')
        {
            return new Response(null,{status: 204});

        }      
        else if (method === 'CREATE')
            status = 201;
    }

    return new Response(JSON.stringify(data),{
        status,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}


async function postLote(id:string,params:any,)
{   
    return id !== '' ? await db.default.updateLote(id, params) : await db.default.createLote(params);
}

async function postVehiculo(id:string,params:any)
{
    return id !== '' ? await db.default.updateVehiculo(id, params) : await db.default.createVehiculo(params);
}

async function postPedido(id:string,params:any)
{
    return id !== '' ? await db.default.updatePedido(id, params) : await db.default.createPedido(params);  
}

async function postAsignacion(id:string,params:any)
{
    return id !== '' ? await db.default.updateAsignacion(id, params) : await db.default.createAsignacion(params);
}



