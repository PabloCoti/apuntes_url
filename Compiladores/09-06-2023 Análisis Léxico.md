1. Su principal objetivo es dividir el código en **unidades léxicas.**
2. Necesita **clasificar** esas unidades léxicas.

* Las clases de token corresponden a un set de cadenas.
	- **Identificador**: cadena de letras o dígitos, comenzando con una letra.
	- **Entero**: una cadena no vacía de dígitos.
	- **Palabra reservada**: "else", "if", "begin", ...
	- **Blancos (whitespaces)**
	  
- Clasificar las **subcadenas** de un programa de acuerdo a una **regla**.
	Por ejemplo, si se tiene if x == 4 el analizador sabe que el número 4 es un número.
	
- Comunicar los token al parser o analizador sintáctico.
	Estos son insertados como un string y el scanner o analizador va a reconocer los lexemas como tokens. 
	Por ejemplo de la cadena "Total = 23" Se sacaría un análsis como: <identificador, Total>, <operador, = >, <número, 23>.
	
## Ejemplo

Del código

```
if (i ==j)
	z = 0;

else
	z = 1;
```

Se traduce a la cadena \\t if (i == j) \\n \\t \\t z = 0; \\n \\t else z = 1;

* Una impolementación debe hacer dos cosas:
	1. Reconocer las subcadenas correspondientes a los tokens. (lexemas)
	2. Identificar las clase o tipos de tokens de cada lexema !
	
		<tipo_token, lexema>

## Ejemplo 2

``` FORTRAN
DO 5 I = 1,25
```

Una antigua regla en **FORTRAN**: los espacios son insignificantes.

``` FORTRAN
DO 5 I = 1,25
DO 5 //I = 1,25


5
```

### Objetivos específicos del anális léxico
1. El objetivo específico es particionar la cadena. Esto implementado en un programa scanner que lle de **izquierda-a-derecha**, reconociendo un **token** a la vez.
2. Algunas veces será necesario hacer un `LOOK_AHEAD` para cambiar de contexto.

### Otro ejemplo
Las palabras reservadas de PL/I no son RESERVADAS

``` PL/I
IF ELSE THEN THEN ELSE = ; ELSE ELSE = THEN
```

Es decir ELSE y THEN pueden ser tomadas como variables o identificadores diferentes a las palabras reservadas.

# Expresiones regulares
Las expresiones regulares nacen de la **clausula de Kleene** la cual se refiere a la unión de las diferentes cadenas o valores de a elevado a la i que resultan en una cadena.

# Ejercicios
LA = {a, b} que contenga ba en la cadena

(a|b)* ba (a|b)* 

Expresión regular para números enteros

[0-9]+

`[1-9]+[0-9]*|0`

```
* El lenguaje A de todas las cadenas que comienzan con b sobre {a,b}

b(a|b)*

* El lenguaje B de todas las cadenas que contienen la cadena ba sobre {a,b}

(a|b)*ba(a|b)*

* El lenguaje C de todas las cadenas que comienzan con b y terminan con a sobre {a,b}

b(a|b)*a

* El lenguaje D de todas las cadenas que contienen un número par de símbolos sobre {a,b}

((a|b)(a|b))*

* El lenguaje E sobre todas las cadenas que contiene un número par de 0 sobre {1,0}

(1*01*0)*1*

```