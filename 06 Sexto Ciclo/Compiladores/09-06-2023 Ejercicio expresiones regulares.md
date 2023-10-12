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