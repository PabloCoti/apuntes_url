# VTP
Virtual trunk protocol, este protocolo permite trabajar la arquitectura cliente/servidor pero para que esta arqutectura funcione tenemos que crear un dominio. En este caso el comando que se utiliza sería.

```
vtp domain url
```

A este dominio se le puede poner un modo, pueden ser
- `server`
- `client`
- `transparent`

```
vtp mode server
```

Una vez se le asigna el modo se quiere poner una contraseña
```
vtp password 1234
```

Dentro del switch también se tiene que configurar las vlans

## Ejemplo
```
vlan 6
name Luisa
vlan 7
name Josue

vtp domain url
vtp mode client
vtp password 1234
```

```
enable
conf t

line console 0
password 1234
login

line vty 0 15
password 1234
login

enable secret universidad

banner motd #Prohibido el ingreso a personal no autorizado#

vlan 7
name Josue

vlan 6
name Luisa

interface fa0/1
switchport mode access
switchport access vlan 7

interface fa0/2
switchport mode access
switchport access vlan 6

interface gi0/1
switchport mode trunk
switchport trunk native vlan 99
```