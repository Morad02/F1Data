# Elección gestor de dependencias

El runtime elegido ya proporciona una forma de gestionar las dependencias. Deno gestiona las dependencias a través de URLs.  Esta forma respeta los estándares del lenguaje y no aumentaría nuestra deuda técnica. Podríamos comparar otros gestores de dependencias pero para este proyecto no valdrá la peña ya que el ofrecido por Deno cumple su función, además usar un gestor aparte supondría una dependencia adicional. 

- - - 

# Elección de task runner

Usar un gestor de tareas en nuestro proyecto nos ayudará a automatizar tareas repetitivas, ahorrar tiempo,y evitar errores Simplifica el proceso y garantiza una ejecución consistente. Para elegir el task runner del proyecto vamos a descubrir las características más importantes de los siguientes gestores de tareas y en base a estas características y criterios de decisión establecidos elegiremos el más razonable. Los task runner que vamos a comparar son los siguientes: *Make*, *Drake*, *Denosk* y el ofrecido por *Deno*.

## Make

Herramienta de construcción ampliamente utilizada que se centra en la eficiencia y la automatización de tareas. Utiliza un fichero llamado Makefile para definir reglas y objetivos, permitiendo que las tareas se ejecuten de manera implícita. Aunque Make es genérico y puede utilizarse en una variedad de lenguajes, se basa en scripts del shell para ejecutar acciones. Esto lo hace especialmente útil en entornos donde la infraestructura es diversa y se requiere una herramienta de construcción versátil.

## Drake

Herramienta de construcción explícita y específica de Deno. Requiere un fichero Darkfile (no es más que un fichero en TS que tiene el modulo de Darke y las tareas creadas) para definir tareas y acciones. Está inspirado en Make, Rake y Jake. Drake utiliza propiedades de archivo cacheadas condicionalmente para determinar si una tarea de archivo está o no desactualizada. Su última actualización fue en julio de 2022.

## Denosk

Otro task runner específico de Deno. Está pensado para proyectos donde quieren ejecutar scripts con yarn dev o yarn start. Proporciona funcionalidades pre-establecidas para facilitar este objetivo. Su última actualización fue hace 9 meses. 

## Deno task

Herramienta implícita y específica de Deno. A diferencia de las otras herramientas, Deno Task evita la necesidad de un fichero de configuración externo, ya que utiliza declaraciones de uso directamente en el código. Esta característica lo hace adecuado para proyectos de Deno, donde se busca una configuración más integrada y minimalista. Deno Task sigue un enfoque más declarativo, ya que se describen las dependencias directamente en el código fuente.

## Elección

Viendo estas características y basándonos en los criterios de elección vamos a elegir **Deno task** como gestor de tareas. Deno Task se integra directamente con el entorno de ejecución de Deno, siguiendo sus estándares y mejores prácticas, lo que promueve la coherencia y la adhesión a normas establecidas. Además, al basarse en declaraciones de uso directamente en el código fuente, Deno Task minimiza la introducción de deuda técnica, lo que facilita el mantenimiento a largo plazo. En cuanto al rendimiento, Deno Task se beneficia de la velocidad y eficiencia de ejecución inherentes a Deno.

