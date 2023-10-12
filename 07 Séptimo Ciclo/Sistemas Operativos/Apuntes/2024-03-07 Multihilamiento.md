# Multihilamiento
## Multihilos
Antes se hacía que cada hilo fuera un proceso, ahora los hilos son "subprocesos" del proceso que se está corriendo.

Todos los hilos de un proceso comparten el mismo espacio de direcciones y otros recursos. Cualquier alteración de un recurso por cualquiera de los hilos afecta al entorno del resto de hilos del mismo proceso, es por esto que es necesario sincronizar las actividades de los hilos para que no interfieran entre ellos.

## API
"Application Programming Interface"

Es una presentación de información pública que está almacenada dentro de la base de datos de algún lugar.

Por ejemplo, correo, nombre, etc.

Una API es como un mesero, que recibe la orden a la cocina y devuelve la comida, pero no permite al usuario (cliente) entrar a la cocina (base de datos privada),

## Códigos de estado de respuesta HTTP
- Respuestas informativas (100-199)
- Respuestas satisfactorias (200-299)
- Redirecciones (300-399)
- Errores de clientes (400-499)
- Errores de servidores (500-599)

**HTTP lo usan APIs y páginas web**

