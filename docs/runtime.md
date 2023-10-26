# Elección runtime

Como se ha debatido y acordado previamente en #7, se ha determinado que el lenguaje elegido para este proyecto es TypeScript.
TS puede definirse  como una extensión de JS que ofrece verificación estática de errores en el código sin necesidad de ejecutarlo. Este lenguaje proporciona funciones de desarrollo adicionales que se eliminan durante el proceso de transpilación.
Es importante destacar que TS solo puede ser ejecutado como JS. Por lo tanto, es imperativo realizar una transpilación previa (a menos que se haga automáticamente) para convertirlo en código JS y posteriormente ejecutarlo con algún runtime de JS.

Los principales runtimes existentes son [Node JS](https://nodejs.org/en),  [Deno](https://deno.com/) y [Bun](https://bun.sh/). Vamos a proceder a ver de cada uno sus principales características para elegir el más adecuado teniendo en cuenta los criterios de elección que se siguen en este proyecto.

## Node JS

**Seguridad.** Node usa el motor V8. V8 por sí solo es seguro, pero Node rompió esa seguridad al permitir que el código pueda acceder a cualquier cosa que el usuario pueda.

**Gestión de paquetes.** Usa el gestor de paquetes NMP por defecto. Para importarlos usa la sintaxis CommonJS.

**Supoporte Typescript.** Antes de pasarle el archivo TS a node, lo tenemos que transpilar a JS.

## Deno

**Seguridad.** Deno ejecuta el código en un SandBox por defecto lo que permite que el runtime no tenga acceso a capas inferiores como la red o el sistema de archivos. Para acceder ellas, se pedirán permisos en tiempo de ejecución o se podrán pasar flags al comando de ejecución.

**Gestion de paquetes.** Deno permite solicitar paquetes por URL. Utiliza el estándar proporcionado por EcmaScript para el sistema de módulos por lo que son compatibles por defecto con el navegador. 

**Suporte Typescript.** Puede transpilar código TS sin necesidad de configuración ni de dependencias adicionales.

**Rendimiento.** Es casi el doble de rápido que Node JS.

## Bun

**Rendimiento.** Es la característica clave que diferencia a Bun de Node JS y Deno. Afirman que es 2.5 vece más rápido que los anteriores.


**Suporte Typescript.** Puede transpilar código TS automáticamente.

**Gestión de paquetes.** Tiene su propio gestor de paquetes. 


### Aclaración

Cabe aclarar que al llevar Node JS más tiempo en el mercado es más estable que Deno y Bun. Bun al ser el más nuevo si que tiene muchas más actualizaciones, pero son más para actualizar errores e incluir nuevas características. Sabiendo que este es un proyecto de corto plazo, en ningún momento habrá un gran cambio durante el proyecto por lo que la deuda técnica que generarían sería casi la misma. 

## Elección

Para mi proyecto la elección más razonable es **Deno**.  En primer lugar, Deno se destaca en seguridad al ejecutar código en un entorno de sandbox por defecto. Además, ofrece soporte nativo para TypeScript, lo que simplifica el desarrollo sin necesidad de configuraciones adicionales. En términos de rendimiento, Deno es casi el doble de rápido que Node JS, lo que puede mejorar la eficiencia de ejecución y proporcionar una mejor experiencia del usuario. Por último, su sistema de gestión de paquetes por URL y el estándar de módulos de EcmaScript facilitan la gestión de paquetes y garantizan la compatibilidad con el navegador. Estos factores hacen de Deno la elección óptima ya que cumple con los criterios de seguridad, eficiencia, rendimiento y deuda técnica. 
