# Capa de aplicación
## Capas de aplicación y modelo OSI
La capa de aplicación es la capa *siete* y es la capa por la cual interactúa el usuario. Los protocolos de capa de aplicación se usa para intercambiar datos entre los programas de host de origen y destino.
### Protocolo de capas de aplicación
En la granja de servidores se tiene
#### Servidor Domain Name Service (DNS)
Asigna dominios, por ejemplo, pasa de ser la ip 123 a ser google
#### Servidor Telnet: 
Se encarga de permitir el acceso a computadores dentro de una red por medio de servidores en la nube donde dan acceso por medio de tokens, por ejemplo, anydesk.
#### Servidor e-mail
Cuando voy a enviar un correo electrónico viene **MUA** y toma los mensajes de la bandeja de salida y se lo da al **SMTP** el cual es encargado de subir la información al servidor, luego llega a **MDA** y en caso de que no sea para el mismo dominio se lo manda al **MTA** y se lo envía al **MDA** del otro dominio y este ya lo baja al casillero del usuario, luego viene **POP3** y baja todo lo que está en casillero a la bandeja de entrada por medio del **MUA**.
#### Servidor DHCP
Un router es una computadora y una computadora es router, la diferencia es que un router es una computadora con funcionamiento esencial.

El router tiene un DHCP, que lo que hace es asignar ips automáticas.

El SSID es el nombre que le estoy dando a la conexión wifi, luego viene una encriptación y se ingresa la clave, en caso de que la clave sea correcta el DHCP le asigna una nueva ip.
192.168.1.1
192.168.1.2
192.168.1.3
#### Servidor Web
Computadora donde se almacena la página web, es el servidor a dónde accede por medio de el DNS para poder ir a diferentes sitios web.

Un sitio web es un conjunto de páginas web con diferentes funcionalidades, el servidor web almacena varios sitios web.
#### Servidor FTP
Es un servidor utilizado para la transferencia de archivos.
## Cliente servidor
Es un servidor y una aplicación que se maneja por medio de requests a un servidor.
## Redes peer to peer
Son redes por las cuales uno es cliente y servidor juntos, una computadora se conecta a otra computadora siendo cliente y la otra servidor y viceversa.
## NSLookup
Es para encontrar el nombre o la ip de un dominio. Nos puede servir en casos de seguridad y querer bloquear dominios en nuestra red u otras cosas relacionadas.
## Servicios www y http
### www
Va por default que este que lo que hace es que busca en la red mundial una página que sea compatible con hipertexto
### http
Hiper Text Transfer Protocol, permite el procesamiento de hipertexto, js, css y php u otros.
## Protocolo de Gnutella
Se pueden descubrir clientes por medio de un ping que debería ser respondido por un pong.
