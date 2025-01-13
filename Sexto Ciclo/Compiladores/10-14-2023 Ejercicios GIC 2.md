# 1. while para Go, java y Python
## Go 
No existe una sintáxis de while para go.
## Java
### Figura de guía
```java
while (condition)
{
	// statemens...
}
```
### GIC
```
e : epsilon


while_stmt ->   "while" "(" while_bool ")" "{" statements "}"
              | "do" "{" statements "}" "while" "(" while_bool ")"
while_bool ->   vals
			  | vals cmp_sgn vals
vals       ->   id
              | "true"
			  | "false"
			  | <number> // cualquier digito posible
cmp_sgn    ->   "<"
			  | "<="
			  | ">"
			  | ">="
			  | "=="
statements  ->   statements statement
			  | statement

statement   ->   // cualquier sentencia de un bloque de codigo
				 // incluido el mismo while_stmt
			   | e
```
## Python
### Figura de guía
```python
while condition:
	# statements
```
### GIC
```
e  : epsilon
JL : salto de linea

while_stmt ->   "while" while_bool ":" JL statements JL
		      | "while" while_bool ":" JL 
						statements JL "else" ":" JL statements JL
while_bool ->   vals
			  | vals cmp_sgn vals
vals       ->   id
			  | "True"
			  | "False"
			  | <number> // cualquier digito posible
cmp_sgn     ->   "<"
			  | "<="
			  | ">"
			  | ">="
			  | "=="
statements  ->  statements statement
			  | statement

statement   ->   // cualquier sentencia de un bloque de codigo
				 // incluido el mismo while_stmt
			   | e
```

# 2. for para Go, Java y Python
## Go
### Figura de guía
```go
for statement1; statement2; statement3
{
	// code to be executed fore each iteration
}
```
### GIC
```
I  : initialization
C  : condition
P  : postcondition
CB : code block 
W  : while
e  : epsilon

W          ->  "for" for_expr "{" statements "}"
for_expr   ->  for_condit
			 | for_iterator
			 | for_range
for_cond   ->  expression
for_iter   ->  id
			 | id assign_oper expression
			 | id assign_oper expression "," id assign_oper expression
for_range  ->  id "," id ":=" "range" expression
statements -> statement
			 | statements statement
statement  ->  id
			 | literal
			 | e
expression -> simple_expr
			 | expression operator statement
operator   ->  "+" 
			 | "-"
			 | "*"
			 | "/"
			 | "<"
			 | ">"
			 | "<="
			 | ">="
			 | "=="
			 | ":="
literal    ->  number
			 | string
			 | boolean
number     -> // cualquier numero, algun regex para numeros
statement -> cualquier tipo de codigo.
```
## Java
### Figura de guía

```java
for (statement1; statement2; statement3)
{
	// code block to be executed
}
```
### GIC
```
id    : identifier
digit : cualquier tipo de numero
e     : epsilon

for         -> "for" "(" conditional ")" "{" statements "}"
conditional ->   typeO id "=" <digit> ";" id cmp_sgn <digit> ";" id icdc_sgn
			   | typeO id ":" "id"
typeO       ->   "int"
			   | "float"
			   | "double"
cmp_sgn     ->   "<"
			   | "<="
			   | ">"
			   | ">="
			   | "=="
icdc_sgn    ->   "--"
			   | "++"
statements  ->   statement
			   | statements statement
statement   ->   if_statement
			   | while_statement
			   | ... cualquier otra sentencia de codigo
			   | for   <- statement haria recursiva la gramatica
			   | e
```
## Python
### Figura de guía
```python
for var in iterable:
	# code
```
### GIC
```
for_stmt   -> "for" iter_val "in" vct_trough ":" statements
iter_val   -> id
		    | id "," id
vct_trough -> id
		    | "range" "(" rng_cmp ")"
rng_cmp    -> itm_val
		    | itm_val "," itm_val
		    | itm_val "," itm_val "," itm_val
itm_val    -> numero
		    | id
statements -> statements statement
		    | statement
statement  -> ... cualquier sentencia incluido el mismo for

```
# 3. if para Go, Java y Python
## Go
### Figura de guía
``` Go
if condition
{
 // statements...
}
```
### GIC
```
id    : identifier
digit : cualquier tipo de número
e     : epsilon

if           -> if condition "{" statements "}"
condition    -> exp cmp_operator exp
cmp_operator ->   "=="
                | "!="
                | ">"
                | "<"
                | ">="
                | "<="
exp          ->   id
                | digit
statements   ->   if_tatement
                | while_statement
                | ... cualquier otra sentencia de código
                | e
```
## Java
### Figura de guía
``` java
if (condition)
{
	// statements...
}
```
### GIC
```
id    : identifier
digit : cualquier tipo de número
e     : epsilon

if           -> if "(" condition ")" "{" statements "}"
condition    -> exp cmp_operator exp
cmp_operator ->   "=="
                | "!="
                | ">"
                | "<"
                | ">="
                | "<="
exp          ->   id
                | digit
statements   ->   if_tatement
                | while_statement
                | ... cualquier otra sentencia de código
                | e
```
## Python
### Figura de guía
``` python
if condition:
	# statements...
```
### GIC
```
id    : identifier
digit : cualquier tipo de número
e     : epsilon

if           -> if condition: statements
condition    -> exp cmp_operator exp
cmp_operator ->   "=="
                | "!="
                | ">"
                | "<"
                | ">="
                | "<="
exp          ->   id
                | digit
statements   ->   if_tatement
                | while_statement
                | ... cualquier otra sentencia de código
                | e
```