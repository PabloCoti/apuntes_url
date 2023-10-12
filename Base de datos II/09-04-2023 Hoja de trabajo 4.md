# Imports y Exports en MySQL y MariaDB

Importar y exportar bases de datos es una tarea común en el desarrollo de software. Puede utilizar volcados de datos para realizar copias de seguridad y restaurar su información. También puede utilizarlos para migrar datos a un nuevo servidor o entorno de desarrollo.

## Requisitos
Para hacer una importación o exportación en MySQL y MariaDB necesitamos tres cosas.
1. Una máquina virtual con un usuario que no sea root o un servidor.
2. MySQL y MariaDB instalados.
3. Una base de datos la cual va a ser la base de datos que se va a importar y exportar.
## Imports
### MySQL Y MariaDB
Para importar un dump file en una base de datos en MySQL o MariaDB se va a tener que crear una nueva base de datos. Esta base de datos va a almacenar la información importada.

Primero se tiene que inicializar en MySQL como root u otro usuario que tenga los privilegios para crear una nueva base de datos.

```
mysql -u root -p
```

Este comando va abrir el prompt de MySQL.

como siguiente tenemos que crear la base de datos, por ejemplo **`new_database`**.

```
CREATE DATABASE new_database;
```

Esto debería de dar la siguiente salida.

```
Output
Query OK, 1 row affected (0.00 sec)
```

Luego de esto se pude salir del bash y con **`CTRL+D`**. Luego se puede correr el siguiente comando.

```
mysql -u username -p new_database < data-dump.sql
```

- **`username`** es el nombre de usuario con el que se puede acceder a la base de datos.
- **`new_database`** es el nombre de la base de datos donde se va a importar la información.
- **`data-dump.sql`** es el archivo en el directorio que va a importar en el directorio ubicado.

Si el comando corre sin errores no debería producir ningún tipo de salida. Si algún error ocurre durante el proceso este será impreso en la terminal. Se puede verificar que el import sea correcto dentro de la base de datos dentro del bash usando **`USE new_database`** y luego usar **`SHOW TABLES;`**.
## Exports
### MySQL Y MariaDB
Se va a utilizar **mysqldump** en consola para exportar las bases de SQL a archivos de texto. Esto hace que la transferencia entre bases de datos sea más fácil. Se necesita el nombre de la base de datos y sus credenciales para la cuenta con los privilegios que permitan por lo menos un **full read-only** como acceso a la base de datos.

```
mysqldump -u username -p database_name > data-dump.sql
```

 - **`username`** es el nombre de usuario con el que se puede acceder a la base de datos.
- **`database_name`** es el nombre de la base de datos para exportar.
- **`data-dump.sql`** es el archivo en el directorio que va a guardar la salida del comando.
El comando no va a producir una salida visual, pero se puede inspeccionar el contenido de **`data-dump.sql`** para verificar que sea un SQL dump file.

```
head -n 5 data-dump.sql
```

La cabecera del archivo se debería ver de la siguiente manera, mostrando un dump para una bae de datos con el nombre **`database_name`**.

```
SQL dump fragment
-- MySQL dump 10.13  Distrib 5.7.16, for Linux (x86_64)
--
-- Host: localhost    Database: database_name
-- ------------------------------------------------------
-- Server version       5.7.16-0ubuntu0.16.04.1
```
