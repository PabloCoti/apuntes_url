Se van a hacer con plantillas para poder avanzar más rápido

**Switch1**

``` switch1
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

vlan 10
name Javier
vlan 11
name Marco

interface range fa0/1-5
switchport mode access
switchport access vlan 10

interface range fa0/6-10
switchport mode access
switchport access vlan 11

interface gi0/1
switchport mode trunk
switchport trunk native vlan 99
```

**Switch 2**

``` switch2
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

vlan 10
name Javier

vlan 11
name Marco

interface range fa0/1-5
switchport mode access
switchport access vlan 10

interface range fa0/6-10
switchport mode access
switchport access vlan 11

interface gi0/1
switchport mode trunk
switchport trunk native vlan 99
```

**Switch 3**

``` switch3
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

vlan 10
name Javier

vlan 11
name Marco

interface range gi0/1-2
switchport mode trunk
switchport trunk native vlan 99

interface fa0/24
switchport mode trunk
switchport trunk native vlan 99
```

**Router 0**

```
enable
conf t

line console 0
password 1234
login

line yty 0 15
password 1234
login

enable secret universidad

banner motd #Prohibido el ingreso a personal no autorizado#

interface gi0/0
no shut

interface gi0/0.10
encapsulation dot1q 10
ip address 192.168.10.254 255.255.255.0
no shut

interface gi0/0.11
ecapsulation dot1q 11
ip address 192.168.11.254 255.255.255.0
no shut

exit

ip route 192.168.1.0 255.255.255.0 gi0/1

interface gi0/1
ip address 10.0.0.2 255.255.255.248
no shut
```

**Router 1**
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

interface gi0/1
ip address 192.168.1.254 255.255.255.0
no shut
exit

ip route 192.168.10.0 255.255.255.0 gi0/0
ip route 192.168.11.0 255.255.255.0 gi0/0
ip route 192.168.99.0 255.255.255.0 gi0/0

interface gi0/0
ip address 10.0.0.1 255.255.255.248
no shut
```