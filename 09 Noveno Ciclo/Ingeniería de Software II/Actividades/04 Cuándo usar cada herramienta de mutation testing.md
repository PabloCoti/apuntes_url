## Cuándo usar cada herramienta de mutation testing

| Herramienta | Lenguaje    | Cuándo usarla                                                                                                                                                                                         |
| ----------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mutmut      | Python      | Pruebas rápidas y fáciles de configurar que sean ágiles o con CI/CD. También cuando se quieren hacer varias pruebas de mutación.                                                                      |
| MutPy       | Python      | Cuando se quiere un análisis más detallado y donde la eficiencia de la prueba no sea clave.                                                                                                           |
| Pit Test    | Java        | Proyectos Java donde se quiere una herramienta robusta que integre pruebas unitarias puede funcionar para automatizar CI/CD y se puede usar en varios entornos como lo puede ser el empresarial.      |
| Stryker     | Java Script | Cuando se quiere una herramienta con interfaz amigable y reportes visuales, sirve para entornos ágiles o devops y tiene faclidad de CI/CD. Permite generar las mutaciones con configuración flexible. |
## Pruebas realizadas con mutmut
Usamos python para hacer pruebas con mutmut
### Código a testear
Primero tenemos el archivo `math_utils.py` el cuál es un código que define si un número es primo o no.
``` python
def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True
```

También tenemos el archivo `test_math_utils.py` que son las pruebas unitarias de nuestro código.
``` python
import pytest
from math_utils import is_prime

def test_is_prime_with_prime_numbers():
    assert is_prime(2) is True
    assert is_prime(3) is True
    assert is_prime(5) is True

def test_is_prime_with_non_prime_numbers():
    assert is_prime(1) is False
    assert is_prime(4) is False
    assert is_prime(9) is False

def test_is_prime_with_negative_numbers():
    assert is_prime(-1) is False
    assert is_prime(-5) is False
```

### Resultados
Como resultados mutmut nos genera una carpeta llamada mutants donde se presentan los archivos con las modifiaciones y un resumen de los resultados.

En el caso de `math_utils.py`
``` python
from inspect import signature as _mutmut_signature

def _mutmut_trampoline(orig, mutants, *args, **kwargs):
    import os
    mutant_under_test = os.environ['MUTANT_UNDER_TEST']
    if mutant_under_test == 'fail':
        from mutmut.__main__ import MutmutProgrammaticFailException
        raise MutmutProgrammaticFailException('Failed programmatically')      
    elif mutant_under_test == 'stats':
        from mutmut.__main__ import record_trampoline_hit
        record_trampoline_hit(orig.__module__ + '.' + orig.__name__)
        result = orig(*args, **kwargs)
        return result  # for the yield case
    prefix = orig.__module__ + '.' + orig.__name__ + '__mutmut_'
    if not mutant_under_test.startswith(prefix):
        result = orig(*args, **kwargs)
        return result  # for the yield case
    mutant_name = mutant_under_test.rpartition('.')[-1]
    result = mutants[mutant_name](*args, **kwargs)
    return result


from inspect import signature as _mutmut_signature

def _mutmut_yield_from_trampoline(orig, mutants, *args, **kwargs):
    import os
    mutant_under_test = os.environ['MUTANT_UNDER_TEST']
    if mutant_under_test == 'fail':
        from mutmut.__main__ import MutmutProgrammaticFailException
        raise MutmutProgrammaticFailException('Failed programmatically')      
    elif mutant_under_test == 'stats':
        from mutmut.__main__ import record_trampoline_hit
        record_trampoline_hit(orig.__module__ + '.' + orig.__name__)
        result = yield from orig(*args, **kwargs)
        return result  # for the yield case
    prefix = orig.__module__ + '.' + orig.__name__ + '__mutmut_'
    if not mutant_under_test.startswith(prefix):
        result = yield from orig(*args, **kwargs)
        return result  # for the yield case
    mutant_name = mutant_under_test.rpartition('.')[-1]
    result = yield from mutants[mutant_name](*args, **kwargs)
    return result


def x_is_prime__mutmut_orig(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True
def x_is_prime__mutmut_1(n):
    if n < 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True
def x_is_prime__mutmut_2(n):
    if n <= 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True
def x_is_prime__mutmut_3(n):
    if n <= 1:
        return True
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True
def x_is_prime__mutmut_4(n):
    if n <= 1:
        return False
    for i in range(3, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True
def x_is_prime__mutmut_5(n):
    if n <= 1:
        return False
    for i in range(2, int(n*0.5) + 1):
        if n % i == 0:
            return False
    return True
def x_is_prime__mutmut_6(n):
    if n <= 1:
        return False
    for i in range(2, int(n**1.5) + 1):
        if n % i == 0:
            return False
    return True
def x_is_prime__mutmut_7(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) - 1):
        if n % i == 0:
            return False
    return True
def x_is_prime__mutmut_8(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 2):
        if n % i == 0:
            return False
    return True
def x_is_prime__mutmut_9(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n / i == 0:
            return False
    return True
def x_is_prime__mutmut_10(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i != 0:
            return False
    return True
def x_is_prime__mutmut_11(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 1:
            return False
    return True
def x_is_prime__mutmut_12(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return True
    return True
def x_is_prime__mutmut_13(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return False

x_is_prime__mutmut_mutants = {
'x_is_prime__mutmut_1': x_is_prime__mutmut_1, 
    'x_is_prime__mutmut_2': x_is_prime__mutmut_2, 
    'x_is_prime__mutmut_3': x_is_prime__mutmut_3, 
    'x_is_prime__mutmut_4': x_is_prime__mutmut_4, 
    'x_is_prime__mutmut_5': x_is_prime__mutmut_5, 
    'x_is_prime__mutmut_6': x_is_prime__mutmut_6, 
    'x_is_prime__mutmut_7': x_is_prime__mutmut_7, 
    'x_is_prime__mutmut_8': x_is_prime__mutmut_8, 
    'x_is_prime__mutmut_9': x_is_prime__mutmut_9, 
    'x_is_prime__mutmut_10': x_is_prime__mutmut_10, 
    'x_is_prime__mutmut_11': x_is_prime__mutmut_11, 
    'x_is_prime__mutmut_12': x_is_prime__mutmut_12, 
    'x_is_prime__mutmut_13': x_is_prime__mutmut_13
}

def is_prime(*args, **kwargs):
    result = _mutmut_trampoline(x_is_prime__mutmut_orig, x_is_prime__mutmut_mutants, *args, **kwargs)
    return result 

is_prime.__signature__ = _mutmut_signature(x_is_prime__mutmut_orig)
x_is_prime__mutmut_orig.__name__ = 'x_is_prime'
```
