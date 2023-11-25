# Criterios de elección de CI tools

- *Servicio gratuito.* Se considerará si el servicio es gratuito o no.
- *Integración con GitHub.* Se evaluará si el servicio se integra con GitHub.
- *Integración con Docker.* Se evaluará si el servicio se integra con Docker
- *Online* Se evaluará si el servicio es online o no. Nos referimos a que no requiera instalación en local.

#  criterios de búsqueda de CI tools

- *Popularidad.* Se evaluará la popularidad de la herramienta.
- *Mantenimiento.* Se evaluará si la herramienta está siendo mantenida.

# Candidatos

## Github Actions

- *Servicio gratuito.* Sí.
- *Integración con GitHub.* Sí.
- *Integración con Docker.* Sí.
- *Online* Sí.

## Travis CI

- *Servicio gratuito.* Sí.
- *Integración con GitHub.* Sí.
- *Integración con Docker.* Sí.
- *Online* Sí. 

## Semaphore CI

- *Servicio gratuito.* No. (Solo una prueba de 14 días)
- *Integración con GitHub.* Sí.
- *Integración con Docker.* Sí.
- *Online* Sí.

## Azure Pipelines

- *Servicio gratuito.* Sí.
- *Integración con GitHub.* Sí.
- *Integración con Docker.* Sí.
- *Online* Sí.




# Maneras de probar el código

## Docker

Una posible configuración sería configurar una pipeline para que cuando se de la situación necesaria (push de código, tests, dockerfile, etc) se construya la imagen y se ejecute el contenedor. De esta manera se podría probar el código en un entorno controlado. 
Siguiendo con Docker, otra posibilidad sería en lugar de construir la imagen, descargarla de DockerHub y ejecutar el contenedor.

## Deno

Otra posibilidad sería ejecutar los tests con Deno. Para ello se ha de instalar Deno en el agente de la pipeline y ejecutar los tests.
En este caso hemos de elegir la versión o versiones que queramos testear. 

### Elección de versión

En primer lugar, quería probar la versión 3.9 de typescript ya que esta trajo una gran mejora en el rendimiento y menor consumo de memoria y además las funcionalidades que ofrece son suficiente para el proyecto. Para ello, como no puedo elegir explícitamente la versión de typescript en Deno, pues elegí probar la versión 1.0.0 de Deno que usa esta versión de typescript. Pero al usar esta versión obtuve el fallo de que no existe el comando task, porque se introdujo en la versión 1.20. Tras obtener este fallo, he probado a usar la versión 1.20, pero obtuve otro fallo. Y en este caso, es que antiguamente en Deno no se usaban maps en los lockfiles, sino strings. Así que otra vez me tuve que cambiar de versión. Leyendo el release de las versiones, ví que este cambio se introdujo hace poco, por lo que poner esta versión en específico solo para que funcione no tiene sentido. Como ya me he quedado lejos de mi objetivo inicial, creo que la elección más razonable es usar la última versión estable de Deno.Aunque lleva varios años en el mercado, todavía se están produciendo cambios relevantes.

# Pruebas

## Azure pipelines
 
No ha sido posible hacerlo funcionar. El problema es que azure ha cambiado su política de tiers.

![azure](./azure_problems.png)

Aunque ponga que no dispongamos de paralelismo para la ejecución, las tareas se ejecutan en secuencia, pero una secuencia en azure está documentada como un agente paralelo (creo que podría tener mejor nombre). Hace poco tiempo, azure ha desactivado los agentes paralelos para las nuevas cuentas gratuitas, y si queremos por lo menos un agente paralelo hemos de rellenar este [formulario](https://aka.ms/azpipelines-parallelism-request). Aunque lo he solicitado, no he recibido respuesta.

## Github Actions

Se ha configurado siguiendo la documentación ofrecida por Deno para [CI](https://docs.deno.com/runtime/manual/advanced/continuous_integration). En este caso, se ha optado por usar Deno con la versión decidida anteriormente. 

## Semaphore CI

Para mi, ha sido el más fácil de usar. Simplemente se ha usado su interfaz gráfica junto con templates para general el pipeline. Tras la generación, te da la opción de verlo en formato yml. En este caso, se ha optado por usar Docker para ejecutar los tests. El inconveniente es que solo tiene una prueba gratuita de 14 días y un tier limitado.

## Travis CI

Para usarlo, simplemente hay que crear un fichero .travis.yml en la raíz del proyecto. En este caso, tras varios intentos no ha sido posible ponerlo en marcha.

