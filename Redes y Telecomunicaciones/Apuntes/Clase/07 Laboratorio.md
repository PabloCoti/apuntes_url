# Laboratorio router
Pasar de exec a super usuario
`enable`

Reiniciar configuración
`erase startup-config`

Entrar a configuración
`configure terminal`

Cambiar host
`hostname URL`

Entrar a interfaz 
`interface gi0/0`

Configurar la ip
`ip address 192.168.1.1 255.255.255.0`

`no shut`

Descripción
`descr`

`description link to PC Guillermo`

Ping con ip determinada
`do ping 192.168.1.2`

Ver configuración del router
`do show run`


Seguridad de puerto:

line console 0 
password "1234"
login -- para confirmar

line vty 0 4
password "universidad"
login

enable secret "1234"
