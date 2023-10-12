## EXPORT MYSQL 
- Abrir mysql

``` terminal
mysql -u root -p
```

- Crear y seedear la db

``` mysql
CREATE DATABASE mysql_project;

SHOW DATABASES;

USE mysql_project;

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL
);

SHOW TABLES;

INSERT INTO Users (username) VALUES ('user1');
INSERT INTO Users (username) VALUES ('user2');
INSERT INTO Users (username) VALUES ('user3');
INSERT INTO Users (username) VALUES ('user4');
INSERT INTO Users (username) VALUES ('user5');
INSERT INTO Users (username) VALUES ('user6');
INSERT INTO Users (username) VALUES ('user7');
INSERT INTO Users (username) VALUES ('user8');
INSERT INTO Users (username) VALUES ('user9');
INSERT INTO Users (username) VALUES ('user10');

SELECT * FROM Users;
```

- Ir a directorio donde se va a guardar el backup

``` terminal
cd Documents

mkdir db_bakcups && cd db_backups

mysqldump -u root -p mysql_project > mysql_project_migration.sql
```

## IMPORT MYSQL
- Abrir mysql
``` terminal
mysql -u root -p
```

``` mysql
CREATE DATABASE migration;

SHOW DATABASES;
```

- `ctrl + d` para salir de mysql


``` terminal
mysql -u root -p migration < mysql_project_migration.sql

mysql -u root -p
```

``` mysql
USE migration;

SHOW TABLES;

SELECT * FROM Users;
```
