# Final de laboratorio
- [[#RIP|RIP]]
	- [[#RIP#Router 0|Router 0]]
	- [[#RIP#Router 1|Router 1]]
	- [[#RIP#Switch 5|Switch 5]]
	- [[#RIP#Router 5|Router 5]]
	- [[#RIP#Switch 4|Switch 4]]
- [[#Bridge|Bridge]]
	- [[#Bridge#Switch 3|Switch 3]]
- [[#Static|Static]]
	- [[#Static#Router 2|Router 2]]
	- [[#Static#Router 3|Router 3]]
	- [[#Static#Router 4|Router 4]]
## RIP
### Router 0
```
enable
conf t

line console 0
password 1234
login

line vty 0 15
password 1234
login

enable secret 12345

banner motd #Prohibido el ingreso a personal no autorizado#

interface gi0/0
ip address 150.15.15.25 255.255.255.248
no shut

interface gi0/1
ip address 8.8.8.1 255.255.255.0
no shut

interface gi0/2
ip address 150.15.15.18 255.255.255.248
no shut

router rip
version 2

network 150.15.15.0
network 8.8.8.0

no auto-summary
exit
```

### Router 1
```
enable
conf t

line console 0
password 1234
login

line vty 0 15
password 1234
login

enable secret 12345

banner motd #Prohibido el ingreso a personal no autorizado#

interface gi0/0
ip address 150.15.15.26 255.255.255.248
no shut

interface gi0/1
ip address 140.0.0.1 255.255.255.0
no shut

interface gi0/2.15
encapsulation dot1Q 15
ip address 140.2.15.1 255.255.255.0
no shut

interface gi0/2.25
encapsulation dot1Q 25
ip address 140.2.25.1 255.255.255.0
no shut

interface gi0/2.35
encapsulation dot1Q 35
ip address 140.2.35.1 255.255.255.0
no shut

interface gi0/2
no shut

router rip
version 2

network 150.15.15.0
network 140.0.0.0
network 140.2.0.0

no auto-summary
exit
```
### Switch 5
```
enable
conf t

line console 0
password 1234
login

line vty 0 15
password 1234
login

enable secret 12345

banner motd #Prohibido el ingreso a personal no autorizado#

vlan 15
name 15

vlan 25
name 25

vlan 35
name 35

interface fa0/1
switchport mode access
switchport access vlan 15

interface fa0/2
switchport mode access
switchport access vlan 25

interface fa0/3
switchport mode access
switchport access vlan 35

interface gi0/1
switchport mode trunk
switchport trunk native vlan 99
```
### Router 5
```
enable
conf t

line console 0
password 1234
login

line vty 0 15
password 1234
login

enable secret 12345

banner motd #Prohibido el ingreso a personal no autorizado#

interface gi0/2
ip address 150.15.15.19 255.255.255.248
switchport mode trunk
no shut

interface gi0/0.4
encapsulation dot1Q 4
ip address 180.1.4.1 255.255.255.0
no shut

interface gi0/0.5
encapsulation dot1Q 5
ip address 180.1.5.1 255.255.255.0
no shut

interface gi0/0.10
encapsulation dot1Q 10
ip address 180.1.10.1 255.255.255.0
no shut

interface gi0/0.50
encapsulation dot1Q 50
ip address 180.1.50.1 255.255.255.0
no shut

interface gi0/0
no shut

router rip
version 2

network 180.1.0.0
network 150.15.15.0

no auto-summary
exit
```

### Switch 4
```
enable
conf t

line console 0
password 1234
login

line vty 0 15
password 1234
login

enable secret 12345

banner motd #Prohibido el ingreso a personal no autorizado#

vlan 4
name 4

vlan 5
name 5

vlan 10
name 10

vlan 50
name 50

interface fa0/1
switchport mode access
switchport access vlan 4

interface fa0/2
switchport mode access
switchport access vlan 5

interface fa0/3
switchport mode access
switchport access vlan 10

interface fa0/4
switchport mode access
switchport access vlan 50

interface gi0/1
switchport mode trunk
switchport trunk native vlan 99
```
## Bridge
### Switch 3
```
enable
conf t

line console 0
password 1234
login

line vty 0 15
password 1234
login

enable secret 12345

banner motd #Prohibido el ingreso a personal no autorizado#

interface range gigabitEthernet 0/1 - 2
switchport mode trunk
switchport trunk allowed vlan 4,5,10,15,25,35,50
switchport trunk encapsulation dot1q
no shutdown

vlan 4
vlan 5
vlan 10
vlan 15
vlan 25
vlan 35
vlan 50

exit
```

## Static
### Router 2
```
enable
conf t

line console 0
password 1234
login

line vty 0 15
password 1234
login

enable secret 12345

banner motd #Prohibido el ingreso a personal no autorizado#

interface gi0/0
ip address 150.15.15.2 255.255.255.248
no shut

interface gi0/1
ip address 150.15.15.9 255.255.255.248
no shut

interface gi0/2
ip address 150.15.15.17 255.255.255.248
no shut

ip route 120.18.0.0 255.255.255.0 150.15.15.1
ip route 130.18.8.0 255.255.255.0 150.15.15.10

router rip
version 2

redistribute static

network 150.15.15.0

no auto-summary
exit
```
### Router 3
```
enable
conf t

line console 0
password 1234
login

line vty 0 15
password 1234
login

enable secret 12345

banner motd #Prohibido el ingreso a personal no autorizado#

interface gi0/0
ip address 150.15.15.1 255.255.255.248
no shut

interface gi0/1
ip address 120.18.0.1 255.255.255.0
no shut

ip route 0.0.0.0 0.0.0.0 150.15.15.2
ip route 130.18.8.0 255.255.255.0 150.15.15.2

exit
```

### Router 4
```
enable
conf t

line console 0
password 1234
login

line vty 0 15
password 1234
login

enable secret 12345

banner motd #Prohibido el ingreso a personal no autorizado#

interface gi0/0
ip address 130.18.8.82 255.255.255.0
no shut

interface gi0/1
ip address 150.15.15.10 255.255.255.248
no shut

ip route 0.0.0.0 0.0.0.0 150.15.15.9
ip route 120.18.0.0 255.255.255.0 150.15.15.9

exit
```