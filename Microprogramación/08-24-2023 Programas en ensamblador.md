Un programa escrito en ensamblador, llamado código fuente, se traduce a código máquina de un microprocesador mediante un programa llamado "ensamblador".

Estudiaremos ensamblador del procesador 8086 y se utilizará el ensamblador de Turbo Assembler.

`NOTA: el ensamblador de turbo assembler y microsoft son el mismo lenguaje pero utiliza directivas distintas, por lo que usar referencias en las que se utilice Turbo Assembler.`

Ensamblador tiene **palabras reservadas**, y estas son las que tienen un uso definido.

## Conjunto de instrucciones del 8086[¶](https://daniel-baf.github.io/url-notas/Apuntes/6-ciclo/microprogramacion/2023-09-05-Programas-en-ensamblador/#conjunto-de-instrucciones-del-8086 "Permanent link")

La tabla 3.2 del libro muestra las instrucciones que se pueden ejecutar en el procesador 8086.

# ¿Cuál es la estructura de un programa en lenguaje ensamblador?[¶](https://daniel-baf.github.io/url-notas/Apuntes/6-ciclo/microprogramacion/2023-09-05-Programas-en-ensamblador/#cual-es-la-estructura-de-un-programa-en-lenguaje-ensamblador "Permanent link")

Consiste de una secuencia de proposiciones, una en cada linea de código

[ETIQUETA] [INSTRUCCIÓN] [OPERANDOS] [; COMENTARIO]

debe tener por lo menos una de estos segmentos, y se recomienda que tenga la misma sintaxis.

### Etiquetas[¶](https://daniel-baf.github.io/url-notas/Apuntes/6-ciclo/microprogramacion/2023-09-05-Programas-en-ensamblador/#etiquetas "Permanent link")

Las etiquetas pueden tener los siguientes valores: - A - Z - a - z - 0 - 9 - @ $ ?

Pero debe iniciar con una letra y no puede iniciar con el arroba, dólar o signo de interrogación.

Las etiquetas deben ser únicas con excepción a las que vayan después del signo =.

Las palabras reservadas no pueden ser usadas como etiquetas.

Las instrucciones de una sola etiqueta deben terminar en dos puntos.

### Instrucción[¶](https://daniel-baf.github.io/url-notas/Apuntes/6-ciclo/microprogramacion/2023-09-05-Programas-en-ensamblador/#instruccion "Permanent link")

Es una secuencia de caracteres que se traducen a código máquina, ej.: MOD, ADD

### Directiva[¶](https://daniel-baf.github.io/url-notas/Apuntes/6-ciclo/microprogramacion/2023-09-05-Programas-en-ensamblador/#directiva "Permanent link")

Es una indicación, un parámetro que le damos a _ENSAMBLADOR_, la instrucción se traduce a código máquina y la directiva no produce código ejecutable. La directiva busca configurar, establecer un entorno dentro del programa. Controla los aspectos de cómo opera el ensamblador.

### Operandos[¶](https://daniel-baf.github.io/url-notas/Apuntes/6-ciclo/microprogramacion/2023-09-05-Programas-en-ensamblador/#operandos "Permanent link")

- Registros
- Contantes
- Variables
- Cadenas
- Etiquetas

Si la instrucción o directiva opera 2 o más operandos, deben ir separados por comas.

### Comentario[¶](https://daniel-baf.github.io/url-notas/Apuntes/6-ciclo/microprogramacion/2023-09-05-Programas-en-ensamblador/#comentario "Permanent link")

Inicia con punto y coma y todo lo que esté a la derecha es ignorado por el ensamblador, sirve como guía para los programadores. Una vez detectado el punto y coma, se salta a la siguiente línea.

#### Linea en blanco[¶](https://daniel-baf.github.io/url-notas/Apuntes/6-ciclo/microprogramacion/2023-09-05-Programas-en-ensamblador/#linea-en-blanco "Permanent link")

También es ignorada.

# ANALIZANDO CÓDIGOS[¶](https://daniel-baf.github.io/url-notas/Apuntes/6-ciclo/microprogramacion/2023-09-05-Programas-en-ensamblador/#analizando-codigos "Permanent link")

## Etiquetas[¶](https://daniel-baf.github.io/url-notas/Apuntes/6-ciclo/microprogramacion/2023-09-05-Programas-en-ensamblador/#etiquetas_1 "Permanent link")

### model[¶](https://daniel-baf.github.io/url-notas/Apuntes/6-ciclo/microprogramacion/2023-09-05-Programas-en-ensamblador/#model "Permanent link")

model: small | tiny ... para saber cómo manejar la memoria, si la pila irá junto con el stack o no... etc. Como máximo podemos tener 64 kb, así que el `modelo small` tendrá como máximo 16 Kb

### stack[¶](https://daniel-baf.github.io/url-notas/Apuntes/6-ciclo/microprogramacion/2023-09-05-Programas-en-ensamblador/#stack "Permanent link")

stack: 256

Stack = pila.

Indicamos el tamaño del espacio en memoria donde guardaremos variables. En este caso, estamos reservando 256 bytes.

```
Todos nuestros programas siempre llevarán las directivas

ideal
dosseg
model small
stack: 256
```

`NOTA: cualquier numero que pongamos, ensamblador lo tomará como decimal, porl o que stack: 256 es lo mismo que stack: 256d y es lo mismo que stack: 100h que seria 100 en hexadecimal`

### Constantes[¶](https://daniel-baf.github.io/url-notas/Apuntes/6-ciclo/microprogramacion/2023-09-05-Programas-en-ensamblador/#constantes "Permanent link")

Si queremos declarar constantes debemos tener la siguiente estructura

ETIQUETA equ VALOR

- ETIQUETA: el nombre que le queremos poner
- equ: directiva que permite declarar la constante
- VALOR:

```assembly
cte equ 10
```

Nótese que `equ` no es lo mismo que `=`

#### Variables de programa[¶](https://daniel-baf.github.io/url-notas/Apuntes/6-ciclo/microprogramacion/2023-09-05-Programas-en-ensamblador/#variables-de-programa "Permanent link")

```asm
codsal   db   0
dato1    db   ?
dato2    db   ?
resul    db   ?
```

Todas las variables son enteros en lenguaje ensamblador, no existe "string", "double", hablamos del tamaño de la variable.

Así que las variables las declararemos como el espacio que ocupen y no como el tipo de variable.

- byte = 8 bits
- word = 16 bits (2 bytes)
- double word = 32 bits (4 bytes)
- quadruple word = 64 bits (8 bytes)

Debemos elegir el tamaño de la variable según el uso que le vamos a dar, si queremos almacenar número positivos entre 0 y 255, tenemos qué usar la variable byte, pues si le agregamos signo, tenemos desde -128 hasta 127 si usáramos byte.

- db = define byte
- dw = define word
- dq = define quadword

`codsal db 0` tiene su valor inicial, que en este caso es 0, pero en el caso de `dato1 db ?` sirve para indicar que la variable no está inicializada.

**codeseg**: directiva usada para decirle al ensamblador que lo que viene despues debe ir en la sección de código (heap). Codeseg es de turboassembler porque en microsoft es .code:

Siempre que una etiqueta va en una sola linea termina en dos puntos, el propósito de la etiqueta es para generar un scope y darle el mismo uso que las llaves.

ej.

```asm
myTag:
    ... code
    ...

    end myTag
```

No se puede cargar un valor a un registro de datos directamente, por eso tendemos a hacer un movimiento de un registro a otro. ej:

```asm
mov ax, @data
mov ds, ax
```

No podríamos mover directamente `@data` a `ds`