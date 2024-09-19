# Segundo proyecto
## Instalación del servidor
En una máquina virtual se hace la instalación utilizando el ISO que se descarga desde la página oficial de windows.

Se le asignó
- Nombre de usuario: redesuser
- Contraseña: 57058159
- Hostname: REDESLDP
- Domain name: redes.virtualbox.com
- RAM: 6GB
- CPU: 4
- Espacio: 30

## Configuración del servidor
### 1. Actualizar
Dentro de la configuración del servidor primero se tiene que verificar que todo ya esté actualizado, en caso de que no esté todo actualizado sí hay que hacer las actualizaciones.
### 2. Establecer zona horaria
Hay que asegurarnos de que la zona horaria bajo la que trabaja el servidor sí sea del área en la que estamos. 
### 3. Asignar IP estática
En este caso al servidor se le asignó la configuración:
1. IP `192.168.1.14`
2. Máscara `255.255.255.240`
3. Gateway `192.168.1.1`
4. DNS `192.168.1.14`
### 4. Permitir acceso remoto (remote desktop)
Hacemos click en el apartado de remote desktop
![](../../../00%20Attachments/Pasted%20image%2020240918213953.png)

![](../../../00%20Attachments/Pasted%20image%2020240918214136.png)

### 5. Renombrar servidor
Dentro de las propiedades del sistema se va a asignar el nuevo nombre del sistema, en nuestro caso se quedará como `REDESLDP`
![](../../../00%20Attachments/Pasted%20image%2020240918214241.png)

## Configuración de Active Directory
### Instalación de active directory
Para la instalación de active directory se hará la instalación de Active Directory Domain Services y también los servicios de DNS. Se hace el ingreso a añadir roles y características y se seleccionan las características a agregar que son active directory con todo y DNS con todo. Se hace la instalación **sin reiniciar**.

![](../../../00%20Attachments/Pasted%20image%2020240918220342.png)
![](../../../00%20Attachments/Pasted%20image%2020240918220435.png)
![](../../../00%20Attachments/Pasted%20image%2020240918220521.png)
![](../../../00%20Attachments/Pasted%20image%2020240918220536.png)
![](../../../00%20Attachments/Pasted%20image%2020240918220603.png)


### Promover servidor a controlador de dominio
Una vez instaladas las características debería aparecer la notificación que nos diga que si queremos promover el servidor a un controlador de dominio. Hacemos click y en este caso vamos a crear un nuevo bosque bajo el nombre de `redes.ldp` con la contraseña de DSRM de `ldp.2024` y nombre de netbios de dominio de `REDESLDPDOM` **(LOS PASOS QUE NO APAREZCAN NO SE TOCA NADA Y SOLO SE DA SIGUIENTE)**.

![](../../../00%20Attachments/Pasted%20image%2020240918220812.png)
![](../../../00%20Attachments/Pasted%20image%2020240918220931.png)
![](../../../00%20Attachments/Pasted%20image%2020240918221109.png)

Una vez se hace la instalación y reinicio del servidor se tiene que ir al apartado de DNS en las herramientas y se tiene que crear un **reverse lookup zone** donde se ponen los primeros tres octetos de la IP del servidor. luego se tiene que volver a configurar el DNS del adaptador de red a la IP del servidor.

![](../../../00%20Attachments/Pasted%20image%2020240918222551.png)

Una vez hecha esta configuración al momento de hacer el comando de `nslookup` se debería mostrar el servidor y la ip.
Ej.
![](../../../00%20Attachments/Pasted%20image%2020240918222852.png)

Y se debería poner el **dominio** (redes.ldp) o la **IP** (192.168.1.14) y debería dar nuevamente la misma respuesta.

## Bloquear sitios con active directory
Para esto se va a hacer uso de los **Group Policies**.

Para esto vamos a tener que crear una unidad organizacional y posteriormente agregarle el usuario.

### Crear unidad organizacional
Vamos al apartado de Tools > Active Directory Users and Computers y allí hacemos click derecho dentro de nuestro dominio y le damos en nueva unidad organizacional
![](../../../00%20Attachments/Pasted%20image%2020240918225142.png)
![](../../../00%20Attachments/Pasted%20image%2020240918225203.png)

### Agregar computador a organización
Dentro de las computadoras agregamos PC1 a la ogranización (en caso no exista la computadora se crea).

Le damos a mover
![](../../../00%20Attachments/Pasted%20image%2020240918225348.png)
Y a la organización
![](../../../00%20Attachments/Pasted%20image%2020240918225400.png)

### Crear policy
Dentro de group policy management vamos al apartado de la red, dominio, gpo y vamos a crear uno nuevo.
![](../../../00%20Attachments/Pasted%20image%2020240918225634.png)
![](../../../00%20Attachments/Pasted%20image%2020240918225658.png)

Para bloquear el acceso a la página web lo que hacemos es hacer una policy de outbound rule que bloquee el acceso a la ip de facebook

![](../../../00%20Attachments/Pasted%20image%2020240918225807.png)
![](../../../00%20Attachments/Pasted%20image%2020240918225839.png)
![](../../../00%20Attachments/Pasted%20image%2020240918225850.png)
![](../../../00%20Attachments/Pasted%20image%2020240918225901.png)

Para saber la ip de facebook lo que hacemos es `nslookup facebook.com` y copiamos las ips en las ips que vamos a bloquear.

![](../../../00%20Attachments/Pasted%20image%2020240918230032.png)
![](../../../00%20Attachments/Pasted%20image%2020240918230127.png)
![](../../../00%20Attachments/Pasted%20image%2020240918230204.png)
![](../../../00%20Attachments/Pasted%20image%2020240918230219.png)
Luego le damos link existing gpo a nuestro grupo y escogemos la que creamos
![](../../../00%20Attachments/Pasted%20image%2020240918230409.png)

Para que el cambio sea inmediato escribimos el comando `gpupdate /force`
