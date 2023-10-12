El concepto más importante en cualquier SO es el **proceso** y en la computadora la parte más importante es el procesador.

La **cpu solo puede tener un proceso**.

## Pseudo paralelismo
La CPU conmuta de un proceso a otro. 

**Recordatorio: todos los procesos se almacenan en la RAM**

**Se tienen tres partes importantes cuando se ejecuta un proceso**
- Kernel
- Proceso
- Tabla de procesos

## Modelo del proceso
Varios procesos comparten el CPU y "se pelean" por tener la potencia de la CPU. Es por esto que existe en administrador de la CPU, para que la CPU tenga un uso constante y que todos los procesos tengan un uso justo del recurso.

## Creación de un proceso
Los sistemas operativos tienen cierta manera de crear procesos. Pueden ser creados por
- El arranque del sistema
- Un proceso lo solicita
- Un usuario lo solicita
- El inicio de un trabajo por lotes

## Llamadas en UNIX: fork()
En UNIX solo hay una llamada al sistema para crear un proceso: fork. Crea un **clon exacto** del proceso que hizo la llamada, después del fork, los dos procesos tienen la misma imagen de memoria, las mismas cadenas de entorno (%PATH%) y los mismos archivos abiertos. Los únicos valores distintos son el Pid y PPid.

Existen los programas padres y los programas hijo porque los programas se manejan en estructura de árbol.

## Llamadas en windows: CreateProcess
Maneja la creación de procesos y carga el programa correcto en el número de proceso. Esta llamada tiene 10 parámetros.

## Condiciones para terminar un proceso
Una vez se crea un proceso y termina su tarea está destinado a ser terminado, los procesos tienen diferentes salidas
- Salida normal (el programa sale solito)
- Salida por error (el programa sale porque hubo un error en el proceso aquí se programó)
- Error fatal (hubo un error durante el proceso porque era un error no esperado aquí fue una salida abrupta)
- Eliminado por otro proceso (como cuando se cierra por el adminstrador de tareas o el sistema hace que se cierre a la fuerza).

## Comunicación de procesos
Los procesos necesitan interactuar con otros, es decir, hay programas que tienen salidas que le sirven a otros procesos.

## Estados de un proceso
Los estados de un proceso son:
- En ejecución
- Listo
- Bloqueado

Los estados son por tiempo indefinido, pero también pueden tener transiciones instantáneas a otros estados.

![[WhatsApp Image 2024-02-15 at 11.28.33_7057e78d.jpg]]

## BCP bloque de control de proceso
Contiene la información importante acerca del estado del proceso, incluyendo otras cosas.