# Segundo proyecto

**Integrantes**
- Pablo Andrés Cotí Arredondo 1653221
- María Luisa Cos Alvarez 1567519
- Diego José Abdo Estrada 1625021

## Configuración de máquina virtual con el servidor del proyecto

redesuser
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
Una vez se tienen los usuarios se proceden a hacer las policies de los GPOs se tienen que asignar dentro del archivo de los hosts para que los usuarios no puedan acceder a ciertos sitios, dentro de la configuración hicimos uso del sitio de www.youtube.com

![](../../../00%20Attachments/Pasted%20image%2020240912191415.png)

![](../../../00%20Attachments/Pasted%20image%2020240912191444.png)

![](../../../00%20Attachments/Pasted%20image%2020240912191502.png)

![](../../../00%20Attachments/Pasted%20image%2020240912191509.png)


![](../../../00%20Attachments/Pasted%20image%2020240912192750.png)

![](../../../00%20Attachments/Pasted%20image%2020240912194040.png)


![](../../../00%20Attachments/Pasted%20image%2020240912194104.png)

![](../../../00%20Attachments/Pasted%20image%2020240912194236.png)

Una vez se tiene creado el policy se hace la relación de policy con el GPO
![](../../../00%20Attachments/Pasted%20image%2020240912194246.png)

![](../../../00%20Attachments/Pasted%20image%2020240912194253.png)

## Agregar computadoras al dominio
Se tiene que tener una versión de windows que nos permita hacer unión del equipo a un dominio. Para poder agregarse al dominio se tiene que acceder a la configuración de dominio del computador, cambiar y allí agregar al dominio. Posteriormente se tiene que ingresar el usuario que se fue asignado dentro del dominio.
![](../../../00%20Attachments/Untitled%208.jpg)
![](../../../00%20Attachments/Untitled%209.jpg)
![](../../../00%20Attachments/Untitled%2010.jpg)
![](../../../00%20Attachments/Untitled%2011.jpg)
![](../../../00%20Attachments/Untitled%2012.jpg)
![](../../../00%20Attachments/Untitled%2013.jpg)
## Resultado
![](../../../00%20Attachments/Untitled%207.jpg)
![](../../../00%20Attachments/Untitled%2014.jpg)
## Dificultades al momento de realizar el proyecto
### Conectar las computadoras al dominio
Para solucionar este problema lo que se tuvo que hacer fue:
Tuvimos un conflicto de IPs entre la Ip Física y Virtual, hicimos un Bridge entre la Ip física y la virtual para que fueran iguales y si apareciera en la red para podernos unir al Dominio.
### Sistema Operativo
Tuvimos que hacer un update de Windows 11 Home a Windows 11 Education Pro para permitirnos unirnos a un dominio.
