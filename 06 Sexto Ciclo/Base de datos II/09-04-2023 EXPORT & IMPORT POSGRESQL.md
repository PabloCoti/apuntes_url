## EXPORT POSGRESQL

- Abrir consola

``` terminal
sudo -u postgres psql
```

- Crear base de datos

```postgresql
CREATE DATABSE my_project OWNER pacoti;
```

- Abrir y seedear la db

``` postgresql
psql -d my_project -U pacoti

\dt

CREATE TABLE users (
    id serial PRIMARY KEY,
    user_name VARCHAR (255) NOT NULL
);

SHOW TABLES;

INSERT INTO users (user_name) VALUES
    ('user1'),
    ('user2'),
    ('user3'),
    ('user4'),
    ('user5'),
    ('user6'),
    ('user7'),
    ('user8'),
    ('user9'),
    ('user10');
    
SELECT * FROM users;
```

`ctrl + d` para salir de los comandos de postgresql

- Exportar la db

``` terminal
cd Documents
mkdir db_backups && cd db_backups

pg_dump my_project > my_project_migration.sql

ls
```

## IMPORTAR POSTGRESQL

``` terminal
sudo -u postgres psql
```

- Crear base de datos

``` postgresql
CREATE DATABSE migration OWNER pacoti;

psql -d migration -U pacoti

\dt
```

ctrl d

``` terminal
psql migration < my_project_migration.sql

psql -d migration -U pacoti
```

``` postgresql
\dt

SELECT * FROM users;
```
