# Análisis estadístico con python
---
En jupyter notebook para ejecutar nuevamente el contenido se va a `kernel` y `restart and run`

## Ejemplo de gráficas en una presentación interactiva
$$\text{Sea } 0 \leqslant x \leqslant 10$$
```python
import matplotlib.pyplot as plt # graficas
import numbpy as np             # matrices

# Rango de valores para x
x = np.arange(0., 10, 0.4)

plt.plot(x, x, 'g--')
plt.show()

y1 = x
y2 = x**2
y3 = x**3

plt.plot(x, y1, 'g--', x, y2, 'bs', x, y3, 'r^')
plt.show()
```

```python
import seaborn as sns

print(sns.get_dataset_names())

data = sns.load_dataset('penguins')

data['filpper_length_mm'].describe() # para trabajar sobre solo una variable

# Da como resultado los valores estadisticos

data['species'].unique()

adelie = data[(data['species'] == 'Adelie') & (data['island'] == 'Biscoe')]
# ordenamiento
adelie.sort_values(by = 'body_mass_g', ascending = true)
```

Las medidas de tendencia central no se pueden utilizar para analizar nada.

