En el caso de ensamblador usa el programador necesita entender los mecanismos como en el caso de una división. 
## Pila de un programa
Todo programa en ensamblador 8086 tiene una pila (`stack`).
El cargador del programa inicializa de forma automática el registro del segmento de la pila **SS** a la dirección del segmento en que se creó la pila y el registro apuntador de la pila **SP** al valor de *tamPila*.

El registro apuntador de pila **SI** apunta a la palabra que está pasando el final de la pila.

La pila difiere de otros segmentos en la manera en que funciona.

`push` transfiere una plabra de la pila del programa. la instrución **push** decrementa el valor del apuntador

`pop`saca el valor de la pila
