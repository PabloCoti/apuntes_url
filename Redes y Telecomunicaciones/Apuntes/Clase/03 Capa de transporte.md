# Capa de transporte
Sirve para rastrear comunicación entre aplicaciones del host de origen y destino, segmentar los datos enviados y reensamblarlos en su destino y la identificación de varias aplicaciones.

## Segmentación y reensamblaje
En el reensamblaje se encarga de que los datos que se enviaron segmentados lleguen como deberían llegar a pesar de que lleguen desordenados.

### Conversaciones orientadas a la conexión
Se establece la conexión entre el servidor y la aplicación para la transferencia de información.

### Entrega confiable
Se encarga de que todos los paquetes que forman 