# Sistema operativo
---
## El S.O. como administrador de recursos
Una porción del sistema operativo se encuentra en la memoria principal. Esto incluye el kernel, o núcleo, que contiene las funciones del sistema operativo más frecuentemente utilizadas y, en cierto momento, otras porciones del sistema operativo actualmente en uso. El resto de la memoria principal contiene programas y datos.

El kernel es controlador o núcleo de todos los procesos de la computadora.

El principal motivo por el cuál no funciona un instalador de windows en linux es por el kernel, es por la forma en la que el kernel funciona según el sistema operativo que está usando.

Una computadora tiene dos principales divisiones
- Hardware
- Software

El software depende del hardware, el hardware tiene cuatro particiones principales
- CPU
- RAM
- HDD/SSD
- Input/Output

## Cómo se divide el kernel
El kernel es la parte central de un sistema operativo y es el que se encarga de realizar toda la comunicación segura entre el software y el hardware del ordenador.

- Kernel:          Hardware scheduler memory
- Shell:            CPU sequencing
- Application: User app daemons

# Evolución de los sistemas operativos
---
- ## 1a Generación (1945 - 1955)
	- Tubos de vacío y tablero.
	- Los sistemas operativos como tal no existían, al menos a nivel de software no.

- ## 2a Generación (1955 - 1965)
	- Transistores (invención).
	- Sistemas por lotes:
		- Macrocomputadoras o mainframes
	- Surgen los lenguajes de algo nivel
- ## 3a Generación (1965 - 1980)
	- Circuitos integrados
	- Multiprogramación
	- UNIX
	- Se adoptó el concepto de "familia" de computadoras compatibles.
	- El porcentaje de uso de  una CPU fue reducido
- ## 4a Generación (1980 - ???)
	- Computadora personal
		- Microprocesador
		- DOS - GNU
	- Sistema operativo para multiprocesamiento:
		- Sistema operativo para redes
		- Sistema operativo distribuido

# Hardware
---
Un sistema operativo está íntimamente relacionado con el hardware de la computadora sobre la que se ejecuta. Extiende el conjunto de instrucciones de la computadora y administra sus recursos.

## Procesadores
Como el acceso a la memoria memoria para obtener una instrucción o palabra de datos requiere mucho más tiempo que ejecutar una instrucción, todas las CPU contienen ciertos registros en su interior para contener las variables clave y los resultados temporales, estos se conocen como registros generales.

Al ejecutar una instrucción hace el siguiente ciclo
- RAM hace fetch
- Va a los registros
- Se decodifica
- Va a la unidad de control
- Se codifica para la ALU
- La ALU lo procesa

## Registros especiales
La mayoría de las computadoras tienen varios registros especiales que están visibles para el programador.
- **Contador de programa**: contiene la dirección de memoria de la siguiente instrucción a ejecutar.
- **Apuntador de pila**: apunta a la parte superior de la pila de llamadas actual en la memoria.
- **Palabra de estado del programa**: contiene los bits de código de condición, que se asignan cada vez que se ejecutan las instrucciones de comparación, la prioridad de la CPU, el modo y varios otros bits de control.