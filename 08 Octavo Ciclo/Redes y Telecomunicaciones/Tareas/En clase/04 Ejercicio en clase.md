# Ejercicio en clase
- [[#Marco|Marco]]
	- [[#Marco#Router|Router]]
	- [[#Marco#Vlan5|Vlan5]]
	- [[#Marco#Vlan10|Vlan10]]
	- [[#Marco#Switch|Switch]]
- [[#Andreé|Andreé]]
	- [[#Andreé#Router|Router]]
	- [[#Andreé#Vlan15|Vlan15]]
	- [[#Andreé#Vlan18|Vlan18]]
	- [[#Andreé#Switch|Switch]]
- [[#Javier|Javier]]
	- [[#Javier#Router|Router]]
- [[#Guillermo|Guillermo]]
	- [[#Guillermo#Router|Router]]
- [[#Bryan|Bryan]]
	- [[#Bryan#Router|Router]]
- [[#Pablo|Pablo]]
	- [[#Pablo#Router|Router]]
- [[#Josue|Josue]]
	- [[#Josue#Router|Router]]
- [[#Luisa|Luisa]]
	- [[#Luisa#Router|Router]]


## Marco
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

enable secret universidad

banner motd #Prohibido el ingreso a personal no autorizado#

interface gi0/0
no shut

interface gi0/0.5
encapsulation dot1q 5
ip address 140.5.0.1 255.255.255.0
no shut

interface gi0/0.10
encapsulation dot1q 10
ip address 140.10.0.1 255.255.255.0
no shut

interface se0/0/0
ip address 150.15.15.22 255.255.255.252
no shut

interface se0/0/1
ip address 150.15.15.1 255.255.255.252
no shut

router rip
version 2

network 150.15.15.0
network 140.5.0.0
network 140.10.0.0

no auto-summary
exit
```
### Vlan5
```
140.5.0.2
```
```
255.255.255.0
```
```
140.5.0.1
```
### Vlan10
```
140.10.0.2
```
```
255.255.255.0
```
```
140.10.0.1
```
### Switch
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

vlan 5
name 6pcs

vlan 10
name 4pcs

interface range fa0/1-6
switchport mode access
switchport access vlan 5

interface range fa0/7-10
switchport mode access
switchport access vlan 10

interface gi0/1
switchport mode trunk
switchport trunk native vlan 99
```
## Andreé
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

enable secret universidad

banner motd #Prohibido el ingreso a personal no autorizado#

interface gi0/0
no shut

interface gi0/0.15
encapsulation dot1q 15
ip address 120.15.0.1 255.255.255.0
no shut

interface gi0/0.18
encapsulation dot1q 18
ip address 120.18.0.1 255.255.255.0
no shut

interface se0/0/0
ip address 150.15.15.6 255.255.255.252
no shut

interface se0/0/1
ip address 150.15.15.9 255.255.255.252
no shut

router rip
version 2

network 120.0.0.0
network 120.15.0.0
network 120.18.0.0
network 150.15.15.0

no auto-summary
exit
```

### Vlan15
```
120.15.0.2
255.255.255.0
120.15.0.1
```
### Vlan18
```
120.18.0.2
255.255.255.0
120.18.0.1
```
### Switch
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

vlan 15
name 13pcs

vlan 18
name 2pcs

interface range fa0/1-13
switchport mode access
switchport access vlan 15

interface range fa0/14-15
switchport mode access
switchport access vlan 18

interface gi0/1
switchport mode trunk
switchport trunk native vlan 99
```
## Javier
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

enable secret universidad

banner motd #Prohibido el ingreso a personal no autorizado#

interface gi0/1
ip address 8.8.8.1 255.255.255.240
no shut

interface gi0/0
ip address 150.15.15.14 255.255.255.252
no shut

interface se0/0/0
ip address 150.15.15.17 255.255.255.252
no shut

router rip
version 2

network 8.8.8.0
network 150.15.15.0

no auto-summary
exit

```

## Guillermo
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

enable secret universidad

banner motd #Prohibido el ingreso a personal no autorizado#

interface se0/0/0
ip address 150.15.15.25 255.255.255.252
no shut

interface se0/0/1
ip address 150.15.15.18 255.255.255.252
no shut

router rip
version 2

network 150.15.15.0

no auto-summary
exit

```
## Bryan
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

enable secret universidad

banner motd #Prohibido el ingreso a personal no autorizado#

interface gi0/0
ip address 150.15.15.13 255.255.255.252
no shut

interface se0/0/0
ip address 150.15.15.10 255.255.255.252
no shut

interface se0/0/1
ip address 150.15.15.42 255.255.255.252
no shut

interface se0/1/0
ip address 150.15.15.26 255.255.255.252
no shut

interface se0/1/1
ip address 150.15.15.29 255.255.255.252
no shut

router rip
version 2

network 150.15.15.0

no auto-summary
exit

```
## Pablo
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

enable secret universidad

banner motd #Prohibido el ingreso a personal no autorizado#

interface gi0/0
ip address 150.15.15.45 255.255.255.252
no shut

interface se0/0/0
ip address 150.15.15.33 255.255.255.252
no shut

interface se0/0/1
ip address 150.15.15.2 255.255.255.252
no shut

interface se0/1/0
ip address 150.15.15.5 255.255.255.252
no shut

interface se0/1/1
ip address 150.15.15.30 255.255.255.252
no shut

router rip
version 2

network 150.15.15.0

no auto-summary
exit

```
## Josue
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

enable secret universidad

banner motd #Prohibido el ingreso a personal no autorizado#

interface gi0/0
ip address 130.18.8.82 255.255.255.248
no shut

interface se0/0/0
ip address 150.15.15.34 255.255.255.252
no shut

interface se0/0/1
ip address 150.15.15.37 255.255.255.252
no shut

interface se0/1/0
ip address 150.15.15.21 255.255.255.252
no shut

router rip
version 2
network 130.18.8.0
network 150.15.15.0
exit
```
## Luisa
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

enable secret universidad

banner motd #Prohibido el ingreso a personal no autorizado#

interface gi0/1
ip address 190.168.1.138 255.255.255.252
no shut

interface gi0/0
ip address 150.15.15.46 255.255.255.252
no shut

interface se0/0/0
ip address 150.15.15.38 255.255.255.252
no shut

interface se0/0/1
ip address 150.15.15.41 255.255.255.252
no shut

router rip
version 2

network 190.168.1.0
network 150.15.15.0

no auto-summary
exit
```