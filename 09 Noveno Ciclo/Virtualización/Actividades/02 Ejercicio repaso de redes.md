# Capa de red
---
La capa de red es la capa responsable de determinar cómo los datos van a viajar de un dispositivo a otro.

---
## Partes de la capa de red

---
## IP (Internet Protocol)
La IP es la que determina de dónde está saliendo la información y a dónde tiene que llegar. Esto se logra por medio de un encabezado que incluye las direcciones IP.

---
## ICMP (Internet Control Message Protocol)
Esta es la que se encarga de verificar que el destino es accesible antes de que se envíen los datos formalmente.

---
## ARP (Address Resolution Protocol)
Esta traduce la IP a dirección MAC para la red *local* debido a que en la red local los dispositivos se comunican por medio de sus direcciones MAC.

---
## NAT (Network Address Translation)
Este convierte la IP de la solicitud a una IP pública de la red.

---
## Enrutamiento
Este paso es cuando el router determina la mejor ruta para llegar al destino consultando las tablas de enrutamiento sobre redes conocidas y cómo alcanzarlas.

---
## Fragmentación y reensamblado
Cuando un paquete es demasiado grande la capa de red lo divide en diferentes partes en pedazos más pequeños. Una vez las partes llegan al destino se vuelve a ensamblar.

---
## Control de congestión
En caso de que haya mucho tráfico en la red, la capa de red puede buscar rutas alternativas o hacer que los datos viajen más lento para evitar pérdida de paquetes.