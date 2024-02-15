# Web scraping
---
## Ghost script (LECTOR DE PDFs)
En caso de estar en linux 
`!apt-get install ghostscript`

En caso de estar en windows descargar e instalar desde
https://www.ghostscript.com/releases/gsdnld.html

## Requisitos (ANALIZAR PDFs)
``` python
!pip install "camelot-py[btase]"
!pip install "camelot-py[cv]" -q
!pip install "PyPDF2<3.0"
```

## Requisitos (PARA WEB SCRAPING)
``` python
!pip install bs4
```

```python
import camelot
import requests
import pandas as pd
from bs4 import BeautifulSoup

# Enlace a la página
url = 'https://es.wikipedia.org/wiki/Organizaci%C3%B3n_territorial_de_Guatemala'

response = requests.get(url)

# Ver si hubo exito en la conexion
print('Status code', url, ':', response.status_code)

# tomar el html del url
soup = BeautifulSoup(response.text, 'html.parser')

# Buscar la etiqueta table donde su etiqueta class contenga wikitable
departamentos = soup.find('table', {'class':'wikitable'})

# var el tipo de variable de departamentos
type(departamentos)

## devuelve un tag

# leer el contenido del tag
dfDepto = pd.read_html(str(departamentos))

ruta = 'Analisis Anual 2018 ETAS.pdf'
tabla = camelot.read_pdf(ruta, pages = '3')

tabla[0].df # df es el dataframe de la pagina n de la informacion que reconocio

area = list(map(lambda area:area.strip(), tabla[0].df[0][2].split('\n')))
area.extend(list(map(lambda area:area.strip(), tabla[0].df[0][3].split('\n'))))

casos2017 = [int(i.strip()) for i in tabla[0].df[1][2].split('\n'))]
casos2017.extend([int(i.strip()) for i in tabla[0].df[1][3].split('\n')])

tasas2017 = [float(i.strip()) for i in tabla[0].df[2][2].split('\n')]
tasas2017.extend([float(i.strip()) for i in tabla[0].df[2][3].split('\n')])

etas = pdfDataFrame(area, columns = ['Área de salud'])
```