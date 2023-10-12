# Proyecto final
## Edificio 1
### Router
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
ip address 120.0.0.1 255.255.255.0
no shut

interface gig0/0/0
ip address 10.0.0.1 255.255.255.252
no shut

interface gig0/1/0
ip address 10.0.0.10 255.255.255.252
no shut

ip dhcp pool RedEdificio
network 120.0.0.0 255.255.255.0
default-router 120.0.0.1
exit

router rip
version 2

network 10.0.0.0
network 120.0.0.0

no auto-summary
exit
```
## Edificio 2
### Router
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
ip address 140.0.0.1 255.255.255.0
no shut

interface gig0/0/0
ip address 10.0.0.2 255.255.255.252
no shut

interface gig0/1/0
ip address 10.0.0.5 255.255.255.252
no shut

ip dhcp pool RedEdificio
network 140.0.0.0 255.255.255.0
default-router 140.0.0.1
exit

router rip
version 2

network 10.0.0.0
network 140.0.0.0

no auto-summary
exit
```
## Edificio 3
### Router
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
ip address 190.15.0.1 255.255.255.0
no shut

interface gig0/0/0
ip address 10.0.0.6 255.255.255.252
no shut

interface gig0/1/0
ip address 10.0.0.9 255.255.255.252
no shut

ip dhcp pool RedEdificio
network 190.15.0.0 255.255.255.0
default-router 190.15.0.1
exit

router rip
version 2

network 10.0.0.0
network 190.15.0.0

no auto-summary
exit
```