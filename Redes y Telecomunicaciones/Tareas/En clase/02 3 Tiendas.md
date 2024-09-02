# 3 Tiendas
- Topología
- Tabla de ips

## Tienda 1
190.168.0.15
- Sub red de 6 pc
- Sub red de 10 pc con acceso wifi y con un servidor web

Tipo "B"
### Primera sub red
Hosts utilizables: 6
$$
2^4 = 8
$$
11111111.11111111.11111111.11110000
255.255.255.248


| Subredes | Red         | Máscara         | Broadcast    |
| -------- | ----------- | --------------- | ------------ |
| 1        | 190.168.0.8 | 255.255.255.248 | 190.168.0.15 |
|          |             |                 |              |


## Tienda 2
40.60.80.128/25
- Sub red de 30 hosts
- Sub red de 6 hosts con 30% de proyección de crecimiento

## Tienda 3
100.100.0.0/24
- Sub red de 40 hosts
- Sub red de 10 hosts
- Servidor web conectado a un router AP (192.168.10.30)