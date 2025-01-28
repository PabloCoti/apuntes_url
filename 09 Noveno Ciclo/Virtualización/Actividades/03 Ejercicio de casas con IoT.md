# Ejercicio casas con IoT
## Casa 1
## Router
```
enable
conf t

interface gi0/0
ip address 192.168.25.1 255.255.255.0
no shut

interface gi0/1
ip address 140.10.0.1 255.255.0.0
no shut

router rip
version 2

network 192.168.25.0
network 140.10.0.0

no auto-summary
exit
```

## Casa 2
## Router
```
enable
conf t

interface gi0/0
ip address 140.10.0.2 255.255.0.0
no shut

interface gi0/1
ip address 193.168.25.1 255.255.255.0
no shut

router rip
version 2

network 140.10.0.0
network 193.168.25.0

no auto-summary
exit
```