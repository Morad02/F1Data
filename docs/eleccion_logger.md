# Logger

Configurar un logger para nuestra aplicación es una tarea muy importante, ya que nos permite tener un control de los errores que se producen en nuestra aplicación y poder actuar en consecuencia.

## Criterios de búsqueda

Para la búsqueda de un logger adecuado para nuestra aplicación, se han tenido en cuenta los siguientes criterios:

- Que sea compatible con Deno

## Criterios de decisión

Para la elección del logger se han tenido en cuenta los siguientes criterios:

- Que esté mantenido
- Que soporte el almacenamiento de logs en diferentes lugares

## Alternativas

### [Deno log](https://deno.land/std/log)

Es un logger que viene por defecto con Deno. Es fácil de usar, soporta el almacenamiento de logs en ficheros y está mantenido por el equipo de Deno.

### [Deno-logger](https://deno.land/x/deno_log)

Logger escrito en Typescript y se puede usar tanto en Deno como en Node. Es muy parecido al anterior.

## Decisión

Se ha decidido usar el logger que viene por defecto con Deno, ya que cumple con todos los criterios de decisión y es el que más soporte tiene.

# Configuration management

Deno ofrece dos formas de configurar el entorno de ejecución, a través de variables de entorno y de un archivo de configuración (usando dotenv). 
Estas herramientas simplemente nos permiten gestionar variables y leerlas. Deno no tiene un sistema de configuración propio, y los módulos de terceros que lo implementan son escasos y no tienen apenas soporte. 
Por ello, he decidido implementar una clase que nos permita gestionar la configuración de la aplicación. Esta clase contendrá las funcionalidades necesarias para este objetivo y a medida que se vayan necesitando nuevas funcionalidades se irán añadiendo.  