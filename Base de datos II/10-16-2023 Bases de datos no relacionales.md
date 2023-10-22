## ¿Como las empresas almacenan sus datos?
A través  del tiempo las cantiades de información se han ido almacenando en computadoras que han incrementado sus capacidades.

Ejemplos de empresas que han hecho esto son

- Google
- Amazon
- Facebook
- Inditex

Las bases de datos no relacionales tienen la ventaja de que los queries son más rápidos de hacer.

## ¿Qué es una base de datos no relacionales?
Las bases de datos NoSQL utilizan una varedad de modelos de datos para acceder y administrar datos. Estos tipos de basses de datos están optimizados específicamente para aplicaciones que rquieren grandes volúmenes de datos, baja la latencia y modelos de datos flexibles, lo que se logra mediante la flexibilización de algunas de las restricciones de coherencia de datos eno otras bases de datos.

## Ventajas
- Flexibilidad: El modelo de datos flexible hace que las bases de datos NoSQL sean ideales para datos semiestructurados y no estructurados.
- Escalabilidad: Las bases de datos NoSQL generalmente están diseñadas para escalar usando clústeres.
- Alto rendimiento: la base de datos NoSQL está optimizada para modelos de datos específicos y patrones de acceso que permiten un mayor rendimiento.
- Altamente funcional: las bases de datos NoSQL proporcionan API altamente funcionales y tipos de datos flexibles.

## Tipos de bases de datos
### Clave-valor
Las bases de datos clave-valor son altamente divisibles y permiten escalado horizontal a escalas que otros tipos de bases de datos no pueden alcanzar. Los casos de uso como jueos, tecnología publicitaria e IoT se presentan particularmente bien con emodel de datos clave-valor.
  
Son como tablas Hash.

Un ejemplo de una base de datos clave-valor es DynamoDB de AWS. Tiene el apartado de tablas dónde se asigna la clave y el valor respectivamente.

Las bases de datos no relacionales se pueden exportar como archivos json, se guardan como diccionarios de datos.

```
# Base de datos 1
{
	"id"        : "valor",
	"otro_id"   : "otro_valor",
	"tercer_id" : {"otro_posible_diccionario"}
	"cuarto_id" : ["un_posible_array"]
}
```

### Documentos
En el código de aplicación, los datos se representan a menudo como un objeto o un documento de tipo JSON porque es un modelo de datos eficiente e intuitivo para los desarrolladores. Las bases de datos de documentos facilitan a los desarrolladores el almacenamiento y la consulta de datos en una base de datos mediante el uso del mismo formato de modelo de documento que emplean en el código de aplicación.

## Relacional vs No Relacional
### Cargas de trabajo óptimas
Las bases de dtaos relacionales están diseñadas para aplicaciones de procesamiento de transacciones online (OLTP) altamente coherentes y transaccionales, y son buenos para el procesamiento analitico online (OLAP).

Las bases de datos NoSQL están diseñadas para varios patrones de acceso a datos que incluyen aplicaciones de acceso a datos que incluyen aplicaciones de baja latencia. Las bases de datos de búsqueda NoSQL están diseñadas para hacer análisis sobre datos semiestructurados.

### Rendimiento
