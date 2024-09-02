# Capa 3
En el período anterior e vio la transición de ip de decimal a binario. 

Lo bit de orden superior determinar la red, bit de oren inferior definen lo pot.

## Clases
Por clase lo que cambia es el primero octeto, cuando cambian de clase empiezan con el octeto de la clase anterior más uno.

Por clase se tiene que $2^n = \text{host totales}$ y que $2^n - 2 = \text{host utilizables}$
### A
RED.HOST.HOST.HOST
MASK = 255.0.0.0

Terminan con la cantidad de posiciones de red
10000000 = 128
0.0.0.0 -> 127.255.255.255

Redes 128
Host Utilizables = $2^24 (cantidad de bits de host) - 2 = 16777214$
Aquellos 
### B
RED.RED.HOST.HOST
MASK 255.255.255.0.0

Termina con la cantidad de posiciones de red 110000000 = 192
128.0.0.0 -> 191.255.255.255

Redes = $(192-128) * 256 = 16384$
Hosts utilizables = $2^{16} - 2 = 65534$
### C
RED.RED.RED.RED.HOST
MASK = 255.255.255.0

Termina con la cantidad de posiiones de red 11100000 = 224
192.0.0.0 -> 223.255.255.255

Redes = $(224-192) * 256 * 256 = 2097152$
Hosts utilizables = $2^8 - 2 = 254$
### D
Multicast

Termina con la cantiad de posiciones de red 11110000
224..0.0.0 -> 239.255.255.255
E 
Invetigación
240 - 255

La macara determinan la cantidad de hot que puede tener una red.

## Ejemplo
Con la dirección 192.168.1.200
Se puede detectar que es una ip de clase c y que tiene una máscara de 255.255.255.0

Con la regla del AND podemos sacar la red convirtiendo la dirección a binario.
192 = 11000000 AND 11111111 = 11000000 = 192
168 = 10101000 AND 11111111 = 10101000 = 168
1 = 00000001 AND 11111111 = 00000001 = 1
200 = 11001000 AND 00000000 = 00000000 = 0

RED = 192.168.1.0
BROADCAST = $2^n = 2^8 = 256 - 1 = 255$ = 192.168.1.255
ÚLTIMA ip UTILIZABLE = 192.168.1.254 (255-1)
PRIMER ip UTILIZABLE = 192.168.1.1
PREFIJO = /24 

## Ejercicio
**140.30.60.0**
Red clase B
Mask = 255.255.0.0

Red
140 = 10001100 AND 11111111 = 10001100 = 140
30 = 00011110 AND 1111111 = 00011110 = 30
60 = 00111100 AND 00000000 = 00000000 = 0
0 = 00000000 AND 00000000 = 00000000 = 0

Red = 140.30.0.0
Broadcast = $2^16 - 1 = 65535/256 = 256 = 140.30.255.255$
Última ip utilizable = 140.30.254.254
Primera ip utilizable = 140.30.1.1
Prefijo = $8*2 = /16$

**180.100.255.0**
Red de clase 
Red calse B

Mask = 255.255.0.0
Red
180 = 10110100 AND 11111111 = 10110100 = 180
100 = 01100100 AND 11111111 = 01100100 = 100
255 = 11111111 AND 00000000 = 00000000 = 0
0 = 00000000 AND 00000000 = 000000000 = 0

Red = 180.100.0.0
Broadcast = $2^{16} - 1 = 65535/256 = 256 = 180.100.255.255$
Última ip utilizable = 180.100.254.254
Primer ip utilizable = 180.100.1.1
Prefijo = $8*2 = /16$

**10.30.4.250**
Red de clase A
Mask = 255.0.0.0

Red = 10.0.0.0
Broadcast = $2^{24} - 1 = 16777215/256