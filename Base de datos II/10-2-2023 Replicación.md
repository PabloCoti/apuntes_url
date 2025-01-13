# Configuración de master
- Se ingresa al archivo *my.cnf*
``` Terminal
sudo nano /etc/my.cnf
```
- Debajo de la etiqueta \[mysqld] se inserta el código
```
log-bin=mysql-bin
server-id=1
binlog-do-db=replica
sync_binlog=1
```

Respectivamente son 
- Nombre del log
- Id del servidor
- Nombre de la base de datos (tiene que existir en todos los esclavos y en el amo)

- Luego de agregar estos comandos se reinicia el servicio de mysql
```
sudo service mysql restart && sudo service mysqld restart
```

- Se entra a mysql 
```
mysql -u root -p
```

- Se crea un usuario relacionado con la ip del esclavo

```
CREATE USER 'name'@'%' IDENTIFIED BY 'password';
```

- Configurar al usuario como esclavo
```
GRANT REPLICATION SLAVE ON *.* TO 'name'@'ip_esclavo';
```

- Actualizamos
```
FLUSH PRIVILEGES;
```

# Configuración del esclavo
- Se ingresa al archivo
```
sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
```

- Bajo la etiqueta \[mysqld] colocamos el código que se había mostrado en el primer paso (primeras dos líneas y el id se cambia a 2).

- Se asigna el amo por medio del comando
```
change master to
master_host='<ip>',
master_user='<name>',
master_password='<password>',
master_log_file='mysql.bin.00003',
master_log_pos=<position>;
```

- En caso de que tire error correr el comando.
```sql
CHANGE MASTER TO GET_MASTER_PUBLIC_KEY=1;
```

- Inicializamos el esclavo
``` mysql
start slave;
```

Los parámetros de ip, nombre y contraseña son los que se han insertado durante la configuración del esclavo

Para sacar **'mysql.bin.00003'** se corre el comando y se toma el valor de File_set
``` Mysql
show master status \G;
```

Para mostrar la información del esclavo se corre el comando
``` mysql
show slave status \G;
```
