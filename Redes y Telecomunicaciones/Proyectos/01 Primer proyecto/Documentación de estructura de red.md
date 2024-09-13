d# Documentación de estructura de red

**Integrantes**
- Pablo Andrés Cotí Arredondo 1653221
- María Luisa Cos Alvarez 1567519
- Diego José Abdo Estrada 1625021
## Configuración del router
Se va a hacer la configuración de un router cisco modelo número EA2700. Asumiendo que los dispositivos de la red solo utilizarían la red de 2.4 GHz solo se procederá a hacer la configuración de la red en esta frecuencia.
![](../../../00%20Attachments/EA2700-Router-Linksys-Techniservice.jpg)
### Primer paso 
Se procede a localizar la IP que utiliza el router para poder acceder a su configuración, esto se hace por medio del chequeo del Default Gateway del router, esto se puede hacer por medio del comando `ipconfig` en windows o `ifconfig` en linux.
![](../../../00%20Attachments/Pasted%20image%2020240826215937.png)

Una vez dentro del punto de acceso se va a tener una interfaz algo así donde se tendrá que insertar el usuario y contraseña indicados en la parte posterior del router, en el caso de routers des-configurados, de lo contrario se tiene que consultar con el ISP para tener acceso a la configuración del router. Normalmente el usuario y contraseña en un router nuevo es `admin`
![](../../../00%20Attachments/Pasted%20image%2020240827101027.png)

### Configuración de SSID
Una vez ingresado a la interfaz de configuración del router, se puede proceder a la interfaz de "wireless" dónde se procede a configurar el SSID. En este caso el SSID asignado al router es "LDP".

### Configuración del cifrado
Debido a las características del router, se hará uso de el cifrado WPA2-PSK. El secret asignado a este router es `hiou808n`
![](../../../00%20Attachments/Pasted%20image%2020240827101309.png)

### Configuración de contraseña
Dentro de la interfaz de configuración del router se ingresa en el apartado de administración y se busca la sección de contraseña del router. La contraseña asignada al router es `.,2608\rtf2.\`
![](../../../00%20Attachments/Pasted%20image%2020240827103255.png)

### Configuraciones adicionales
Dentro de la configuración de ip del router a este se le asignará la primera ip utilizable siguiendo la siguiente
#### Configuración de red
Tomando en cuenta de que va a ser una red con 14 hosts utilizables se tiene la siguiente configuración de red

| Red         | Broadcast    | Primera ip utilizable | Última ip utilizable | Máscara         | Priefijo |
| ----------- | ------------ | --------------------- | -------------------- | --------------- | -------- |
| 192.168.1.0 | 192.168.1.15 | 192.168.1.1           | 192.168.1.14         | 255.255.255.240 | 28       |

Con base a esta configuración de red se hace la asignación de la IP y máscara de red.
![](../../../00%20Attachments/Pasted%20image%2020240827101738.png)

### Configuración de firewall de windows para que las computadoras hagan ping
![](../../../00%20Attachments/Pasted%20image%2020240827104638.png)

## Configuración de servidor de base de datos
Debido a la contexto actual del proyecto se va hacer uso de una laptop como servidor para que los otros usuarios puedan acceder a esta para el manejo de la base de datos.

### Primer paso - conectar computador al router
Dentro de la configuración de windows de la computadora se ingresa a la sección de redes y se busca el apartado de propiedades y dentro de este apartado se procede a hacer la configuración de IP fija, esto debido a que es una IP que no deseamos que cambie por la configuración y manejo que se le va a dar.

![](../../../00%20Attachments/Pasted%20image%2020240826224840.png)

En este caso se le asignará la última IP utilizable.
![](../../../00%20Attachments/Pasted%20image%2020240826224946.png)

### Segundo paso - configuración de MYSQL
En este caso se hará el uso de un servidor con MYSQL con una base de datos que contenga la tabla "students".
![](../../../00%20Attachments/Untitled%202.jpg)
![](../../../00%20Attachments/Untitled%203.jpg)
``` mysql
CREATE TABLE students (id INT auto_increment primary key, student_name VARCHAR(100) NOT NULL, code VARCHAR(50));
```
Para permitr el acceso a los hosts dentro de la red al servidor de mysql se procede a dar permiso a estos usuarios por medio de `bind-address` en la configuración de mysql por medio de estos comando y también dando privilegios dentro del servidor de mysql.po
![](../../../00%20Attachments/Untitled%204.jpg)
![](../../../00%20Attachments/Untitled%205.jpg)
Se crea un nuevo usuario que va a ser el que tiene los permisos de ingresar a la base de datos
![](../../../00%20Attachments/Untitled%206.jpg)
### Tercer paso - configuración del portforwarding
Para permitir el acceso a la base de datos de mysql se necesita hacer portforwarding. Se procederá a crear una regla en el firewall que abra el puerto 3306 (puerto por defecto de mysql).
#### Pasos para abrir el puerto en el firewall
![](../../../00%20Attachments/Pasted%20image%2020240827110209.png)
![](../../../00%20Attachments/Pasted%20image%2020240827110217.png)
![](../../../00%20Attachments/Pasted%20image%2020240827110236.png)
![](../../../00%20Attachments/Pasted%20image%2020240827110259.png)
![](../../../00%20Attachments/Pasted%20image%2020240827110340.png)

Una vez habiendo abierto el puerto dentro del firewall del servidor, se procede a agregar el portforwarding dentro de la configuración del router.
![](../../../00%20Attachments/Pasted%20image%2020240827111630.png)

## Resultado
![](../../../00%20Attachments/Pasted%20image%2020240827120110.png)

## Conectividad con la base de datos de otro router
Para tener conectividad con la base de datos de otro router se hace la conexión entre los dos routers por medio del cable **WAN/Internet**. Para esto se tiene que hacer una red entre los dos routers. 
### Configuración de red entre los dos routers
Para tener comunicación entre los dos routers se tiene que crear una red entre estos.
En este caso se hizo la red bajo la siguiente configuración

| Red      | Máscara   | Primera ip utilizable |
| -------- | --------- | --------------------- |
| 10.0.0.0 | 255.0.0.0 | 10.0.0.2              |

Dentro de la configuración de internet se configura dentro del router una ipv4 estática.
En el caso de la red 192.168.1.0 se le asignó al router la ip 10.0.0.1 y el gateway 10.0.0.2.
En el caso de la red 193.0.0.0 se le asignó al router la ip 10.0.0.2 y el gateway 10.0.0.1.

### Permitir ping
Para permir el ping con los routers se accede a la configuración de seguridad de los routers y se da permiso para hacer ping desde WAN.

### Acceso a la base de datos
Como ya se tiene configurado el portforwarding en los routers lo que se procede a hacer desde el sistema de base de datos es ingresar la ip del router que anida la base de datos y el puerto.

#### MySQL
Hostname: 10.0.0.1
Port: 3306