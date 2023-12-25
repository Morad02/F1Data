# API REST framework

## Criterios de elección

- Compatiblidad con Deno
- Que tenga un buen rendimiento
- Mantenimiento activo

## Alternativas

Para Deno disponemos de los siguientes alternativas:

- [Oak](https://deno.land/x/oak@v12.6.1): es un framework minimalista, que se basa en los conceptos de middleware y contextos. Es el más popular de Deno. 

- [Serve](https://deno.land/api@v1.39.1?s=Deno.serve): Responde a peticiones HTTP en base a un handler que le pasemos.

> Nota: si consultamos el third party modules de Deno, veremos que hay más alternativas, pero casi todas han dejado de ser mantenidas.

## Elección

Teniendo en cuenta los criterios expuestos, tanto la primera como la segunda alternativa nos sirven. Sin embargo, nos decantamos por Deno.Serve. Es verdad que usar Oak nos hará el trabajo más fácil, pero lleva consigo un [coste de rendimiento](https://medium.com/deno-the-complete-reference/the-hidden-cost-of-using-framework-oak-vs-native-http-servers-in-deno-f7f87888aeeb). Oak usa mucho más recursos que Deno.Serve. 