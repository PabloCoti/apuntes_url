# Segundo proyecto

## Configuración de máquina virtual con el servidor del proyecto
![](../../../00%20Attachments/Pasted%20image%2020240912182510.png)

### Especificaciones de máquina virtual
RAM: 6GB
CPUS: 4
ESPACIO: 35GB

## Configuración de windows server
Hacer la instalación de el active directory desde windows server, se busca el apartado de agregar roles y características y se sigue el wizard que guía para la instalación del AD. Al dominio se le asignó el nombre de dominio.redesldp

![](../../../00%20Attachments/Pasted%20image%2020240912184908.png)

![](../../../00%20Attachments/Pasted%20image%2020240912185053.png)

Contraseña de DSRM
`.,2608\rtf2.\`

![](../../../00%20Attachments/Pasted%20image%2020240912185449.png)

## Agregar usuarios al dominio
En la parte de usuarios y equipos se hace click en el apartado de usuarios y se siguen los pasos del wizard para poder crear el usuario. Posteriormente se procede a hacer la asignación de el usuario a el GPO.

![](../../../00%20Attachments/Pasted%20image%2020240912190324.png)

![](../../../00%20Attachments/Pasted%20image%2020240912190338.png)
![](../../../00%20Attachments/Pasted%20image%2020240912190354.png)

![](../../../00%20Attachments/Pasted%20image%2020240912190414.png)
![](../../../00%20Attachments/Pasted%20image%2020240912190448.png)
Por ejemplo del primer usuario
pacoti2
url.2024
Selecciona las opciones de política de contraseña según tus necesidades (puedes deshabilitar el cambio obligatorio de contraseña si lo prefieres).


![](../../../00%20Attachments/Pasted%20image%2020240912190701.png)


![](../../../00%20Attachments/Pasted%20image%2020240912191206.png)
## Configuración de los sitios que no pueden acceder los usuarios de las GPOs
Una vez se tienen los usuarios se proceden a hacer las policies de los GPOs se tienen que asignar dentro del archivo de los hosts para que los usuarios no puedan acceder a ciertos sitios, dentro de la configuraci

![](../../../00%20Attachments/Pasted%20image%2020240912191415.png)

![](../../../00%20Attachments/Pasted%20image%2020240912191444.png)

![](../../../00%20Attachments/Pasted%20image%2020240912191502.png)

![](../../../00%20Attachments/Pasted%20image%2020240912191509.png)


![](../../../00%20Attachments/Pasted%20image%2020240912192750.png)

![](../../../00%20Attachments/Pasted%20image%2020240912194040.png)


![](../../../00%20Attachments/Pasted%20image%2020240912194104.png)

![](../../../00%20Attachments/Pasted%20image%2020240912194236.png)
![](../../../00%20Attachments/Pasted%20image%2020240912194246.png)

![](../../../00%20Attachments/Pasted%20image%2020240912194253.png)

