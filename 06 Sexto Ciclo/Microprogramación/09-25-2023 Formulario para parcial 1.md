## Palabras reservadas TASM
![[Pasted image 20230925234436.png]]
![[Pasted image 20230925234457.png]]
## Conjunto de instrucciones
![[Pasted image 20230925234636.png]]
## Todos los programas de TASM llevan
![[Pasted image 20230925234914.png]]
## Declaración de constantes
![[Pasted image 20230925235043.png]]
Se utiliza `equ`para asignar el valor de la constante. Todos los números son tomados como decimales dentro de TASM.

## Declaración de variables
![[Pasted image 20230925235158.png]]
**db**, **dw**, **dd** y **dq** son el tamaño que van a ocupar las variables.

## Código de salida de los programas
![[Pasted image 20230925235332.png]]
\[codsal] es db 0

## Código del programa
Va dentro de la etiqueta
![[Pasted image 20230925235431.png]]

## Operadores para expresiones constantes
![[Pasted image 20230925235618.png]]

## Notación de sintaxis de instrucciones
![[Pasted image 20230925235710.png]]

## Instrucciones de transferencia
Cuando uno de los registros es AX o AL TASM genera el código más rápido.

- Copia de los valores de la fuente al destino.
``` assembly
	mov <destino>, <fuente>
```

- Intercambio entre los valores de fuente y destino.
``` assembly
	xchg <destino>, <fuente>
```

## Instrucciones aritméticas
Modifican las banderas Overflow (O), Sign (S), Zero (Z), Aux carry (A), Parity (P), Carry (C). (O, S, Z, A, P).

- Suma de dos valores sin acarreo. 
``` assembly
	add <destino>, <fuente>
```

- Suma de dos valores con acarreo. Suma los contenidos de fuente, destino y el valor de la bandera de acarreo.
``` assembly
	adc <destino>, <fuente>
```

- Equivalente de c++
``` assembly
	inc <destino>
```

- Resta sin préstamos
``` assembly
	sub <destino>, <fuente>
```

- Resta con pŕestamos
``` assembly
	sbb <destino>, <fuente>
```

- Comparación de dos valores (se enfoca en el output de estados y no el valor resultante)
``` assembly
	cmp <destino>, <fuente>
```

- Equivalente de c--
``` assembly
	dec <destino>
```

- Multiplicación de números (binarios) no signados 
``` assembly
	mul <destino>, <fuente>
```
![[Pasted image 20230926001056.png]]

- Multiplicación de dos números (binarios) signados
``` assembly
	imul <destino>, <fuente>
```
![[Pasted image 20230926001116.png]]
![[Pasted image 20230926001123.png]]
![[Pasted image 20230926001143.png]]

- División de dos números (binarios) no signados
``` assembly
	div <destino>, <fuente>
```
![[Pasted image 20230926001240.png]]![[Pasted image 20230926001248.png]]

- División de dos números (binarios) signados
``` assembly
	idiv <destino>, <fuente>
```
![[Pasted image 20230926001240.png]]![[Pasted image 20230926001248.png]]

- Convertir un byte a word
``` assembly
	cbw <destino>
```

- Convertir un word a un double word
``` assembly
	cwd <destino>
```

- Negación de un byte
``` assembly
	neg <destino>
```
