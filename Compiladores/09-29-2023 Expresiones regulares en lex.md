## Uso de bloques
Para hacer bloques de código se usan las etiquetas `Begin` y `End`.

## Variables
Las variables se declaran on la etiqueta `Var`, se especifica el nombre y el tipo de variable.
``` Lex
Var
	I :  integer;
```

## Ejemplo en clase
``` Lex
%{
	Uses lexlib;
%}

numero [0-9]+
digito [0-9]
car [a-z]

%%

[0-9] write('entero');
{digito}+ write('entero')
{digito}\.{digio}
```