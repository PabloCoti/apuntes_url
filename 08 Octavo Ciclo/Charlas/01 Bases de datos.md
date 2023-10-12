# Bases de datos
## Qué es una base de datos
Una **base de datos** es un sistema organizado que permite almacenar, gestionar y recuperar datos de forma estructurada para centralizar la información y tener un acceso y manejo seguro y organizado.

Es como un pachón donde cargamos el agua. Nosotros siendo el sistema tomaremos el agua que es la información, pero si no tenemos dónde guardar nuestro agua lo vamos a perder, se va a regar.
## Tipos
### Relacional
#### Qué es y cuándo se usa
Es un sistema de gestión de base de datos que organiza la información en tablas relacionadas. Se usa cuando los datos que se van a manejar tienen relaciones bien estructuradas. 

Por ejemplo, una venta que tiene: comprador, vendedor y productos, que es lo que se nos muestra en la factura normalmente.
#### Partes
##### Entidades
Las **entidades** representan objetos o conceptos en el mundo real sobre los que queremos almacenar información. 

En el ejemplo de la venta las entidades serían el comprador, vendedor y los productos.
##### Atributos
Un **atributo** es una característica o propiedad específica que describe a una entidad en una base de datos relacional. 

En pocas palabras son las columnas que están en la tabla.

En el ejemplo de la venta, los atributos que tendría el vendedor serían cosas como, identificador, nombres, apellidos y puesto, mientras que el comprador tendría su identificador, nit, nombres y apellidos.
##### Registros
Un **registro** es una fila de datos en una tabla de una base de datos relacional. Representa una instancia única de una entidad y contiene valores para cada uno de los atributos definidos en esa tabla.

Es decir, una fila con datos en nuestra tabla.

En el ejemplo de la venta un registro sería que en la tabla de vendedores tenemos al vendedor que realizó la venta.
##### Relaciones
Las **relaciones** describen cómo se conectan las entidades entre sí. Por ejemplo en la venta se podría referir a que un vendedor pudo haber realizado varias ventas y un comprador haber realizado varias compras.

En pocas palabras es cómo se conectan (relacionan) los registros de una tabla.

En el ejemplo de la venta es que el vendedor tiene relación con el comprador porque le vendió los productos y los productos tienen relación con el vendedor y el comprador porque son el contenido de la venta.
###### Tipos de relaciones
Tip para las relaciones, hay que verlo como quién puede hacer qué o quién puede tener qué. Una persona puede tener y hacer acciones u objetos, pero los objetos y acciones no pueden hacer a las personas.

**Relación de uno a uno**
En una relación uno a uno, un registro en una tabla A se relaciona con exactamente un registro en una tabla B, y viceversa. Esto significa que cada entidad en una tabla tiene una única entidad correspondiente en la otra tabla.

Es cuando un registro de una tabla solo puede tener relación con otro registro de una tabla.

Por ejemplo, el comprador, solo puede tener un nit y un nit solo puede pertenecer a una persona, en este caso el comprador.

**Relación de uno a muchos**
En una relación uno a muchos, un registro en una tabla A puede estar relacionado con múltiples registros en una tabla B, pero un registro en la tabla B solo puede estar relacionado con un registro en la tabla A. Este es el tipo de relación más común en bases de datos.

Es cuando un registro de una tabla puede estar relacionado a varios registros de otra tabla.

En el ejemplo de la venta el vendedor puede hacer muchas ventas, pero las ventas no pueden hacer vendedores.

**Relación Muchos a Muchos**
En una relación muchos a muchos, múltiples registros en una tabla A pueden relacionarse con múltiples registros en una tabla B. Para manejar este tipo de relación, se suele utilizar una tabla intermedia que contenga las llaves foráneas de ambas tablas, permitiendo establecer la relación.

Es cuando varios registros de una tabla pueden estar relacionados a varios registros de otra tabla.

En el ejemplo de las ventas un producto puede comprar muchos productos y muchos productos pueden estar relacionados a la compra del cliente.
##### Llaves primarias y foráneas
###### Llaves primarias
Es un campo (o conjunto de campos) que identifica de manera única cada registro en una tabla.

Para una persona su "llave primaria" sería el dpi ya que es su único identificador.
###### Llaves foráneas
Es un campo en una tabla que se refiere a la llave primaria de otra tabla, estableciendo así una relación entre ambas.

