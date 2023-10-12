Se usan derivadas con una 

¿Qué función representa el historial del comportamiento de una variable?
Es la integral

Si se tiene valores para el punto a y el punto b se hace una estimación, pero si se encuentra fuera del intervalo trabajado se intenta predecir que no es óptimo, pero se puede hacer.

**Método de mínimos cuadrados**

Vamos a usar módulos de python que hagan todos los cálculos por nosotros.

```python
import numpy as np
import pandas as pd
import seaborn as sns
import statsmodels.api as sm
from scipy import stats

# Para medir el rendimiento del carro en millas por galon segun su potencia y su peso
auto = sns.load_dataset('mpg')
auto.head(5)

# calculo de correlacion sobre las variables
correlacion = auto.corr(numeric_only = True)

# estilizar correlacion
correlacion.style.background_gradient(cmap='coolwarm')

x = auto['weight']
x = sm.add_constant(x)
y = auto['mpg']

resultado = sm.OLS(y, x).fit()
resultado.summary()

ax1 = sns.regplot(data = auto, x = 'weight', y = 'mpg')
ax1.set_xlabel('Peso')
ax1.set_ylabel('Millas por galon (mpg)')
ax1.set_title('Relacin peso-mpg')
ax1.plot();

fig2, ax2 = plt, subplots(figsize=(5,3))
sns.boxplot(x = 'origin', y = 'mpg', data = auto)

archivo = './RACE.csv'
ferrari = pd.read_csv(archivo)
```

$$Y = mx+b$$
$$mpg = -0.007 \text{ weight} + 46.31$$
$$mpg = -0.007 * 500 + 46.31$$
$$mpg = 42.46$$

After choosing the source 

https://es.wikipedia.org/wiki/Organizaci%C3%B3n_territorial_de_Guatemala

In excel go to data get tata from web and load it, then use first rows as headers, replace value nbs with ''

