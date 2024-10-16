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