Por ejemplo, en una tabla llamada venta, se tendría el identificador de el cliente.
#### Normalización y desnormalización
##### Normalización
Es el proceso de organizar los datos para reducir la redundancia y mejorar la integridad. Esto implica dividir los datos en diferentes tablas y establecer relaciones entre ellas.

En pocas palabras es crear una tabla nueva para evitar tener redundancias.

Por ejemplo, para las ventas, para evitar tener el mismo producto muchas vences en las ventas, se crea una tabla producto para que en la tabla de la venta solo se guarden los identificadores de los productos.
##### Desnormalización
Es el proceso opuesto, donde se combinan tablas para mejorar el rendimiento en ciertas consultas, a costa de una posible redundancia de datos.

Es decir, existen casos donde no es tan conveniente tener una tabla y es mejor tener esto dentro de otra tabla aunque haya redundancia.

Por ejemplo, en las ventas se podrían tener diferentes tipos de clientes, pero para no crear una tabla solo de clientes se podría guardar esta información dentro del mismo cliente.
#### Cómo usarla (CRUD)
##### Create
Para poder crear un registro existe la siguiente sintáxis en SQL llamada `INSERT`

```
INSERT INTO table_name (column1, column2, column3, ...)  
VALUES (value1, value2, value3, ...);
```
##### Read
Para traer los datos la tabla en la que estamos podemos usar la sintáxis en SQL
```
SELECT column1, column2, ..._  
FROM _table_name_;
```

Si queremos tomar todas las columnas sin colocar el nombre de todas podemos sustituir el listado de columnas por un `*`.

###### Filtros y organizadores
A veces queremos traer datos específicos o en cierto orden en una tabla, para esto nos sirven los **filtros y organizadores.** 

**Filtros**
Para filtrar datos que cumplan una condición podemos usar `WHERE`
```
SELECT _column1_, _column2, ..._  
FROM _table_name_  
WHERE _condition_;
```

**Organizadores**
A veces queremos ordenar los datos que mandamos a traer, para esto podemos usar `ORDER BY`
```
SELECT * FROM Products  
ORDER BY Price;
```

A veces queremos agrupar los datos que mandamos a traer, para esto podemos usar `GROUP BY`
```
SELECT _column_name(s)_  
FROM _table_name_  
WHERE _condition_  
GROUP BY _column_name(s);
```

**Relaciones**
A veces queremos taer los datos relacionados a una tabla, para esto podemos usar los joins
```
SELECT ProductID, ProductName, CategoryName  
FROM Products  
INNER JOIN Categories ON Products.CategoryID = Categories.CategoryID;
```
##### Update
A veces queremos actualizar los datos de nuestras tablas, para esto podemos usar `UPDATE`
```
`UPDATE _table_name_   SET _column1_ = _value1_, _column2_ = _value2_, ...   WHERE _condition_;
```

##### Delete
Si queremos borrar datos de nuestras bases de datos podemos usar `DELETE`
```
`DELETE FROM _table_name_ WHERE _condition_;`
```

###### Soft Delete
A veces no queremos borrar del todo los datos de nuestras tablas, para esto podemos usar soft deletes, estos marcan como inactivos los registros, para esto agregamos una columna que nos permita identificar si está activo o no el registro y los filtramos en nuestros querys

### No relacional
#### Qué es y cuándo se usa
Una base de datos no relacional es un tipo de sistema de almacenamiento de datos que no sigue el modelo tradicional de bases de datos relacionales basado en tablas y columnas, emplean estructuras flexibles como documentos, grafos, columnas anchas o pares clave-valor. Esto permite almacenar y gestionar datos no estructurados o semiestructurados, como JSON o XML, de manera eficiente y escalable.

Se usa principalmente en aplicaciones que manejan grandes volúmenes de datos, requieren alta disponibilidad y rapidez en la consulta de datos, o manejan datos con estructura dinámica que cambia frecuentemente.

En pocas palabras son bases de datos que no siguen la estructura de una relacional y tienen un formato de guardado flexible. Se usan cuando se quieren usar grandes cantidades de datos de manera dinámica.
#### Cómo usarla
Para usar una base de datos no relacional, se comienza eligiendo el tipo que mejor se adapta al caso de uso: bases de datos de documentos como MongoDB para almacenar datos en formato JSON. 

A diferencia de las relacionales el uso es más fácil, solo se actualiza el archivo y se guarda actualizado.

## Documentación
- [PostgreSQL](https://www.postgresql.org/docs/current/sql.html)
- [SQL](https://www.w3schools.com/sql/sql_groupby.asp)
