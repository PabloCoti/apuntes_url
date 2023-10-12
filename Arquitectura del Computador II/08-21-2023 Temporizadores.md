En la página 129 de la documentación del pic18F4550

Los temporizadores son relojes externos que van contando en paralelo al proceso del microprocesador.

## Cómo se configura
Dentro de la pagina 131 está la tabla de registros asociados a los temporizadores.

**INTCON** es un comando que se utiliza para habilitar las interrupciones y tiene los siguientes bits:
* **GIE/GIEH**
* **PEIE/GIEL**
* **TMR0IE**: Habilita el contador 0
* **INT0IE**
* **RBIE**
* **TMR0IF**: Crea una interrupción cuando el contador llega al límite superior. En el caso de 8 bits sería 255, cuando llega  a 255 se crea la interrupción. 

Para crear una interrupción antes de que el contador llegue a 255, se tiene que iniciar el contador desde una posición superior (255-n0) para que llegue a 255 exactos y se ejecute la interrupción por medio de este bit.

* **INT0IF**
* **RBIF**

Dentro de la página 131 está la tabla y el desarrollo de cada uno de los bits de: **T0CON**, que es un controlador de registro de tiempo. Tiene los siguientes bits
* **TMR0ON**
* **T8BIT**
* **T0CS**
* **T0SE**
* **PSA**
* **T0PS2**
* **T0PS1**
* **T0PS0**

### Cómo calcular el tiempo deseado
T = (4 * PS)/f
PS -> preescala

**Cuantos ciclos** = Tiempo/T
T -> período

n = Tiempo*(fos/4 * ps)

**TMR0** <- vmax-n

**Cómo calcular para 500ms en un formato de 16bits**
n = (500 * 10^-3) * ((8MHz)/(4 * 16)) = 62500
PS = 1:16
Res a 16 bit

65535-62500=3035

3035 es el número en el que empezaría el contador del temporizador. Pero, **en ensamblador** se tiene que colocar como un número hexadecimal, entonces se colocaría como **BDB** (3035 en hexadecimal).