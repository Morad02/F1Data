# Imagen base para contenedor de pruebas

Para elegir nuestra imagen, vamos a tener en cuenta los siguientes criterios:

- *Soporte:* Que la imagen tenga mantenimiento para asegurar que se mantenga actualizada y segura.
- *Deno:* Que tenga Deno pre-instalado para ahorrar dependencias y al mismo tiempo tener un dockerfile sencillo y fácil de mantener.
- *Liviana:* Una imagen liviana suele arrancar mas rápido. Es verdad que esto no siempre es así, pero en general una imagen más liviana implica menos datos que deben cargarse y procesarle al iniciar el contenedor.
- *Herramientas:* Que la imagen solo incluya las herramientas necesarias para el proyecto.
## Imagenes base

Según las buenas prácticas, se ha de usar las imágenes oficiales siempre que sea posible. Pero esto, es más bien en caso de contenedores de desarrollo. En nuestro caso, al ser un contenedor de pruebas nos dará igual que sea una imagen oficial o no. Otro aspecto a tener en cuenta para la búsqueda de imágenes es que esta sea reciente y no muy antigua.

### Imagenes candidatas

Tenemos diferentes opciones para elegir nuestra imagen base. Una primera opción sería eligir una imagen de un sistema operativo y luego instalar Deno. Otra opción sería elegir una imagen que ya tenga Deno pre-instalado. En este caso, vamos a elegir la segunda opción, ya que nos ahorraremos el trabajo de instalar Deno y al mismo tiempo tendremos un dockerfile más sencillo y fácil de mantener.

#### Imagenes con Deno pre-instalado

Las imágenes que traen Deno pre-instalado, puede tener un sistema operativo de base o no. En este caso, vamos a elegir una imagen que tenga un sistema operativo de base, ya que tendrá herramientas que nos pueden ser útiles. 
Habiendo definido esto, nos queda concretar qué sistema operativo que queremos que tenga la imagen. Los sistemas operativos que suelen haber son: Ubuntu, Debian, Alpine y CentOs. 
De los SOs nombrados el más ligero es Alpine. Además Alpine es la que menos herramientas incluye respecto a los otros. Es verdad que Alpine usa musl en vez de glibc, pero esto no debería ser un problema, ya que nuestro proyecto usa un lenguaje interpretado y no compilado. Así que, el SO base de la imagen tendría que ser Alpine. 

#### Imagenes con Alpine y Deno pre-instalado

La única imagen encontrada que cumple con los requisitos de búsqueda es la siguiente:
- [denoland/deno](https://hub.docker.com/r/denoland/deno):Esta imagen tiene Deno pre-instalado y ofrece Alpine como SO base. Es la imagen oficial ofrecida por Deno, por lo tanto tiene soporte y se mantiene actualizada. Además, es una imagen muy liviana, de tan solo 51 MB. 

Por lo tanto, la imagen encontrada cumple con nuestros requisitos y es la que vamos a usar para nuestro contenedor de pruebas.
