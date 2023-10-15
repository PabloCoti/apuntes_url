# 1. while para Go, java y Python
# 2. for para Go, Java y Python
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