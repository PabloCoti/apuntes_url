# Documentación de estructura de red
## Configuración del router
Asumiendo que los dispositivos de la red solo utilizarían la red de 2.4 GHz solo se procederá a hacer la configuración de la red en esta frecuencia

### Primer paso 
Se procede a localizar la IP que utiliza el router para poder acceder a su configuración, esto se hace por medio del chequeo del Default Gateway del router, esto se puede hacer por medio del comando `ipconfig` en windows o `ifconfig` en linux.
![](../../../00%20Attachments/Pasted%20image%2020240826215937.png)

Una vez dentro del punto de acceso se va a tener una interfaz algo así donde se tendrá que insertar el usuario y contraseña indicados en la parte posterior del router, en el caso de routers des-configurados, de lo contrario se tiene que consultar con el ISP para tener acceso a la configuración del router.
![](../../../00%20Attachments/Pasted%20image%2020240826215559.png)

### Configuración de SSID
Una vez ingresado a la interfaz de configuración del router, se puede proceder a la interfaz de "wireless" dónde se procede a configurar el SSID. En este caso el SSID asignado al router es "LDP".
![](../../../00%20Attachments/Pasted%20image%2020240826220531.png)

### Configuración del cifrado
Debido a las características del router, se hará uso de el cifrado WPA2-PSK. El secret asignado a este router es `hiou808n`
![](../../../00%20Attachments/Pasted%20image%2020240826222342.png)

### Configuración de contraseña
Dentro de la interfaz de configuración del router se ingresa en el apartado de administración y se busca la sección de contraseña del router. La contraseña asignada al router es `.,2608\rtf2.\`.
![](../../../00%20Attachments/Pasted%20image%2020240826222225.png)

### Configuraciones adicionales
Dentro de la configuración de ip del router a este se le asignará la primera ip utilizable siguiendo la siguiente
#### Configuración de red
Tomando en cuenta de que va a ser una red con 14 hosts utilizables se tiene la siguiente configuración de red

| Red         | Broadcast    | Primera ip utilizable | Última ip utilizable | Máscara         | Priefijo |
| ----------- | ------------ | --------------------- | -------------------- | --------------- | -------- |
| 192.168.1.0 | 192.168.1.15 | 192.168.1.1           | 192.168.1.14         | 255.255.255.240 | 28       |

Con base a esta configuración de red se hace la asignación de la IP y máscara de red.
![](../../../00%20Attachments/Pasted%20image%2020240826224233.png)

## Configuración de servidor de base de datos
Debido a la contexto actual del proyecto se va hacer uso de una laptop como servidor para que los otros usuarios puedan acceder a esta para el manejo de la base de datos.

### Primer paso - conectar computador al router
Dentro de la configuración de windows de la computadora se ingresa a la sección de redes y se busca el apartado de propiedades y dentro de este apartado se procede a hacer la configuración de IP fija, esto debido a que es una IP que no deseamos que cambie por la configuración y manejo que se le va a dar.

![](../../../00%20Attachments/Pasted%20image%2020240826224840.png)

En este caso se le asignará la última IP utilizable.
![](../../../00%20Attachments/Pasted%20image%2020240826224946.png)

