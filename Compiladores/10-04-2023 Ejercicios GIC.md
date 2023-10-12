**Generar una gramática para las siguientes exprersiones:**

1. a+b+
```
S -> aS|D
D -> bD|F
F -> b
```

2. Numeros binarios
```
S -> NS|λ
N -> 1|0
```

3. Cadenas binarias que contienen exactamente dos unos
```
S -> N1N1N
N -> 0N|0|λ
```

4. Cadenas de la forma aibi tal que i >= 0
```
S -> aNbN
N -> iN|i|λ
```

5. (ab|ba)*
```
S -> C|S
S -> C
S -> λ

C -> ab|ba
```