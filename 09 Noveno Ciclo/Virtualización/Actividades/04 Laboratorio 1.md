# Laboratorio 1
## Redes
- VLAN 10: 192.168.25.0
- VLAN 20: 193.168.25.0
- VLAN 30: 194.168.25.0

## Switch
```
enable
conf t

vlan 10
ip address 192.168.25.1 255.255.255.0

vlan 20
ip address 193.168.25.1 255.255.255.0

vlan 30
ip address 194.168.25.1 255.255.255.0

interface gi0/1
switchport mode trunk
switchport trunk native vlan 99

interface gi0/2
switchport mode access
switchport access vlan 10

interface range fa0/13-24
switchport mode access
switchport access vlan 20

interface range fa0/1-12
switchport mode access
switchport access vlan 30

exit
```

## Router
```
enable
conf t

interface gi0/0
no shut

interface gi0/0.10
encapsulation dot1q 10
ip address 192.168.25.1 255.255.255.0
no shut

interface gi0/0.20
encapsulation dot1q 20
ip address 193.168.25.1 255.255.255.0
no shut

interface gi0/0.30
encapsulation dot1q 30
ip address 194.168.25.1 255.255.255.0
no shut

router rip
version 2

network 192.168.25.0
network 193.168.25.0
network 194.168.25.0

no auto-summary
exit
```
