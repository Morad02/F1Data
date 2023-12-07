# Logger

Configurar un logger para nuestra aplicación es una tarea muy importante, ya que nos permite tener un control de los errores que se producen en nuestra aplicación y poder actuar en consecuencia.

## Criterios de búsqueda

Para la búsqueda de un logger adecuado para nuestra aplicación, se han tenido en cuenta los siguientes criterios:

- Que sea compatible con Deno

## Criterios de decisión

Para la elección del logger se han tenido en cuenta los siguientes criterios:

- Que soporte el almacenamiento de logs en ficheros
- Que esté mantenido

## Alternativas

### [Deno log](https://deno.land/std/log)

Es un logger que viene por defecto con Deno. Es fácil de usar, soporta el almacenamiento de logs en ficheros y está mantenido por el equipo de Deno.

### [Deno-logger](https://deno.land/x/deno_log)

Logger escrito en Typescript y se puede usar tanto en Deno como en Node. Es muy parecido al anterior.

## Decisión

Se ha decidido usar el logger que viene por defecto con Deno, ya que cumple con todos los criterios de decisión y es el que más soporte tiene.

# Variables de entorno

Las variables de entorno son un mecanismo que nos permite configurar nuestra aplicación sin tener que modificar el código fuente. Esto nos permite tener una mayor flexibilidad a la hora de configurar nuestra aplicación. En este caso, se van a usar para configurar el logger. 
Deno ofrece ofrece dotenv, un módulo que nos permite cargar variables de entorno desde un fichero .env. Vamos a usar este módulo para cargar las variables de entorno.
Usar dotenv nos permitirá almacenar información sensible o configuraciones específicas en un archivo separado del código fuente (.env)