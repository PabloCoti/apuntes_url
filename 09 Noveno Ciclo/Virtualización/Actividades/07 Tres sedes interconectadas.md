# Tres sedes interconectadas
## Redes por sede
- **Sede central**
    - **Red WAN**: 10.1.1.0/30
    - **VLAN 10**: 192.168.10.0/24
    - **VLAN 20**: 192.168.20.0/24
    - **VLAN 30**: 192.168.30.0/24
- **Sede 1**
    - **Red WAN**: 10.1.2.0/30
    - **VLAN 10**: 192.168.110.0/24
    - **VLAN 20**: 192.168.120.0/24
    - **VLAN 30**: 192.168.130.0/24
- **Sede 2**
    - **Red WAN**: 10.1.3.0/30
    - **VLAN 10**: 192.168.210.0/24
    - **VLAN 20**: 192.168.220.0/24
    - **VLAN 30**: 192.168.230.0/24
## ISP

## Sede central
### Switch
```
enable
conf t

vlan 10
name servers

interface vlan 10
ip address 192.168.10.1 255.255.255.0
no shut

vlan 20
name users

interface vlan 20
ip address 192.168.20.1 255.255.255.0
no shut

vlan 30
name iot

interface vlan 30
ip address 192.168.30.1 255.255.255.0
no shut

interface gi0/1
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk native vlan 99

interface vlan 10
ip helper-address 192.168.10.2

interface vlan 20
ip helper-address 192.168.10.2

interface vlan 30
ip helper-address 192.168.10.2

interface gi0/2
switchport mode access
switchport access vlan 10

interface fa0/1
switchport mode access
switchport access vlan 10

interface range fa0/13-24
switchport mode access
switchport access vlan 20

interface range fa0/2-12
switchport mode access
switchport access vlan 30

exit
```

### Router
```
enable
conf t

interface gi0/1
ip address 10.1.1.1 255.255.255.0
no shut 

interface gi0/0
no shut

interface gi0/0.10
encapsulation dot1q 10
ip address 192.168.10.1 255.255.255.0
no shut

interface gi0/0.20
encapsulation dot1q 20
ip address 192.168.20.1 255.255.255.0
no shut

interface gi0/0.30
encapsulation dot1q 30
ip address 192.168.30.1 255.255.255.0
no shut

router rip
version 2

network 192.168.10.0
network 192.168.20.0
network 192.168.30.0

no auto-summary
exit
```

## Sede 1
### Switch
```
enable
conf t

vlan 10
name servers

interface vlan 10
ip address 192.168.110.1 255.255.255.0
no shut

vlan 20
name users

interface vlan 20
ip address 192.168.120.1 255.255.255.0
no shut

vlan 30
name iot

interface vlan 30
ip address 192.168.130.1 255.255.255.0
no shut

interface gi0/1
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk native vlan 99

interface vlan 10
ip helper-address 192.168.110.2

interface vlan 20
ip helper-address 192.168.110.2

interface vlan 30
ip helper-address 192.168.110.2

interface gi0/2
switchport mode access
switchport access vlan 10

interface fa0/1
switchport mode access
switchport access vlan 10

interface range fa0/13-24
switchport mode access
switchport access vlan 20

interface range fa0/2-12
switchport mode access
switchport access vlan 30

exit
```

### Router
```
enable
conf t

interface gi0/1
ip address 10.1.2.1 255.255.255.0
no shut 

interface gi0/0
no shut

interface gi0/0.10
encapsulation dot1q 10
ip address 192.168.110.1 255.255.255.0
no shut

interface gi0/0.20
encapsulation dot1q 20
ip address 192.168.120.1 255.255.255.0
no shut

interface gi0/0.30
encapsulation dot1q 30
ip address 192.168.130.1 255.255.255.0
no shut

router rip
version 2

network 192.168.110.0
network 192.168.120.0
network 192.168.130.0

no auto-summary
exit
```

## Sede 2
## Switch
```
enable
conf t

vlan 10
name servers

interface vlan 10
ip address 192.168.25.1 255.255.255.0
no shut

vlan 20
name users

interface vlan 20
ip address 193.168.25.1 255.255.255.0
no shut

vlan 30
name iot

interface vlan 30
ip address 194.168.25.1 255.255.255.0
no shut

interface gi0/1
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk native vlan 99

interface vlan 10
ip helper-address 192.168.25.2

interface vlan 20
ip helper-address 192.168.25.2

interface vlan 30
ip helper-address 192.168.25.2

interface gi0/2
switchport mode access
switchport access vlan 10

interface fa0/1
switchport mode access
switchport access vlan 10

interface range fa0/13-24
switchport mode access
switchport access vlan 20

interface range fa0/2-12
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
