# Tres sedes conectadas con ISP
## Redes por sede
- **Sede central**
	- **WAN**: 10.1.1.1
	- **WAN2**: 10.1.1.18
    - **VLAN 10**: 192.168.10.0/24
    - **VLAN 20**: 192.168.20.0/24
    - **VLAN 30**: 192.168.30.0/24
- **Sede 1**
	- **WAN**: 10.1.1.2
	- **WAN2**: 10.1.1.9
    - **VLAN 10**: 192.168.110.0/24
    - **VLAN 20**: 192.168.120.0/24
    - **VLAN 30**: 192.168.130.0/24
- **Sede 2**
	- **WAN**: 10.1.1.10
	- **WAN2**: 10.1.1.17
    - **VLAN 10**: 192.168.210.0/24
    - **VLAN 20**: 192.168.220.0/24
    - **VLAN 30**: 192.168.230.0/24
## Sede central
### Switch
```
enable
conf t

vlan 10
name servers

vlan 20
name users

vlan 30
name iot

interface gi0/1
switchport mode trunk
switchport trunk native vlan 99

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

interface se0/0/0
ip address 10.1.1.1 255.255.255.248
no shut

interface se0/0/1
ip address 10.1.1.18 255.255.255.248
no shut 

interface gi0/0
no shut

interface gi0/0.10
encapsulation dot1q 10
ip address 192.168.10.1 255.255.255.0
ip helper-address 192.168.10.2
no shut

interface gi0/0.20
encapsulation dot1q 20
ip address 192.168.20.1 255.255.255.0
ip helper-address 192.168.10.2
no shut

interface gi0/0.30
encapsulation dot1q 30
ip address 192.168.30.1 255.255.255.0
ip helper-address 192.168.10.2
no shut

router rip
version 2

network 10.0.0.0
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

vlan 20
name users

vlan 30
name iot

interface gi0/1
switchport mode trunk
switchport trunk native vlan 99

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

interface se0/0/0
ip address 10.1.1.2 255.255.255.248
no shut

interface se0/0/1
ip address 10.1.1.9 255.255.255.248
no shut 

interface gi0/0
no shut

interface gi0/0.10
encapsulation dot1q 10
ip address 192.168.110.1 255.255.255.0
ip helper-address 192.168.110.2
no shut

interface gi0/0.20
encapsulation dot1q 20
ip address 192.168.120.1 255.255.255.0
ip helper-address 192.168.110.2
no shut

interface gi0/0.30
encapsulation dot1q 30
ip address 192.168.130.1 255.255.255.0
ip helper-address 192.168.110.2
no shut

router rip
version 2

network 10.0.0.0
network 192.168.110.0
network 192.168.120.0
network 192.168.130.0

no auto-summary
exit
```
## Sede 2
### Switch
```
enable
conf t

vlan 10
name servers

vlan 20
name users

vlan 30
name iot

interface gi0/1
switchport mode trunk
switchport trunk native vlan 99

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

interface se0/0/0
ip address 10.1.1.10 255.255.255.248
no shut

interface se0/0/1
ip address 10.1.1.17 255.255.255.248
no shut 

interface gi0/0
no shut

interface gi0/0.10
encapsulation dot1q 10
ip address 192.168.210.1 255.255.255.0
ip helper-address 192.168.210.2
no shut

interface gi0/0.20
encapsulation dot1q 20
ip address 192.168.220.1 255.255.255.0
ip helper-address 192.168.210.2
no shut

interface gi0/0.30
encapsulation dot1q 30
ip address 192.168.230.1 255.255.255.0
ip helper-address 192.168.210.2
no shut

router rip
version 2

network 10.0.0.0
network 192.168.210.0
network 192.168.220.0
network 192.168.230.0

no auto-summary
exit
```

## Funcionamiento
![](../../../00%20Attachments/Pasted%20image%2020250217222256.png)
![](../../../00%20Attachments/Pasted%20image%2020250217222303.png)
