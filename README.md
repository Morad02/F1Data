# F1Data

## Problema

Una empresa dispone de una flota de vehículos, donde cada vehículo se caracteriza por el consumo que tiene y la capacidad de almacenamiento. La actividad de esta empresa es la de reponer materia prima a fábricas. El problema que tienen es que cuando los gerentes de almacenes se ponen a distribuir un pedido sobre los vehículos que tienen para enviarlo a un almacén, muchas veces no realizan la distribución ideal y eso repercute en el consume de combustible y por ende en los gastos de la empresa. La empresa trabaja con 3 modelos de vehículos, pequeños, medianos y grandes (más adelante se precisará más información sobre las materia primas y los vehículos).

## Clase GestorVehiculos

Es la entidad encargada de gestionar tanto la disponibilidad de los vehículos como la asignación de pedidos a vehículos.

Para comprobar la sintaxis de esta entidad y de las demás fuentes debemos de ejecutar la tarea **check** con el siguiente comando
    
```bash
deno task check
```

Para testear la asignación de vehículos se ha de usar el siguiente comando

```bash
deno task test
```
## Contenedor de pruebas

Se puede construir la imagen y ejecutar el contenedor con el siguiente comando

```bash
docker build -t morad02/f1data . & docker run  -tv `pwd`:/app/test morad02/f1data
```

También tenemos la otra posibilidad de usar la imagen que esta en el [repositorio](https://hub.docker.com/r/morad02/f1data) de dockerhub

```bash
docker run  -tv `pwd`:/app/test morad02/f1data 
```

## Documentación

[Historias de usuario](./docs/historiasUsuario.md)
<br>
[Milestones](./docs/milestones.md)
<br>
[Configuración GIT](./docs/git.png)
<br>
[Configuración SSH](./docs/ssh.png)
<br>
[Criterios de decisión](./docs/criterios.md)
<br>
[Elección runtime](./docs/runtime.md)
<br>
[Elección gestor de dependencias](./docs/eleccion_herramientas.md#Elección-gestor-de-dependencias)
<br>
[Elección de task runner](./docs/eleccion_herramientas.md#Elección-de-task-runner)
<br>
[Elección metodología y herramientas de test](./docs/eleccion_test.md)
<br>
[Elección imagen base](./docs/eleccion_imagen_base.md)


