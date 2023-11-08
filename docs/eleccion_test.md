# Elección de metodología y herramientas para test

## Elección metodología 

Para el desarrollo de test existen diferentes metodologías que las podemos dividir en dos grandes grupos, **test-first** y **test-last**. *Test-last* es la forma clásica de testeo que básicamente consiste en escribir primero el código y luego los tests. *Test-first* es todo lo contrario, en primer lugar se escriben los test y luego el código. Dentro de *test-first* encontramos principalmente dos metodologías, **TDD** y **BDD**. *TDD* se centra en escribir pruebas unitarias que verifican el funcionamiento correcto de componentes específicos o unidades de código. Por otro lado, el objetivo de *BDD* es el mismo que el de *TDD* solo que en este caso el estilo de las aserciones cambia. En *BDD* se escriben las pruebas en lenguaje natural, usando un lenguaje más cercano al negocio.

Viendo todas estas opciones que tenemos, en mayor o menor medida todas cumplen con los [criterios](./criterios.md) que se han establecido para el proyecto. 
Teniendo en cuenta que el desarrollo ágil se centra en el cliente, la opción más razonable es **BDD**. Al describir el comportamiento esperado en lenguaje natural, se fomenta la colaboración entre el equipo técnico y las personas no técnicas lo que permite que el producto cumpla con los requisitos del usuario. 

## Elección herramientas test

Teniendo en cuenta que la metodología a usar es **BDD** y de que se está usando **Deno** como runtime, estas son las opciones de las que disponemos:

- *Aserciones:* [**Assert**](https://deno.land/std@0.204.0/assert/mod.ts) de Deno_std y [**Chai**](https://deno.land/x/chai@v5.0.0)
- *Test runners o frameworks:* [**Tincan**](https://deno.land/x/tincan@1.0.2), [**Bdd_mocha**](https://deno.land/x/deno_mocha@0.3.1) y [**bdd.ts**](https://deno.land/std@0.204.0/testing/bdd.ts) de Deno_std


>Nota : Los criterios de elección que se van a usar para tomar las decisiones son los que se han establecido en el [documento de criterios](./criterios.md).

### Aserciones

Podríamos usar la propuesta por Deno pero al ser reciente nos vamos a decantar por *Chai* ya que ya lleva varios años en el mercado y es más estable, por lo que generaría menor deuda técnica. 

### Test runners o frameworks

Tican tiene pocas funcionalidades (8) que ahora nos podrían valer pero seguramente en un futuro nos harán falta más. El equipo de desarrollo está formado por dos personas y sufre pocas actualizaciones. 
Bdd_mocha viene a mejorar la velocidad del módulo ofrecido por Deno, es más completa que la anterior pero todavía no ha implementado todas las funcionalidades de *Bdd.ts*.
Bdd.ts es el módulo ofrecido por Deno. Es parecido a Mocha, Jasmine y Jest. Aunque no lleva mucho tiempo , es muy completo. Al tener el equipo de desarrollo de Deno, vamos a tener mayor suporte que las herramientas anteriores.  Por lo tanto, la herramienta que vamos a elegir es la ofrecida por Deno ya que se adecúa más a nuestros criterios.

### CLI para ejecutar los tests

La herramienta que se va a usar es la ofrecida por Deno (suborden test). Cumple con los requisitos establecidos, además es de buena práctica usar la que hay. 
