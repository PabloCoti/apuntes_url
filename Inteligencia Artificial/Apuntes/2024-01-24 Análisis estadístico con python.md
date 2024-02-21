# Análisis estadístico con python
---
## Características clave de Python
- Lenguaje de alto nivel
- Fácil de aprender
- Soporte multiplataforma
- Lenguaje escrito dinámicamente
- Funcional + Orientado a objetos
- Gran cantidad de bilbiotecas
- Amplia área de aplicación
- Gran demanda en la industria
- Creación rápida de prototipos
- Creación rápida de prototipos
- Lenguaje multiparadigma

Python es un híbrido, permite programación orientada a objetos y programación imperativa.

Debido a que python es un lenguaje interpretado es un lenguaje multi-plataforma, es decir, no importa el sistema operativo en el que se ejecute porque cada sistema operativo tiene su interprete para python.

Es un lenguaje escrito dinámicamente porque python no es un lenguaje fuertemente tipado. Todas las variables son objetos, es el objeto entero, no el tipo entero.

Debido a que python es un lenguaje interpretado es un lenguaje más lento. Implica mayores tiempos para que tenga respuestas de los procesos.

## ¿En qué vamos a trabajar python?
Podemos usar
- IDLE
- Spyder
- PyCharm
- eric
- Vim
- Atom
- Jupyter
- Anaconda
- PyDev
- Thonny

Cualquier cosa donde podamos escribir en archivos de texto. El inge va a usar Jupyter notebook con google colab porque google colab también permite programar en python.

## Introducción a python
### Tipo de datos básicos de PYthon
- **String**: cadena de texto
- **Integer**: número entero
- **Float**: número real

### Funciones de interés
Para determinar el tipo de dato de una variable
`type()`
Para mostrar mensajes o el contenido de una variable
`print()`
Para mostrar las propiedades y métodos de un objeto
`dir()`

``` python
# Definir variables
a = 5.0
b = 3

c = a + b

# Operaciones aritméticas
print('a:',a,"b:",b,'c:',c)
print(a+b)
print(a*b)
print(c/a)
print(c%a)
print(a**b)

# Estructuras de datos
# listas
Tipo = ['Integer', 'Float', 'String', 'Bolean']
Ejemplo = [2024012, 0.8, 'Ene-22', True]
# tuplas
tupla = ('Algo', 'Otro', 'Mas', 25)

```

### Uso de bibliotecas
En el curso vamos a ver bibliotecas de manejo estadístico y gráfico.
- matplotlib
- numpy
- pandas
- pyMC
- scipy
- seaborn
- statsmodels
- scikitlearn
- keras
- TensorFlow

El modelo de la neurona posee una matriz de entradas, salidas y para procesos.

TensorFlow agiliza el uso de estas matrices dentro de python.

Si uno va a utilizar varios paquetes es mejor utilizar el import para mejor legibilidad del código. Dentro de la documentación está la misma abreviatura la cual ya está estandarizada.

``` python
import math
import pandas as pd

r = 5
p = 2*math.py*r

print('Perimetro:', p)
print('El perimetro de la circunferencia de radio {0} es {1:0.2f}'.format(r, p))

Ejemplo = [2024012, 0.8, 'Ene-22', True]

# Creacion de un DataFrame
tipoDato = pd.DataFrame(data= Ejemplo, index= Tipo, columns=['Ejemplo'])
```

