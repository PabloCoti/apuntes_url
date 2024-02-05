Tabla reducida
```python
tabla_reducida = data[['species', 'sex', 'body_mass_g']]

# Agrupaciones
data['sex'].value_counts()
data['species'].value_counts()

# Group by
data.groupby(by=['species', 'sex']).decribe().T
data.groupby(by=['species', 'sex']).aggregate(['min', np.median, max, np.mean]).T

# Editar valores
tabla_reducida['sex'] = np.where(tabla_reducida['sex']=='Male')

# Grafico de barras
plt.bar(especies.index, especies)
plt.show()

vuelos = sns.load_dataset('flights')
vuelos

pivoteVuelos = vuelos.pivot('month', 'year', 'passengers')
pivoteVuelos

# Mapa de calor
sns.heatmap(pivoteVuelos, annot=True, fmt='d')
## fmt tipo de paleta a aplicar

```

Para cargar los datos en jupyther se mete la tabla de datos en el root del proyecto.

Para cargar el dato se pone la ruta,